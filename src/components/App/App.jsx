import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = newContact => {
    if (this.state.contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);

      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
    this.filteredList = this.filterContacts(this.state.filter);
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.handleAddContact} />
        <SubTitle>Contacts:</SubTitle>
        <Filter text={this.state.filter} onInput={this.handleFilterInput} />
        <PhoneBook
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
