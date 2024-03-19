import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../constants/colors';
import ExportExcel from './ecelexport';
import {useSelector} from 'react-redux';
import Pdfexpense from './pdfexpense';
import useFindexpnses from '../functionuse/contractuse/useFindexpnses';
import {tost} from '../functionuse/contractuse/expTemplet';
export default function ModelsOprtionshtion(props) {
  const {tasksCONTRAT, tasksCOVENANT, localed} = useSelector(
    state => state.userReducer,
  );
  const [findTaskss] = useFindexpnses(props.kindPage);

  let findname =
    props.kindPage === 'Contracting' || props.kindPage === 'AccountantInComi'
      ? 'AllList'
      : findTaskss;

  return (
    <Modal
      visible={props.meneu}
      transparent
      onRequestClose={() => props.setMenu(false)}
      animationType="none"
      hardwareAccelerated={true}>
      <TouchableOpacity
        onPress={() => props.setMenu(false)}
        style={[
          props.kindPage === 'Contracting' ||
          props.kindPage === 'AccountantInComi'
            ? styles.centner_constrct
            : props.kindPage === 'AccountantSub'
            ? styles.centner_subAnccountent
            : null,
          styles.centered_menu,
        ]}>
        <Pressable
          onPress={() => props.setMenu(true)}
          style={[
            props.kindPage === 'SubprodectContracting'
              ? styles.menu_modlal_contner_sub
              : props.kindPage === 'AccountantSub'
              ? styles.menu_modlal_contner_subAnccountent
              : styles.menu_modlal_contner,
            styles.menu_mod1al,
          ]}>
          <View style={styles.menu_body}>
            {props.arraspag.map((item, index) => (
              <TouchableOpacity
                disabled={
                  item.nametext === 'تغيير اللغة' ||
                  item.nametext === 'change language'
                    ? true
                    : item.nametext === 'الحساب مقفل'
                    ? true
                    : false
                }
                key={index}
                onPress={() => {
                  item.nametext === 'نسخ احتياطي' || item.nametext === 'Backup'
                    ? tasksCONTRAT?.length > 0 || tasksCOVENANT?.length > 0
                      ? item.onPres()
                      : tost('لايوجد هناك بيانات مسجلة')
                    : item.onPres();
                  props.setMenu(false);
                }}
                style={
                  (!props.findFalse && item.nametext === 'إلغاء كلمة المرور') ||
                  (!props.findFalse && item.nametext === 'cansle password')
                    ? {display: 'none'}
                    : styles.bottom_1
                }>
                {item.nametext === 'تغيير اللغة' ||
                item.nametext === 'change language' ? (
                  <>
                    <Text style={styles.text_menu}>{item.nametext}</Text>
                    <View>{item.onPres}</View>
                  </>
                ) : (
                  <Text style={styles.text_menu}>{item.nametext}</Text>
                )}
              </TouchableOpacity>
            ))}

            <Pdfexpense
              onprestyle={styles.bottom_1}
              text={styles.text_menu}
              options={props.options}
              findJson={props.kindPage}
              onpressfale={() => {
                props.setCount(props.count + 1);
                props.setMenu(false);
              }}
            />

            <ExportExcel
              onprestyle={styles.bottom_1}
              text={styles.text_menu}
              caseuTarg={findname}
              findJson={props.kindPage}
              options={props.arrays}
              onpressecel={() => {
                props.arraPrss();
                props.setMenu(false);
              }}
            />
          </View>
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
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
    // fontFamily: fonts.CAIROREGULARK,
    color: colors.CURRENT,
  },
  centered_menu: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000009',
  },
  menu_mod1al: {
    backgroundColor: colors.WHITE,
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
  },

  centner_subAnccountent: {
    alignItems: 'center',
    // justifyContent:'center',
    // marginTop: RFValue(40),
    // top: RFValue(5),
  },
  menu_modlal_contner_subAnccountent: {
    height: RFValue(200),
    width: RFValue(200),
    // top: RFValue(-230),
  },
  centner_constrct: {
    alignItems: 'flex-end',
    marginTop: RFValue(40),
    top: RFValue(5),
  },
  menu_modlal_contner: {
    height: RFValue(350),
    top: RFValue(-190),
    width: RFValue(150),
  },

  menu_modlal_contner_sub: {
    height: RFValue(300),
    width: RFValue(150),
    top: RFValue(-80),
    alignSelf: 'flex-end',
  },

  menu_body: {
    flex: 1,
    height: RFValue(180),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menu_button: {
    flexDirection: 'row',
    height: RFValue(50),
  },
});
