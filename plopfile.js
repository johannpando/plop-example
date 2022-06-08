// Basic Example
module.exports = function (plop) {
    plop.setGenerator('Modifica App.js', {
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
    plop.setGenerator('Crea una vista', {
        description: 'Crea una vista',
        prompts: [{
          type: 'input',
          name: 'name',
          message: 'Escribe el nombre de la vista que quieres crear',
        }],
        actions: [{
          type: 'add',
          path: `src/screens/{{name}}/{{name}}.js`,
          templateFile: 'plop-templates/view.js.hbs',
          abortOnFail: true,
          skipIfExists: true,
        }],
      });
  }
  