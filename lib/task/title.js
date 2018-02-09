module.exports = [
  {
    definedTask: 'default:ensureNotExists',
    prepare    : p => p.ensureNotExists = `${p.appRoot}/${p.pascalCased}/${p.pascalCased}Title.js`
  },
  { task: 'generate', target: `{{pascalCased}}/{{pascalCased}}Title.js`, template: 'resource/title.js' },
];
