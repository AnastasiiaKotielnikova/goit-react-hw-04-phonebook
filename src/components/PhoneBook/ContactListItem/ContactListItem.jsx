import PropTypes from 'prop-types';
import { Container } from './ContactListItem.styled';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <Container>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
