const path = require('path');

module.exports = [
  { definedTask: 'default:ensureNotExists', prepare: p => `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js` },
  { task: 'generate', target: `{{aor.resources}}{{pascalCased}}/{{pascalCased}}List.js`, template: 'resource/list.js' },
  { task: 'generate', target: `{{aor.resources}}{{pascalCased}}/index.js`, template: 'resource/index.js' },
  {
    definedTask: 'aor:addImport',
    prepare    : p => Object.assign(p, {
      addImport: {
        importName: '{ {{pascalCased}}List }',
        from      : './' + path.join(p.aor.resources, p.pascalCased),
        target    : 'App.js'
      }
    })
  },
  {
    definedTask: 'aor:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: `App.js`,
        before: 'Admin',
        tag   : `<Resource name="${p.name}" list={{{pascalCased}}List} />`
      }
    })
  },
];
