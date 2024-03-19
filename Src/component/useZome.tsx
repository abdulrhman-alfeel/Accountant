import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setZoom} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
export default function ZomeCom() {
  const {zommIN} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const func = () => {
    dispatch(setZoom(zommIN >= 30 ? 14 : zommIN + 2));
    console.log(zommIN);
  };
  const funcMins = () => {
    dispatch(setZoom(zommIN <= 14 ? 14 : zommIN - 2));
    console.log(zommIN);
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 300,
          zIndex: 1,
            right: 10,
          
          alignSelf: "flex-end",
        }}
        // disabled={zommIN === 30 ? true : false}
        onPress={func}>
        <FontAwesome5 style={{}} name="search-plus" size={25} />
        <Text>{zommIN}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 350,
          zIndex: 1,
            right: 10,
          
          alignSelf: "flex-end",
        }}
        // disabled={zommIN === 30 ? true : false}
        onPress={funcMins}>
        <FontAwesome5 style={{}} name="search-minus" size={25} />
        {/* <Text>{zommIN}</Text> */}
      </TouchableOpacity>
    </View>
  );
}
