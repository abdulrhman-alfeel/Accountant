import React, {useCallback, useState} from 'react';
import {Tofixed} from './expTemplet';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity,StyleSheet, Text} from 'react-native';
import Creattask from '../../component/postprodctmov/creattask';
import uuid from 'react-native-uuid';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
export default function userRendersub(carmsu, kindga) {
  const {localed, zommIN} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  //اختيار تعديل الراسل او الفرع
  const [caseused, setCase] = useState('');
  const [Addtaskfalse, setAddTsksfalse] = useState(false);
  const [bulid, setBuald] = useState(false);

  const [tasks, setTask] = useState({});
  const [idSection, setIdsection] = useState('');
  const [idSectionSub, setIdsectionSub] = useState('');
  let filtercars =
    carmsu.length > 0 ? i => i.arthDath === carmsu : i => i.idHOM === idSection;
  let filtercStart = i => i.idHOM === idSection;

  const foring = ite => {
    return (
      <View
        style={[
          ite?.Databes.filter(kindga === 'Sub' ? filtercars : filtercStart)
            .length <= 0
            ? {display: 'none'}
            : styles.containerbuilds_sub_heder,
          {
            flexDirection: zommIN >= 18 ? 'column' : 'row',
            width: zommIN >= 18 ? '30%' : null,
          },
        ]}>
        <Text
          style={[
            {width: zommIN >= 18 ? '100%' : '30%', fontSize: zommIN - 2},
            styles.textbuild_sub_heder,
          ]}>
          {localed == 'ar_MA' ? 'البيان' : 'Statement'}
        </Text>
        <Text
          style={[
            {width: zommIN >= 18 ? '100%' : '30%', fontSize: zommIN - 2},
            styles.textbuild_sub_heder,
          ]}>
          {localed == 'ar_MA' ? 'الوقت' : 'Time'}
        </Text>
        <Text
          style={[
            {width: zommIN >= 18 ? '100%' : '30%', fontSize: zommIN - 2},
            styles.textbuild_sub_heder,
          ]}>
          {localed == 'ar_MA' ? 'المبلغ' : 'Amount'}
        </Text>
        <Text
          style={[
            {width: zommIN >= 18 ? '100%' : '30%', fontSize: zommIN - 2},
            styles.textbuild_sub_heder,
          ]}>
          {localed == 'ar_MA' ? 'ملاحظة' : 'Note'}
        </Text>
      </View>
    );
  };
  const render = item => {
    return (
      <View style={styles.bodycontensab2}>
        {item?.databuld?.map((ite, index) => (
          <View key={index} style={styles.bouild}>
            <TouchableOpacity
              onLongPress={() => {
                setCase('header');
                setIdsection(ite.idHOM);
                setTask(item);
                setBuald(true);
              }}
              onPress={() => {
                setIdsection(ite.idHOM);
                console.log(ite.idHOM);
                console.log(ite);
              }}>
              <Creattask
                onpress={() => {
                  setIdsection(ite.idHOM);
                  setIdsectionSub(uuid.v4());
                  setTask(item);
                  setAddTsksfalse(true);
                }}
                sectiontitle={ite.sectiontitle}
                Time={ite.Time}
                idsectionsfalse={
                  ite?.Databes.filter(
                    kindga === 'Sub' ? filtercars : filtercStart,
                  )?.length > 0
                    ? true
                    : false
                }
                SumDollar={Tofixed(ite.SumDollar)}
                SumِSR={Tofixed(ite.SumِSR)}
                SumِYR={Tofixed(ite.SumِYR)}
              />
            </TouchableOpacity>
            <View style={{flexDirection: zommIN >= 18 ? 'row' : 'column'}}>
              {zommIN < 18 ? foring(ite) : null}
              <View>
                {ite?.Databes.filter(
                  kindga === 'Sub' ? filtercars : filtercStart,
                ).map((pic, index) => (
                  <View
                    style={{
                      flexDirection: zommIN >= 18 ? 'row' : 'column',
                    }}>
                    {zommIN >= 18 ? foring(ite) : null}
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setCase('headersub');
                        setIdsection(ite.idHOM);
                        setIdsectionSub(pic.idSub);
                        setTask(item);
                        setBuald(true);
                      }}
                      style={[
                        {
                          flexDirection: zommIN >= 18 ? 'column' : 'row',
                          width: zommIN >= 18 ? '70%' : null,
                        },
                        styles.containerbuilds_sub,
                      ]}>
                      <Text
                        numberOfLines={2}
                        style={[
                          {
                            width: zommIN >= 18 ? '100%' : '30%',
                            fontSize: zommIN - 2,
                          },
                          styles.textbuild_sub,
                        ]}>
                        {pic.sectiontitle}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={[
                          {
                            width: zommIN >= 18 ? '100%' : '30%',
                            fontSize: zommIN - 2,
                          },
                          styles.textbuild_sub,
                        ]}>
                        {pic.TimeSub}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={[
                          {
                            width: zommIN >= 18 ? '100%' : '30%',
                            fontSize: zommIN - 2,
                          },
                          styles.textbuild_sub,
                        ]}>
                        {pic.arthDath} {Tofixed(pic.sectionpriclabrr)}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          {
                            width: zommIN >= 18 ? '100%' : '20%',
                            fontSize: zommIN - 2,
                          },
                          styles.textbuild_sub,
                          {marginHorizontal: 15},
                        ]}>
                        {pic.abzrphtion}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return {
    render,
    caseused,
    setCase,
    Addtaskfalse,
    setAddTsksfalse,
    bulid,
    setBuald,
    tasks,
    setTask,
    idSection,
    setIdsection,
    idSectionSub,
    setIdsectionSub,
  };
}

const styles = StyleSheet.create({
  bodycontensab2: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  containerbuilds_sub: {
    backgroundColor: colors.GREY,
    // flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: RFValue(2),
    padding: RFValue(5),
    marginVertical: RFValue(5),
  },
  textbuild_sub: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK,
    textAlign: 'center',
    marginBottom: RFValue(10),
  },
  textbuild_sub_heder: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(13),
    textAlign: 'center',
  },

  containerbuilds_sub_heder: {
    backgroundColor: colors.ORANGE,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
    // marginVertical: RFValue(5),
    marginTop: RFValue(-5),
  },

  //menu moduls
});