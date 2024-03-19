import React, {useCallback, useState} from 'react';
import CreattaskCashd from '../../component/Accountant/creattaskCashd';
import {Tofixed} from '../contractuse/expTemplet';
import {setTasksCOVENANTID} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import useOprection from '../useoprection';
import Moduls from '../../component/moduls';
export default function userenderItems(navigation, kindga) {
  const dispatch = useDispatch();

  const [taskbell, setTask] = useState(false);
  const {delet, setMenu, bellmodel, setBellmodel, Oprection, meneu} =
    useOprection(navigation, 'AccountantSub');
  const renderItem = useCallback(({item, index}) => {
    return (
      <CreattaskCashd
        keys={index}
        Sum={Tofixed(item.SumCash)}
        onlongpress={() => {
          dispatch(setTasksCOVENANTID(item.ID));
          setMenu(true);
        }}
        onpress={() => {
          dispatch(setTasksCOVENANTID(item.ID));
          kindga === 'Outgogin' ? setMenu(true) : setTask(true);
        }}
        Outgogin={Tofixed(item.DescPush?.length > 0 ? item.DescPush : 0)}
        Residual={Tofixed(parseInt(item.thremn) > 0 ? item.thremn : 0)}
        name={item.name}
        TimeDate={item.TimeDate}
        kindpag={kindga}
        items={item}
      />
    );
  }, []);

  const DataUser = () => {
    return (
      <Moduls
        setBellmodel={setBellmodel}
        bellmodel={bellmodel}
        preesyes={() => {
          delet();
          setBellmodel(false);
        }}
      />
    );
  };
  return {renderItem, taskbell, setTask, DataUser, Oprection, meneu};
}
