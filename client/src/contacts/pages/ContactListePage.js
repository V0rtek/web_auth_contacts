import {useEffect, useState} from 'react';
import {getAllContacts} from '../services/contactService';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/**
 * a
 * @return {jsx}
 */
export default function ContactListePage() {
  const [contactList, setContactList] = useState([]);
  useEffect(()=>{
    getAllContacts().then((data)=>setContactList(data));
  }, []); // param 1: fonction, param 2: declencheurs
  return (
    <>
      <h1>Liste de contacts</h1>
      <ListGroup>
        {
          contactList.map((elt)=>
            <ListGroup.Item key={elt.id}>
              <Link to={`/contacts/${elt.id}`}>
                {elt.name}
              </Link>
            </ListGroup.Item>)
        }
      </ListGroup>
    </>
  );
}
