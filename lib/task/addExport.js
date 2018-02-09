module.exports = {
  task: 'modify',
  patch: {
    pattern: /export.*?\s$/,
    append : `export {{addExport.exportName:*}} from {{addExport.from}};\n`
  },
  target: '{{addExport.target}}'
};
