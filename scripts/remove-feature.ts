import { Node, ObjectLiteralExpression, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isCounterEnabled
const featureState = process.argv[3]; // on/off

if (!removedFeatureName) {
    throw new Error('Add feature name');
}

if (!['on', 'off'].includes(featureState)) {
    throw new Error('Add feature state: on or off');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeature = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeature = true;
        }
    });

    return isToggleFeature;
}

function getFunctionTextByFeatureState(
    options: ObjectLiteralExpression,
    propertyName: string,
): string {
    const functionProperty = options?.getProperty(propertyName);
    return (
        functionProperty
            ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
            ?.getBody()
            ?.getText() ?? ''
    );
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;

            const featureNameProperty = objectOptions.getProperty('name');

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) {
                return;
            }

            node.replaceWithText(
                getFunctionTextByFeatureState(objectOptions, featureState),
            );
        }
    });
});

project.save();
