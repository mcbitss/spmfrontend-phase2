import { LoginType } from '../actions/ActionType';


const initialState = {
    userInfo: undefined
};

export default function reducer(state = initialState, action) {
    let st = state;
    switch (action.type) {
      case LoginType.AUTHENTICATE: {
        st = {
          ...state,
          message: action.message
        };
        break;
      }
  
      default: {
        return st;
      }
    }
    return st;
  }
