import {
  finishLoading,
  startLoading,
} from '../redux-components/modules/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //start
    dispatch(startLoading(type));
    try {
      const res = await request(params);
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
      dispatch(finishLoading(type));
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      dispatch(startLoading(type));
      throw error;
    }
  };
}

// createRequestThunk('GET_USERS', api.getUsers);
