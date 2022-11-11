import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteBtn } from '../ContactList/ContactList.styled';
import { ContactItem } from '../ContactList/ContactList.styled';
import {getContacts, getFilter, getVisibleContacts } from 'redux/selectors';

const ContactList = ({ contactId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {getVisibleContacts(contacts, filter).map(({ id, name, number }) => (
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
