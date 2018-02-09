const path = require('path');

module.exports = [
  {
    definedTask: 'default:ensureExists',
    prepare    : p => p.ensureExists = `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js`
  },
  {
    definedTask: 'default:ensureNotExists',
    prepare    : p => p.ensureNotExists = `${p.appRoot}/${p.aor.resources}/${p.pascalCased}/${p.pascalCased}Edit.js`
  },
  {
    task    : 'generate',
    target  : `{{aor.resources}}{{pascalCased}}/{{pascalCased}}Title.js`,
    template: 'resource/title.js'
  },
  {
    task    : 'generate',
    target  : `{{aor.resources}}/{{pascalCased}}/{{pascalCased}}Edit.js`,
    template: 'resource/edit.js'
  },
  {
    definedTask: 'aor:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'edit',
        value    : '{{pascalCased}}Edit'
      }
    })
  },
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : p.pascalCased + 'Edit',
        module: './' + path.join(p.aor.resources, p.pascalCased),
        target: `App.js`
      }
    })
  },
  {
    definedTask: 'aor:addExport',
    prepare    : p => Object.assign(p, {
      addExport: {
        target: '{{aor.resources}}{{pascalCased}}/index.js',
        from  : `'./${p.pascalCased}Edit'`
      }
    })
  },
  {
    definedTask: 'aor:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: `${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js`,
        before: 'Datagrid',
        tag   : `<EditButton />`
      }
    })
  },
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: { name: 'EditButton', target: `${p.aor.resources}/${p.pascalCased}/${p.pascalCased}List.js` }
    })
  }
];
