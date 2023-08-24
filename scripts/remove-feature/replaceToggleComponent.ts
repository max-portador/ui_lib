import { JsxAttribute, Node, SyntaxKind } from 'ts-morph';
import { toggleComponentName } from './consts';

function getAttributeNodeByName(jsxAttributes: JsxAttribute[], name: string) {
    return jsxAttributes.find((node) => node.getName() === name);
}

function getFunctionTextByFeatureState(
    attributes: JsxAttribute[],
    propertyName: string,
): string {
    const attribute = getAttributeNodeByName(attributes, propertyName);
    return (
        attribute
            ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
            ?.getExpression()
            ?.getText() ?? ''
    );
}

export function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

export const replaceToggleComponent = (
    node: Node,
    removedFeatureName: string,
    featureState: string,
) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const featureAttribute = getAttributeNodeByName(attributes, 'feature');

    const featureName = featureAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removedFeatureName) {
        return;
    }

    node.replaceWithText(
        getFunctionTextByFeatureState(attributes, featureState),
    );
};
