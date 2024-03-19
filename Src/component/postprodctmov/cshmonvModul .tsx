import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import uuid from 'react-native-uuid';
import Modeltasksection from '../modeltasksection';
import useDelettask from '../../functionuse/contractuse/useDelettask';
import useTaksSubing from '../../functionuse/contractuse/useTaksSubing';
import useTaksSaction from '../../functionuse/contractuse/useTaksSaction';
import {locale} from '../../locale';
import {dolars} from '../../Taskscshmonv';
import ModulsSection from './modulsSection';
import ModulsSectionInsert from './modulsSectionInsert';
import {useSelector} from 'react-redux';
const CshmonvModul = props => {
  const {deletingall} = useDelettask(props.kind);
  const {getDatalabrrsF, databuld} = useTaksSubing(props.kind);
  const {getDataSction, dataSuction, EditFoun} = useTaksSaction(props.kind);
  const {localed} = useSelector(state => state.userReducer);
  const [TasksSac, setTasksSac] = useState({
    idHOM: props.idsection,
    Databes: [],
    sectiontitle: '',
    SumDollar: 0,
    SumِSR: 0,
    SumِYR: 0,
    abzrphtion: '',
    Time: '',
    Timeminet: new Date().toLocaleTimeString(),
  });
  const [Tasks, setTasks] = useState({
    idHOM: TasksSac.idHOM,
    idSub: props.idSectionSub.length > 0 ? props.idSectionSub : uuid.v4(),
    sectionpriclabrr: '',
    sectiontitle: '',
    arthDath: '',
    abzrphtion: '',
    TimeSub: '',
    Timeminet: new Date().toLocaleTimeString(),
  });

  const [liprri, setLiprre] = useState(false);
  //وقت الخاص بالنفقات
  const [DatetiemSubfals, setDataTiermSubfels] = useState(false);
  //وقت الخاص بالنفقات الفرعية
  const [Datetiemarthfals, setDataTiermarthfels] = useState(false);
  //وقت خاص بانشاء الحساب
  const [Datecoundfalse, setDataCountfalse] = useState(false);
  // اخطاء عدم اكمال البيانات
  const [falseerr, setFalseerr] = useState(false);
  //count
  const [FalseCalulter, setFalseCalculator] = useState(false);

  // focus
  useEffect(() => {
    console.log(props.allTsks);
    props.setBualdEdit(localed === 'ar_MA' ? 'إضافة' : 'add');
  }, [props]);
  useEffect(() => {
    if (props.allTsks.Datetiem?.length > 0) {
      setDataCountfalse(false);
    }
    if (TasksSac.Time?.length > 0) {
      setDataTiermSubfels(false);
    }
    if (Tasks.TimeSub?.length > 0) {
      setDataTiermarthfels(false);
    }
  }, [props.allTsks?.Datetiem, TasksSac.Time, Tasks.TimeSub]);
  useEffect(() => {
    setTasks({...Tasks, TimeSub: new Date().toLocaleDateString()});
    setTasksSac({...TasksSac, Time: new Date().toLocaleDateString()});
  }, []);

  const cansleshook = () => {
    setDataTiermarthfels(false);
    setFalseCalculator(false);
    setDataCountfalse(false);
    setFalseerr(false);
    props.setAddTsksfalse(false);
    props.setBualdEdit(localed == 'ar_MA' ? 'إضافة' : 'add');
    props.setBellmodel(false);
    props.setBuald(false);
  };

  const deleting = () => {
    var Task = {
      idHOM: TasksSac.idHOM,
      idSub: props.idSectionSub,
      allTsks: props.allTsks,
      caseused: props.caseused,
    };

    deletingall(Task);
    setTasksSac({...TasksSac, Databes: databuld});
  };
  const getDatalabrrs = () => {
    var TasksS = {
      ...Tasks,
      idHOM: TasksSac.idHOM,
      idSub: props.idSectionSub.length > 0 ? props.idSectionSub : uuid.v4(),
    };
    var Task = {
      Taskssub: TasksS,
      allTsks: props.allTsks,
      caseused: props.caseused,
    };

    getDatalabrrsF(Task);
    props.setAddTsksfalse(false);
  };

  const getDatabulds = () => {
    getDataSction(TasksSac, props.allTsks);
    props.setAllTsks({...props.allTsks, databuld: dataSuction});
    setLiprre(false);
    props.setBualdEdit(EditFoun);
    props.setBellmodel(false);
  };
  let caseusedt =
    props.caseused === 'headersub'
      ? props.allTsks?.databuld
          .find(te => te.idHOM === TasksSac.idHOM)
          .Databes.filter(ite => ite.idSub === Tasks.idSub)
      : props.allTsks?.databuld.filter(ite => ite.idHOM === TasksSac.idHOM);

  return (
    <View style={styles.body}>
      <DateTimePicker
        mode="date"
        isVisible={Datecoundfalse}
        onConfirm={value =>
          props.setAllTsks({
            ...props.allTsks,
            Datetiem: value.toLocaleDateString(),
          })
        }
        onCancel={() => setDataCountfalse(false)}
      />
      <DateTimePicker
        mode="date"
        isVisible={DatetiemSubfals}
        onConfirm={value =>
          setTasksSac({...TasksSac, Time: value.toLocaleDateString()})
        }
        onCancel={() => setDataTiermSubfels(false)}
      />

      {props.bellmodel ? (
        <ModulsSectionInsert
          bellmodel={props.bellmodel}
          setBellmodel={props.setBellmodel}
          Contener={() => {
            cansleshook();
            props.setBellmodel(false);
          }}
          ContenerSub={() => props.setBellmodel(true)}
          onPressAdd={() => {
            getDatabulds();
          }}
          falseerr={falseerr}
          TasksSac={TasksSac}
          setTasksSac={setTasksSac}
          setDataTiermSubfels={setDataTiermSubfels}
          bulidEdit={props.bulidEdit}
        />
      ) : null}

      {props.bulid ? (
        <ModulsSection
          bulid={props.bulid}
          setBuald={props.setBuald}
          caseusedt={caseusedt}
          onPressDelet={() => {
            deleting();
            props.setBuald(false);
          }}
          caseused={props.caseused}
          setTasks={setTasks}
          setTasksSac={setTasksSac}
          onPressEdit={() => {
            if (props.caseused === 'headersub') {
              props.setBualdEdit(localed == 'ar_MA' ? 'تعديل' : 'Edit');
              // setFalseCalculator(true);
              props.setAddTsksfalse(true);
            } else {
              console.log(TasksSac);
              props.setBellmodel(true);
              props.setBualdEdit(localed == 'ar_MA' ? 'تعديل' : 'Edit');
            }
            props.setBuald(false);
          }}
        />
      ) : null}

      {props.Addtaskfalse ? (
        <Modeltasksection
          onpress={() => {
            props.bulidEdit === 'إضافة' || props.bulidEdit === 'add'
              ? setTasks({...Tasks, idSub: uuid.v4()})
              : null;
            getDatalabrrs();
          }}
          Tasks={Tasks}
          Datetiemarthfals={Datetiemarthfals}
          FalseCalulter={FalseCalulter}
          setDataTiermarthfels={setDataTiermarthfels}
          setDataTiermarthwrit={setTasks}
          Datetiemarthwrit={Tasks.TimeSub}
          bulidEditr={props.bulidEdit}
          Faslecomplet={falseerr}
          False={liprri}
          chexconsle={cansleshook}
          pushcash={props.Addtaskfalse}
          Pushsetfalse={props.setAddTsksfalse}
          selectedValue={Tasks.arthDath}
          onValueChange={value => setTasks({...Tasks, arthDath: {value}})}
          options={dolars}
          sectiontitle={Tasks.sectiontitle}
          setSectiontitel={value => setTasks({...Tasks, sectiontitle: value})}
          pric={Tasks.sectionpriclabrr}
          setPric={value => setTasks({...Tasks, sectionpriclabrr: value})}
          abzrphtion={Tasks.abzrphtion}
          setAbzrph={value => setTasks({...Tasks, abzrphtion: value})}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
export default CshmonvModul;
