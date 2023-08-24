import { Project, SyntaxKind } from 'ts-morph';
import {
    isToggleFunction,
    replaceToggleFunction,
} from './replaceToggleFunction';
import {
    isToggleComponent,
    replaceToggleComponent,
} from './replaceToggleComponent';

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

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node, removedFeatureName, featureState);
        }

        if (isToggleComponent(node)) {
            console.log(removedFeatureName, featureState);
            replaceToggleComponent(node, removedFeatureName, featureState);
        }
    });
});

project.save();
