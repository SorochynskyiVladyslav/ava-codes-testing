import ConvertBot from "./convertBot";
import QuoteBot from "./quoteBot";
import AdviseBot from "./adviseBot";
import * as bots from "./bots";

export default function getBotResponse(message) {
  switch (message.to.name) {
    case bots.CURRENCY_BOT:
      return ConvertBot.getResponse(message);
    case bots.QUOTE_BOT:
      return QuoteBot.getResponse(message);
    case bots.ADVISE_BOT:
      return AdviseBot.getResponse(message);
    default:
      throw new Error("Undefined bot");
  }
}
