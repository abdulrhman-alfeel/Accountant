import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import usePassword from './functionuse/usePassword';
import {colors} from './constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setPasswordrd, setFindFalse} from './redux/actions';
import RNFS from 'react-native-fs';
export default function Homeing({navigation}) {
  const [erruser, setUser] = useState(true);
  const {findFalse} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {mashanPassword, False, textpssFind, setTextpassFind} = usePassword();

  useEffect(() => {
    // findsPres();
    findMkder();
    const unsubscribe = navigation.addListener('focus', () => {
      findPassword();
    });
    return unsubscribe;
  }, [navigation]);

  const findMkder = async () => {
    const newFolder = `${RNFS.DownloadDirectoryPath}/Accountants`;
    // RNFS.mkdir(newFolder);
    const fileExistS = await RNFS.exists(newFolder);
    if (!fileExistS) {
      console.log('file doesnt exist');
      RNFS.mkdir(newFolder);
    } else {
      console.log('find folder');
    }
  };
  const findPassword = () => {
    AsyncStorage.getItem('Password').then(value => {
      const flasing = JSON.parse(value);
      console.log(flasing);
      if (flasing?.length > 0) {
        dispatch(setFindFalse(true));
        dispatch(setPasswordrd(flasing));
        // tost('موجود');
        // console.log(find)
        return 'helow orld';
      } else {
        dispatch(setFindFalse(false));
        findsPres();
        // tost('غير موجود');
        return 'dont naw';
      }
    });
  };

  const findsPres = async () => {
    if (!findFalse) {
      setTimeout(() => {
        navgetors();
      }, 2000);
    }

    console.log(findFalse);
  };
  const navgetors = () => {
    navigation.navigate('Home');
  };
  const findpsorrd = async () => {
    const data = await mashanPassword();
    console.log(data);
    if (data === 'helow orld') {
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./ass/Home.png')}
      resizeMode="stretch">
      {findFalse ? (
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              value={textpssFind}
              onChangeText={value => setTextpassFind(value)}
              style={{
                borderWidth: 2,
                alignItems: 'center',
                borderRadius: 10,
                width: '70%',
                height: 45,
                fontSize: 17,
                textAlign: 'center',
                color: colors.CURRENT,
              }}
              placeholderTextColor={colors.CURRENT}
              placeholder="ادخل كلمة المرور"
              secureTextEntry={erruser}
            />
            <TouchableOpacity
              onPress={() => {
                setUser(!erruser);
              }}
              style={{right: 30}}>
              <FontAwesome5Icon
                name={!erruser ? 'eye' : 'eye-slash'}
                size={20}
                color={colors.CURRENT}
              />
            </TouchableOpacity>
          </View>
          {False ? (
            <ActivityIndicator size={15} color={colors.PREMREYON} />
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.CURRENT,
                width: 100,
                marginVertical: 10,
                borderRadius: 10,
              }}
              onPress={findpsorrd}>
              <Text
                style={{
                  color: colors.WHITE,
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                دخول{' '}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}
    </ImageBackground>
  );
}
