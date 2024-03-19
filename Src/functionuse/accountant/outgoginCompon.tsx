import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTasksCOVENANTID} from '../../redux/actions';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Tofixed} from '../contractuse/expTemplet';

export default function useOutgoginCompon(item) {
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [pushOut, setPushOut] = useState(false);
  // const [imagview, setImagview] = useState('');
  const [idSub, setId] = useState('');
  const [ImageView, setImagView] = useState('');
  const [ImageViewFalse, setImagViewfalse] = useState(false);

  const renderItems = () => {
    return item.arrayOprition?.map((pic, index) => {
      // console.log(pic)
      return (
        <View key={index} style={styles.description}>
          <View style={styles.indexind}>
            <Text style={{color: colors.WHITE}}>{index + 1}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(setTasksCOVENANTID(pic.IDCUST));
              setId(pic.id);
              setPushOut(true);
            }}>
            <FontAwesome5Icon
              name="edit"
              size={zommIN + 2}
              color={colors.CURRENT}
            />
          </TouchableOpacity>
          <View style={styles.continer}>
            <View
              style={[
                {flexDirection: zommIN >= 15 ? 'column' : 'row'},
                styles.vearticalone,
              ]}>
              <View style={styles.vearticaltow}>
                <Text style={[{fontSize: zommIN}, styles.textsum]}>
                  تم الصرف إلى
                </Text>
                <Text style={[{fontSize: zommIN}, styles.textsum]}>
                  {pic.nameReceiving}
                </Text>
              </View>
              <View style={styles.vearticaltow2}>
                <Text style={[{fontSize: zommIN}, styles.textsum]}>
                  {localed == 'ar_MA' ? 'مبلغ وقدرة' : 'Amount and capacity'}
                </Text>
                <Text style={[{fontSize: zommIN}, styles.textsum]}>
                  {item.kindmony}
                  {Tofixed(pic.Covenantday)}
                </Text>
              </View>
              <Text style={[{fontSize: zommIN}, styles.textsumData]}>
                {pic.TimeCovenant}
              </Text>
            </View>
            <View style={styles.vearticalonedd}>
              <Text style={[{fontSize: zommIN}, styles.textsumData]}>
                {localed == 'ar_MA' ? 'التفاصيل' : 'Details'}
              </Text>
              <Text style={[{fontSize: zommIN}, styles.textsumC]}>
                {pic.Describtions}
              </Text>
            </View>
            <View
              style={[
                {flexDirection: zommIN >= 23 ? 'column' : 'row'},
                styles.sactionImag,
              ]}>
              <Text style={[{fontSize: zommIN}, styles.textsumData]}>
                {localed == 'ar_MA' ? 'مرفقات الصرف' : 'exchange attachments'}
              </Text>
              {pic?.imagop?.length > 0
                ? pic?.imagop.map((i, index) => (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => {
                          setImagView(i.url);
                          setImagViewfalse(true);
                        }}>
                        <View style={styles.Imaghom}>
                          <View style={styles.Imaghomid}>
                            <Image
                              resizeMode="stretch"
                              style={[
                                !i.url ? {width: 30, height: 30} : styles.imag,
                                {width: zommIN * 5, height: zommIN * 5},
                              ]}
                              source={{uri: i.url, cache: 'force-cache'}}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))
                : null}
            </View>
          </View>
        </View>
      );
    });
  };

  return [
    renderItems,
    pushOut,
    setPushOut,
    idSub,
    ImageView,
    ImageViewFalse,
    setImagViewfalse,
  ];
}
const styles = StyleSheet.create({
  sactionImag: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Imaghom: {
    margin: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  Imaghomid: {
    // width: RFValue(80),
    // height: RFValue(80),
    margin: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: colors.WHITE,
    borderColor: colors.BORDER,
    borderWidth: RFValue(0.5),
    borderRadius: RFValue(10),
  },
  imag: {
    borderRadius: RFValue(10),
  },
  continer: {
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: RFValue(5),
    marginVertical: RFValue(5),
  },

  description: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.CURRENT,
    borderWidth: 1,
    alignSelf: 'center',
    // backgroundColor:colors.YALO ,
    marginVertical: RFValue(5),
    borderRadius: RFValue(5),

    // margin:RFValue(5)
  },
  vearticalonedd: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:colors.WHITE,
    // borderWidth: 1,
    marginHorizontal: RFValue(15),
    marginVertical: RFValue(3),
  },
  vearticalone: {
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:colors.WHITE,
    // borderWidth: 1,
    marginHorizontal: RFValue(15),
    marginVertical: RFValue(3),
  },
  indexind: {
    // width:'25%',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.CURRENT,
    alignSelf: 'flex-end',
    // top:RFValue(-8),
    // right:RFValue(5),
    padding: RFValue(8),
    borderRadius: RFValue(5),
  },
  indexindEdit: {
    // width:'25%',
    position: 'absolute',
    justifyContent: 'center',
    // top:RFValue(-8),
    // right:RFValue(5),
    // zIndex:999,
    padding: RFValue(3),
    borderRadius: RFValue(5),
  },
  vearticaltow: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: RFValue(3),
    marginVertical: RFValue(3),
  },
  vearticaltow2: {
    flexDirection: 'column',
    marginHorizontal: RFValue(3),
    marginVertical: RFValue(3),
  },
  sumcreat: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.CURRENT,
    padding: RFValue(5),
    borderRadius: RFValue(5),
  },
  headers: {
    flex: 1,
  },
  textsum: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
  },
  textsumC: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
  },
  textsumData: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
  },
  textD: {
    color: colors.BLACK,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
    marginVertical: RFValue(7),
  },
  continercover: {
    backgroundColor: colors.CURRENT,
    padding: RFValue(5),
    borderRadius: RFValue(5),
    marginVertical: RFValue(5),
  },
});
