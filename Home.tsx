import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StatusBar,
  TouchableOpacity,
  Text,
  Modal,
  TouchableNativeFeedback,
  // useColorScheme,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PagerView from 'react-native-pager-view';
import ModulsCalculator from './Src/component/modulsCalculator';
import ModelsAbdu from './Src/component/modelsAbdu';
import {setZoom, setWitenFalse} from './Src/redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import My_profile from './Src/tasks/My_profile';
import {colors} from './Src/constants/colors';
import {fonts} from './Src/constants/fonts';
import Contracting from './Src/contracting/Contracting';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useOprection from './Src/functionuse/useoprection';
import ModulsPassowrd from './Src/component/modulsPassowrd';
import usePassword from './Src/functionuse/usePassword';
import {setLocul} from './Src/redux/actions';
import locales from './Src/locale';

const Tap = createBottomTabNavigator();
export default function Home({navigation}) {
  const [calculator, setCalculator] = useState(false);
  // const [pagis, setPag] = useState('');
  const {zommIN, passwordfalse, witen} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();

  const {setMenu, meneu, bellmodel, setBellmodel, Oprection, paglocle} =
    useOprection(navigation, 'AccountantInComi');
  const {
    onPressCreat,
    mashanPassword,
    False,
    // passowrd,
    // setPassword,
    textpss,
    setTextpass,
    textpssFind,
    setTextpassFind,
  } = usePassword();
  const styles = StyleSheet.create({
    pages: {
      flex: 1,
    },
  });

  useEffect(() => {
    locales(!paglocle ? 'ar_MA' : 'en_US');
    dispatch(setLocul(!paglocle ? 'ar_MA' : 'en_US'));
  }, [paglocle]);
  const func = () => {
    dispatch(setZoom(zommIN >= 30 ? 14 : zommIN + 2));
    console.log(zommIN);
  };
  const funcMins = () => {
    dispatch(setZoom(zommIN <= 14 ? 14 : zommIN - 2));
    console.log(zommIN);
  };
  // useEffect(() => {
  //   setPassword(pasmen);
  // }, [pasmen]);
  return (
    <>
      {calculator ? (
        <ModulsCalculator
          visble={calculator}
          onrequewt={setCalculator}
          onprssfounction={() => null}
        />
      ) : null}
      <ModelsAbdu setBellmodel={setBellmodel} bellmodel={bellmodel} />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        hidden={false}
        // translucent={true}
      />
      {passwordfalse ? (
        <ModulsPassowrd
          False={False}
          // passowrd={passowrd}
          // setPassword={setPassword}
          textpss={textpss}
          setTextpass={setTextpass}
          textpssFind={textpssFind}
          setTextpassFind={setTextpassFind}
          PressMshun={mashanPassword}
          Press={onPressCreat}
        />
      ) : null}

      {meneu ? <Oprection /> : null}

      <Modal
        visible={witen}
        transparent
        onRequestClose={() => dispatch(setWitenFalse(false))}
        animationType="fade"
        hardwareAccelerated={true}>
        <TouchableNativeFeedback onPress={() => dispatch(setWitenFalse(false))}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00000099',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 250,
                height: 250,
                backgroundColor: colors.GREY,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{fontSize: zommIN, fontFamily: fonts.CAIROBLACK}}>
                الرجا الانتظار
              </Text>
              <ActivityIndicator
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  alignItems: 'center',
                }}
                size={50}
                color={colors.RED}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </Modal>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 300,
          zIndex: 1,
          //   left: 10,
          right: 10,
          alignSelf: 'flex-end',
        }}
        // disabled={zommIN === 30 ? true : false}
        onPress={func}>
        <FontAwesome5 style={{}} name="search-plus" size={25} />
        <Text>{zommIN}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 350,
          zIndex: 1,
          //   left: 10,
          right: 10,
          alignSelf: 'flex-end',
        }}
        // disabled={zommIN === 30 ? true : false}
        onPress={funcMins}>
        <FontAwesome5 name="search-minus" size={25} />
        {/* <Text>{zommIN}</Text> */}
      </TouchableOpacity>

      <PagerView style={styles.pages} initialPage={0}>
        <Tap.Navigator
          // initialRouteName="Contracting"
          initialRouteName="Profile"
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarItemStyle: {
              borderTopLeftRadius: route.name === 'Contracting' ? null : 100,
              borderTopRightRadius: route.name === 'Contracting' ? 100 : null,
              minWidth: 20,
              backgroundColor: colors.WHITE,
              shadowColor: colors.CURRENT,
              paddingVertical: 5,
              elevation: 5,
            },

            tabBarLabelStyle: {fontFamily: fonts.CAIROREGULARK},
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Contracting') {
                iconName = 'money-check-alt';
                size = focused ? 25 : 20;
                color = !focused ? colors.CURRENT : colors.PREMREYON;
              } else {
                iconName = 'money-bill-alt';
                size = focused ? 25 : 20;
                color = !focused ? colors.CURRENT : colors.PREMREYON;
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },

            // tabBarActiveBackgroundColor: colors.WHITE,
            // tabBarInactiveBackgroundColor: colors.WHITE,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              shadowColor: colors.CURRENT,
              backgroundColor: colors.BACKGRUONDPAG,
            },
          })}>
          <Tap.Screen
            name="Profile"
            component={My_profile}
            options={{
              header: () => {
                return (
                  <View
                    style={{
                      marginHorizontal: RFValue(15),
                      marginVertical: RFValue(10),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        flex: 1.5,
                        textAlign: 'left',
                        fontFamily: fonts.CAIROBLACK,
                        color: colors.BLACK,
                        textShadowColor: colors.BORDER,
                        textShadowRadius: 0.2,
                      }}>
                      المحاسب
                    </Text>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row-reverse',
                        flex: 0.8,
                      }}>
                      <TouchableOpacity
                        style={{
                          height: RFValue(40),
                          width: RFValue(50),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}
                        onPress={() => setMenu(true)}>
                        <FontAwesome5
                          style={{height: 25}}
                          name="grip-horizontal"
                          color={colors.CURRENT}
                          size={18}
                        />
                      </TouchableOpacity>
                      <Pressable
                        android_ripple={{color: colors.YALO, borderless: true}}
                        style={{
                          height: RFValue(40),
                          width: RFValue(50),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}
                        onPress={() => setCalculator(true)}>
                        <FontAwesome5Icon
                          name="calculator"
                          size={20}
                          color={colors.GREYD}
                        />
                      </Pressable>
                      <TouchableOpacity
                        style={{
                          height: RFValue(40),
                          width: RFValue(50),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}
                        onPress={() => setBellmodel(true)}>
                        <FontAwesome5
                          style={{height: 25}}
                          name="phone"
                          color={colors.CURRENT}
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              },
              // header:()=>
              // header:()=>null,
            }}
          />
          <Tap.Screen
            name="Contracting"
            component={Contracting}
            options={{
              header: () => null,
            }}
          />
        </Tap.Navigator>
      </PagerView>
    </>
  );
}
