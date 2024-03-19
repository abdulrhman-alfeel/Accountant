import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../constants/colors';
//import ConstomBtom from "./ConstomBtom";
import {useSelector} from 'react-redux';

import Haderpost from '../component/postprodctmov/haderpost';
import Creattask from '../component/postprodctmov/creattask';
// import { pagSec } from '../../../contracting/prodectmy/prodectmy'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Moduls from '../component/moduls';
import CshmonvModul from '../component/postprodctmov/cshmonvModul ';
import uuid from 'react-native-uuid';
import {tost, Tofixed} from '../functionuse/contractuse/expTemplet';
import useOprection from '../functionuse/useoprection';
import userRendersub from '../functionuse/contractuse/userRendersub';

export const Subprodect = ({navigation}) => {
  const {
    Oprection,
    delet,
    setMenu,
    carmsu,
    setCarnsy,
    bellmodel,
    setBellmodel,
  } = useOprection(navigation, 'SubprodectContracting');
  const {zommIN, tasksCONTRATID, tasksCONTRAT, localed} = useSelector(
    state => state.userReducer,
  );
  const {
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
  } = userRendersub(carmsu, 'Sub');

  const [iddelet, setIddelet] = useState(0);
  //اختيار تعديل الراسل او الفرع
  const [bulidEdit, setBualdEdit] = useState(
    localed === 'ar_MA' ? 'إضافة' : 'add',
  );
  const [bellmodelMann, setBellmodelMann] = useState(false);

  //pdf

  //excel

  const renderItem = useCallback(
    ({item, index}) => (
      <View key={index} style={styles.bodyc}>
        <TouchableOpacity
          style={[carmsu.length > 0 ? styles.allsum : {display: 'none'}]}
          onPress={() => {
            setCarnsy('');
          }}>
          <Text style={styles.text}>
            {localed == 'ar_MA'
              ? 'كشف بكافة العملات'
              : 'List in all currencies'}
          </Text>
        </TouchableOpacity>
        <View style={styles.bodyconten}>
          <View style={styles.bodycontensab}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.bottom_add}
                onPress={() => {
                  setCase('header');
                  setTask(item);
                  setIdsection(uuid.v4());
                  setBualdEdit(localed == 'ar_MA' ? 'إضافة' : 'add');
                  setBellmodelMann(true);
                }}>
                <FontAwesome5Icon
                  name="plus"
                  size={zommIN + 6}
                  color={colors.CURRENT}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottom_add}
                onPress={() => {
                  setIddelet(item.ID);
                  setTask(item);
                  setMenu(true);
                }}>
                <FontAwesome5Icon
                  name="grip-horizontal"
                  size={zommIN + 6}
                  color={colors.CURRENT}
                />
              </TouchableOpacity>
            </View>
            <Haderpost
              sectionidnfy={item.sectionidnfy}
              many={carmsu}
              SumDollar={Tofixed(item.SumDollar)}
              SumِSR={Tofixed(item.SumِSR)}
              SumِYR={Tofixed(item.SumِYR)}
              tiems={item.Timeminet}
              Datetiemarth={item.Datetiem}
            />
          </View>
          {render(item)}
        </View>
      </View>
    ),
    [idSectionSub, idSection, carmsu, zommIN],
  );
  return (
    <>
      {Addtaskfalse || bulid || bellmodelMann ? (
        <CshmonvModul
          kind={'Exit'}
          allTsks={tasks}
          setAllTsks={setTask}
          setBualdEdit={setBualdEdit}
          bulidEdit={bulidEdit}
          caseused={caseused}
          idSectionSub={idSectionSub}
          idsection={idSection}
          bellmodel={bellmodelMann}
          setBellmodel={setBellmodelMann}
          setBuald={setBuald}
          bulid={bulid}
          Addtaskfalse={Addtaskfalse}
          setAddTsksfalse={setAddTsksfalse}
        />
      ) : null}
      <Moduls
        setBellmodel={setBellmodel}
        bellmodel={bellmodel}
        preesyes={() => {
          delet();
          setBellmodel(false);
        }}
      />
      <Oprection />
      <View style={styles.body}>
        <FlatList
          data={tasksCONTRAT.filter(item => item.ID === tasksCONTRATID)}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bottom_add: {
    width: RFValue(50),
    height: RFValue(50),
    alignItems: 'center',
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(20),
  },
  allsum: {
    borderWidth: 1,
    width: '40%',
    alignSelf: 'center',
    position: 'absolute',
    top: RFValue(20),
    zIndex: 999,
    borderRadius: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(5),
    backgroundColor: colors.CURRENT,
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

  body: {
    height: '100%',
  },
  bodyc: {
    width: '100%',
    // marginVertical: RFValue(30),
    marginBottom: RFValue(100),
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: colors.WHITE,
    // elevation: RFValue(2),
    // overflow:'hidden'
  },
  bodyconten: {
    flexDirection: 'column',
    // padding: RFValue(3),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bodycontensab: {
    flex: 2,
    width: '100%',
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
  },

  text: {
    color: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },
  textinpu: {
    fontSize: RFValue(17),
    color: colors.BLACK,
    padding: RFValue(15),
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
  buttom: {
    backgroundColor: colors.YALO,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%',
    padding: RFValue(5),
    borderRadius: RFValue(30),
  },
  textbuttom: {
    color: colors.CURRENT,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK
  },
  //menu moduls
});

export default Subprodect;
