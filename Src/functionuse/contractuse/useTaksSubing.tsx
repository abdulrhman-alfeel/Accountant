import {useState} from 'react';
import {dolars} from '../../Taskscshmonv';
import {musTost} from './expTemplet';
import uuid from 'react-native-uuid';
import useSamsub from './useSamsub';
import useOnpressall from './useOnpressall';

export default function useTaksSubing(key) {
  const [databuld, setData] = useState([]);
  const [liprri, setLiprre] = useState(false);
  const [falseerr, setFalseerr] = useState(false);
  const [onPresslTask] = useOnpressall();
  const [sumSub, Sum] = useSamsub();

  const getDatalabrrsF = async Tasks => {
    console.log(Tasks.Taskssub);
    let addnew = [];
    addnew = [...Tasks.allTsks.databuld];
    if (
      Tasks.Taskssub.sectiontitle?.length > 0 &&
      Tasks.Taskssub.sectionpriclabrr?.length > 0
    ) {
      console.log(Tasks.Taskssub.idSub);

      const indexconten = Tasks.allTsks.databuld.findIndex(
        tasks => tasks.idHOM === Tasks.Taskssub.idHOM,
      );

      // console.log(addnew);
      try {
        setLiprre(true);
        var datares = {
          ...Tasks.Taskssub,
          arthDath:
            dolars.find(item => item.value === Tasks.Taskssub.arthDath.value)
              ?.label || Tasks.Taskssub.arthDath,
        };
        const finddata = addnew.find(
          tasks => tasks.idHOM === Tasks.Taskssub.idHOM,
        );
        if (finddata) {
          const index = finddata.Databes.findIndex(
            tasks => tasks.idSub === Tasks.Taskssub.idSub,
          );
          if (index > -1) {
            finddata.Databes[index] = datares;
            // setBualdEdit(locale === 'ar_MA'?'إضافة':"add")
          } else {
            addnew
              .find(tasks => tasks.idHOM === Tasks.Taskssub.idHOM)
              ?.Databes.push(datares);
          }
          console.log(datares);
          const {sumSR, sumYR, sumDoler} = sumSub(finddata);
          addnew[indexconten].SumDollar = sumDoler;
          addnew[indexconten].SumِSR = sumSR;
          addnew[indexconten].SumِYR = sumYR;
          setData(addnew);

          // empty
          console.log(sumDoler, sumSR, sumYR);
          // console.log(finddata)
          // console.log(addnew)
        }
        if (key === 'Exit') {
          onPresslTask(Tasks.allTsks, addnew);
        }
        setLiprre(false);
      } catch (err) {
        console.log(err);
        setLiprre(false);
      }
    } else {
      musTost();
      setFalseerr(true);
    }
    return addnew;
  };
  return {getDatalabrrsF, databuld, liprri, falseerr};
}
