import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
export const addContacts = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
