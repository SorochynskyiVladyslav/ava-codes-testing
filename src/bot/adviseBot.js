import Bot from "./bot";
import * as commands from "./commands";

class AdviseBot extends Bot {
  constructor() {
    super();
    this.advises = [
      "You need to find the rebels.",
      "Use the force.",
      "You must finish your training. You`re not ready yet.",
      "Go on Dagoba, find master Yoda there. He`ll finish your training.",
      "You have a sister - find her.",
      "We must get out from this planet."
    ];
  }

  parseCommand(query) {
    if (new RegExp("^[A-Za-z0-9 ,.]+[?]$").test(query)) return commands.ADVISE;
    throw new Error(
      "I`m here to help. Just ask me something like this 'question?'"
    );
  }

  parseParams(query, command) {
    switch (command) {
      case commands.ADVISE:
        return null;
      default:
        throw new Error("Params parser error.");
    }
  }

  execute(command, params) {
    switch (command) {
      case commands.ADVISE:
        return this.randomAdvise();
      default:
        throw new Error("Command execution error.");
    }
  }

  generateText(command, params, result) {
    switch (command) {
      case commands.ADVISE:
        return result;
      default:
        throw new Error("Response generator error.");
    }
  }

  randomAdvise() {
    return this.advises[
      Math.floor(Math.random() * Math.floor(this.advises.length))
    ];
  }
}

export default new AdviseBot();
