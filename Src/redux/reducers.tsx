import {
  SET_CONVERIMAG,
  SET_TASKIDCONTRAT,
  SET_TASKSCONTRAT,
  SET_TASKSCOVENANT,
  SET_TASKIDSCOVENANTID,
  SET_ZOOMIN,
  SET_PAGACONT,
  SET_USER_PASSWORD,
  SET_SUMCOVENANT,
  SET_SUMCONTRAT,
  SET_LOCAL,
  SET_USER_PASSWORDFALSE,
  SET_FINDFALSE,
  SET_WITEN,
} from './actions';

const initialState = {
  convImge: [],
  tasksCSHID: 0,
  tasksCONTRAT: [],
  tasksCONTRATID: 0,
  tasksCOVENANT: [],
  tasksCOVENANTID: 0,
  zommIN: 14,
  pageAc: '',
  passwordrd: '',
  sumCOVENANT: {},
  sumCONTRAT: {},
  localed: '',
  passwordfalse: false,
  findFalse: false,
  witen: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONVERIMAG:
      return {...state, convImge: action.payload};
    case SET_LOCAL:
      return {...state, localed: action.payload};
    case SET_WITEN:
      return {...state, witen: action.payload};

    case SET_TASKSCONTRAT:
      return {...state, tasksCONTRAT: action.payload};
    case SET_SUMCONTRAT:
      return {...state, sumCONTRAT: action.payload};
    case SET_TASKIDCONTRAT:
      return {...state, tasksCONTRATID: action.payload};
    case SET_TASKSCOVENANT:
      return {...state, tasksCOVENANT: action.payload};
    case SET_SUMCOVENANT:
      return {...state, sumCOVENANT: action.payload};
    case SET_TASKIDSCOVENANTID:
      return {...state, tasksCOVENANTID: action.payload};
    case SET_PAGACONT:
      return {...state, pageAc: action.payload};
    case SET_USER_PASSWORD:
      return {...state, passwordrd: action.payload};
    case SET_USER_PASSWORDFALSE:
      return {...state, passwordfalse: action.payload};
    case SET_FINDFALSE:
      return {...state, findFalse: action.payload};
    case SET_ZOOMIN:
      return {
        ...state,
        zommIN: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
