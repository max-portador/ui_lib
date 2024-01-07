import { Node, Project, SyntaxKind } from 'ts-morph';
import { toggleComponentName, toggleFunctionName } from './consts';

const removedFeatureName = process.argv[2]; // example: isArticleEnabled
const featureState = process.argv[3]; // example: off/on

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (!featureState || (featureState !== 'on' && featureState !== 'off')) {
    throw new Error('Укажите корректное состояние фичи (on или off)');
}

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    return node
        .getDescendantsOfKind(SyntaxKind.Identifier)
        .some((child) => child.getText() === toggleFunctionName);
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

function replaceToggleFunction(node: Node) {
    if (node.wasForgotten()) return;

    const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
    );
    if (!objectOptions) return;

    const featureNameProperty = objectOptions.getProperty('name');
    const featureName = featureNameProperty
        ?.getFirstChildByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue();
    if (featureName !== removedFeatureName) return;

    const newStateProperty = objectOptions.getProperty(featureState);
    const newFunction = newStateProperty?.getFirstChildByKind(
        SyntaxKind.ArrowFunction,
    );
    if (!newFunction) return;

    const newFunctionBodyText = newFunction.getBody().getText();
    node.replaceWithText(newFunctionBodyText);
}

function replaceComponent(node: Node) {
    if (node.wasForgotten()) return;

    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);
    const featureNameAttribute = attributes.find(
        (attr) => attr.getName() === 'feature',
    );
    const featureName = featureNameAttribute
        ?.getFirstChildByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue();

    if (featureName !== removedFeatureName) return;

    const stateAttribute = attributes.find(
        (attr) => attr.getName() === featureState,
    );
    const stateValue = stateAttribute
        ?.getFirstChildByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (stateValue) {
        node.replaceWithText(stateValue);
    }
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        try {
            if (
                node.isKind(SyntaxKind.CallExpression) &&
                isToggleFunction(node)
            ) {
                replaceToggleFunction(node);
            }

            if (
                node.isKind(SyntaxKind.JsxSelfClosingElement) &&
                isToggleComponent(node)
            ) {
                replaceComponent(node);
            }
        } catch (error) {
            console.error('Error processing node:', error);
        }
    });
});

project.saveSync();
