import {SliderComponent, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import PagerView from 'react-native-pager-view';
import MyTabBar from '../component/myTabBar';
import Outgogin from './Outgogin';
import InComing from './InComing';
import Residual from './Residual';
import useAsynsStorGit from '../functionuse/accountant/useAsynsStorGit';
import {useSelector} from 'react-redux';
export default function My_profile({navigation}) {
  const {localed} = useSelector(state => state.userReducer);
  const {getAsins, SumAsins} = useAsynsStorGit('tasksCOVENANT', navigation);
  let tasks = localed === 'ar_MA' ? 'الوارد' : 'InComing';
  let dabes = localed === 'ar_MA' ? ' المنصرف' : 'Outgogin';
  let convenet = localed === 'ar_MA' ? 'المتبقي' : 'Residual';
  useEffect(() => {
    getAsins();
    SumAsins();
  }, []);
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <Tab.Navigator
        // removeClippedSubviews inverted
        // onTouchMove={()=> {}}
        tabBar={props => <MyTabBar {...props} />}
        initialRouteName="InComing">
        <Tab.Screen
          name="InComing"
          component={InComing}
          options={{tabBarLabel: tasks}}
        />
        <Tab.Screen
          name="Outgogin"
          component={Outgogin}
          options={{tabBarLabel: dabes}}
        />
        <Tab.Screen
          name="Residual"
          component={Residual}
          options={{tabBarLabel: convenet}}
        />
      </Tab.Navigator>
    </PagerView>
  );
}
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
