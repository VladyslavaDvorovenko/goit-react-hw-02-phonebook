import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = contact => {
    if (
      this.state.contacts.find(
        contactItem =>
          contactItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Oops, ${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  handleFilterContacts = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

  render() {
    const filterContacts = this.getFilteredContacts();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          onFilterChange={this.handleFilterContacts}
          value={this.state.filter}
        />
        <ContactList contacts={filterContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
