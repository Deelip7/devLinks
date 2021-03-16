import { LINK_ADD_SUCCESS, LINK_ADD_REQUEST, LINK_ADD_FAIL, LINK_LIST_FAIL, LINK_LIST_SUCCESS, LINK_LIST_REQUEST } from '../constants/linkContants';
import axios from 'axios';

export const addLink = (link) => async (dispatch) => {
  try {
    dispatch({
      type: LINK_ADD_REQUEST,
    });

    const { data } = await axios.post('/api/links', { link });

    dispatch({
      type: LINK_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LINK_ADD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const listLinks = () => async (dispatch) => {
  try {
    dispatch({
      type: LINK_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/links');

    dispatch({
      type: LINK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LINK_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
