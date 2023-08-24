import { Node, ObjectLiteralExpression, SyntaxKind } from 'ts-morph';
import { toggleFunctionName } from './consts';

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

export function isToggleFunction(node: Node) {
    let isToggleFeature = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeature = true;
        }
    });

    return isToggleFeature;
}

export const replaceToggleFunction = (
    node: Node,
    removedFeatureName: string,
    featureState: string,
) => {
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
};
