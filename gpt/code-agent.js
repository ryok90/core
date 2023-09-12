const { PlanAndExecuteAgentExecutor } = require("langchain/experimental/plan_and_execute");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");
const { ChatOpenAI } = require("langchain/chat_models/openai");
const { Calculator } = require("langchain/tools/calculator");
const DynamicStructuredTool = require("langchain/tools").DynamicStructuredTool;
const fs = require('fs');
const path = require('path');
const z = require("zod").z;

const PAmodel = new ChatOpenAI({
    temperature: 0.5,
    modelName: "gpt-4",
    verbose: true,
  });

  const PAexecutor = PlanAndExecuteAgentExecutor.fromLLMAndTools({
    llm: PAmodel,
    tools: [
      new DynamicStructuredTool({
          name: "fs_read",
          description: "Read the content of a file",
          schema: z.string().describe('The path to the file to read.'),
          func: async (input)  =>
            fs.readFileSync(path.resolve(inout), 'utf8'),
        }),
    ]
  //   tools,
  });

const run = async () => {
  const tools = [
    new DynamicStructuredTool({
      name: "fs_read",
      description: "Read the content of a file",
      schema:z.object({
        filePath: z.string().describe('The path to the file to read.'),
      }),
      func: async ({filePath })  =>
        fs.readFileSync(path.resolve(filePath), 'utf8'),
    }),
    // new DynamicStructuredTool({
    //   name: "fs_write",
    //   description: "Write content to a file",
    //   schema: z.object({
    //     filePath: z.string().describe('The path to the file to write.'),
    //     content: z.string().describe('The content to write to the file.'),
    //   }),
    //   func: async ({ filePath, content }) =>
    //     fs.writeFileSync(path.resolve(filePath) + '.staged', content),
    // }),
    // new DynamicStructuredTool({
    //   name: "fs_list_files",
    //   description: "List files in a directory",
    //   schema: z.object({
    //     input: z.string().describe('The path to the directory to list files.'),
    //   }),
    //   func: async ({ input }) =>
    //     fs.readdirSync(path.resolve(input)),
    // }),
    new DynamicStructuredTool({
      name: "plan_execute_agent",
      description: "Plan and execute agent",
      schema: z.object({
        input: z.string().describe('The file content for the agent to plan and execute on.'),
        instructions: z.string().describe('The objective or instructions for the agent, in reference to the input.'),

      }),
      func: async ({ input, instructions }) => {
        debugger;
   

        return await PAexecutor.call({input: [instructions, input].join('\n\n')});
      },
    }),
  ];

  console.log("Loaded agent.");


  const chat = new ChatOpenAI({ modelName: "gpt-4", temperature: 0, verbose: true, maxConcurrency: 10});

  const executor = await initializeAgentExecutorWithOptions(tools, chat, {
    agentType: "openai-functions",
    verbose: false,
  });
  const result = await executor.run(`
  1. get the contents of this file packages/node/src/utils/flush-chunks.ts
  2. create a refactor plan for the file contents using plan_execute_agent
  3. return the refactored code
  4. ensure only the refactored code is returned, nothing else
  5. use plan_execute_agent to double-check the refactored code is not missing any functionality
  6. if it is valuable, commit the refactored code, nothing else besides the code
  `);



  console.log({ result });
};

run();





