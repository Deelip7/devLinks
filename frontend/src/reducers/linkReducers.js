import { LINK_ADD_REQUEST, LINK_ADD_SUCCESS, LINK_ADD_FAIL, LINK_LIST_REQUEST, LINK_LIST_SUCCESS, LINK_LIST_FAIL } from '../constants/linkContants';

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

export const linkListsReducers = (state = { links: [] }, action) => {
  switch (action.type) {
    case LINK_LIST_REQUEST:
      return {
        loading: true,
        links: [],
      };
    case LINK_LIST_SUCCESS:
      return {
        loading: false,
        links: action.payload,
      };
    case LINK_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
