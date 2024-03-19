import {useState, useEffect} from 'react';
import {musTost} from '../contractuse/expTemplet';
import useAsynsStorGit from './useAsynsStorGit';
import {dolars} from '../../Taskscshmonv';
import {useSelector} from 'react-redux';
import useSamS from './useSamS';
import useFindexpnses from '../contractuse/useFindexpnses';
export default function useOnPNew(navigation) {
  const {tasksCOVENANT, getItemsStroge, tasksCOVENANTID} = useAsynsStorGit(
    'tasksCOVENANT',
    navigation,
  );
  const sumSuba = useSamS(navigation);
  const [findTaskss] = useFindexpnses('AccountantSub');

  const [FalseCalulter, setFalseCalculator] = useState(false);
  const [seactionCont, setSeactionCont] = useState({});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [falseerr, setFalseerr] = useState(false);
  const [False, setFalse] = useState(false);

  function getTask() {
    const Task = tasksCOVENANT.find(tasks => tasks.ID === tasksCOVENANTID);
    if (Task) {
      setSeactionCont(Task);
      console.log(seactionCont);
      setFalseCalculator(true);
    } else {
      setSeactionCont({
        ID: tasksCOVENANTID,
        name: '',
        describtion: '',
        SumCash: '',
        kindmony: '',
        DescPush: 0,
        thremn: 0,
        Done: false,
        TimeDate: new Date(Date.now()).toLocaleDateString(),
        Timeminet: new Date(Date.now()).toLocaleTimeString(),
        arrayOprition: [],
      });
      setFalseCalculator(false);
    }
  }

  const onPress = async () => {
    if (seactionCont.SumCash?.length <= 0 && seactionCont.name?.length <= 0) {
      musTost();
      setFalseerr(true);
    } else {
      console.log(seactionCont);
      setFalse(true);
      try {
        // console.warn(dolars.find(item=>item.value ==codm.value)?.label)
        var Task = {
          ...seactionCont,
          kindmony:
            seactionCont.kindmony?.length <= 0
              ? 'ريال يمني'
              : dolars.find(item => item.value == seactionCont.kindmony.value)
                  ?.label || seactionCont.kindmony,
          thremn:
            parseInt(seactionCont?.SumCash) - parseInt(findTaskss?.DescPush),
        };
        console.log(Task);
        const index = tasksCOVENANT.findIndex(
          tasks => tasks.ID == tasksCOVENANTID,
        );
        let newTasks = [];
        newTasks = [...tasksCOVENANT];
        if (index > -1) {
          newTasks[index] = Task;
        } else {
          newTasks.push(Task);
        }
        // console.log(newTasks);
        sumSuba(newTasks);
        getItemsStroge(newTasks);

        setFalseerr(false);
        setToggleCheckBox(true);
        setFalse(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return {
    onPress,
    seactionCont,
    setSeactionCont,
    toggleCheckBox,
    setToggleCheckBox,
    False,
    setFalse,
    FalseCalulter,
    setFalseCalculator,
    falseerr,
    getTask,
  };
}
