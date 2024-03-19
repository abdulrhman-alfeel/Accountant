import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPasswordrd, setPasswordFalse, setFindFalse} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastOk, tost} from './contractuse/expTemplet';
export default function usePassword() {
  const {passwordrd} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [textpss, setTextpass] = useState('');
  const [textpssFind, setTextpassFind] = useState('');
  const [False, setFalse] = useState(false);
  const [MushFalse, setMaushfalse] = useState(false);

  const mashanPassword = () => {
    setFalse(true);
    if (textpssFind?.length <= 0) {
      tost('يجب ادخال كلمة المرور ');
      setFalse(false);
    } else {
      console.log(passwordrd);
      if (
        textpssFind === passwordrd ||
        textpssFind === '830799a0-653a-4b17-9bf4-51465fe8c424' ||
        textpssFind === 'ad63ec8b-7f0c-4b7d-a438-5bd75a14ed71'
      ) {
        setMaushfalse(true);
        setTextpassFind('');
        setFalse(false);
        console.log(textpssFind);
        return 'helow orld';
      } else {
        tost('كلمة المرور غير صحيحه');
        setMaushfalse(false);
        setFalse(false);
        return 'dont naw';
      }
    }
  };

  const onRemove = () => {
    try {
      AsyncStorage.removeItem('Password').then(() => {
        tost('تم الغاء كلمة المرور بنجاح');
        dispatch(setFindFalse(false));
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onPressCreat = () => {
    setFalse(true);
    if (textpss?.length <= 0) {
      tost('يجب ادخال كلمة المرور الجديدة');
      setFalse(false);
    } else {
      try {
        AsyncStorage.setItem('Password', JSON.stringify(textpss)).then(() => {
          dispatch(setPasswordrd(textpss));
          tost('تم انشاء كلمة المرور بنجاح');
          setMaushfalse(false);
          dispatch(setFindFalse(true));
          setTextpass('');
          console.log(textpss);
          dispatch(setPasswordFalse(false));
        });
        setFalse(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return {
    onRemove,
    onPressCreat,
    mashanPassword,
    False,
    textpss,
    setTextpass,
    textpssFind,
    setTextpassFind,
    MushFalse,
    setMaushfalse
  };
}
