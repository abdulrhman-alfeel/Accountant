import {useState} from 'react';
import {musTost} from './expTemplet';
import {locale} from '../../locale';
import useOnpressall from './useOnpressall';

export default function useTaksSaction(key) {
  const [dataSuction, setData] = useState([]);
  const [EditFoun, setEdit] = useState('إضافة');
  const [liprri, setLiprre] = useState(false);
  const [falseerr, setFalseerr] = useState(false);
  const [onPresslTask] = useOnpressall();

  const getDataSction = (TasksSac, allTsks) => {
    console.log(TasksSac.idHOM);
    let addnew = [];
    addnew = [...allTsks.databuld];
    if (TasksSac.sectiontitle.length > 0) {
      try {
        setLiprre(true);
        var datares = TasksSac;
        const index = allTsks.databuld.findIndex(
          tasks => tasks.idHOM === TasksSac.idHOM,
        );
        const finddata = allTsks.databuld.find(
          tasks => tasks.idHOM === TasksSac.idHOM,
        );
        var datares = TasksSac;
        if (finddata) {
          addnew[index] = datares;
          setEdit(locale === 'ar_MA' ? 'إضافة' : 'add');
        } else {
          addnew.push(datares);
        }

        key === 'Exit' ? onPresslTask(allTsks, addnew) : null;
        // console.log(addnew);
        setData(addnew);
        setLiprre(false);
      } catch (err) {
        console.log(err);
        setLiprre(false);
      }
 
    } else {
      musTost;
      setFalseerr(true);
    }
    return addnew;
  };

  return {getDataSction, dataSuction, EditFoun, liprri, falseerr};
}
