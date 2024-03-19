import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {dolars} from '../../Taskscshmonv';
import {colors} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
// import {fonts} from './constants/fonts';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ModulsCalculator, {result} from '../modulsCalculator';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import useOnPNew from '../../functionuse/accountant/useOnPNew';
import ZomeCom from '../useZome';
import {useSelector} from 'react-redux';
export default function ModulsCountInsert(props) {
  const [selectdata, setSelectData] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const {
    onPress,
    seactionCont,
    setSeactionCont,
    toggleCheckBox,
    False,
    falseerr,
    getTask,
  } = useOnPNew(props.navigation);

  useEffect(() => {
    toggleCheckBox ? props.setBellmodel(false) : null;
  }, [toggleCheckBox]);

  useEffect(() => {
    getTask();
  }, []);
  useMemo(() => {
    seactionCont.TimeDate?.length > 0 ? setSelectData(false) : null;
  }, [seactionCont.TimeDate]);

  const useclurek = () => {
    setSeactionCont({...seactionCont, SumCash: result});
  };

  return (
    <>
      <Modal
        visible={props.bellmodel}
        transparent
        onRequestClose={() => props.setBellmodel(false)}
        animationType="fade"
        hardwareAccelerated={true}>
        {calculator ? (
          <ModulsCalculator
            visble={calculator}
            onrequewt={setCalculator}
            onprssfounction={() => useclurek()}
          />
        ) : null}
        <DateTimePicker
          mode="date"
          isVisible={selectdata}
          onConfirm={value =>
            setSeactionCont({
              ...seactionCont,
              TimeDate: value.toLocaleDateString(),
            })
          }
          onCancel={() => setSelectData(false)}
        />
        <ZomeCom />
        <Pressable
          onPress={() => props.setBellmodel(false)}
          style={styles.centered_view}>
          <Pressable
            onPress={() => props.setBellmodel(true)}
            style={[
              {height: zommIN >= 18 ? null : RFValue(380)},
              styles.user_mod1al,
            ]}>
            <View style={[{paddingHorizontal: RFValue(15)}, styles.inputuser]}>
              <TouchableOpacity
                style={[
                  {width: 200, marginTop: RFValue(15)},
                  styles.inputtiteuser,
                ]}
                onPress={() => {
                  if (seactionCont.TimeDate?.length > 0) {
                    setSeactionCont({...seactionCont, TimeDate: ''});
                    setSelectData(true);
                  } else {
                    setSelectData(true);
                  }
                }}>
                <Text style={[{fontSize: zommIN}, styles.textmos]}>
                  {localed === 'ar_MA' ? 'تاريخ التوريد' : 'Received'}
                </Text>
                <Text style={[{fontSize: zommIN}, styles.textuser]}>
                  {seactionCont.TimeDate}
                </Text>
              </TouchableOpacity>

              <View style={styles.stetment}>
                <TextInput
                  style={[
                    falseerr && seactionCont.name?.length <= 0
                      ? {
                          borderWidth: 1.5,
                          borderColor: colors.RED,
                        }
                      : {
                          borderWidth: 1,
                          borderColor: colors.YALO,
                        },
                    {
                      width: '90%',
                      height: 40,
                      borderRadius: RFValue(15),
                      padding: 5,
                      fontSize: zommIN,
                    },
                    styles.inputtiteuser,
                  ]}
                  placeholderTextColor={colors.CURRENT}
                  placeholder={
                    localed === 'ar_MA' ? 'اسم او رقم الحساب' : 'Name OR count'
                  }
                  value={seactionCont.name}
                  onChangeText={value =>
                    setSeactionCont({...seactionCont, name: value})
                  }
                />
              </View>

              <View style={styles.stetment}>
                <Pressable
                  android_ripple={{color: colors.YALO, borderless: true}}
                  style={{right: 10}}
                  onPress={() => setCalculator(true)}>
                  <FontAwesome5Icon
                    name="calculator"
                    size={zommIN}
                    color={colors.GREYD}
                  />
                </Pressable>
                <TextInput
                  style={[
                    {fontSize: zommIN, flex: 0.8, height: 40, padding: 5},
                    styles.inputtiteuser,
                  ]}
                  placeholderTextColor={colors.CURRENT}
                  keyboardType="number-pad"
                  placeholder={localed === 'ar_MA' ? 'المبلغ' : 'Amount'}
                  value={seactionCont.SumCash}
                  onChangeText={value =>
                    setSeactionCont({...seactionCont, SumCash: value})
                  }
                />
              </View>

              <View
                style={[
                  {
                    width: '100%',
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: RFValue(15),
                  },
                ]}>
                <RadioForm
                  formHorizontal={zommIN >= 18 ? false : true}
                  animation={true}>
                  {dolars.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}

                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={
                          seactionCont.kindmony?.value === i + 1 ||
                          dolars.find(
                            item => item.label === seactionCont?.kindmony,
                          )?.value ===
                            i + 1
                        }
                        onPress={value =>
                          setSeactionCont({
                            ...seactionCont,
                            kindmony: {value},
                          })
                        }
                        borderWidth={0.5}
                        buttonInnerColor={colors.PREMREYON}
                        buttonOuterColor={
                          seactionCont.kindmony?.value === i + 1 ||
                          dolars.find(
                            item => item.label === seactionCont.kindmony,
                          )?.value ===
                            i + 1
                            ? colors.YALO
                            : colors.CURRENT
                        }
                        buttonSize={
                          seactionCont.kindmony?.value === i + 1 ||
                          dolars.find(
                            item => item.label === seactionCont.kindmony,
                          )?.value ===
                            i + 1
                            ? 15
                            : 10
                        }
                        buttonOuterSize={
                          seactionCont.kindmony?.value === i + 1 ||
                          dolars.find(
                            item => item.label == seactionCont.kindmony,
                          )?.value ===
                            i + 1
                            ? 25
                            : 20
                        }
                        buttonStyle={{}}
                        // buttonWrapStyle={{marginLeft: 10}}
                      />

                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        // labelHorizontal={false}
                        onPress={value =>
                          setSeactionCont({
                            ...seactionCont,
                            kindmony: {value},
                          })
                        }
                        labelStyle={{
                          fontSize: zommIN,
                          color: colors.CURRENT,
                          paddingLeft: zommIN >= 18 ? 5 : null,
                          paddingTop: zommIN >= 18 ? 5 : null,
                        }}
                        labelWrapStyle={{padding: zommIN >= 18 ? 10 : 5}}
                      />
                    </RadioButton>
                  ))}
                </RadioForm>
              </View>
              <View style={styles.stetment}>
                <Text
                  style={[
                    zommIN >= 22 ? {display: 'none'} : {fontSize: zommIN},
                    styles.textuser_sub,
                  ]}>
                  {localed === 'ar_MA' ? 'التفاصيل' : 'Ditals'}
                </Text>
                <TextInput
                  style={[
                    {width: '70%', fontSize: zommIN},
                    styles.inputtitabzrphtion,
                  ]}
                  multiline
                  placeholder={localed === 'ar_MA' ? 'التفاصيل' : 'Ditals'}
                  value={seactionCont.describtion}
                  onChangeText={value =>
                    setSeactionCont({...seactionCont, describtion: value})
                  }
                />
              </View>
              <View>
                {False ? (
                  <ActivityIndicator color={colors.CURRENT} size={20} />
                ) : (
                  <TouchableOpacity
                    onPress={() => onPress()}
                    style={styles.set}>
                    <Text style={{fontSize: zommIN, color: colors.WHITE}}>
                      {localed === 'ar_MA' ? 'حفظ' : 'Save'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  set: {
    textAlign: 'center',
    alignItems: 'center',
    width: RFValue(150),
    backgroundColor: colors.CURRENT,
    marginVertical: 25,
    borderRadius: 10,
  },
  textuser: {
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  textmos: {
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  inputtitabzrphtion: {
    borderWidth: 1,
    borderRadius: RFValue(10),
    height: RFValue(100),
    overflow: 'hidden',
    borderColor: colors.CURRENT,
    color: colors.CURRENT,
    padding: 5,
    textAlign: 'center',
    backgroundColor: colors.WHITE,
  },
  textuser_sub: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(10),
    // fontSize: RFValue(14),
    color: colors.CURRENT,
  },
  boutonuser: {
    margin: RFValue(5),
    backgroundColor: colors.YALO,
    width: '50%',
    padding: RFValue(5),
    borderRadius: RFValue(10),
    alignItems: 'center',
  },
  stetment: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: RFValue(15),
  },
  inputtiteuser: {
    color: colors.CURRENT,
    borderRadius: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.CURRENT,
  },
  headerstatement: {
    width: '90%',
    height: RFValue(100),
    justifyContent: 'space-around',
  },
  inputuser: {
    borderWidth: 1,
    borderRadius: RFValue(20),
    borderColor: colors.CURRENT,
    backgroundColor: colors.YALO,
    height: '90%',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  user_mod1al: {
    backgroundColor: colors.CURRENT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(20),
  },
  centered_view: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
