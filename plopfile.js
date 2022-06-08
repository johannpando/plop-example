// Basic Example
module.exports = function (plop) {
    plop.setGenerator('Basic Example', {
      description: 'Crea el componente App.js',
      prompts: [{
        type: 'input',
        name: 'contenido',
        message: '¿Qué contenido quieres que tenga el body del App.js?',
      }],
      actions: [{
        type: 'modify',
        pattern: /(<br\/>)/,
        path: `src/App.js`,
        templateFile: 'plop-templates/welcome.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      }],
    });
  }
  