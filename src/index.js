import * as app from "./app";
import Account from "./helpers/account";
import Dom from "./helpers/dom";

app.loadContacts();
app.updateActiveContact();

subscribeSidebar();
subscribeSearch();
subscribeMessageSend();

function subscribeSearch() {
  document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();
  });

  document
    .getElementById("search-form")
    .childNodes[1].addEventListener("input", event => {
      const query = event.currentTarget.value;
      app.searchContacts(query);
    });
}

function subscribeMessageSend() {
  document.getElementById("message-form").addEventListener("submit", event => {
    event.preventDefault();
  });

  document.getElementById("message-form").addEventListener("submit", event => {
    let message = {
      text: event.currentTarget.childNodes[1].value,
      from: Account.getUser(),
      to: Account.getActiveContact()
    };
    if (!message || !message.text.length) return;
    app.sendMessage(message);
    event.currentTarget.reset();
  });
}

function subscribeSidebar() {
  document
    .getElementById("hamburger")
    .addEventListener("click", Dom.toggleSidebar);
  document
    .getElementById("messages")
    .addEventListener("click", Dom.hideSidebar);
  document
    .getElementById("message-form")
    .addEventListener("click", Dom.hideSidebar);
  document
    .getElementById("current-dialogue")
    .addEventListener("click", Dom.hideSidebar);
}
