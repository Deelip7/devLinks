import { LINK_ADD_SUCCESS, LINK_ADD_REQUEST } from '../constants/linkContants';
import axios from 'axios';

export const addLink = (link) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LINK_ADD_REQUEST,
    });

    const { data } = await axios.post(`/api/link`, link);

    dispatch({
      type: LINK_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
