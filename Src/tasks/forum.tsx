import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PushCashCovenant from '../pushCashCovenant';
import {setTasksCOVENANTID} from '../redux/actions';
import useAsynsStorGit from '../functionuse/accountant/useAsynsStorGit';
import uuid from 'react-native-uuid';
import userenderItems from '../functionuse/accountant/userenderItems';
import Datafooter from '../component/Accountant/datafooter';
import ModulsCountInsert from '../component/Accountant/modulsCountInsert';
import ModulsSectionAcontent from '../component/Accountant/modulsSectionAcontent';
import {colors} from '../constants/colors';
export default function Forum({navigation, kindpa}) {
  const {tasksCOVENANT} = useAsynsStorGit('tasksCOVENANT', navigation);
  const {zommIN, sumCOVENANT, localed} = useSelector(
    state => state.userReducer,
  );
  const {renderItem, taskbell, setTask, DataUser, Oprection, meneu} =
    userenderItems(navigation, kindpa);
  const [pushOut, setPushOut] = useState(false);
  const [insert, setInsert] = useState(false);
  const [pushnumber, setPushnmber] = useState('');
  const dispatch = useDispatch();

  const pushingCash = (
    <PushCashCovenant
      iddelet={pushOut}
      setIddelet={setPushOut}
      IDEVacu={pushnumber}
      navigation={navigation}
    />
  );
  const incomingModul = insert ? (
    <ModulsCountInsert
      navigation={navigation}
      bellmodel={insert}
      setBellmodel={setInsert}
    />
  ) : null;
  const incomingView = taskbell ? (
    <ModulsSectionAcontent
      onPressEdit={() => {
        setInsert(true);
      }}
      kind={kindpa}
      navigation={navigation}
      bulid={taskbell}
      setBuald={setTask}
    />
  ) : null;

  const onclickpag = () => {
    dispatch(setTasksCOVENANTID(uuid.v4()));
    setInsert(true);
  };
  const onclickpagOut = () => {
    setPushnmber(uuid.v4());
    setPushOut(true);
  };
  return (
    <View style={{flex: 1, height: '100%'}}>
      {pushOut ? pushingCash : null}
      {insert ? incomingModul : null}
      {taskbell ? incomingView : null}
      {meneu ? <Oprection /> : null}
      <DataUser />
      <FlatList
        data={
          kindpa === 'InComing'
            ? tasksCOVENANT
            : tasksCOVENANT.filter(ite => ite.arrayOprition?.length > 0)
        }
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View
        style={{
          backgroundColor: colors.CURRENT,
          // borderWidth: 1,
          borderRadius: 40,
          borderEndWidth: 5,
          borderEndColor: colors.RED,
          borderStartWidth: 5,
          borderStartColor: colors.RED,
          width: '80%',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
          padding: 5,

          borderColor: colors.CURRENT,
        }}>
        <TouchableOpacity
          style={{
            borderColor: colors.WHITE,
            borderWidth: 1,
            width: '45%',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
          }}
          onPress={onclickpag}>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: zommIN + 2,
              fontWeight: 'bold',
            }}>
            {localed === 'ar_MA' ? ' حساب جديد' : 'Accountant new'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: colors.WHITE,
            borderWidth: 1,
            width: '45%',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
          }}
          onPress={onclickpagOut}>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: zommIN + 2,
              fontWeight: 'bold',
            }}>
            {localed === 'ar_MA' ? 'صرف' : 'spent'}
          </Text>
        </TouchableOpacity>
      </View>
      <Datafooter Sum={sumCOVENANT} kind={kindpa} />
    </View>
  );
}
