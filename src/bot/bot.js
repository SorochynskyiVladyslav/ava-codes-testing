class Bot {
  getResponse(message) {
    const response = {
      from: message.to,
      to: message.from,
      text: this.generateResponse(message.text)
    };
    return response;
  }

  generateResponse(query) {
    try {
      const command = this.parseCommand(query);
      const params = this.parseParams(query, command);
      const result = this.execute(command, params);
      return this.generateText(command, params, result);
    } catch (err) {
      return err.message;
    }
  }
}

export default Bot;
