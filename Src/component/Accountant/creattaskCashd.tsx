import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import {useSelector} from 'react-redux';
import PushCashCovenant from '../../pushCashCovenant';
import useOutgoginCompon from '../../functionuse/accountant/outgoginCompon';
import ModulsView from '../modulsView';
export default function CreattaskCashd(props) {
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const [Sumall, setSumall] = useState(false);
  const [
    renderItems,
    pushOut,
    setPushOut,
    idSub,
    ImageView,
    ImageViewFalse,
    setImagViewfalse,
  ] = useOutgoginCompon(props.items);
  const pushingCash = (
    <PushCashCovenant
      iddelet={pushOut}
      setIddelet={setPushOut}
      IDEVacu={idSub}
    />
  );
  const viewImag = (
    <ModulsView
      visble={ImageViewFalse}
      onrequewt={setImagViewfalse}
      ur={ImageView}
    />
  );

  // useEffect(()=>{

  // },[])
  return (
    <>
      <View key={props.keys} style={styles.bouild}>
        {pushOut ? pushingCash : null}
        {ImageViewFalse ? viewImag : null}
        <TouchableOpacity
          activeOpacity={0.9}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onLongPress={props.onlongpress}
          // disabled={props.kindpag === 'Outgogin' ? true : false}
          onPress={props.onpress}>
          <View
            style={[
              !Sumall
                ? {
                    borderRadius: RFValue(15),
                    elevation: 1,
                    width: '95%',
                    alignSelf: 'center',
                  }
                : null,
              {flexDirection: zommIN >= 19 ? 'column' : 'row'},
              styles.sumcreat,
            ]}>
            <Text
              style={{
                width: zommIN <= 19 ? '35%' : '90%',
                marginHorizontal: 10,
                color: colors.CURRENT,
                fontSize: zommIN,
              }}
              numberOfLines={1}>
              {props.name}
            </Text>
            <Text
              style={{
                marginHorizontal: 10,
                color: colors.CURRENT,
                fontSize: zommIN,
              }}
              numberOfLines={1}>
              {props.TimeDate}
            </Text>
            <Pressable
              android_ripple={{color: colors.GREYD}}
              onPress={() => {
                Sumall ? setSumall(false) : setSumall(true);
              }}
              style={{alignItems: 'center'}}>
              <Text
                style={[
                  {
                    width: zommIN <= 19 ? '80%' : '90%',
                    marginHorizontal: 10,
                    fontSize: zommIN,
                  },
                  styles.textd,
                ]}
                numberOfLines={2}>
                {props.kindpag === 'Outgogin'
                  ? props.Outgogin
                  : props.kindpag === 'Residual'
                  ? props.Residual
                  : props.Sum}
              </Text>
              <FontAwesome5Icon
                style={{margin: 0, alignSelf: 'center'}}
                name="angle-down"
                size={20}
                color={colors.CURRENT}
              />
            </Pressable>
          </View>
          <View
            style={[
              Sumall ? {display: 'flex'} : {display: 'none'},
              styles.container_sub,
            ]}>
            <View
              style={[
                {flexDirection: zommIN >= 25 ? 'row' : 'column'},
                styles.header,
              ]}>
              <View
                style={[
                  {flexDirection: zommIN >= 25 ? 'column' : 'row'},
                  ,
                  styles.container_sub1,
                ]}>
                <Text style={styles.text}>
                  {props.kindpag === 'Outgogin'
                    ? localed == 'ar_MA'
                      ? 'اجمالي الحساب'
                      : 'totell account '
                    : localed == 'ar_MA'
                    ? 'المنصرف'
                    : 'Outgogin'}
                </Text>
                <Text style={styles.text}>
                  {props.kindpag === 'Residual'
                    ? localed == 'ar_MA'
                      ? 'اجمالي الحساب'
                      : 'totell account '
                    : localed == 'ar_MA'
                    ? 'المتبقي'
                    : 'Residual'}
                </Text>
              </View>
              <View
                style={[
                  {flexDirection: zommIN >= 25 ? 'column' : 'row'},
                  ,
                  styles.container_sub1,
                ]}>
                <Text
                  style={[
                    {width: zommIN >= 25 ? '100%' : '30%', fontSize: zommIN},
                    styles.text,
                  ]}
                  numberOfLines={1}>
                  {props.kindpag === 'Outgogin' ? props.Sum : props.Outgogin}
                </Text>
                <Text
                  style={[
                    {width: zommIN >= 25 ? '100%' : '30%', fontSize: zommIN},
                    styles.text,
                  ]}
                  numberOfLines={1}>
                  {props.kindpag === 'Residual' ? props.Sum : props.Residual}
                </Text>
              </View>
            </View>
            {props.kindpag === 'Outgogin' ? renderItems() : null}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  sumcreat: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginHorizontal: RFValue(10),
    marginVertical: RFValue(3),
    padding: RFValue(10),
    backgroundColor: colors.WHITE,
  },
  container_sub: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  container_sub1: {
    justifyContent: 'space-around',
    backgroundColor: colors.CURRENT,
    paddingTop: RFValue(10),
  },
  header: {
    backgroundColor: colors.CURRENT,
    width: '100%',
    zIndex: 999,
    top: RFValue(-10),
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: colors.WHITE,
  },
  containerbuilds: {
    backgroundColor: colors.WHITE,
    elevation: 2,
    // flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',

    paddingVertical: RFValue(10),
    // marginVertical: RFValue(5)
  },

  textd: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
  },
  text: {
    color: colors.WHITE,
    textAlign: 'center',
  },
  bouild: {
    width: '100%',
    marginHorizontal: RFValue(10),
    paddingVertical: RFValue(2),
    marginVertical: RFValue(2),
    flexDirection: 'column',
    alignSelf: 'center',
  },
  inputtitelbuild: {
    backgroundColor: colors.WHITE,
    borderRadius: RFValue(5),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(5),
    fontSize: RFValue(16),
    height: RFValue(40),
    textAlign: 'right',
    flex: 2,
    color: colors.GREYD,
  },
  inputtitelbuildidntfy: {
    backgroundColor: colors.WHITE,
    borderRadius: RFValue(15),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(2),
    borderWidth: 1,
    fontSize: RFValue(10),
    textAlign: 'center',
    flex: 2,
    color: colors.GREYD,
  },
});
