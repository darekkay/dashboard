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
      path: "../../src/components/{{kebabCase name}}/index.tsx",
      templateFile: `./component/${type}.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/__tests__/index.test.tsx",
      templateFile: "./component/test.hbs",
      abortOnFail: false
    }
  ];

  const widgetActions = [
    {
      type: "add",
      path: "../../src/widgets/{{kebabCase name}}/index.tsx",
      templateFile: `./widget/index.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/widgets/{{kebabCase name}}/__tests__/index.test.tsx",
      templateFile: "./widget/test.hbs",
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

  plop.setGenerator("Widget", {
    description: "Dashboard widget",
    prompts: componentPrompts,
    actions: widgetActions
  });
};
