module.exports = plop => {
  const componentPrompts = [
    {
      type: "input",
      name: "name",
      message: "What should it be called?"
    }
  ];

  const componentActions = type => [
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/{{properCase name}}.tsx",
      templateFile: `./component/${type}.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/{{properCase name}}.test.tsx",
      templateFile: "./component/test.hbs",
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/{{properCase name}}.scss",
      templateFile: "./component/styles.scss.hbs",
      abortOnFail: false
    }
  ];

  plop.setGenerator("Stateless component", {
    description: "Stateless React function",
    prompts: componentPrompts,
    actions: componentActions("stateless")
  });

  plop.setGenerator("Class component", {
    description: "React.Component",
    prompts: componentPrompts,
    actions: componentActions("class")
  });
};
