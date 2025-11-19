import postcss from "postcss";
import postcssModules from 'postcss-modules'

const css = `
.button {
    border-radius: 4px;
}
`;

const modulePlugin = postcssModules({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    getJSON(cssFilename, json, outputFilename) {
        console.log(json)
    }
});

postcss([
    modulePlugin
]).process(css, {from: 'blabla.module.css'}).then((result) => {
    console.log(result.css)
})