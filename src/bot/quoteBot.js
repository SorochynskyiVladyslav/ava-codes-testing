import Bot from "./bot";
import * as commands from "./commands";

class QuoteBot extends Bot {
  constructor() {
    super();
    this.quotes = [
      "English motherfucker! Do you speak it?!",
      "Describe Marcellus Wallace for me!",
      "How could you forget my fathers watch?!",
      "Does it bother you? Uncomfortable silence.",
      "It was a fucking miracle, that happened there, and I want you to admit it.",
      "Pigs are disgusting animals. I don`t eat disgusting animals."
    ];
  }

  parseCommand(query) {
    if (new RegExp("^show quote$").test(query)) return commands.QUOTE;
    throw new Error("Come on! Just try 'show quote'");
  }

  parseParams(query, command) {
    switch (command) {
      case commands.QUOTE:
        return null;
      default:
        throw new Error("Params parser error.");
    }
  }

  execute(command, params) {
    switch (command) {
      case commands.QUOTE:
        return this.randomQuote();
      default:
        throw new Error("Command execution error.");
    }
  }

  generateText(command, params, result) {
    switch (command) {
      case commands.QUOTE:
        return result;
      default:
        throw new Error("Response generator error.");
    }
  }

  randomQuote() {
    return this.quotes[
      Math.floor(Math.random() * Math.floor(this.quotes.length))
    ];
  }
}

export default new QuoteBot();
