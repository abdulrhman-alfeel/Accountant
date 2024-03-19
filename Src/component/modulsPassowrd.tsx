import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../constants/colors';
import {useSelector, useDispatch} from 'react-redux';
import {setPasswordFalse} from '../redux/actions';
import usePassword from '../functionuse/usePassword';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function ModulsPassowrd(props) {
  const {zommIN, findFalse, passwordfalse, localed} = useSelector(
    state => state.userReducer,
  );
  const [erruser, setUser] = useState(true);
  const dispatch = useDispatch();
  const {setMaushfalse, MushFalse} = usePassword();
  return (
    <Modal
      visible={passwordfalse}
      transparent
      onRequestClose={() => dispatch(setPasswordFalse(false))}
      animationType="fade"
      hardwareAccelerated={true}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setPasswordFalse(false));
          setMaushfalse(false);
          // props.setPassword(false);
          // setPasmen(false);
        }}
        style={styles.centered_view}>
        <Pressable
          onPress={() => dispatch(setPasswordFalse(true))}
          style={styles.user_mod1al}>
          <View style={styles.inputuser}>
            <View style={styles.headerstatement}>
              <View
                style={[
                  {
                    flexDirection: localed === 'ar_MA' ? 'row-reverse' : 'row',
                  },
                  styles.stetment,
                ]}>
                <Text style={[{fontSize: zommIN}, styles.textuser_sub]}>
                  {localed === 'ar_MA' ? 'البيان' : 'Statement'}:
                </Text>
                <TextInput
                  style={[
                    findFalse && !MushFalse && props.textpssFind?.length <= 0
                      ? {
                          borderWidth: 1.5,
                          borderColor: colors.RED,
                        }
                      : props.textpss?.length <= 0
                      ? {
                          borderWidth: 1.5,
                          borderColor: colors.RED,
                        }
                      : {
                          borderWidth: 1,
                          borderColor: colors.YALO,
                        },
                    {
                      width: '70%',
                      fontSize: zommIN,
                      borderRadius: RFValue(15),
                    },
                    styles.inputtiteuser,
                  ]}
                  placeholder={
                    findFalse && !MushFalse
                      ? 'ادخل كلمة المرور الحالية'
                      : 'انشاء كلمة مرور'
                  }
                  placeholderTextColor={colors.BLACK}
                  value={
                    findFalse && !MushFalse ? props.textpssFind : props.textpss
                  }
                  onChangeText={value => {
                    findFalse && !MushFalse
                      ? props.setTextpassFind(value)
                      : props.setTextpass(value);
                  }}
                  secureTextEntry={erruser}
                />
                <TouchableOpacity
                  onPress={() => {
                    setUser(!erruser);
                  }}
                  style={{right: 35}}>
                  <FontAwesome5Icon
                    name={!erruser ? 'eye' : 'eye-slash'}
                    size={20}
                    color={colors.CURRENT}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {props.False ? (
              <ActivityIndicator size={25} color={colors.WHITE} />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  findFalse && !MushFalse ? props.PressMshun() : props.Press();
                }}
                style={styles.boutonuser}>
                {localed === 'ar_MA' ? (
                  <Text style={[{fontSize: zommIN}, styles.textuser]}>
                    {findFalse && !MushFalse ? 'ادخال' : 'انشاء'}
                  </Text>
                ) : (
                  <Text style={[{fontSize: zommIN}, styles.textuser]}>
                    {findFalse && !MushFalse ? 'insert' : 'creat'}
                  </Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    // backgroundColor: "#00000099",
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_mod1al: {
    width: RFValue(300),
    height: RFValue(150),
    backgroundColor: colors.YALO,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(20),
  },
  inputuser: {
    borderWidth: 1,
    borderRadius: RFValue(20),
    borderColor: colors.YALO,
    backgroundColor: colors.CURRENT,
    height: '90%',
    width: '90%',
    // flexDirection:'row',
    // flexWrap:'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerstatement: {
    width: '90%',
    height: RFValue(100),
    justifyContent: 'space-around',
  },
  stetment: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textuser_sub: {
    textAlign: 'center',
    justifyContent: 'center',
    color: colors.WHITE,
  },
  textuser: {
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  boutonuser: {
    margin: RFValue(15),
    backgroundColor: colors.YALO,
    width: '50%',
    padding: RFValue(5),
    borderRadius: RFValue(10),
    alignItems: 'center',
  },
  inputtiteuser: {
    color: colors.CURRENT,
    padding: 5,
    borderRadius: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },
});
