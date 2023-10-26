import React from 'react';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import ContactList from 'components/Contact/ContactItem/ContactList';
import Filter from 'components/Contact/Filter/Filter';

function ContactsPage() {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
