//import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Taskscshmonv from '../Taskscshmonv';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import {setLocul} from '../redux/actions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PagerView from 'react-native-pager-view';
const Tab = createMaterialTopTabNavigator();
import Navbar from '../component/navbar';
import Prodectmyfalse from './ProdectmyFalse';
import Prodectmytrue from './ProdectmyTrue';
import ModelsAbdu from '../component/modelsAbdu';
import Subprodect from './Subprodect';
import MyTabBar from '../component/myTabBar';
import useOprection from '../functionuse/useoprection';
import useAsynsStorGitContrctr from '../functionuse/contractuse/useAsynsStorGitContrctr';
import ModulsPassowrd from '../component/modulsPassowrd';
import usePassword from '../functionuse/usePassword';
import {useSelector, useDispatch} from 'react-redux';
import locales from '../locale';
export let searching = '';
export default function Contracting({navigation}) {
  const [search, setSearch] = useState('');
  const {localed, passwordfalse} = useSelector(state => state.userReducer);
  const {bellmodel, setBellmodel, setMenu, meneu, Oprection, paglocle} =
    useOprection(navigation, 'Contracting');
  const dispatch = useDispatch();
  const {
    onPressCreat,
    mashanPassword,
    False,
    textpss,
    setTextpass,
    textpssFind,
    setTextpassFind,
  } = usePassword();
  const {getAsins, SumAsins} = useAsynsStorGitContrctr('TasksCONTRAT');
  useEffect(() => {
    getAsins();
    SumAsins();
    searching = search;
    // addlangogl()
  }, [search]);
  useEffect(() => {
    locales(!paglocle ? 'ar_MA' : 'en_US');
    dispatch(setLocul(!paglocle ? 'ar_MA' : 'en_US'));
  }, [paglocle]);
  return (
    <>
      {meneu ? <Oprection /> : null}
      {passwordfalse ? (
        <ModulsPassowrd
          False={False}
          textpss={textpss}
          setTextpass={setTextpass}
          textpssFind={textpssFind}
          setTextpassFind={setTextpassFind}
          PressMshun={mashanPassword}
          Press={onPressCreat}
        />
      ) : null}

      {bellmodel ? (
        <ModelsAbdu setBellmodel={setBellmodel} bellmodel={bellmodel} />
      ) : null}

      <Navbar
        onprsslist={() => setMenu(true)}
        search={search}
        onChange={value => setSearch(value)}
      />
      <PagerView style={styles.pagerView} initialPage={0}>
        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} />}
          initialRouteName="Prodectmyfalse"
          screenOptions={({route}) => ({
            tabBarLabelStyle: {
              color: colors.BLACK,
              fontFamily: fonts.CAIROSEMILBOLD,
            },
            tabBarIndicatorStyle: {backgroundColor: colors.PREMREY},
            // tabBarStyle: route.name === "Subprodect" ? { display: 'none' } : null,
          })}>
          <Tab.Screen
            name="Prodectmyfalse"
            component={Prodectmyfalse}
            options={{
              tabBarLabel:
                localed === 'ar_MA' ? 'النفقات الحالية' : 'current expenses',
            }}
          />
          <Tab.Screen name="Subprodect" component={Subprodect} />
          <Tab.Screen
            name="Taskscshmonv"
            component={Taskscshmonv}
            options={{
              tabBarLabel: localed === 'ar_MA' ? 'أضف حساب' : 'Add an account',
            }}
          />
          <Tab.Screen
            name="Prodectmytrue"
            component={Prodectmytrue}
            options={{
              tabBarLabel:
                localed === 'ar_MA' ? 'النفقات المنتهيه' : 'expired expenses',
            }}
          />
        </Tab.Navigator>
      </PagerView>
    </>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },

  senction3: {
    padding: RFValue(5),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.GREYD,
  },
  conter: {
    borderBottomWidth: 3,
    borderBottomColor: colors.WHITE,
    borderRadius: 2,
  },
  text: {
    color: colors.WHITE,
  },
  body: {
    // flex: 1,
    //borderWidth:RFValue(10),
  },
  plus: {
    position: 'absolute',
    top: RFValue(20),
  },
  buttom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: RFValue(20),
    height: RFValue(50),
    borderRadius: RFValue(60),
    position: 'absolute',
    top: -10,
    zIndex: 1,
    // bottom:RFValue(30),
    // right:RFValue(-50),
    backgroundColor: colors.GREYD,
  },
  tasksbox: {
    flexDirection: 'row',
    width: RFValue(290),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(8),
    padding: RFValue(1),
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(10),
    elevation: RFValue(1),
  },
  item_row: {
    width: RFValue(250),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkTask: {
    position: 'relative',
    marginHorizontal: RFValue(5),
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(60),
    bottom: RFValue(30),
    right: RFValue(-50),

    borderColor: colors.BLACK,
  },
  item_body: {
    flex: 1,
  },
  delet: {
    width: RFValue(50),
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttask: {
    color: '#000000',
    fontSize: RFValue(16),
    margin: RFValue(2),
  },
  textdesc: {
    color: '#999999',
    fontSize: RFValue(12),
    margin: RFValue(2),
  },

  centered_menu: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: RFValue(40),
    top: RFValue(5),

    backgroundColor: '#00000009',
  },
  menu_mod1al: {
    width: RFValue(150),
    backgroundColor: colors.WHITE,
    height: RFValue(200),
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    top: RFValue(-30),
    alignSelf: 'flex-start',
  },
  menu_body: {
    flex: 1,
    height: RFValue(150),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menu_button: {
    flexDirection: 'row',
    height: RFValue(50),
  },
  bottom_1: {
    width: '100%',
    marginVertical: RFValue(5),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.BACKGRUONDPAG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_menu: {
    fontFamily: fonts.CAIROREGULARK,
    color: colors.CURRENT,
  },
  centered_Abdu: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  Abdu_mod1al: {
    width: RFValue(300),
    backgroundColor: colors.WHITE,
    height: RFValue(150),
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    top: RFValue(-30),
    alignSelf: 'center',
  },
  Abdu_body: {
    flex: 1,
    height: RFValue(150),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Abdu_button: {
    flexDirection: 'row',
    height: RFValue(50),
  },
  bottom_1_Abdu: {
    width: '50%',
    marginVertical: RFValue(5),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRadius: RFValue(15),
    backgroundColor: colors.BACKGRUONDPAG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_Abdu: {
    fontFamily: fonts.CAIROREGULARK,
    color: colors.CURRENT,
  },
});

/*
 
 
 
 
 
 
<Text>welcome {name}</Text>
     <Text>AGE {age}</Text>
     <TextInput
     style={style.input}
     onChangeText={(value)=>setName(value)}
     placeholder='Enter'
     value={name}
     />
     <TextInput
     style={style.input}
     onChangeText={(value)=>setAge(value)}
     placeholder='Enter'
     value={age}
     />
     <ConstomBtom 
     title="updut"
     color='#f0f'
     onpress={uputfuncbtom}/>
     <ConstomBtom 
     title="remove"
     color='#555'
     onpress={remofuncbtom}/>
*/
