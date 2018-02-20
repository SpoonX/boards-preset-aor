const { renderRelativeToApp } = require('../utils');

module.exports = [
  {
    definedTask: 'default:ensureExists',
    prepare    : p => p.ensureExists = `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js`
  },
  {
    definedTask: 'default:ensureNotExists',
    prepare    : p => p.ensureNotExists = `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}Create.js`
  },
  {
    task    : 'generate',
    target  : `{{aor.resources}}/{{pascalCased}}/{{pascalCased}}Create.js`,
    template: 'resource/create.js'
  },
  {
    definedTask: 'aor:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'create',
        value    : '{{pascalCased}}Create'
      }
    })
  },
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : p.pascalCased + 'Create',
        module: renderRelativeToApp(p, p.aor.resources, p.pascalCased),
        target: p.aor.app
      }
    })
  },
  {
    definedTask: 'aor:addExport',
    prepare    : p => Object.assign(p, {
      addExport: {
        target: '{{aor.resources}}/{{pascalCased}}/index.js',
        from  : `'./${p.pascalCased}Create'`
      }
    })
  },
  {
    definedTask: 'aor:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: `${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js`,
        before: 'Datagrid',
        tag   : `<CreateButton />`
      }
    })
  },
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: { name: 'CreateButton', target: `${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js` }
    })
  }
];
