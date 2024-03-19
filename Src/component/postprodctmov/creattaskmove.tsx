import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {useSelector} from 'react-redux';

export default function Creattaskmove(props) {
  const [Sumall, setSumall] = useState(false);
  const {zommIN, localed} = useSelector(state => state.userReducer);
  return (
    <View key={props.keys} style={styles.bouild}>
      <TouchableOpacity onPress={props.onpress}>
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
          <Text style={[{fontSize: zommIN}, styles.textbuild]}>
            {props.sectionidnfy}
          </Text>
          <Text style={[{fontSize: zommIN}, styles.textbuild]}>
            {props.Datetiem}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Sumall ? setSumall(false) : setSumall(true);
            }}>
            <Text style={[{fontSize: zommIN}, styles.textd]}>
              {localed == 'ar_MA' ? 'الاجمالي' : 'Total'}
            </Text>
            <FontAwesome5Icon
              style={{margin: 0}}
              name="angle-down"
              size={15}
              color={colors.CURRENT}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            Sumall
              ? {
                  display: 'flex',
                  flexDirection: zommIN >= 20 ? 'row' : 'column',
                }
              : {display: 'none'},
            styles.container_sub,
          ]}>
          <View style={styles.header}>
            <Text style={[{fontSize: zommIN}, styles.text]}>
              {localed == 'ar_MA' ? 'الاجمالي' : 'Total'}
            </Text>
          </View>
          <View
            style={[
              {flexDirection: zommIN >= 20 ? 'column' : 'row'},
              styles.container_sub1,
            ]}>
            <Text style={[{fontSize: zommIN}, styles.text]}>
              {localed == 'ar_MA' ? 'المبالغ بالدولار' : 'Dollar amounts'}{' '}
            </Text>
            <Text style={[{fontSize: zommIN}, styles.text]}>
              {localed == 'ar_MA' ? 'بالريال السعودي' : 'in Saudi Riyal'}
            </Text>
            <Text style={[{fontSize: zommIN}, styles.text]}>
              {localed == 'ar_MA' ? 'بالريام اليمني' : ' Yemeni Riyam'}
            </Text>
          </View>
          <View
            style={[
              {flexDirection: zommIN >= 20 ? 'column' : 'row'},
              styles.container_sub1,
            ]}>
            <Text
              style={[
                {
                  width: zommIN >= 20 ? '100%' : '35%',
                  fontSize: zommIN,
                  padding: 10,
                },
                styles.text,
              ]}>
              {props.SumDollar}
            </Text>
            <Text
              style={[
                {
                  width: zommIN >= 20 ? '100%' : '35%',
                  fontSize: zommIN,
                  padding: 10,
                },
                styles.text,
              ]}>
              {props.SumِSR}
            </Text>
            <Text
              style={[
                {
                  width: zommIN >= 20 ? '100%' : '35%',
                  fontSize: zommIN,
                  padding: 10,
                },
                styles.text,
              ]}>
              {props.SumِYR}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
    // flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  container_sub1: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.CURRENT,
    paddingTop: RFValue(10),
  },
  header: {
    backgroundColor: colors.CURRENT,
    width: '30%',
    position: 'absolute',
    zIndex: 999,
    top: RFValue(-10),
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.YALO,
    borderWidth: 1,
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
  textbuild: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK
  },
  textd: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(10),
  },
  text: {
    color: colors.WHITE,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(10),
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
    // fontSize: RFValue(10),
    textAlign: 'center',
    flex: 2,
    color: colors.GREYD,
  },
});
