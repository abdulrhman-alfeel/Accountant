import {
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import {useSelector} from 'react-redux';
import useOnpress from '../../functionuse/contractuse/useOnpress';
export default function Haderpost(props) {
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const [monyMCH, setMony] = useState('');
  const [monyMCHName, setMonyName] = useState('');
  const [tittellaber, setTittellaber] = useState('');
  const [onEdit, allSav] = useOnpress();
  const [bellmodel, setBellmodel] = useState(false);

  useEffect(() => {
    if (props.many.length > 0) {
      if (localed == 'ar_MA') {
        if (props.many == 'ريال سعودي' || props.many == 'SR') {
          setMonyName('كشف بالريال السعودي');
          setMony(props.SumِSR);
        } else if (props.many == 'ريال يمني' || props.many == 'YR') {
          setMonyName('كشف بالريال اليمني');
          setMony(props.SumِYR);
        } else {
          setMonyName('كشف بالدولار الامريكي');
          setMony(props.SumDollar);
        }
      } else {
        if (props.many == 'ريال سعودي' || props.many === 'SR') {
          setMonyName('Statement in US dollars');
          setMony(props.SumِSR);
        } else if (props.many == 'ريال يمني' || props.many === 'YR') {
          setMonyName('Statement in Yemeni riyals');
          setMony(props.SumِYR);
        } else {
          setMonyName('Statement in US dollars');
          setMony(props.SumDollar);
        }
      }
    }
  }, [props.many]);

  useEffect(() => {
    setBellmodel(allSav);
  }, [allSav]);

  return (
    <View style={styles.body}>
      <Modal
        visible={bellmodel}
        transparent
        onRequestClose={() => setBellmodel(false)}
        animationType="fade"
        hardwareAccelerated={true}>
        <TouchableOpacity
          onPress={() => {
            setBellmodel(false);
          }}
          style={styles.centered_view}>
          <Pressable
            onPress={() => setBellmodel(true)}
            style={styles.user_mod1al}>
            <View style={styles.inputuser}>
              <View style={styles.headerstatement}>
                <View style={styles.stetment}>
                  <Text style={[{fontSize: zommIN}, styles.textuser_sub]}>
                    {localed == 'ar_MA' ? 'البيان' : 'Statement'}:
                  </Text>
                  <TextInput
                    style={[
                      tittellaber.length <= 0
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
                      localed == 'ar_MA'
                        ? tittellaber.length <= 0
                          ? 'يجب تحديد اسم او رقم'
                          : 'البيان'
                        : tittellaber.length <= 0
                        ? 'You must specify a name or number'
                        : 'statement'
                    }
                    placeholderTextColor={colors.BLACK}
                    value={tittellaber}
                    onChangeText={value => setTittellaber(value)}
                  />
                </View>
              </View>
              {allSav ? (
                <ActivityIndicator size={25} color={colors.WHITE} />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    onEdit(tittellaber);
                  }}
                  style={styles.boutonuser}>
                  {localed === 'ar_MA' ? (
                    <Text style={[{fontSize: zommIN}, styles.textuser]}>
                      {'تعديــEditـل'}
                    </Text>
                  ) : (
                    <Text style={[{fontSize: zommIN}, styles.textuser]}>
                      {'Edit'}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </Pressable>
        </TouchableOpacity>
      </Modal>
      <View style={styles.headrs}>
        <TouchableOpacity
          onPress={() => {
            setTittellaber(props.sectionidnfy);
            setBellmodel(true);
          }}>
          <Text
            style={[{fontSize: zommIN}, styles.textcousnt]}
            numberOfLines={1}>
            {props.sectionidnfy}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            {flexDirection: zommIN >= 21 ? 'column' : 'row'},
            styles.tiems,
          ]}>
          <Text style={[{fontSize: zommIN}, styles.Texts]} numberOfLines={1}>
            d:{props.Datetiemarth}
          </Text>
          <Text style={[{fontSize: zommIN}, styles.Texts]} numberOfLines={1}>
            h:{props.tiems}
          </Text>
        </View>
      </View>
      <View style={styles.coustconte}>
        {props.many.length > 0 ? (
          <View style={[{alignItems: 'center'}, styles.container_sub]}>
            <Text style={[{fontSize: zommIN}, styles.textbuild]}>
              {monyMCHName}
            </Text>
            <Text style={[{fontSize: zommIN - 4}, styles.text]}>
              {props.many}
              {monyMCH}
            </Text>
          </View>
        ) : (
          <View
            style={[
              {flexDirection: zommIN >= 23 ? 'row' : 'column'},
              styles.container_sub,
            ]}>
            <View
              style={[
                {flexDirection: zommIN >= 23 ? 'column' : 'row'},
                styles.container_sub1,
              ]}>
              <Text style={[{fontSize: zommIN - 4}, styles.text]}>
                {localed == 'ar_MA' ? 'المبالغ بالدولار' : 'Dollar amounts'}{' '}
              </Text>
              <Text style={[{fontSize: zommIN - 4}, styles.text]}>
                {localed == 'ar_MA' ? 'بالريال السعودي' : 'in Saudi Riyal'}
              </Text>
              <Text style={[{fontSize: zommIN - 4}, styles.text]}>
                {localed == 'ar_MA' ? 'بالريام اليمني' : ' Yemeni Riyam'}
              </Text>
            </View>
            <View
              style={[
                {flexDirection: zommIN >= 23 ? 'column' : 'row'},
                styles.container_sub1,
              ]}>
              <Text
                style={[
                  {width: zommIN >= 23 ? '100%' : '20%', fontSize: zommIN},
                  styles.textbuild,
                ]}
                numberOfLines={1}>
                {props.SumDollar}
              </Text>
              <Text
                style={[
                  {width: zommIN >= 23 ? '100%' : '20%', fontSize: zommIN},
                  styles.textbuild,
                ]}
                numberOfLines={1}>
                {props.SumِSR}
              </Text>
              <Text
                style={[
                  {width: zommIN >= 23 ? '100%' : '20%', fontSize: zommIN},
                  styles.textbuild,
                ]}
                numberOfLines={1}>
                {props.SumِYR}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputtiteuser: {
    color: colors.CURRENT,
    padding: 5,
    borderRadius: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },
  textuser_sub: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(10),
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.WHITE,
  },
  stetment: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerstatement: {
    width: '90%',
    height: RFValue(100),
    justifyContent: 'space-around',
  },
  boutonuser: {
    margin: RFValue(15),
    backgroundColor: colors.YALO,
    width: '50%',
    padding: RFValue(5),
    borderRadius: RFValue(10),
    alignItems: 'center',
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
  centered_view: {
    flex: 1,
    // backgroundColor: "#00000099",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textuser: {
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  user_mod1al: {
    width: RFValue(300),
    height: RFValue(150),
    backgroundColor: colors.YALO,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(20),
  },
  container_sub: {
    flex: 1,
    justifyContent: 'space-around',
  },
  container_sub1: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: RFValue(10),
  },
  containerbuilds: {
    backgroundColor: colors.WHITE,
    // flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    elevation: RFValue(2),
    paddingVertical: RFValue(10),
    marginVertical: RFValue(5),
  },
  textbuild: {
    color: colors.CURRENT,
    // fontSize: RFValue(12),
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK
  },
  text: {
    color: colors.BLACK,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(10),
  },
  body: {
    flexDirection: 'column',
    overflow: 'hidden',
    margin: RFValue(2),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headrs: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFValue(5),
    marginVertical: RFValue(5),
    padding: RFValue(5),
  },
  Texts: {
    color: colors.BLACK,
  },
  coust: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: RFValue(5),
    marginVertical: RFValue(5),
    padding: RFValue(2),
  },
  coustconte: {
    flexDirection: 'row',
  },
  textcousnt: {
    color: colors.BLACK,
    // fontFamily: fonts.TAJAWALEXTRABOLD,
    // fontSize: RFValue(13),
  },

  ditails: {
    flex: 1,
    marginHorizontal: RFValue(5),
    padding: RFValue(5),
  },
  tiems: {
    width: RFValue(205),
    justifyContent: 'space-evenly',
  },
});
