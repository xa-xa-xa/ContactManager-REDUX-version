import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Jond Doe',
      email: 'jdoe@email.com',
      phone: '111-111-1111'
    },
    {
      id: '2',
      name: 'Peter Smith',
      email: 'psmith@email.com',
      phone: '222-222-2222'
    },
    {
      id: '3',
      name: 'Marta Johnes',
      email: 'mjohnes@email.com',
      phone: '333-333-3333'
    },
    {
      id: '4',
      name: 'Will Marks',
      email: 'wmarks@email.com',
      phone: '444-444-4444'
    },
    {
      id: '5',
      name: 'Glen Britch',
      email: 'gbritch@email.com',
      phone: '555-555-5555'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
