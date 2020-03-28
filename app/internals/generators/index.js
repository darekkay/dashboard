module.exports = plop => {
  const componentPrompts = [
    {
      type: "input",
      name: "name",
      message: "What should it be called?"
    }
  ];

  const widgetPrompts = [
    ...componentPrompts,
    {
      type: "confirm",
      name: "configurationEnabled",
      message: "Do you want to use a configuration modal for your widget?"
    }
  ];

  const componentActions = type => [
    // Component index file
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/index.tsx",
      templateFile: `./component/${type}.hbs`,
      abortOnFail: false
    },

    // Unit tests
    {
      type: "add",
      path: "../../src/components/{{kebabCase name}}/__tests__/index.test.tsx",
      templateFile: "./component/test.hbs",
      abortOnFail: false
    },

    // Component story
    {
      type: "add",
      path:
        "../../src/components/{{kebabCase name}}/__stories__/index.stories.tsx",
      templateFile: "./component/story.hbs",
      abortOnFail: false
    }
  ];

  const widgetActions = userInputs => {
    let widgetActions = [
      // Widget index file
      {
        type: "add",
        path: "../../src/widgets/{{kebabCase name}}/index.tsx",
        templateFile: `./widget/index.hbs`,
        abortOnFail: false
      },

      // Widget properties
      {
        type: "add",
        path: "../../src/widgets/{{kebabCase name}}/properties.ts",
        templateFile: "./widget/properties.hbs",
        abortOnFail: false
      },

      // Unit tests
      {
        type: "add",
        path: "../../src/widgets/{{kebabCase name}}/__tests__/index.test.tsx",
        templateFile: "./widget/test.hbs",
        abortOnFail: false
      },

      // Widget story
      {
        type: "add",
        path:
          "../../src/widgets/{{kebabCase name}}/__stories__/index.stories.tsx",
        templateFile: "./widget/story.hbs",
        abortOnFail: false
      },

      // Readme / Documentation
      {
        type: "add",
        path: "../../../docs/widgets/{{kebabCase name}}.md",
        templateFile: "./widget/readme.hbs",
        abortOnFail: false
      }
    ];

    if (userInputs.configurationEnabled) {
      // Widget configuration (if selected)
      widgetActions.push({
        type: "add",
        path: "../../src/widgets/{{kebabCase name}}/configuration.tsx",
        templateFile: "./widget/configuration.hbs",
        abortOnFail: false
      });
    }

    return widgetActions;
  };

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
    prompts: widgetPrompts,
    actions: widgetActions
  });
};
