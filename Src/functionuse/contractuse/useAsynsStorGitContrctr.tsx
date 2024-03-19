import {useSelector, useDispatch} from 'react-redux';
import {setTasksCONTRAT, setSumCONTRAT} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastOk} from './expTemplet';

export default function useAsynsStorGitContrctr(key) {
  // const {tasksCOVENANT, tasksCOVENANTID} = useSelector(
  //   state => state.userReducer,
  // );
  const dispatch = useDispatch();

  const getAsins = () => {
    AsyncStorage.getItem(key).then(tasks => {
      const Taskstody = JSON.parse(tasks);
      if (Taskstody && typeof Taskstody === 'object') {
        dispatch(setTasksCONTRAT(Taskstody));
      }
    });
  };

  const SetItems = newTasks => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(newTasks)).then(() => {
        dispatch(setTasksCONTRAT(newTasks));
        ToastOk();
      });
    } catch (err) {
      console.log(err);
    }
  };
  const SumAsins = () => {
    AsyncStorage.getItem('SumContrct').then(tasks => {
      const Taskstody = JSON.parse(tasks);
      if (Taskstody && typeof Taskstody === 'object') {
        dispatch(setSumCONTRAT(Taskstody));
      }
    });
  };
  const SumItemsSetStrog = newTasks => {
    try {
      AsyncStorage.setItem('SumContrct', JSON.stringify(newTasks)).then(() => {
        dispatch(setSumCONTRAT(newTasks));
        ToastOk();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getAsins,
    SetItems,
    SumItemsSetStrog,
    SumAsins,
  };
}
