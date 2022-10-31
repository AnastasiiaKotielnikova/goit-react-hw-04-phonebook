import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';

const PhoneBook = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ContactList>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactList>
    </Container>
  );
};

PhoneBook.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default PhoneBook;
