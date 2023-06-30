const madge = require('madge');
const path = require('path');

const projectPath = path.resolve(__dirname, '..', '..');
const pathToAppJs = path.resolve(projectPath, 'src', 'index.tsx');
const pathToWebpackConfig = path.resolve(projectPath, 'webpack.config.ts');
const pathToTsConfig = path.resolve(projectPath, 'tsconfig.json');

madge(pathToAppJs, {
    fileExtensions: ['js', 'jsx', 'tsx', 'ts'],
    webpackConfig: pathToWebpackConfig,
    tsConfig: pathToTsConfig,
})
    .then((res) => {
        console.log(res.orphans());
        return res;
    })
    .then((res) => res.image(path.resolve(__dirname, 'image.svg'), false))
    .then((writtenImagePath) => {
        console.log(`Image written to ${writtenImagePath}`);
    });
