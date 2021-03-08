import { LINK_ADD_REQUEST, LINK_ADD_SUCCESS, LINK_ADD_FAIL } from '../constants/linkContants';

export const linkReducers = (state = {}, action) => {
  switch (action.type) {
    case LINK_ADD_REQUEST:
      return {
        loading: true,
      };
    case LINK_ADD_SUCCESS:
      return {
        loading: false,
        link: action.payload,
      };
    case LINK_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
