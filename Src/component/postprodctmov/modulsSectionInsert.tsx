import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import ZomeCom from '../useZome';
import {useSelector} from 'react-redux';
export default function ModulsSectionInsert(props) {
  const {zommIN, localed} = useSelector(state => state.userReducer);
  return (
    <Modal
      visible={props.bellmodel}
      transparent
      onRequestClose={() => props.setBellmodel(false)}
      animationType="fade"
      hardwareAccelerated={true}>
      <ZomeCom />
      <TouchableOpacity onPress={props.Contener} style={styles.centered_view}>
        <Pressable
          onPress={props.ContenerSub}
          style={[
            {width: zommIN >= 25 ? '100%' : RFValue(300)},
            styles.user_mod1al,
          ]}>
          <View style={styles.inputuser}>
            <View style={styles.headerstatement}>
              <View style={styles.stetment}>
                <Text style={[{fontSize: zommIN}, styles.textuser_sub]}>
                  {localed == 'ar_MA' ? 'البيان' : 'Statement'}:
                </Text>
                <TextInput
                  style={[
                    props.falseerr && props.TasksSac.sectiontitle?.length <= 0
                      ? {
                          borderWidth: 1.5,
                          borderColor: colors.RED,
                        }
                      : {
                          borderWidth: 1,
                          borderColor: colors.YALO,
                        },
                    {width: '70%', fontSize: zommIN, borderRadius: RFValue(15)},
                    styles.inputtiteuser,
                  ]}
                  placeholder={
                    props.falseerr && props.TasksSac.sectiontitle?.length <= 0
                      ? 'يجب تحديد اسم او رقم'
                      : 'البيان'
                  }
                  placeholderTextColor={colors.BLACK}
                  value={props.TasksSac.sectiontitle}
                  onChangeText={value =>
                    props.setTasksSac({...props.TasksSac, sectiontitle: value})
                  }
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (props.TasksSac.Time?.length > 0) {
                    props.setTasksSac({...props.TasksSac, Time: ''});
                    props.setDataTiermSubfels(true);
                  } else {
                    props.setDataTiermSubfels(true);
                  }
                }}
                style={[
                  {width: '100%', alignSelf: 'center'},
                  styles.inputtiteuser,
                ]}>
                <Text style={[{fontSize: zommIN}, styles.textuser]}>
                  {props.TasksSac.Time}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.stetment}>
              <Text style={[{fontSize: zommIN}, styles.textuser_sub]}>
                {localed == 'ar_MA' ? 'تفاصيل' : 'Details'}:
              </Text>
              <TextInput
                style={[
                  {width: '70%', fontSize: zommIN},
                  styles.inputtitabzrphtion,
                ]}
                multiline
                placeholder={localed == 'ar_MA' ? 'تفاصيل' : 'Details'}
                placeholderTextColor={colors.BLACK}
                value={props.TasksSac.abzrphtion}
                onChangeText={value =>
                  props.setTasksSac({...props.TasksSac, abzrphtion: value})
                }
              />
            </View>
            <TouchableOpacity
              onPress={props.onPressAdd}
              style={styles.boutonuser}>
              {localed === 'ar_MA' ? (
                <Text style={[{fontSize: zommIN}, styles.textuser]}>
                  {props.bulidEdit === 'إضافة' ? 'أضـAdd ـف' : 'تعديــEditـل'}
                </Text>
              ) : (
                <Text style={[{fontSize: zommIN}, styles.textuser]}>
                  {props.bulidEdit === 'add' ? 'Add' : 'Edit'}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textuser: {
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  inputtitabzrphtion: {
    borderWidth: 1,
    borderRadius: RFValue(10),
    height: RFValue(100),
    overflow: 'hidden',
    flexWrap: 'wrap',
    borderColor: colors.YALO,
    color: colors.CURRENT,
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  textuser_sub: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(10),
    // fontSize: RFValue(14),
    color: colors.WHITE,
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
  },
  inputtiteuser: {
    color: colors.CURRENT,
    padding: 5,
    borderRadius: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  headerstatement: {
    width: '90%',
    height: RFValue(100),
    justifyContent: 'space-around',
  },
  inputuser: {
    borderWidth: 1,
    borderRadius: RFValue(20),
    borderColor: colors.YALO,
    backgroundColor: colors.CURRENT,
    height: '90%',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  user_mod1al: {
    height: RFValue(350),
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
