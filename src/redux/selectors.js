
export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter.filter;

export const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
