import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../constants/colors';
export default function Navbar(props) {
  return (
    <View style={style.navbar}>
      <View style={style.userdetails}>
        {/* <View style={style.textlogoA}>
          <Text style={style.textm}>المحاسب</Text>
        </View> */}
      </View>
      <View style={style.search}>
        <TextInput
          style={style.inputsearch}
          value={props.search}
          onChangeText={props.onChange}
        />
        <FontAwesome5 style={style.searchicon} name="search" size={10} />
      </View>
      <TouchableOpacity onPress={props.onprsslist} style={style.bell}>
        <FontAwesome5
          style={style.iconmessage}
          name="grip-horizontal"
          color={colors.CURRENT}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  bell: {
    marginHorizontal: RFValue(10),
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    height: RFValue(50),
    marginBottom: RFValue(15),
  },

  textlogoA: {
    flexDirection: 'row',
    marginVertical: RFValue(-5),
  },
  textm: {
    fontSize: 20,
    color: colors.BLACK,
    textShadowColor: colors.BORDER,
    textShadowRadius: 0.2,
  },

  textg: {
    fontSize: 20,
    color: colors.PINK,
    textShadowColor: colors.BLACK,
    textShadowRadius: 0.2,
  },
  textlogoB: {
    flexDirection: 'row-reverse',
    right: RFValue(-31),
    top: RFValue(-17),
  },
  textgu: {
    fontSize: RFValue(9),
    color: colors.YALO,
    shadowColor: colors.CURRENT,
    elevation: 1,
  },
  textgut: {
    fontSize: 4,
    top: 5,
  },

  noticuser: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  iconmessage: {
    height: 25,
    top: RFValue(10),
  },

  search: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: RFValue(8),
    width: RFValue(300),
    height: RFValue(40),
    borderWidth: 0.2,
    borderColor: colors.CURRENT,
    borderRadius: RFValue(4),
    backgroundColor: colors.ORANGE,
  },
  searchicon: {
    position: 'absolute',
    left: RFValue(10),
  },
  inputsearch: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    paddingVertical: RFValue(4),
  },
  userdetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(20),
    padding: RFValue(5),
  },
  sectionone: {
    flexWrap: 'wrap-reverse',
    marginVertical: RFValue(25),
    marginBottom: RFValue(10),
  },
});
