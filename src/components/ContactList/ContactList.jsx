import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteBtn } from '../ContactList/ContactList.styled';
import { ContactItem } from '../ContactList/ContactList.styled';
import { getVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
