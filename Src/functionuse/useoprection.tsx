import {Switch, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  setTasksCONTRAT,
  setTasksCOVENANT,
  setPasswordFalse,
} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {tost} from './contractuse/expTemplet';
import useFindexpnses from './contractuse/useFindexpnses';
import useConvertpdf from './contractuse/useConvertpdf';
import useConvertexcle from './contractuse/useConvertexcle';
import ModelsOprtionshtion from '../component/modelsOprtionshtion';
import usePassword from './usePassword';
import useSamsuball from './contractuse/useSamsuball';
import useSamS from './accountant/useSamS';
import useBackup from './backup/useBackup';
import {colors} from '../constants/colors';
import useSavImagImport from './backup/useSavImagImport'

export default function useOprection(navigation, kindpa) {
  const [meneu, setMenu] = useState(false);
  const [carmsu, setCarnsy] = useState('');
  const [count, setCount] = useState(0);
  const [bellmodel, setBellmodel] = useState(false);
  const [paglocle, setPagLaocl] = useState(false);
  const {
    tasksCONTRATID,
    tasksCONTRAT,
    tasksCOVENANT,
    tasksCOVENANTID,
    localed,
    findFalse,
  } = useSelector(state => state.userReducer);
  const {importData} = useSavImagImport()
  const dispatch = useDispatch();
  const [findTaskss] = useFindexpnses(kindpa);
  const options = useConvertpdf(carmsu, count, kindpa);
  const {arraPrss, arrays} = useConvertexcle(kindpa);
  const sumSuball = useSamsuball();
  const sumSuba = useSamS(navigation);
  const [pasmen, setPasmen] = useState(false);

  const {onRemove} = usePassword();
  const {PressBackup} = useBackup();

  const checkTask = newValue => {
    if (kindpa === 'AccountantSub') {
      const index = tasksCOVENANT.findIndex(
        tasks => tasks.ID === tasksCOVENANTID,
      );
      if (index > -1) {
        let newTasks = [...tasksCOVENANT];
        newTasks[index].Done = newValue;
        AsyncStorage.setItem('tasksCOVENANT', JSON.stringify(newTasks))
          .then(() => {
            sumSuba(newTasks);
            dispatch(setTasksCOVENANT(newTasks));
            tost(
              localed === 'ar_MA'
                ? 'تم نقله إلى قائمة المهام المنتهيه'
                : 'Moved to finished task list',
            );
            navigation.navigate('Prodectmytrue');
          })
          .catch(ERR => {
            console.log(ERR);
          });
      }
    } else {
      const index = tasksCONTRAT.findIndex(
        tasks => tasks.ID === tasksCONTRATID,
      );
      if (index > -1) {
        let newTasks = [...tasksCONTRAT];
        newTasks[index].Done = newValue;
        AsyncStorage.setItem('TasksCONTRAT', JSON.stringify(newTasks))
          .then(() => {
            sumSuball(newTasks);
            dispatch(setTasksCONTRAT(newTasks));
            tost(
              localed === 'ar_MA'
                ? 'تم نقله إلى قائمة المهام المنتهيه'
                : 'Moved to finished task list',
            );
            navigation.navigate('Prodectmytrue');
          })
          .catch(ERR => {
            console.log(ERR);
          });
      }
    }
  };
  //delet founction
  const delet = () => {
    if (kindpa === 'AccountantSub') {
      const Editnew = [...tasksCOVENANT];
      const filterDasec = Editnew.filter(tasks => tasks.ID !== tasksCOVENANTID);
      AsyncStorage.setItem('tasksCOVENANT', JSON.stringify(filterDasec))
        .then(() => {
          sumSuba(filterDasec);
          dispatch(setTasksCOVENANT(filterDasec));

          tost(
            localed === 'ar_MA'
              ? 'تم العملية بنجاح'
              : 'Saved the operation successfully',
          );
          // navigation.goBack();
        })
        .catch(err => console.log(err));
    } else {
      const filterDasec = tasksCONTRAT.filter(
        tasks => tasks.ID !== tasksCONTRATID,
      );
      AsyncStorage.setItem('TasksCONTRAT', JSON.stringify(filterDasec))
        .then(() => {
          sumSuball(filterDasec);
          dispatch(setTasksCONTRAT(filterDasec));
          tost(
            localed === 'ar_MA'
              ? 'تم العملية بنجاح'
              : 'Saved the operation successfully',
          );
          navigation.goBack();
        })
        .catch(err => console.log(err));
    }
  };

  let arraspag = [];

  let arraspagSub = [
    {
      nametext: findTaskss?.Done == true ? 'الحساب مقفل' : 'اقفال الحساب',
      onPres: () => {
        checkTask(true);
      },
    },
    {
      nametext: localed === 'ar_MA' ? 'حذف الحساب' : 'Account delet',
      onPres: () => {
        setBellmodel(true);
      },
    },
  ];

  let arraspagAll = [
    {
      nametext: localed === 'ar_MA' ? 'التواصل بالدعم' : 'Connect with support',
      onPres: () => {
        setBellmodel(true);
      },
    },
    {
      nametext:
        localed == 'ar_MA' ? 'تعليمات وارشادات' : 'Instructions & Guidelines',
      onPres: () => navigation.navigate('ModulsData'),
    },

    {
      nametext: !findFalse
        ? localed == 'ar_MA'
          ? 'انشاء كلمة مرور'
          : 'creat password '
        : localed == 'ar_MA'
        ? 'تغيير كلمة المرور'
        : 'change password',
      onPres: () => dispatch(setPasswordFalse(true)),
    },
    {
      nametext: localed == 'ar_MA' ? 'إلغاء كلمة المرور' : 'cansle password',
      onPres: () => onRemove(),
    },
    {
      nametext: localed == 'ar_MA' ? 'نسخ احتياطي' : 'Backup',
      onPres: () => PressBackup(),
    },
    {
      nametext: localed == 'ar_MA' ? 'استرداد نسخه احتياطية' : 'import Backup',
      onPres: () => importData(),
    },
    {
      nametext: localed === 'ar_MA' ? 'تغيير اللغة' : 'change language',
      onPres: (
        <Switch
          value={paglocle}
          onChange={() => {
            setPagLaocl(!paglocle);
            // data();
          }}
        />
      ),
    },
  ];

  kindpa === 'SubprodectContracting'
    ? arraspag.push(
        {
          nametext:
            localed == 'ar_MA'
              ? 'كشف بالريال السعودي'
              : 'Statement in Saudi Riyals',
          onPres: () => {
            setCarnsy(localed == 'ar_MA' ? 'ريال سعودي' : 'SR');
          },
        },
        {
          nametext:
            localed == 'ar_MA'
              ? 'كشف بالريال اليمني'
              : 'Statement in Yemeni riyals',
          onPres: () => {
            setCarnsy(localed == 'ar_MA' ? 'ريال يمني' : 'YR');
          },
        },
        {
          nametext:
            localed == 'ar_MA'
              ? 'كشف بالدولار الامريكي'
              : 'Statement in US dollars',
          onPres: () => {
            setCarnsy(localed == 'ar_MA' ? 'دولار امريكي' : '$');
          },
        },
      )
    : null;
  let namefile;
  const datswesh = () => {
    console.log(kindpa)
    switch (kindpa) {
      case 'SubprodectContracting':
        return (arraspag = arraspagSub);
      case 'Contracting':
        return (arraspag = arraspagAll);
      case 'AccountantInComi':
        return (arraspag = arraspagAll);
      case 'AccountantSub':
        return (arraspag = arraspagSub);
      // default:
      //   return arraspag;
    }
  };

  // useEffect(() => {
  //   meneu ? datswesh() : null;
  // }, []);

  const Oprection = () => {
    meneu ? datswesh() : null;
    return (
      <ModelsOprtionshtion
        meneu={meneu}
        setMenu={setMenu}
        findFalse={findFalse}
        arraspag={arraspag}
        options={options}
        arraPrss={arraPrss}
        count={count}
        setCount={setCount}
        kindPage={kindpa}
        arrays={arrays}
      />
    );
  };

  return {
    Oprection,
    delet,
    setMenu,
    meneu,
    carmsu,
    setCarnsy,
    bellmodel,
    setBellmodel,
    pasmen,
    paglocle,
    setPasmen,
    // arraspag,
    // options,
    // arraPrss,
    // count,
    // setCount,
  };
}
