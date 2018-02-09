module.exports = {
  task: 'modify',
  patch: {
    pattern: /import.*?\n(?!import)/i,
    append : `import {{addImport.importName}} from '{{addImport.from}}';\n`
  },
  target: '{{addImport.target}}'
};
