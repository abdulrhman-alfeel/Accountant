import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setTasksCONTRAT} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastOk, musTost} from './expTemplet';
import useSamsuball from './useSamsuball';
import useAsynsStorGitContrctr from './useAsynsStorGitContrctr';
export default function useOnpressall() {
  const {tasksCONTRAT, tasksCONTRATID} = useSelector(
    state => state.userReducer,
  );
  const [falseerr, setFalseerr] = useState(false);
  const [allSav, setLiprre] = useState(false);
  const sumSuball = useSamsuball();
  const {SetItems} = useAsynsStorGitContrctr('TasksCONTRAT');
  const onPresslTask = (allTsks, newadd) => {
    if (allTsks.sectionidnfy?.length === 0) {
      musTost;
      setFalseerr(true);
    } else {
      try {
        const Sumsing = sumSuball(
          newadd === 'pagHOm' ? allTsks.databuld : newadd,
        );
        setLiprre(true);
        const newTasks = [...tasksCONTRAT];
        let Task = {
          ...allTsks,
          databuld: newadd === 'pagHOm' ? allTsks.databuld : newadd,
          SumDollar: Sumsing.sumDoler.toString(),
          SumِSR: Sumsing.sumSR.toString(),
          SumِYR: Sumsing.sumYR.toString(),
        };
        const index = tasksCONTRAT.findIndex(
          item => item.ID === tasksCONTRATID,
        );
        if (index > -1) {
          newTasks[index] = Task;
        } else {
          newTasks.push(Task);
        }
        SetItems(newTasks);
        sumSuball(newTasks);
        setLiprre(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return [onPresslTask, falseerr, allSav];
}
