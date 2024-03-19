import {View, TouchableOpacity, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../constants/colors';
import uuid from 'react-native-uuid';
import {useState} from 'react';
import {setTasksCONTRATID, setPagAcount} from '../redux/actions';
export default function MyTabBar({state, descriptors, navigation, position}) {
  const [pagis, setPag] = useState('');
  const {zommIN} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(pagis);
  // }, []);
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          dispatch(setPagAcount(route.name));
          if (route.name === 'Taskscshmonv') {
            dispatch(setTasksCONTRATID(uuid.v4()));
          }
          setPag(route.name);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          // outputRange: [20,8,6],
          // extrapolate:'extend'
          outputRange: inputRange.map(i => (i === index ? 1 : 3)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              route.name === 'Subprodect'
                ? {display: 'none'}
                : {
                    flex: 1,
                    marginHorizontal: RFValue(5),
                    justifyContent: 'center',
                    marginVertical: RFValue(10),
                    borderBottomWidth: isFocused ? RFValue(2) : 0,
                    padding: RFValue(5),
                    backgroundColor:
                      route.name === 'Taskscshmonv'
                        ? colors.CURRENT
                        : colors.ORANGE,
                    opacity: opacity,
                    borderRadius: route.name === 'Taskscshmonv' ? 100 : 0,
                  }
            }>
            <Animated.Text
              style={{
                fontSize: zommIN,
                justifyContent: 'center',
                alignSelf: 'center',
                color:
                  route.name === 'Taskscshmonv' ? colors.WHITE : colors.BLACK,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
