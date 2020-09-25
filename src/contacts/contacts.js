import React, { Component } from "react";
import "./contacts.css";
import Contact from "./contact";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export default class Contacts extends Component {
  state = {
    contact: [...contacts],
    search: "",
    filteredContacts: [...contacts],
  };

  handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();

    this.setState({
      search: value,
      filteredContacts: contacts.filter(
        (item) =>
          (item.firstName && item.firstName.toLowerCase().includes(value)) ||
          (item.lastName && item.lastName.toLowerCase().includes(value))
      ),
    });
  };

  render() {
    let contacts = this.state.filteredContacts.map((contact) => {
      return (
        <Contact
          firstName={contact.firstName}
          lastName={contact.lastName}
          phone={contact.phone}
          gender={contact.gender}
        />
      );
    });
    return (
      <div className="contacts-inner">
        <div>
          <form>
            <input
              className="search-form"
              type="text"
              placeholder="Enter name"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </form>
        </div>
        <div className="contacts-list">{contacts}</div>
      </div>
    );
  }
}
