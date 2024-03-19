import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SET_TASKS = 'SET_TASKS';
export const SET_TASKSID = 'SET_TASKSID';
export const SET_CONVERIMAG = 'SET_CONVERIMAG';
export const SET_TASKIDSCSH = 'SET_TASKIDSCSH';
export const SET_TASKSTARG = 'SET_TASKSTARG';
export const SET_TASKIDTARG = 'SET_TASKIDTARG';
export const SET_TASKSCONTRAT = 'SET_TASKSCONTRAT';
export const SET_TASKIDCONTRAT = 'SET_TASKIDCONTRAT';
export const SET_TASKSCSHCONVER = 'SET_TASKSCSHCONVER';
export const SET_TASKSCOVENANT = 'SET_TASKSCOVENANT';
export const SET_TASKSCEVACUTION = 'SET_TASKSCEVACUTION';
export const SET_TASKIDSCOVENANTID = 'SET_TASKIDSCOVENANTID';
export const SET_ZOOMIN = 'SET_ZOOMIN';
export const SET_PAGACONT = 'SET_PAGACONT';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_SUMCOVENANT = 'SET_SUMCOVENANT';
export const SET_SUMCONTRAT = 'SET_SUMCONTRAT';
export const SET_LOCAL = 'SET_LOCAL';
export const SET_USER_PASSWORDFALSE = 'SET_USER_PASSWORDFALSE';
export const SET_FINDFALSE = 'SET_FINDFALSE';
export const SET_WITEN = 'SET_WITEN';

// //المهام
// export const setTasks = tasks => dispatch => {
//   dispatch({type: SET_TASKS, payload: tasks});
// };
// export const setTasksID = tasksID => dispatch => {
//   dispatch({type: SET_TASKSID, payload: tasksID});
// };

//الديون
export const setConvertImage = convImge => dispatch => {
  dispatch({type: SET_CONVERIMAG, payload: convImge});
};
export const setTasksCshID = tasksCSHID => dispatch => {
  dispatch({type: SET_TASKIDSCSH, payload: tasksCSHID});
};

//اعمالي
export const setTasksCONTRAT = tasksCONTRAT => dispatch => {
  dispatch({type: SET_TASKSCONTRAT, payload: tasksCONTRAT});
};
export const setSumCONTRAT = sumCONTRAT => dispatch => {
  dispatch({type: SET_SUMCONTRAT, payload: sumCONTRAT});
};
export const setTasksCONTRATID = tasksCONTRATID => dispatch => {
  dispatch({type: SET_TASKIDCONTRAT, payload: tasksCONTRATID});
};

//COVENANT
export const setTasksCOVENANT = tasksCOVENANT => dispatch => {
  dispatch({type: SET_TASKSCOVENANT, payload: tasksCOVENANT});
};
export const setSumCOVENANT = sumCOVENANT => dispatch => {
  dispatch({type: SET_SUMCOVENANT, payload: sumCOVENANT});
};
export const setTasksCOVENANTID = tasksCOVENANTID => dispatch => {
  dispatch({type: SET_TASKIDSCOVENANTID, payload: tasksCOVENANTID});
};

export const setZoom = zommIN => dispatch => {
  dispatch({type: SET_ZOOMIN, payload: zommIN});
};

export const setPagAcount = pageAc => dispatch => {
  dispatch({
    type: SET_PAGACONT,
    payload: pageAc,
  });
};
export const setPasswordrd = passwordrd => dispatch => {
  dispatch({
    type: SET_USER_PASSWORD,
    payload: passwordrd,
  });
};
export const setPasswordFalse = passwordfalse => dispatch => {
  dispatch({
    type: SET_USER_PASSWORDFALSE,
    payload: passwordfalse,
  });
};
export const setFindFalse = findFalse => dispatch => {
  dispatch({
    type: SET_FINDFALSE,
    payload: findFalse,
  });
};
export const setWitenFalse = witen => dispatch => {
  dispatch({
    type: SET_WITEN,
    payload: witen,
  });
};
export const setLocul = localed => dispatch => {
  dispatch({
    type: SET_LOCAL,
    payload: localed,
  });
};
/*export const setPhone = phone => dispatch=>{
    dispatch({
        type: SET_USER_PHONE,
        payload: phone,
    });
};


*/
