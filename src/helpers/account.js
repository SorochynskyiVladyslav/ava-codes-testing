import { USER_NAME, USER_AVATAR, CHOOSE_DIALOGUE_MESSAGE } from "./constants";

class Account {
  constructor() {
    this.user = {
      name: USER_NAME,
      avatar: USER_AVATAR
    };
    this.contacts = [
      {
        name: "Mia Wallace",
        avatar: "./assets/images/avatar1.png",
        active: false
      },
      {
        name: "Obi-Wan Kenobi",
        avatar: "./assets/images/avatar2.png",
        active: false
      },
      {
        name: "Walter White",
        avatar: "./assets/images/avatar3.png",
        active: false
      }
    ];
    this.messages = [
      {
        text: "Hi, Mia! Remind me of some Pulp Fiction quotes, please.",
        from: this.user,
        to: this.contacts[0]
      },
      {
        text: "Sure, Batman. Just type 'show quote'",
        from: this.contacts[0],
        to: this.user
      }
    ];
  }

  getMessages(author) {
    if (!author) return Promise.reject(CHOOSE_DIALOGUE_MESSAGE);
    else
      return Promise.resolve(
        this.messages.filter(message => {
          if (
            message.from.name === author.name ||
            (message.from.name === this.user.name &&
              message.to.name === author.name)
          )
            return true;
          return false;
        })
      );
  }

  getContacts() {
    return this.contacts;
  }

  getActiveContact() {
    return this.contacts.find(contact => {
      if (contact.active) return true;
      return false;
    });
  }

  getUser() {
    return this.user;
  }

  findContacts(query) {
    return this.contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(query.toLowerCase())) return true;
      return false;
    });
  }

  pickContact(contactName) {
    if (!contactName) return Promise.reject(CHOOSE_DIALOGUE_MESSAGE);
    let result;
    this.contacts.forEach(contact => {
      if (contact.name === contactName) {
        contact.active = true;
        result = contact;
      } else contact.active = false;
    });
    return Promise.resolve(result);
  }

  firstMessageInDialogue(message) {
    return !this.messages.find(item => {
      if (message.from.name === this.user.name) {
        if (
          item.to.name === message.to.name ||
          item.from.name === message.to.name
        )
          return true;
      } else {
        if (
          item.to.name === message.from.name ||
          item.from.name === message.from.name
        )
          return true;
      }
    });
  }

  addMessage(message) {
    this.messages.push(message);
  }
}

export default new Account();
