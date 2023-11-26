import { Project, SyntaxKind } from 'ts-morph';
import {
    isToggleFunction,
    replaceToggleFunction,
} from './replaceToggleFunction';
import {
    isToggleComponent,
    replaceToggleComponent,
} from './replaceToggleComponent';

const args = process.argv.slice(-2);
const removedFeatureName = args[0]; // example isCounterEnabled
const featureState = args[1]; // on/off

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

files.forEach((sourceFile) => {
    // eslint-disable-next-line consistent-return
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            return replaceToggleFunction(
                node,
                removedFeatureName,
                featureState,
            );
        }

        if (isToggleComponent(node)) {
            return replaceToggleComponent(
                node,
                removedFeatureName,
                featureState,
            );
        }
    });
});

project.save();
