import {
  Modal,
  TouchableOpacity,
  Pressable,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import ZomeCom from '../useZome';
import {useSelector} from 'react-redux';

export default function ModulsSection(props) {
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const renderItem = useCallback(
    ({item}) => (
      <View style={[styles.modulsub]}>
        <View style={styles.continer_sub}>
          <View
            style={[
              item.sectionpriclabrr
                ? {flexDirection: zommIN >= 16 ? 'column' : 'row'}
                : null,
              styles.textconter,
            ]}>
            <Text
              numberOfLines={5}
              style={[{fontSize: zommIN}, styles.textview]}>
              {localed == 'ar_MA' ? 'البيان' : 'Statement'}: {item.sectiontitle}
            </Text>
            {!item.sectionpriclabrr ? (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text
                  numberOfLines={3}
                  style={[{fontSize: zommIN}, styles.textview]}>
                  {localed == 'ar_MA' ? 'المبلغ' : 'Amount'}
                </Text>
                <View
                  style={{
                    flexDirection: zommIN >= 15 ? 'column' : 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={3}
                    style={[
                      item.SumِYR <= 0 ? {display: 'none'} : styles.textview,
                      {fontSize: zommIN},
                    ]}>
                    ر.ي{item.SumِYR.toFixed(2)}
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={[
                      item.SumDollar > 0 ? {display: 'none'} : styles.textview,
                      {fontSize: zommIN},
                    ]}>
                    $ {item.SumDollar.toFixed(2)}
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={[
                      item.SumِSR > 0 ? {display: 'none'} : styles.textview,
                      {fontSize: zommIN},
                    ]}>
                    ر.ي.س{item.SumِSR.toFixed(2)}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                numberOfLines={3}
                style={[{fontSize: zommIN}, styles.textview]}>
                {localed == 'ar_MA' ? 'المبلغ' : 'Amount'}:
                {item.arthDath + item.sectionpriclabrr}
              </Text>
            )}
          </View>

          <View
            style={[
              {flexDirection: zommIN >= 20 ? 'column' : 'row'},
              styles.textconter,
            ]}>
            <Text style={[{fontSize: zommIN}, styles.textview]}>
              {localed == 'ar_MA' ? 'الوقت' : 'Time'} : {item.Timeminet}
            </Text>
            <Text style={[{fontSize: zommIN}, styles.textview]}>
              {localed == 'ar_MA' ? 'التاريخ' : 'Date'} :
              {item.Time?.length > 0 ? item.Time : item.TimeSub}
            </Text>
          </View>

          <View style={styles.abzrph}>
            <Text style={[{fontSize: zommIN}, styles.textview]}>
              {localed == 'ar_MA' ? 'تفاصيل' : 'Details'}:
            </Text>
            <Text style={[{fontSize: zommIN}, styles.textviewabzrphtion]}>
              {item.abzrphtion}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              if (props.caseused === 'headersub') {
                props.setTasks(item);
              } else {
                props.setTasksSac(item);
              }
              props.onPressEdit();
            }}
            style={styles.Edit}>
            <Text style={[{fontSize: zommIN}, styles.textbodtomleprr]}>
              {localed == 'ar_MA' ? 'تعديل' : 'Edit'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onPressDelet} style={styles.Edit}>
            <Text style={[{fontSize: zommIN}, styles.textbodtomleprr]}>
              {localed == 'ar_MA' ? 'حذف' : 'delet'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    [zommIN, localed],
  );
  return (
    <Modal
      visible={props.bulid}
      transparent
      onRequestClose={() => props.setBuald(false)}
      animationType="fade"
      hardwareAccelerated={true}>
      <ZomeCom />
      <TouchableOpacity
        onPress={() => {
          props.setBuald(false);
          // cansleshook();
        }}
        style={styles.centered_view}>
        <Pressable
          onPress={() => props.setBuald(true)}
          style={styles.dag_mod1al}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.caseusedt}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbodtomleprr: {
    // fontSize: RFValue(13),
    color: colors.CURRENT,
    fontFamily: fonts.CAIROREGULARK,
  },
  Edit: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: RFValue(5),
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    backgroundColor: colors.WHITE,
    borderWidth: RFValue(1),
  },
  footer: {
    flex: 0.3,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textviewabzrphtion: {
    color: colors.WHITE,
    fontFamily: fonts.CAIROREGULARK,
    padding: RFValue(5),
    // fontSize: RFValue(12),
  },
  //خاس بتفاصيل الفرع
  dag_mod1al: {
    marginVertical: RFValue(20),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: colors.YALO,
    borderRadius: RFValue(10),
  },
  textview: {
    color: colors.WHITE,
    fontFamily: fonts.CAIROREGULARK,
    padding: RFValue(5),
    marginHorizontal: RFValue(5),
    // fontSize: RFValue(12),
    overflow: 'hidden',
  },
  abzrph: {
    alignItems: 'center',
  },
  textconter: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continer_sub: {
    flex: 2,
    overflow: 'hidden',
    padding: RFValue(5),
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    marginBottom: 15,
    justifyContent: 'center',
  },
  modulsub: {
    backgroundColor: colors.CURRENT,
    width: '97%',
    // height:'95%',
    marginVertical: RFValue(15),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(10),
  },
});
