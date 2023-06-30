import { Project } from 'ts-morph';

const project = new Project({});

// По каким файлам пробегаться
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages',
    ];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((declaration) => {
        const value = declaration.getModuleSpecifierValue();
        // eslint-disable-next-line no-console
        if (isAbsolute(value)) {
            declaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
