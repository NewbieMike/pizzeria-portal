import Axios from 'axios';
import { api } from '../settings';

/* selectors */


/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_STATUS = createActionName('CHANGE_STATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeStatus = payload => ({ payload, type: CHANGE_STATUS });
/* reducer */

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
  
    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        //console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
export const changeStatusAPI = (tableId, newState) => {
  //console.log(tableId, newState);
  return (dispatch, getState) => {
    //console.log(dispatch, newState);
    
    Axios
      .patch(`${api.url}/api/${api.tables}/${tableId}`, 
        {status: newState},
        console.log(tableId),
        console.log({status: newState}),
        
      )
      .then(res => {
        console.log(res.data);
        dispatch(changeStatus(res.data));
        
      });
  };
};
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_STATUS: {
      const newData = statePart.data.map(function(element) {
        if(element.id === action.payload.id) {
          return action.payload;
        } else {
          return element;
        }
      });
      return {
        ...statePart,
        data: newData,
      };
    }
    default:
      return statePart;
  }
}