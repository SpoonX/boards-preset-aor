const { renderRelativeToApp } = require('../utils');

module.exports = [
  { definedTask: 'default:ensureNotExists', prepare: p => `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js` },
  { task: 'generate', target: `{{aor.resources}}/{{pascalCased}}/{{pascalCased}}List.js`, template: 'resource/list.js' },
  { task: 'generate', target: `{{aor.resources}}/{{pascalCased}}/index.js`, template: 'resource/index.js' },
  {
    definedTask: 'aor:addImport',
    prepare    : p => Object.assign(p, {
      addImport: {
        importName: '{ {{pascalCased}}List }',
        from      : renderRelativeToApp(p, p.aor.resources, p.pascalCased),
        target    : p.aor.app
      }
    })
  },
  {
    definedTask: 'aor:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: p.aor.app,
        before: 'Admin',
        tag   : `<Resource name="${p.name}" list={{{pascalCased}}List} />`
      }
    })
  },
];
