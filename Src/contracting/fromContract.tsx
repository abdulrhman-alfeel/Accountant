import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTasksCONTRATID} from '../redux/actions';
import Creattaskmove from '../component/postprodctmov/creattaskmove';
import {styles} from './styles';
import {searching} from './Contracting';
import {Tofixed} from '../functionuse/contractuse/expTemplet';
import DatafooterC from '../component/datafooterC';
export default function FromContract({navigation, kind}) {
  const {tasksCONTRAT, sumCONTRAT} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searching.toString());
  }, [searching]);
  const datItem = useCallback(
    searching?.length > 0
      ? tasksCONTRAT.filter(
          item =>
            (item.databuld.find(
              ite =>
                ite.sectiontitle
                  .toLowerCase()
                  .includes(searching?.substring(0, 2)) ||
                ite.abzrphtion
                  .toLowerCase()
                  .includes(searching?.substring(0, 2)) ||
                ite.Databes.find(
                  i =>
                    i.sectiontitle
                      .toLowerCase()
                      .includes(searching?.substring(0, 2)) ||
                    i.sectionpriclabrr
                      .toLowerCase()
                      .includes(searching?.substring(0, 2)) ||
                    i.abzrphtion
                      .toLowerCase()
                      .includes(searching?.substring(0, 2)),
                ),
            ) &&
              item.Done === kind) ||
            (item.sectionidnfy
              .toLowerCase()
              .includes(searching?.substring(0, 2)) &&
              item.Done === kind),
        )
      : tasksCONTRAT.filter(item => item.Done === kind),
    [tasksCONTRAT, searching],
  );

  // const datsum = useCallback(item => {
  //   let sumOpjectD = [];
  //   sumOpjectD.push({
  //     x: parseInt(item.SumDollar),
  //     xx: parseInt(item.SumِSR),
  //     xl: parseInt(item.SumِYR),
  //   });
  //   const dolerd = sumOpjectD.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.x,
  //     0,
  //   );
  //   const rialS = sumOpjectD.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.xx,
  //     0,
  //   );
  //   const riald = sumOpjectD.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.xl,
  //     0,
  //   );
  //   let Sumd = dolerd + rialS + riald;
  //   console.log(rialS);
  //   setSu({sum: Sumd, rials: rialS, rial: riald, doler: dolerd});
  // }, []);
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <Creattaskmove
          keys={index}
          SumDollar={Tofixed(item.SumDollar)}
          onpress={() => {
            dispatch(setTasksCONTRATID(item.ID));
            navigation?.navigate('Subprodect');
          }}
          SumِSR={Tofixed(item.SumِSR)}
          SumِYR={Tofixed(item.SumِYR)}
          sectionidnfy={item.sectionidnfy}
          Datetiem={item.Datetiem}
        />
      );
    },
    [searching],
  );
  return (
    <View style={styles.body}>
      <FlatList
        data={datItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <DatafooterC
        Sum={kind === true ? sumCONTRAT?.SumsTrue : sumCONTRAT?.SumsFalse}
        kind={'contracting'}
      />
    </View>
  );
}
