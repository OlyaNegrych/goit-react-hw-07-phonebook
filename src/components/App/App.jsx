import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Section from '../Section/Section';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <br/>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section>
      </>
    );
}

export default App;