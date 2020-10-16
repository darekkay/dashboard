module.exports = (plop) => {
  const endpointPrompts = [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
    },
    {
      type: "input",
      name: "route",
      message: "What is the default route path (e.g. /custom/route)?",
    },
  ];

  const endpointActions = [
    // Route index file
    {
      type: "add",
      path: "../../src/routes/{{kebabCase name}}.ts",
      templateFile: `./endpoint/index.hbs`,
      abortOnFail: false,
    },

    // Unit tests
    {
      type: "add",
      path: "../../src/routes/__tests__/{{kebabCase name}}.test.ts",
      templateFile: "./endpoint/test.hbs",
      abortOnFail: false,
    },
  ];

  plop.setGenerator("Endpoint", {
    description: "Server endpoint route",
    prompts: endpointPrompts,
    actions: endpointActions,
  });
};
