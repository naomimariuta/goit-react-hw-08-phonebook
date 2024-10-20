import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'reduxtoolkit/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import { Box, UnorderedList } from '@chakra-ui/react';
import { selectFilter, selectContacts } from 'reduxtoolkit/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box mt={4}>
      <UnorderedList spacing={2}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ContactList;
