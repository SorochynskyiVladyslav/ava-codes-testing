import Bot from "./bot";
import * as commands from "./commands";

class ConvertBot extends Bot {
  constructor() {
    super();
    this.rates = new Map();
    this.rates.set("usd/uah", 26);
    this.rates.set("usd/eur", 0.86);
    this.rates.set("usd/gbp", 0.76);
    this.rates.set("eur/uah", 31);
    this.rates.set("eur/gbp", 0.89);
    this.rates.set("gbp/uah", 35);
  }

  parseCommand(query) {
    if (new RegExp("^convert [-0-9.]+ [A-Za-z]+ to [A-Za-z]+$").test(query))
      return commands.CONVERT;
    throw new Error(
      "Hi, I can convert currencies for you. Just try 'convert <amount> <currency> to <currency>'"
    );
  }

  parseParams(query, command) {
    switch (command) {
      case commands.CONVERT:
        return this.parseConvertParams(query);
      default:
        throw new Error("Params parser error.");
    }
  }

  execute(command, params) {
    switch (command) {
      case commands.CONVERT:
        return this.convert(
          params.currentCurrency,
          params.requestedCurrency,
          params.amount
        );
      default:
        throw new Error("Command execution error.");
    }
  }

  generateText(command, params, result) {
    switch (command) {
      case commands.CONVERT:
        return `${params.amount} ${params.currentCurrency} = ${result} ${
          params.requestedCurrency
        }`;
      default:
        throw new Error("Response generator error.");
    }
  }

  parseConvertParams(query) {
    let params = {
      currentCurrency: "",
      requestedCurrency: "",
      amount: 0
    };
    let amountString = "",
      i = 8;
    for (; i < query.length; i++) {
      if (query.charAt(i) === " ") break;
      amountString += query.charAt(i);
    }
    if (Number(amountString) === NaN)
      throw new Error("Something wrong with your numbers, son.");
    if (Number(amountString) <= 0)
      throw new Error("I don`t work with people who are in debts, son.");
    params.amount = amountString;
    i++;
    for (; i < query.length; i++) {
      if (query.charAt(i) === " ") break;
      params.currentCurrency += query.charAt(i);
    }
    for (let j = query.indexOf("to") + 3; j < query.length; j++) {
      if (query.charAt(j) === " ") break;
      params.requestedCurrency += query.charAt(j);
    }
    return params;
  }

  convert(currentCurrency, requestedCurrency, amount) {
    return (
      Number(amount) * this.convertRate(currentCurrency, requestedCurrency)
    ).toFixed(2);
  }

  convertRate(currentCurrency, requestedCurrency) {
    if (
      !this.rates.get(
        `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`
      ) &&
      !this.rates.get(
        `${requestedCurrency.toLowerCase()}/${currentCurrency.toLowerCase()}`
      )
    )
      throw new Error("I only deal with usd, uah, eur and gbp, son.");
    if (
      !this.rates.get(
        `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`
      )
    )
      return (
        1 /
        this.rates.get(
          `${requestedCurrency.toLowerCase()}/${currentCurrency.toLowerCase()}`
        )
      );
    return this.rates.get(
      `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`
    );
  }
}

export default new ConvertBot();
