import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {Tofixed} from '../../functionuse/contractuse/expTemplet';
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlatList} from 'react-native';
export default function Datafooter({Sum, kind}) {
  const [dates, setSetData] = useState(0);
  const {zommIN, localed} = useSelector(state => state.userReducer);
  const onpress = () => {
    dates == 0 ? setSetData(1) : setSetData(0);
  };

  const sumAll = [
    {
      kindMany: 'Outgogin',
      sumSR:
        parseInt(Sum.Outgogin?.sumSR) > 0 ? Tofixed(Sum.Outgogin?.sumSR) : 0,
      sumYR:
        parseInt(Sum.Outgogin?.sumYR) > 0 ? Tofixed(Sum.Outgogin.sumYR) : 0,
      sumDoler:
        parseInt(Sum.Outgogin?.sumDoler) > 0
          ? Tofixed(Sum.Outgogin?.sumDoler)
          : 0,
    },
    {
      kindMany: 'Residual',
      sumSR:
        parseInt(Sum.Residual?.sumSR) > 0
          ? Tofixed(Sum.Residual?.sumSR)
          : Tofixed(Sum.sumCash?.sumSR),
      sumYR:
        parseInt(Sum.Residual?.sumYR) > 0
          ? Tofixed(Sum.Residual.sumYR)
          : Tofixed(Sum.sumCash?.sumYR),
      sumDoler:
        parseInt(Sum.Residual?.sumDoler) > 0
          ? Tofixed(Sum.Residual?.sumDoler)
          : Tofixed(Sum.Outgogin?.sumDoler),
    },
    {
      kindMany: 'InComing',
      sumSR: parseInt(Sum.sumCash?.sumSR) > 0 ? Tofixed(Sum.sumCash?.sumSR) : 0,
      sumYR: parseInt(Sum.sumCash?.sumYR) > 0 ? Tofixed(Sum.sumCash?.sumYR) : 0,
      sumDoler:
        parseInt(Sum.sumCash?.sumDoler) > 0
          ? Tofixed(Sum.Outgogin?.sumDoler)
          : 0,
    },
  ];
  return (
    <>
      <View
        style={{width: '100%', alignItems: 'flex-start', marginHorizontal: 10}}>
        <Pressable
          style={{top: 0}}
          onPress={onpress}
          android_ripple={{color: colors.CURRENT, borderless: true}}>
          <FontAwesome5
            name={dates === 1 ? 'angle-down' : 'angle-up'}
            color={colors.CURRENT}
            size={25}
          />
        </Pressable>
      </View>
      <View
        style={
          dates === 1
            ? {
                backgroundColor: colors.WHITE,
                alignItems: 'center',
                flexDirection: zommIN >= 23 ? 'column' : 'row',
                height:
                  zommIN >= 23 && kind == 'contracting'
                    ? RFValue(180)
                    : zommIN >= 23 && kind !== 'contracting'
                    ? RFValue(100)
                    : RFValue(60),
                padding: RFValue(2),
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }
            : {display: 'none'}
        }>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: RFValue(100),
            height: zommIN >= 23 ? RFValue(40) : RFValue(30),
            alignSelf: 'center',
          }}>
          <Text style={{flex: 1, color: colors.CURRENT, fontSize: zommIN}}>
            {localed == 'ar_MA' ? 'الاجمالي' : 'Total'}
          </Text>
        </View>
        <View style={[{flexDirection: 'column', flex: 1}]}>
          <Pressable
          // onPress={onpress}
          // android_ripple={{color: colors.YALO, borderless: true}}
          >
            <Text
              style={{
                color: colors.CURRENT,
                fontSize: zommIN,
                textAlign: 'center',
                textShadowColor: colors.WHITE,
                textShadowRadius: 0.5,
              }}>
              {/* Tofixed(parseInt(Sum?.Sumall) > 0 ? Sum?.Sumall : 0) */}
              {kind !== 'Outgogin' && kind !== 'Residual'
                ? parseInt(Sum.sumCash?.sum) > 0
                  ? Tofixed(Sum.sumCash?.sum)
                  : 0
                : kind === 'Residual'
                ? parseInt(Sum.Residual?.sum) > 0
                  ? Tofixed(Sum?.Residual.sum)
                  : 0
                : parseInt(Sum.Outgogin?.sum) > 0
                ? Tofixed(Sum?.Outgogin.sum)
                : 0}
            </Text>
          </Pressable>
          <FlatList
            data={sumAll.filter(pic => pic.kindMany === kind)}
            renderItem={({item, index}) => (
              <View
                style={[
                  dates == 0
                    ? {display: 'none'}
                    : {
                        display: 'flex',
                        flex: 2,
                        flexDirection: zommIN >= 23 ? 'column' : 'row',
                        justifyContent: 'space-between',
                      },
                ]}>
                <Text
                  style={[
                    {width: zommIN >= 23 ? '100%' : '30%', fontSize: zommIN},
                    styles.textaddfoter,
                  ]}
                  numberOfLines={1}>
                  {item.sumSR}
                  {localed == 'ar_MA' ? 'ر.ي.س' : 'SR'}
                </Text>
                <Text
                  style={[
                    {width: zommIN >= 23 ? '100%' : '30%', fontSize: zommIN},
                    styles.textaddfoter,
                  ]}
                  numberOfLines={1}>
                  {item.sumYR}
                  {localed == 'ar_MA' ? 'ر.ي' : 'YR'}
                </Text>
                <Text
                  style={[
                    {width: zommIN >= 23 ? '100%' : '30%', fontSize: zommIN},
                    styles.textaddfoter,
                  ]}
                  numberOfLines={1}>
                  ${item.sumDoler}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textaddBottom: {
    // fontFamily:fonts.CAIROREGULARK,
    color: colors.CURRENT,
    fontSize: RFValue(15),
    textAlign: 'center',
    textShadowColor: colors.WHITE,
    textShadowRadius: 0.5,
  },
  textaddfoter: {
    // fontFamily:fonts.CAIROREGULARK,
    color: colors.CURRENT,
    textAlign: 'center',
  },
});
