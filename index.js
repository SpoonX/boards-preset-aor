module.exports = {
  // Where will you keep your boilerplate templates?
  templateRoot: __dirname + '/templates',

  tasks: {
    init: [
      // Notify user
      { task: () => console.log('Creating new Admin on Rest project. This might take a while!') },

      // Make sure create-react-app exists
      { definedTask: 'default:checkBinary', prepare: { checkBinary: 'create-react-app' } },

      // Make sure the dir we're trying to make doesn't exist yet
      { definedTask: 'default:ensureNotExists', prepare: p => p.ensureNotExists = p.name },

      // Create a new react app
      { definedTask: 'default:exec', prepare: p => { p.exec = `create-react-app ${p.name}`} },

      // Navigate into the new directory
      { definedTask: 'default:cd', prepare: p => p.cd = p.name },

      // Re-prepare to set the proper package manager
      { definedTask: 'default:prepare' },

      // Add admin-on-rest
      { definedTask: 'default:addDep', prepare: p => { p.addDep = { dependency: 'admin-on-rest' } } },

      // Create the skeleton files
      { task: 'generate', from: 'skeleton', glob: '**/*', target: './' }
    ]
  },
};
