import React, { useEffect, useState } from "react";
import Form from "../Form";
import List from "../List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Süleyman Demir",
      phone_number: "05544478895",
    },
    {
      fullname: "Recep Demir",
      phone_number: "05542336598",
    },
    {
      fullname: "Murat Demir",
      phone_number: "05347775544",
    },
  ]);

  useEffect(() => {}, [contacts]);

  return (
    <div className="container">
      <h1>
        <FontAwesomeIcon icon={faAddressBook} className="icon" />
      </h1>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
