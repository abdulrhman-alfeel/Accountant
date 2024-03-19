import {useSelector, useDispatch} from 'react-redux';
import {setTasksCOVENANT, setSumCOVENANT} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastOk} from '../contractuse/expTemplet';

export default function useAsynsStorGit(key, navigation) {
  const {tasksCOVENANT, tasksCOVENANTID} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();

  const getAsins = () => {
    AsyncStorage.getItem(key).then(tasks => {
      const Taskstody = JSON.parse(tasks);
      if (Taskstody && typeof Taskstody === 'object') {
        dispatch(setTasksCOVENANT(Taskstody));
      }
    });
  };

  const getItemsStroge = newTasks => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(newTasks)).then(() => {
        dispatch(setTasksCOVENANT(newTasks));
        ToastOk();
      });
    } catch (err) {
      console.log(err);
    }
  };
  const SumAsins = () => {
    AsyncStorage.getItem('Sumcovnent').then(tasks => {
      const Taskstody = JSON.parse(tasks);
      if (Taskstody && typeof Taskstody === 'object') {
        dispatch(setSumCOVENANT(Taskstody));
      }
    });
  };
  const SumItemsSetStroge = newTasks => {
    try {
      AsyncStorage.setItem('Sumcovnent', JSON.stringify(newTasks)).then(() => {
        dispatch(setSumCOVENANT(newTasks));
        navigation !== 'outGogin' ? navigation.navigate('InComing') : null;
        ToastOk();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getAsins,
    tasksCOVENANT,
    getItemsStroge,
    tasksCOVENANTID,
    SumItemsSetStroge,
    SumAsins,
  };
}
