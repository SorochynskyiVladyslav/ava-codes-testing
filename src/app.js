import Account from "./helpers/account";
import Dom from "./helpers/dom";
import getBotResponse from "./bot";

const contactList = document.getElementById("contacts");
const messageList = document.getElementById("messages");

export function loadContacts() {
  const contacts = Account.getContacts();
  Dom.clearList("contacts");
  contacts.forEach(contact => {
    contactList.appendChild(Dom.createContact(contact));
  });
}

export async function updateActiveContact(name) {
  // just to demonstrate await and promises
  try {
    const activeContact = await Account.pickContact(name);
    Dom.highlightActiveContact(name);
    const messages = await Account.getMessages(activeContact);
    Dom.updateDialogueHeader(activeContact);
    Dom.updateMessageSection(messages);
    messageList.scrollTop = messageList.scrollHeight;
  } catch (err) {
    Dom.updateEmptyDialogue();
  }
}

export function searchContacts(query) {
  const contacts = Account.findContacts(query);
  if (!contacts || !contacts.length) loadContacts();
  else {
    Dom.clearList("contacts");
    contacts.forEach(contact => {
      contactList.appendChild(Dom.createContact(contact));
    });
  }
}

export function sendMessage(message, fromBot) {
  if (Account.firstMessageInDialogue(message)) Dom.clearList("messages");
  Account.addMessage(message);
  messageList.appendChild(Dom.createMessage(message));
  messageList.scrollTop = messageList.scrollHeight;
  if (!fromBot) {
    try {
      const response = getBotResponse(message);
      sendMessage(response, true);
    } catch (err) {
      console.error(err.message);
    }
  }
}
