const { Tool } = require('langchain/tools');
const fs = require('fs');
const path = require('path');
const z = require('zod');

class FsTool extends Tool {
  constructor(fields) {
    super(fields);
  }

  runFsCommand(command, args) {
    try {
      return fs[command](...args);
    } catch (error) {
      return `${error}`;
    }
  }
}

class FsReadTool extends FsTool {
  static lc_name() {
    return "FsReadTool";
  }

  constructor(args) {
    super(args);
    this.name = "fs_read";
    this.schema = z.object({
      filePath: z.string().describe('The path to the file to read.'),
    });
  }

  async _call(args) {
    debugger;
    return this.runFsCommand('readFileSync', [path.resolve(args.filePath), 'utf8']);
  }

  description = `Read the content of a file.`;
}

class FsWriteTool extends FsTool {
  static lc_name() {
    return "FsWriteTool";
  }

  constructor(args) {
    super(args);
    this.name = "fs_write";
    this.schema = z.object({
      filePath: z.string(),
      content: z.string(),
    });
  }

  async _call(args) {
    debugger;
    return this.runFsCommand('writeFileSync', [path.resolve(args.filePath) + '.staged', args.content]);
  }

  description = `Write content to a file.`;
}

class FsListFilesTool extends FsTool {
  static lc_name() {
    return "FsListFilesTool";
  }

  constructor(args) {
    super(args);
    this.name = "fs_list_files";
    this.schema = z.object({
      input: z.string(),
    });
  }

  async _call(args) {
    console.log('args', args);
    return this.runFsCommand('readdirSync', [path.resolve(args.input)]);
  }

  description = `List files in a directory.`;
}

module.exports = {
  FsTool,
  FsReadTool,
  FsWriteTool,
  FsListFilesTool
};

