import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Pressable,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {colors} from './constants/colors';
import {useSelector, useDispatch} from 'react-redux';
import {setTasksCONTRAT} from './redux/actions';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from 'react-native-modal-datetime-picker';
import uuid from 'react-native-uuid';
import Modeltasksection from './component/modeltasksection';
import ModulsCalculator, {result} from './component/modulsCalculator';
import {locale} from './locale';
import {Tofixed} from './functionuse/contractuse/expTemplet';
import ModulsSection from './component/postprodctmov/modulsSection';
import ModulsSectionInsert from './component/postprodctmov/modulsSectionInsert';
import useSamsuball from './functionuse/contractuse/useSamsuball';
export const dolars = [
  {label: locale === 'ar_MA' ? 'دولار امريكي' : '$', value: 1},
  {label: locale === 'ar_MA' ? 'ريال سعودي' : 'SR', value: 2},
  {label: locale === 'ar_MA' ? 'ريال يمني' : 'YR', value: 3},
];
// export const dolars = [{ name: locale === "ar_MA" ? 'دولار امريكي' : "$", code: '$' }, { name: locale === "ar_MA" ? 'ريال سعودي' : "SR", code: locale === "ar_MA" ? 'ر.ي.س' : "SR" }, { name: locale === "ar_MA" ? 'ريال يمني' : "YR", code: locale === "ar_MA" ? 'ر.ي' : "YR" }];
export default function Taskscshmonv({navigation}) {
  const {tasksCONTRAT, tasksCONTRATID, zommIN, localed} = useSelector(
    state => state.userReducer,
  );
  const sumSuball = useSamsuball();
  const dispatch = useDispatch();
  const [databuld, setData] = useState([]);
  const [sectiontitle, setSectiontitel] = useState('');
  const [sectiondiscreab, setSectiondiscreab] = useState('');
  const [abzrphtion, setAbzrph] = useState('');
  const [bellmodel, setBellmodel] = useState(false);
  const [liprri, setLiprre] = useState(false);
  const [bulid, setBuald] = useState(false);
  const [bulidEdit, setBualdEdit] = useState(
    localed === 'ar_MA' ? 'إضافة' : 'add',
  );
  const [caseused, setCase] = useState('');
  const [arthDath, setDataarth] = useState('');
  const [sectionidnfy, setSecidenfy] = useState('');
  //وقت الخاص بالنفقات
  const [DatetiemSubfals, setDataTiermSubfels] = useState(false);
  const [DatetiemaSub, setDataTiermSub] = useState('');
  //وقت الخاص بالنفقات الفرعية
  const [Datetiemarthfals, setDataTiermarthfels] = useState(false);
  const [Datetiemarthwrit, setDataTiermarthwrit] = useState('');
  //وقت خاص بانشاء الحساب
  const [Datecound, setDataCount] = useState('');
  const [Datecoundfalse, setDataCountfalse] = useState(false);
  //خاص بوقت الساعة
  const [Tiems, setTimes] = useState('');
  // اخطاء عدم اكمال البيانات
  const [falseerr, setFalseerr] = useState(false);
  const [Addtaskfalse, setAddTsksfalse] = useState(false);

  //array sub
  const [DatabesEdit, setDatabesEite] = useState([]);
  //اجور عمال
  const [idSection, setIdsection] = useState('');
  const [idSectionSub, setIdsectionSub] = useState('');
  const [tittellaber, setTittellaber] = useState('');
  //العملات
  const [SumDollar, setSumDollar] = useState(0);
  const [SumSR, setSumSR] = useState(0);
  const [SumYR, setSumYR] = useState(0);
  const [calculator, setCalculator] = useState(false);
  const [FalseCalulter, setFalseCalculator] = useState(false);
  // focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSecidenfy('');
      setDataarth('');
      setDatabesEite([]);
      setData([]);
      setBualdEdit(localed === 'ar_MA' ? 'إضافة' : 'add');
      setSumDollar(0);
      setSumSR(0);
      setSumYR(0);
      setDataTiermarthwrit(new Date(Date.now()).toLocaleDateString());
      setDataCount(new Date().toLocaleDateString());
      setDataTiermSub(new Date().toLocaleDateString());
      setTittellaber('');
      setAbzrph('');
      setIdsection('');
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (Datecound.length > 0) {
      setDataCountfalse(false);
    }
    if (DatetiemaSub.length > 0) {
      setDataTiermSubfels(false);
    }
    if (Tasks?.TimeSub?.length > 0) {
      setDataTiermarthfels(false);
    }
    setDataTiermarthwrit(new Date().toLocaleDateString());
    setTasks({...Tasks, TimeSub: new Date().toLocaleDateString()});
    setDataTiermSub(new Date().toLocaleDateString());
  }, [Datecound, DatetiemaSub, Tasks?.TimeSub]);

  const useclurek = () => {
    setSectiondiscreab(result);
  };

  const deleting = () => {
    const indexconten = databuld.findIndex(tasks => tasks.idHOM === idSection);
    console.log(idSectionSub);
    let addnew = [];
    addnew = [...databuld];
    if (caseused === 'headersub') {
      const finddata = addnew.find(tasks => tasks.idHOM === idSection);
      const ind = finddata?.Databes.findIndex(
        tasks => tasks.idSub === idSectionSub,
      );
      // if (finddata) {
      finddata?.Databes.splice(ind, 1);
      let objectsDoler = [];
      let objectYR = [];
      let objectSR = [];
      finddata?.Databes.forEach((item, index) => {
        item.arthDath === '$' || item.arthDath === 'دولار امريكي'
          ? objectsDoler.push({x: parseInt(item.sectionpriclabrr)})
          : item.arthDath === 'ريال سعودي' || item.arthDath === 'SR'
          ? objectSR.push({x: parseInt(item.sectionpriclabrr)})
          : objectYR.push({x: parseInt(item.sectionpriclabrr)});
      });
      const sumDoler = objectsDoler.reduce(
        (accumulator, currentValue) => accumulator + currentValue.x,
        0,
      );
      const sumSR = objectSR.reduce(
        (accumulator, currentValue) => accumulator + currentValue.x,
        0,
      );
      const sumYR = objectYR.reduce(
        (accumulator, currentValue) => accumulator + currentValue.x,
        0,
      );

      console.log(parseInt(sumDoler));
      addnew[indexconten].SumDollar = sumDoler;
      addnew[indexconten].SumِSR = sumSR;
      addnew[indexconten].SumِYR = sumYR;
      //
      setData(addnew);
      ToastAndroid.showWithGravity(
        localed === 'ar_MA'
          ? 'تم العملية بنجاح'
          : 'Saved the operation successfully',
        ToastAndroid.CENTER,
        ToastAndroid.LONG,
      );
    } else {
      const filterDasec = addnew.findIndex(tasks => tasks.idHOM === idSection);
      if (filterDasec > -1) {
        databuld.splice(filterDasec, 1);
        ToastAndroid.showWithGravity(
          localed === 'ar_MA'
            ? 'تم العملية بنجاح'
            : 'Saved the operation successfully',
          ToastAndroid.CENTER,
          ToastAndroid.LONG,
        );
      }
    }
  };
  const getDatalabrrs = () => {
    if (
      (sectiontitle.length > 0 &&
        sectiondiscreab.length > 0 &&
        arthDath.value > 0) ||
      (sectiontitle.length > 0 &&
        sectiondiscreab.length > 0 &&
        arthDath.length > 0)
    ) {
      console.log(idSectionSub);
      const indexconten = databuld.findIndex(
        tasks => tasks.idHOM === idSection,
      );
      let addnew = [];
      addnew = [...databuld];
      try {
        setLiprre(true);
        var datares = {
          idHOM: idSection,
          idSub: idSectionSub.length > 0 ? idSectionSub : uuid.v4(),
          sectiontitle: sectiontitle,
          sectionpriclabrr: sectiondiscreab,
          abzrphtion: abzrphtion,
          arthDath:
            dolars.find(item => item.value == arthDath.value)?.label ||
            arthDath,
          TimeSub: Tasks.TimeSub,
          Timeminet: Tiems,
        };
        let objectsDoler = [];
        let objectYR = [];
        let objectSR = [];
        // const index = Datelaber.findIndex(tasks => tasks.id === idSectionlabrr);
        const finddata = addnew.find(tasks => tasks.idHOM === idSection);
        if (finddata) {
          const index = finddata.Databes.findIndex(
            tasks => tasks.idSub === idSectionSub,
          );
          const databulise = databuld.find(te => te.idHOM === idSection);
          if (index > -1) {
            finddata.Databes[index] = datares;
            console.log(databuld);
            setBualdEdit(locald === 'ar_MA' ? 'إضافة' : 'add');
          } else {
            addnew
              .find(tasks => tasks.idHOM === idSection)
              ?.Databes.push(datares);
          }
          databulise?.Databes.forEach((item, index) => {
            item.arthDath === '$' || item.arthDath === 'دولار امريكي'
              ? objectsDoler.push({x: parseInt(item.sectionpriclabrr)})
              : item.arthDath === 'ريال سعودي' || item.arthDath === 'SR'
              ? objectSR.push({x: parseInt(item.sectionpriclabrr)})
              : objectYR.push({x: parseInt(item.sectionpriclabrr)});
          });
          const sumDoler = objectsDoler.reduce(
            (accumulator, currentValue) => accumulator + currentValue.x,
            0,
          );
          const sumSR = objectSR.reduce(
            (accumulator, currentValue) => accumulator + currentValue.x,
            0,
          );
          const sumYR = objectYR.reduce(
            (accumulator, currentValue) => accumulator + currentValue.x,
            0,
          );
          addnew[indexconten].SumDollar = sumDoler;
          addnew[indexconten].SumِSR = sumSR;
          addnew[indexconten].SumِYR = sumYR;
          setData(addnew);
          // empty
        }
        setLiprre(false);
      } catch (err) {
        console.log(err);
        setLiprre(false);
      }

      cansleshook();
    } else {
      ToastAndroid.showWithGravity(
        localed === 'ar_MA'
          ? 'يجب اكمال البيانات المطلوبه'
          : 'The required data must be completed',
        ToastAndroid.CENTER,
        ToastAndroid.LONG,
      );
      setFalseerr(true);
    }
  };
  const [TasksSac, setTasksSac] = useState({});
  const [Tasks, setTasks] = useState({});
  const getDatabulds = () => {
    console.log(idSection);
    let addnew = [];
    addnew = [...databuld];
    if (TasksSac.sectiontitle.length > 0) {
      try {
        setLiprre(true);
        var datares = TasksSac;

        // {
        //   idHOM: idSection,
        //   Databes: DatabesEdit,
        //   sectiontitle: tittellaber,
        //   SumDollar: SumDollar,
        //   SumِSR: SumSR,
        //   SumِYR: SumYR,
        //   abzrphtion: abzrphtion,
        //   Time: new Date().toLocaleDateString(),
        //   Timeminet: Tiems,
        // };
        const index = databuld.findIndex(
          tasks => tasks.idHOM === TasksSac.idHOM,
        );
        const finddata = databuld.find(tasks => tasks.idHOM === TasksSac.idHOM);
        if (finddata) {
          addnew[index] = datares;
          setData(addnew);
          setBualdEdit(localed === 'ar_MA' ? 'إضافة' : 'add');
        } else {
          addnew = [...databuld];
          addnew.push(datares);
          setData(addnew);
        }
        setDataCountfalse(false);
      } catch (err) {
        console.log(err);
      }
      setBellmodel(false);
      cansleshook();
      setLiprre(false);
    } else {
      ToastAndroid.showWithGravity(
        localed === 'ar_MA'
          ? 'يجب اكمال البيانات المطلوبه'
          : 'The required data must be completed',
        ToastAndroid.CENTER,
        ToastAndroid.LONG,
      ),
        setFalseerr(true);
    }
  };

  const onPress = () => {
    if (sectionidnfy.length === 0) {
      ToastAndroid.showWithGravity(
        localed === 'ar_MA'
          ? 'يجب اكمال البيانات '
          : 'The required data must be completed',
        ToastAndroid.CENTER,
        ToastAndroid.LONG,
      ),
        setFalseerr(true);
    } else {
      try {
        setLiprre(true);
        let Dollar = 0;
        let SR = 0;
        let YR = 0;

        let objectsDoler = [];
        let objectsSR = [];
        let objectsYR = [];
        databuld.forEach((item, index) => {
          objectsDoler.push({x: parseInt(item.SumDollar)});
          objectsSR.push({x: parseInt(item.SumِSR)});
          objectsYR.push({x: parseInt(item.SumِYR)});
        });
        Dollar = objectsDoler.reduce(
          (accumulator, currentValue) => accumulator + currentValue.x,
          0,
        );
        //sum reduce SR
        SR = objectsSR.reduce(
          (accumulator, currentValue) => accumulator + currentValue.x,
          0,
        );
        //sum reduce YR
        YR = objectsYR.reduce(
          (accumulator, currentValue) => accumulator + currentValue.x,
          0,
        );

        var Task = {
          ID: tasksCONTRATID,
          sectionidnfy: sectionidnfy,
          Datetiem: Datecound,
          Timeminet: new Date(Date.now()).toLocaleTimeString(),
          databuld: databuld,
          Done: false,
          SumDollar: Dollar,
          SumِSR: SR,
          SumِYR: YR,
        };
        const newTasks = [...tasksCONTRAT, Task];
        sumSuball(newTasks);
        AsyncStorage.setItem('TasksCONTRAT', JSON.stringify(newTasks)).then(
          () => {
            dispatch(setTasksCONTRAT(newTasks));
            ToastAndroid.showWithGravity(
              localed === 'ar_MA' ? 'تم الحفظ بنجاح' : 'Saved successfully',
              ToastAndroid.CENTER,
              ToastAndroid.LONG,
            );
            setLiprre(false);
            navigation.navigate('Prodectmyfalse');
            cansleshook();
          },
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  const cansleshook = () => {
    setSectiontitel('');
    setSectiondiscreab('');
    setIdsectionSub('');
    setAbzrph('');
    setDataarth('');
    setDataTiermarthfels(false);
    setFalseCalculator(false);
    setTimes('');
    setDataCountfalse(false);
    setFalseerr(false);
    setTittellaber('');
    setDatabesEite([]);
    setAddTsksfalse(false);
    setBualdEdit(localed === 'ar_MA' ? 'إضافة' : 'add');
    setTasksSac({});
  };

  const stetment = () => {
    return (
      <View
        style={[
          {
            flexDirection: zommIN >= 22 ? 'column' : 'row',
            width: zommIN >= 22 ? '30%' : '100%',
          },
          styles.containerbuilds_sub_heder,
        ]}>
        <Text style={[{fontSize: zommIN}, styles.textbuild_sub_heder]}>
          {localed === 'ar_MA' ? 'البيان' : 'Manifesto'}
        </Text>
        <Text
          style={[
            {width: zommIN >= 22 ? '100%' : '15%', fontSize: zommIN},
            styles.textbuild_sub_heder,
          ]}>
          {localed === 'ar_MA' ? 'الوقت' : 'Time'}
        </Text>
        <Text style={[{fontSize: zommIN}, styles.textbuild_sub_heder]}>
          {localed === 'ar_MA' ? 'المبلغ' : 'Amount'}
        </Text>
        <Text style={[{fontSize: zommIN}, styles.textbuild_sub_heder]}>
          {localed === 'ar_MA' ? 'ملاحظة' : 'Note'}
        </Text>
      </View>
    );
  };
  let caseusedt =
    caseused === 'headersub'
      ? databuld
          .find(te => te.idHOM === idSection)
          .Databes.filter(ite => ite.idSub === idSectionSub)
      : databuld.filter(ite => ite.idHOM === idSection);
  return (
    <>
      <ModulsCalculator
        onprssfounction={() => useclurek()}
        visble={calculator}
        onrequewt={setCalculator}
      />
      <View style={styles.body}>
        <DateTimePicker
          mode="date"
          isVisible={Datecoundfalse}
          onConfirm={value => setDataCount(value.toLocaleDateString())}
          // onChange={(value)=>setDataCount(value)}
          onCancel={() => setDataCountfalse(false)}
        />
        <DateTimePicker
          mode="date"
          isVisible={DatetiemSubfals}
          onConfirm={value => {
            setDataTiermSub(value.toLocaleDateString());
            setTasksSac({...TasksSac, Time: value.toLocaleDateString()});
          }}
          // onChange={(value)=>setDataCount(value)}
          onCancel={() => setDataTiermSubfels(false)}
        />

        {bulid ? (
          <ModulsSection
            bulid={bulid}
            setBuald={setBuald}
            caseusedt={caseusedt}
            onPressDelet={() => {
              deleting();
              setBuald(false);
            }}
            caseused={caseused}
            setTasks={setTasks}
            setTasksSac={setTasksSac}
            onPressEdit={() => {
              if (caseused === 'headersub') {
                setBualdEdit(localed == 'ar_MA' ? 'تعديل' : 'Edit');
                // setFalseCalculator(true);
                setAddTsksfalse(true);
              } else {
                console.log(TasksSac);
                setBellmodel(true);
                setBualdEdit(localed == 'ar_MA' ? 'تعديل' : 'Edit');
              }
              setBuald(false);
            }}
          />
        ) : null}
        <ModulsSectionInsert
          bellmodel={bellmodel}
          setBellmodel={setBellmodel}
          Contener={() => {
            cansleshook();
            setBellmodel(false);
          }}
          ContenerSub={() => setBellmodel(true)}
          onPressAdd={() => {
            getDatabulds();
          }}
          falseerr={falseerr}
          TasksSac={TasksSac}
          setTasksSac={setTasksSac}
          setDataTiermSubfels={setDataTiermSubfels}
          bulidEdit={bulidEdit}
        />

        {Addtaskfalse || Datetiemarthfals || liprri ? (
          <Modeltasksection
            onpress={() => {
              bulidEdit === 'إضافة' || bulidEdit === 'add'
                ? setIdsectionSub(uuid.v4())
                : null;
              getDatalabrrs();
            }}
            Tasks={Tasks}
            Datetiemarthfals={Datetiemarthfals}
            FalseCalulter={FalseCalulter}
            setDataTiermarthfels={setDataTiermarthfels}
            pressclacultar={() => setCalculator(true)}
            setDataTiermarthwrit={setTasks}
            Datetiemarthwrit={Tasks?.TimeSub}
            bulidEditr={bulidEdit}
            Faslecomplet={falseerr}
            False={liprri}
            chexconsle={cansleshook}
            pushcash={Addtaskfalse}
            Pushsetfalse={setAddTsksfalse}
            selectedValue={arthDath}
            onValueChange={value => setDataarth({value})}
            options={dolars}
            sectiontitle={sectiontitle}
            setSectiontitel={setSectiontitel}
            pric={sectiondiscreab}
            setPric={setSectiondiscreab}
            abzrphtion={abzrphtion}
            setAbzrph={setAbzrph}
          />
        ) : null}
        <ScrollView>
          <View style={styles.idmorev}>
            <Text style={[{flex: 1, fontSize: zommIN}, styles.textarth]}>
              {localed === 'ar_MA' ? 'اسم الحساب' : 'name Account'}
            </Text>
            <TextInput
              style={[
                localed === 'ar_MA'
                  ? {fontSize: RFValue(10)}
                  : {fontSize: RFValue(8)},
                falseerr && sectionidnfy.length <= 0
                  ? {borderColor: colors.RED}
                  : {borderColor: colors.YALO},
                {fontSize: zommIN},
                styles.inputtitelbuildidntfy,
              ]}
              placeholder={
                localed === 'ar_MA'
                  ? falseerr && sectionidnfy.length <= 0
                    ? 'يجب تحديد الاسم او رقم الحساب'
                    : 'اختر اسم او رقم للحساب'
                  : falseerr && sectionidnfy.length <= 0
                  ? 'You must specify a name or account number'
                  : 'Select a name or account number'
              }
              placeholderTextColor={colors.BLACK}
              value={sectionidnfy}
              onChangeText={value => setSecidenfy(value)}
            />
            <TouchableOpacity
              onPress={() => {
                if (Datecound.length > 0) {
                  setDataCount('');
                  setDataCountfalse(true);
                } else {
                  setDataCountfalse(true);
                }
              }}
              style={{
                alignItems: 'center',
                height: zommIN >= 18 ? 70 : 20,
                flex: 1,
                backgroundColor: colors.WHITE,
                borderRadius: RFValue(10),
              }}>
              <Text style={[{fontSize: zommIN}, styles.textarth]}>
                {Datecound}
              </Text>
            </TouchableOpacity>
            {/* <Text style={styles.textid}>{tasksCONTRATID}</Text> */}
          </View>

          <View style={styles.addnafgh}>
            <TouchableOpacity
              onPress={() => {
                setIdsection(uuid.v4());
                setTasksSac({
                  idHOM: idSection,
                  Databes: DatabesEdit,
                  sectiontitle: tittellaber,
                  SumDollar: SumDollar,
                  SumِSR: SumSR,
                  SumِYR: SumYR,
                  abzrphtion: abzrphtion,
                  Time: new Date().toLocaleDateString(),
                  Timeminet: Tiems,
                });
                setBellmodel(true);
              }}
              style={[
                {
                  height: zommIN >= 27 ? RFValue(80) : RFValue(30),
                  width: zommIN >= 18 ? RFValue(170) : RFValue(110),
                },
                styles.buttomadd,
              ]}>
              <Text style={[{fontSize: zommIN}, styles.textbot]}>
                {localed === 'ar_MA'
                  ? 'أضافة نفقات فرعية'
                  : 'Add subsidiary expenses'}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {databuld.map((item, index) => (
              <View key={index} style={styles.bouild}>
                <TouchableOpacity
                  onLongPress={() => {
                    setCase('header');
                    setIdsection(item.idHOM);
                    setTimes(item.Timeminet);
                    setDataTiermarthwrit(item.TimeSub);
                    //  setAbzrph(pic.abzrphtion)
                    setSumDollar(item.SumDollar);
                    setSectiondiscreab('');
                    setSumSR(item.SumِSR);
                    setSumYR(item.SumِYR);
                    setSectiontitel(item.sectiontitle);
                    setAbzrph(item.abzrphtion);
                    setTasksSac(item);
                    setBuald(true);
                  }}
                  onPress={() => {
                    idSection == item
                      ? setIdsection('')
                      : setIdsection(item.idHOM);
                    console.log(item);
                  }}
                  style={[
                    {
                      flexDirection: zommIN >= 22 ? 'column' : 'row',
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    },
                    styles.containerbuilds,
                  ]}>
                  <Text
                    numberOfLines={2}
                    style={[
                      {
                        width: zommIN >= 22 ? '100%' : '50%',
                        textAlign: 'center',
                        fontSize: zommIN,
                      },
                      styles.textbuild,
                    ]}>
                    {item.sectiontitle}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[
                      {
                        width: zommIN >= 22 ? '100%' : '30%',
                        textAlign: 'center',
                        fontSize: zommIN,
                      },
                      styles.textbuild,
                    ]}>
                    {item.Time}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[
                      {width: zommIN >= 22 ? '100%' : '20%', fontSize: zommIN},
                      styles.textbuild,
                    ]}>
                    {item.Timeminet}
                  </Text>
                </TouchableOpacity>

                <View
                  style={
                    idSection !== item.idHOM
                      ? {display: 'none'}
                      : {marginBottom: 10}
                  }>
                  {localed === 'ar_MA' ? (
                    <View style={styles.header}>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        الاجمالي
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.header}>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        Total
                      </Text>
                    </View>
                  )}
                  <View
                    style={{
                      flexDirection: zommIN >= 22 ? 'row' : 'column',
                      width: '100%',
                    }}>
                    <View
                      style={[
                        {flexDirection: zommIN >= 22 ? 'column' : 'row'},
                        styles.container_sub1,
                      ]}>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {localed === 'ar_MA'
                          ? 'المبالغ بالدولار'
                          : 'Amounts in Dollars'}
                      </Text>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {localed === 'ar_MA'
                          ? 'بالريال السعودي'
                          : 'Saudi Riyals'}
                      </Text>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {localed === 'ar_MA'
                          ? 'بالريام اليمني'
                          : 'Yemeni Riyam'}
                      </Text>
                    </View>
                    <View
                      style={[
                        {flexDirection: zommIN >= 22 ? 'column' : 'row'},
                        styles.container_sub1,
                      ]}>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {Tofixed(item.SumDollar)}
                      </Text>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {Tofixed(item.SumِSR)}
                      </Text>
                      <Text style={[{fontSize: zommIN}, styles.textsum]}>
                        {Tofixed(item.SumِYR)}
                      </Text>
                    </View>
                  </View>
                  {zommIN < 22 ? stetment() : null}
                  {item?.Databes.filter(i => i.idHOM === idSection).map(
                    (pic, index) => (
                      <View
                        style={{
                          flexDirection: zommIN >= 22 ? 'row' : 'column',
                        }}>
                        {zommIN >= 22 ? stetment() : null}
                        <TouchableOpacity
                          key={index}
                          onLongPress={() => {
                            setCase('headersub');
                            setIdsectionSub(pic.idSub);
                            setTimes(pic.Timeminet);
                            setDataTiermarthwrit(pic.TimeSub);
                            setAbzrph(pic.abzrphtion);
                            setSectiondiscreab(pic.sectionpriclabrr);
                            setSectiontitel(pic.sectiontitle);
                            setDataarth(pic.arthDath);
                            setTasks(pic);
                            // setIdsection(pic.idHOM);
                            setBuald(true);
                          }}
                          style={[
                            {
                              flexDirection: zommIN >= 22 ? 'column' : 'row',
                              width: zommIN >= 22 ? '70%' : '100%',
                            },
                            styles.containerbuilds_sub,
                          ]}>
                          <Text
                            numberOfLines={1}
                            style={[
                              {
                                width: zommIN >= 22 ? '100%' : '10%',
                                fontSize: zommIN,
                              },
                              styles.textbuild_sub,
                            ]}>
                            {pic.sectiontitle}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={[
                              {
                                width: zommIN >= 22 ? '100%' : '20%',
                                fontSize: zommIN,
                              },
                              styles.textbuild_sub,
                            ]}>
                            {pic.TimeSub}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={[
                              {
                                width: zommIN >= 22 ? '100%' : '20%',
                                fontSize: zommIN,
                              },
                              styles.textbuild_sub,
                            ]}>
                            {pic.arthDath}
                            {Tofixed(pic.sectionpriclabrr)}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={[
                              {
                                width: zommIN >= 22 ? '100%' : '10%',
                                fontSize: zommIN,
                              },
                              styles.textbuild_sub,
                            ]}>
                            {pic.abzrphtion}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ),
                  )}
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIdsection(item.idHOM);
                    setAddTsksfalse(true);
                  }}
                  style={styles.buttom}>
                  {localed === 'ar_MA' ? (
                    <Text style={[{fontSize: zommIN}, styles.textbuttom]}>
                      {bulidEdit === 'إضافة' ? 'إضافة' : 'تعديل'}
                    </Text>
                  ) : (
                    <Text style={[{fontSize: zommIN}, styles.textbuttom]}>
                      {bulidEdit === 'add' ? 'add' : 'edit'}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          {liprri ? (
            <ActivityIndicator size={20} color={colors.RED} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                onPress();
                // onPressl(databuld,setFalseerr,sectionidnfy,setFalse,tasksCONTRATID,Datecound,new Date().toLocaleDateString(),false,tasksCONTRAT,dispatch,setTasksCONTRAT,cansleshook)
              }}
              style={styles.set}>
              <Text style={[{fontSize: zommIN + 5}, styles.text]}>
                {localed === 'ar_MA' ? 'حفظ' : 'save'}
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //نفقة
  addnafgh: {
    alignItems: 'flex-start',
  },
  buttomadd: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: RFValue(50),
    borderBottomRightRadius: RFValue(50),
    // left: 15,
    backgroundColor: colors.CURRENT,
    borderColor: colors.YALO,
    borderBottomWidth: RFValue(1),
    borderTopWidth: RFValue(1),
  },
  textbot: {
    color: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },
  //user
  user_mod1al: {
    width: RFValue(300),
    height: RFValue(350),
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
  inputtiteuser: {
    color: colors.CURRENT,
    padding: 5,
    borderRadius: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
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
    // fontFamily: fonts.CAIROREGULARK
  },
  headerstatement: {
    width: '90%',
    height: RFValue(100),
    justifyContent: 'space-around',
  },
  stetment: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
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
  textuser: {
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center',
  },
  textuser_sub: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(10),
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.WHITE,
  },
  textmerr: {
    // fontSize: RFValue(10),
    color: colors.RED,
    // fontFamily: fonts.CAIROREGULARK,
    // marginHorizontal:RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.WHITE,
    textAlign: 'center',
    borderRadius: RFValue(5),
  },
  //
  textm: {
    // fontSize: RFValue(17),
    // fontFamily: fonts.TAJAWALREGULAR,
    textShadowColor: colors.BORDER,
    textShadowRadius: 0.2,
  },
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  set: {
    textAlign: 'center',
    //  height:RFValue(50),
    padding: RFValue(5),
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    // fontSize: RFValue(20),
    width: RFValue(200),
    borderRadius: RFValue(15),
    backgroundColor: colors.CURRENT,
    color: colors.WHITE,
  },
  inputtitel: {
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(5),
    fontSize: RFValue(16),
    height: RFValue(40),
    textAlign: 'right',
    flex: 1,
    color: colors.GREYD,
  },
  ///خاص بالتفاصيل
  bouild: {
    width: '100%',
    marginHorizontal: RFValue(10),
    flexDirection: 'column',
    alignSelf: 'center',
  },
  inputtitelbuild: {
    backgroundColor: colors.WHITE,
    borderRadius: RFValue(5),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(5),
    fontSize: RFValue(16),
    height: RFValue(40),
    textAlign: 'right',
    flex: 2,
    color: colors.GREYD,
  },
  inputtitelbuildidntfy: {
    backgroundColor: colors.WHITE,
    borderRadius: RFValue(15),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(2),
    borderWidth: 1,
    textAlign: 'center',
    flex: 2,
    color: colors.GREYD,
  },
  //خاس بتفاصيل الفرع
  dag_mod1al: {
    position: 'relative',
    // right: RFValue(-90),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: colors.YALO,
    borderRadius: RFValue(10),
  },
  modulsub: {
    backgroundColor: colors.CURRENT,
    width: '90%',
    borderRadius: RFValue(10),
    flexDirection: 'column',
  },
  textview: {
    color: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK,
    padding: RFValue(5),
    marginHorizontal: RFValue(5),
    fontSize: RFValue(12),
    overflow: 'hidden',
  },
  textviewabzrphtion: {
    color: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK,
    padding: RFValue(5),
    fontSize: RFValue(12),
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  continer_sub: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: RFValue(15),
  },
  abzrph: {
    alignItems: 'center',
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
  textbodtomleprr: {
    fontSize: RFValue(13),
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textconter: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //
  containerbuilds: {
    backgroundColor: colors.WHITE,
    elevation: 1,
    flex: 1,
    // borderRadius: RFValue(5),
    paddingVertical: RFValue(10),
    marginVertical: RFValue(5),
  },
  textbuild: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK
  },
  containerbuilds_sub: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: RFValue(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: RFValue(10),
    marginVertical: RFValue(5),
  },
  containerbuilds_sub_heder: {
    backgroundColor: colors.YALO,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    // marginVertical: RFValue(5),
    marginTop: RFValue(-5),
  },
  textbuild_sub: {
    color: colors.BANAF,
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(10),
    textAlign: 'center',
  },
  textbuild_sub_heder: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(13),
    textAlign: 'center',
  },
  buttom: {
    backgroundColor: colors.CURRENT,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%',
    padding: RFValue(5),
    borderRadius: RFValue(30),
  },
  textbuttom: {
    color: colors.WHITE,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK
  },

  centered_view: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },

  idmorev: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFValue(15),
    paddingHorizontal: RFValue(15),
  },
  textarth: {
    color: colors.BLACK,
    // fontSize: RFValue(12),
    // fontFamily: fonts.CAIROREGULARK
  },
  textid: {
    color: colors.BLACK,
  },
  container_sub1: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.CURRENT,
    padding: RFValue(10),
  },
  header: {
    backgroundColor: colors.CURRENT,
    width: '30%',
    position: 'absolute',
    zIndex: 999,
    top: RFValue(-10),
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.YALO,
    borderWidth: 1,
  },
  textsum: {
    color: colors.WHITE,
    textAlign: 'center',
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(10),
  },
});
