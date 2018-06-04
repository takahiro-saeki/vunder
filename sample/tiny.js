const babel = require("@babel/core");

const sourceCode = "console.log('sample')";
const parsedAst = babel.parse(sourceCode);

console.log(parsedAst)