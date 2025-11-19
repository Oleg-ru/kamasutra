import {transform} from "lightningcss";

const css = `
.button {
    border-radius: 4px;
}
`;

const result = transform({
    filename: 'hehe.module.css',
    code: Buffer.from(css),
    cssModules: {
        pattern: '[name]_[local]_[hash]'
    }
});

console.log(result)
console.log(result.code.toString())