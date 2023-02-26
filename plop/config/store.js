export default {
  description: '创建一个新 store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入 store 名称',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/store/{{name}}/index.ts',
      templateFile: 'plop/templates/store.ts.hbs',
    },
    {
      type: 'append',
      path: 'src/store/index.ts',
      pattern: '/* PLOP_INJECT_IMPORT */',
      template: "export * from './{{name}}';",
    },
  ],
};
