import {
  USER_NAME,
  DEFAULT_DIALOGUE_HEADER_ICON,
  CHOOSE_DIALOGUE_MESSAGE,
  EMPTY_DIALOGUE_MESSAGE
} from "./constants";
import * as app from "../app";

class Dom {
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("opened");
  }

  hideSidebar() {
    document.getElementById("sidebar").classList.remove("opened");
  }

  clearList(listName) {
    let list = document.getElementById(listName);
    while (list.childNodes.length > 1) {
      list.removeChild(list.childNodes[list.childNodes.length - 1]);
    }
  }

  updateEmptyDialogue() {
    this.messageFormEnabled(false);
    this.updateDialogueHeader();
    this.updateMessageSection();
  }

  updateDialogueHeader(contact) {
    let dialogueHeader = document.getElementById("current-dialogue");
    let image = dialogueHeader.childNodes[1];
    let name = dialogueHeader.childNodes[3];
    if (!contact) {
      image.src = DEFAULT_DIALOGUE_HEADER_ICON;
      name.innerText = "";
    } else {
      image.src = contact.avatar;
      name.innerText = contact.name;
    }
  }

  updateMessageSection(messages) {
    let messageSection = document.getElementById("messages");

    this.clearList("messages");
    if (!messages) {
      messageSection.appendChild(
        this.createServiceMessage(CHOOSE_DIALOGUE_MESSAGE)
      );
    } else {
      if (!messages.length)
        messageSection.appendChild(
          this.createServiceMessage(EMPTY_DIALOGUE_MESSAGE)
        );
      messages.forEach(message => {
        messageSection.appendChild(this.createMessage(message));
      });
    }
  }

  messageFormEnabled(enabled) {
    document.getElementById("message-form").childNodes[1].disabled = !enabled;
  }

  highlightActiveContact(name) {
    this.messageFormEnabled(true);
    const contactList = document.getElementById("contacts");
    for (let i = 1; i < contactList.childNodes.length; i++) {
      let currentNode = contactList.childNodes[i];
      if (currentNode.childNodes[1].innerText === name) {
        currentNode.classList.add("contacts__contact--active");
      } else {
        currentNode.classList.remove("contacts__contact--active");
      }
    }
  }

  createContact(contact) {
    let nodeClasses = ["contacts__contact"];
    if (contact.active) nodeClasses.push("contacts__contact--active");
    let node = this.createElement("div", nodeClasses);

    let image = this.createImage(["contact__avatar"], contact.avatar);
    node.appendChild(image);
    let name = this.createElement("p", ["contact__name"], contact.name);
    node.appendChild(name);

    node.addEventListener("click", event => {
      app.updateActiveContact(event.currentTarget.childNodes[1].innerText);
      this.hideSidebar();
    });

    return node;
  }

  createServiceMessage(text) {
    let node = this.createElement("h1", ["messages__service"], text);
    return node;
  }

  createMessage(message) {
    let classes = ["messages__message"];
    let text = this.createElement("p", ["message__text"], message.text);
    let image = this.createImage(["message__avatar"], message.from.avatar);
    let node;
    if (message.from.name === USER_NAME) {
      classes.push("messages__message--right");
      node = this.createElement("div", classes);
      node.appendChild(text);
      node.appendChild(image);
    } else {
      classes.push("messages__message--left");
      node = this.createElement("div", classes);
      node.appendChild(image);
      node.appendChild(text);
    }
    return node;
  }

  createElement(tag, classes, content) {
    let node = document.createElement(tag);
    node.classList.add(...classes);
    if (content) {
      node.innerText = content;
    }
    return node;
  }

  createImage(classes, src) {
    let image = document.createElement("img");
    image.classList.add(...classes);
    image.src = src;
    return image;
  }
}

export default new Dom();
