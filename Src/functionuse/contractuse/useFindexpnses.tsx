import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function useFindexpnses(kindpa) {
  const {tasksCONTRATID, tasksCONTRAT, tasksCOVENANT, tasksCOVENANTID} =
    useSelector(state => state.userReducer);

  let findTaskss;

  if (kindpa === 'AccountantSub') {
    findTaskss = tasksCOVENANT.find(pic => pic.ID === tasksCOVENANTID);
  } else if (kindpa === 'AccountantMudls') {
    findTaskss = tasksCOVENANT.filter(pic => pic.ID === tasksCOVENANTID);
  } else {
    findTaskss = tasksCONTRAT.find(pic => pic.ID === tasksCONTRATID);
  }

  return [findTaskss];
}
