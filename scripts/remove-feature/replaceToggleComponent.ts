import { JsxAttribute, Node, SyntaxKind } from 'ts-morph';
import { toggleComponentName } from './consts';

function getAttributeNodeByName(jsxAttributes: JsxAttribute[], name: string) {
    return jsxAttributes.find((node) => node.getName() === name);
}

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

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
    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');
    const featureAttribute = getAttributeNodeByName(attributes, 'feature');

    const featureName = featureAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removedFeatureName) {
        return;
    }

    const offValue = getReplacedComponent(offAttribute);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};
