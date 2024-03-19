import React, {useState, useCallback, useMemo} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  TextInput,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from './constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import Dropdown from 'react-native-input-select';
import uuid from 'react-native-uuid';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './component/styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
// import {locale} from './loc?ale';
import ModulsCalculator, {result} from './component/modulsCalculator';
import useAsynsStorGit from './functionuse/accountant/useAsynsStorGit';
import {tost, musTost} from './functionuse/contractuse/expTemplet';
import ModulsView from './component/modulsView';
import ZomeCom from './component/useZome';
import useSamS from './functionuse/accountant/useSamS';

function PushCashCovenant(props) {
  const {localed, zommIN} = useSelector(state => state.userReducer);
  const {tasksCOVENANT, getItemsStroge, tasksCOVENANTID} = useAsynsStorGit(
    'tasksCOVENANT',
    props.navigation,
  );
  const dispatch = useDispatch();
  const sumSuba = useSamS('outGogin');
  const [nameTArg, setNameTarg] = useState('');
  const [nameReceiv, setNameReceiv] = useState('');
  const [descrbtion, setDescrbtion] = useState('');
  const [pushing, setPush] = useState('');
  const [pushSum, setPushProfid] = useState('');
  const [imagop, setImagOpg] = useState([]);
  const [idnotnul, setIdnotnull] = useState(0);
  const [False, setFalse] = useState(false);
  const [bellmodel, setBellmodel] = useState(false);

  //عرض الصور
  const [ImageView, setImagView] = useState('');
  const [ImageViewFalse, setImagViewfalse] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [constrltl, setConstrctl] = useState('');
  const [givinit, setGivinit] = useState('');

  useMemo(() => {
    const index = tasksCOVENANT
      .find((item: {id: string | string[]}) => item.ID === tasksCOVENANTID)
      ?.arrayOprition.find(item => item.id === props.IDEVacu);
    if (index) {
      setNameTarg(index?.nameCounte);
      setDescrbtion(index.Describtions);
      setPush(index.Covenantday);
      setPushProfid(index.Covenantday);
      setImagOpg(index.imagop);
      setNameReceiv(index.nameReceiving);
      setGivinit(localed === 'ar_MA' ? 'تعديل' : 'Edit');
    } else {
      setGivinit(localed === 'ar_MA' ? 'اضف' : 'add');
    }
  }, []);

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 4,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const useclurek = () => {
    setPush(result);
  };
  const Puchchshing = IDEV => {
    setFalse(true);
    let cash = 0;
    let falsing = false;
    let cashing = parseInt(pushing);
    if (pushing.length > 0 && nameTArg.length > 0) {
      let dataching: any[] = [];
      dataching = [...tasksCOVENANT];
      //خاص بالتحويل
      const index = tasksCOVENANT.findIndex((item: {name: string | string[]}) =>
        item.name.includes(nameTArg),
      );
      const datacash = dataching.find(
        (item: {name: string}) => item.name === nameTArg,
      );

      const Editfunction = datacash.arrayOprition.findIndex(
        item => item.id === IDEV,
      );

      if (datacash.DescPush.length > 0) {
        if (Editfunction > -1) {
          const cashingl = parseInt(datacash.DescPush) - parseInt(pushSum);
          cashing = cashingl + cashing;
        } else {
          cashing = parseInt(datacash.DescPush) + cashing;
        }
        if (cashing > parseInt(datacash.SumCash)) {
          tost(
            localed == 'ar_MA'
              ? 'لايمكن اكمال العملية مبلغ الصرف اعلى من المتبقي في الحساب '
              : 'The transaction cannot be completed. The amount of the exchange is higher than the remaining amount in the account',
          );
          falsing = true;
          setFalse(false);
        } else if (cashing === parseInt(datacash.SumCash)) {
          cash = cashing;
          dataching[index].Done = true;
        } else {
          cash = cashing;
          falsing = false;
        }
        // console.log(cashing);
      } else if (parseInt(datacash.SumCash) < cashing) {
        tost(
          localed == 'ar_MA'
            ? 'لايمكن اكمال العملية مبلغ الصرف اعلى من المتبقي في الحساب '
            : 'The transaction cannot be completed. The amount of the exchange is higher than the remaining amount in the account',
        );
        falsing = true;
        setFalse(false);
      } else if (parseInt(datacash.SumCash) === parseInt(pushing)) {
        cash = parseInt(pushing);
        dataching[index].Done = true;
        falsing = false;
      } else {
        cash = parseInt(pushing);
        falsing = false;
      }
      //  arrayOprition
      if (falsing === false) {
        var Tasks = {
          id: IDEV,
          IDCUST: datacash.ID,
          nameCounte: nameTArg,
          nameReceiving: nameReceiv,
          SumCash: datacash.SumCash,
          Covenantday: parseInt(pushing).toString(),
          TimeCovenant: new Date().toLocaleDateString(),
          TimeMinit: new Date().toLocaleTimeString(),
          Describtions: descrbtion,
          imagop: imagop,
          //اجمالي المدفوع لهذا اليوم
          CovenantSum: cash,
          kindmony: datacash.kindmony,
          //المتبقي
          thremn: parseInt(datacash.SumCash) - cash,
        };
        if (Editfunction > -1) {
          datacash.arrayOprition[Editfunction] = Tasks;
          dataching[index].DescPush = cash.toString();
          dataching[index].thremn = parseInt(datacash.SumCash) - parseInt(cash);
        } else {
          datacash?.arrayOprition.push(Tasks);
          dataching[index].DescPush = cash.toString();
          dataching[index].thremn = parseInt(datacash.SumCash) - parseInt(cash);
          falsing = false;
        }
        if (!falsing) {
          sumSuba(dataching);
          getItemsStroge(dataching);
          Emptying();
        }
      }
    } else {
      musTost();
      setFalse(false);
    }
  };
  const Emptying = () => {
    props.setIddelet(false);
    setNameTarg('');
    setDescrbtion('');
    setPush('');
    setFalse(false);
    setImagOpg([]);
    // setConstrctl('');
  };
  const deletImagestorg = namimaguriprov1 => {
    RNFS.unlink(namimaguriprov1).then((err, success) => {
      console.log(err);
      if (err) throw err;
      if (success) {
        tost(
          localed === 'ar_MA'
            ? 'تم الحذف بنجاح'
            : 'Saved the Delet successfully',
        );
      }
    });

    const imagedit = imagop.find(task => task.idimgpost == idnotnul);
    imagop.splice(imagedit, 1);
    // setImagOpg(imagedit);
  };

  const handleClick = async i => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } catch (err) {
      console.warn(err);
    }
    const readGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    const writeGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted');
      return;
    } else {
      onPresuser(i);
    }
  };
  const onPresuser = async lebrar => {
    const newFolder = `${RNFS.DownloadDirectoryPath}/Accountants`;
    const filterimag = imagop.find(task => task.idimgpost === idnotnul);
    const imagedit = imagop.findIndex(task => task.idimgpost === idnotnul);
    let result;
    if (lebrar === 1) {
      result = await launchCamera(options);
    } else {
      result = await launchImageLibrary(options);
    }
    const newFilePath = `${newFolder}/${result.assets[0].fileName}`;
    RNFS.moveFile(result.assets[0].uri, newFilePath).then(() => {
      console.log('move imag' + result.assets[0].uri + 'moveing' + newFilePath);
    });
    // console.log(newFilePath);

    if (result.assets?.length > 0) {
      const puthIm = `file://${newFilePath}`;
      if (filterimag) {
        console.log(JSON.stringify(imagop));
        const image = {
          idimgpost: idnotnul,
          url: puthIm,
          fileName: filterimag.fileName,
          type: result.assets[0].type,
        };
        let imagedata = [];
        imagedata = [...imagop];
        imagedata[imagedit] = image;
        setImagOpg(imagedata);
        setIdnotnull(0);
      } else {
        // console.log(result.assets[0]);
        const imagedata = [...imagop];
        const index = imagedata.length + 1;
        const image = {
          idimgpost: index,
          url: puthIm,
          fileName: result.assets[0].fileName,
          type: result.assets[0].type,
        };
        imagedata.push(image);
        setImagOpg(imagedata);
        // console.log(JSON.stringify(image));
      }
    }
  };

  const listimags = [
    require('./ass/ICONPHOTO.png'),
    require('./ass/ICONPHOTO.png'),
  ];
  const onptions = useCallback(
    tasksCOVENANT
      .filter((item: {Done: boolean}) => item.Done === false)
      .map((pic: {name: any}) => ({
        name: `${pic.name}`,
        code: `${pic.name}`,
      })),
    [],
  );

  const viewImag = (
    <ModulsView
      visble={ImageViewFalse}
      onrequewt={setImagViewfalse}
      ur={ImageView}
    />
  );

  const styleFont = {fontSize: zommIN, padding: 5};
  return (
    <>
      {calculator ? (
        <ModulsCalculator
          visble={calculator}
          onrequewt={setCalculator}
          onprssfounction={() => useclurek()}
        />
      ) : null}
      {ImageViewFalse ? viewImag : null}

      <Modal
        visible={bellmodel}
        transparent
        onRequestClose={() => setBellmodel(false)}
        animationType="fade"
        hardwareAccelerated={true}>
        <TouchableOpacity
          onPress={() => setBellmodel(false)}
          style={styles.centered_IMag}>
          <View style={styles.mod1al}>
            <View style={styles.button}>
              <Pressable
                android_ripple={{color: colors.CURRENT}}
                onPress={() => {
                  handleClick(2);
                  setBellmodel(false);
                }}
                style={styles.im}>
                <FontAwesome5 name="images" size={30} color={colors.WHITE} />
              </Pressable>
              <Pressable
                android_ripple={{color: colors.CURRENT}}
                onPress={() => {
                  handleClick(1);
                  setBellmodel(false);
                }}
                style={styles.im}>
                <FontAwesome5 name="camera" size={30} color={colors.WHITE} />
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal
        visible={props.iddelet}
        transparent
        onRequestClose={() => props.setIddelet(false)}
        animationType="fade"
        hardwareAccelerated={true}>
        <ZomeCom />
        <Pressable
          onPress={() => {
            nameTArg.length <= 0 ? props.setIddelet(false) : null;
          }}
          style={styles.centered_view}>
          <Pressable
            onPress={() => props.setIddelet(true)}
            style={[
              {height: zommIN >= 22 ? '100%' : RFValue(500), width: '85%'},
              styles.bell_mod1al,
            ]}>
            <View style={styles.bell_body}>
              <Text style={[styleFont, styles.textinpu]}>
                ادخل بيانات الصرف من فضلك
              </Text>
            </View>
            <View style={styles.bell_button}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => {
                    Emptying();
                    props.setIddelet(false);
                  }}
                  style={{
                    marginVertical: RFValue(10),
                    marginHorizontal: RFValue(15),
                    alignSelf: 'flex-start',
                  }}>
                  <FontAwesome5Icon
                    name="times"
                    size={zommIN + 6}
                    color={colors.CURRENT}
                  />
                </TouchableOpacity>
                <View style={styles.cansall}>
                  <View style={styles.inputtitelcounter}>
                    <Dropdown
                      labelStyle={[
                        styleFont,
                        {
                          top: 5,
                          textAlign: 'center',
                          paddingRight: -3,
                          color: colors.CURRENT,
                        },
                      ]}
                      placeholder={
                        localed === 'ar_MA'
                          ? 'اختر حساب لصرف منه'
                          : 'Choose an account to spend from'
                      }
                      placeholderStyle={{fontSize: zommIN}}
                      selectedItemStyle={{color: colors.RED}}
                      dropdownIconStyle={{
                        position: 'absolute',
                        right: 5,
                        top: 12,
                      }}
                      dropdownStyle={zommIN >= 22 ? null : styles.taskhom}
                      dropdownContainerStyle={styles.contenar}
                      checkboxLabelStyle={{
                        fontSize: zommIN,
                        color: colors.CURRENT,
                      }}
                      options={onptions}
                      optionLabel={'code'}
                      optionValue={'name'}
                      selectedValue={nameTArg}
                      onValueChange={value => setNameTarg(value)}
                      primaryColor={'green'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '95%',
                    flexDirection: zommIN >= 19 ? 'column' : 'row',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                  }}>
                  <View style={styles.mossdd}>
                    <Text style={[styleFont, styles.textmos]}>
                      {localed === 'ar_MA'
                        ? 'اجمالي مبلغ الحساب'
                        : 'total account amount'}
                    </Text>
                    <View
                      style={[
                        {backgroundColor: colors.WHITE},
                        styles.inputtitelcounter,
                      ]}>
                      <Text
                        style={[
                          {
                            flex: 1,
                            height: zommIN >= 20 ? RFValue(40) : RFValue(30),
                          },
                          styleFont,
                          styles.inputdecerb,
                        ]}>
                        {tasksCOVENANT.filter(
                          (item: {name: string}) => item.name === nameTArg,
                        ).length > 0
                          ? tasksCOVENANT?.find(
                              (item: {name: string}) => item.name === nameTArg,
                            ).SumCash
                          : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.mossdd}>
                    <Text style={[styleFont, styles.textmos]}>
                      {localed === 'ar_MA' ? 'المبلغ المصروف' : 'Amount spent'}
                    </Text>
                    <View
                      style={[
                        {backgroundColor: colors.WHITE},
                        styles.inputtitelcounter,
                      ]}>
                      <Text
                        style={[
                          {
                            flex: 1,
                            height: zommIN >= 20 ? RFValue(40) : RFValue(30),
                          },
                          styleFont,
                          styles.inputdecerb,
                        ]}>
                        {tasksCOVENANT.find(
                          (item: {name: string}) => item.name === nameTArg,
                        )?.DescPush.length > 0
                          ? tasksCOVENANT.find(
                              (item: {name: string}) => item.name === nameTArg,
                            )?.DescPush
                          : 0}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.mossdd}>
                  <View style={{display: 'flex', marginBottom: 10}}>
                    <View style={styles.inputtitelcounterinput}>
                      <Pressable
                        android_ripple={{color: colors.YALO, borderless: true}}
                        style={{top: 20, left: -10, zIndex: 1}}
                        onPress={() => setCalculator(true)}>
                        <FontAwesome5Icon
                          name="calculator"
                          size={zommIN + 6}
                          color={colors.GREYD}
                        />
                      </Pressable>
                      <TextInput
                        maxLength={31}
                        style={[{width: '80%'}, styleFont, styles.inputdecerb]}
                        keyboardType="number-pad"
                        placeholder={
                          localed === 'ar_MA'
                            ? 'المبلغ الذي سيتم صرفه الان'
                            : 'The amount that will be spent now'
                        }
                        value={pushing}
                        onChangeText={value => setPush(value)}
                      />
                    </View>
                  </View>
                  <TextInput
                    style={[
                      styleFont,
                      {
                        borderWidth: 1,
                        width: 200,
                        borderRadius: 15,
                        height: zommIN >= 22 ? 70 : 35,
                        marginBottom: 10,
                        textAlign: 'center',
                      },
                      styleFont,
                    ]}
                    placeholder={
                      localed === 'ar_MA'
                        ? 'اسم الشخص المستلم'
                        : 'The name of the recipient'
                    }
                    value={nameReceiv}
                    onChangeText={value => setNameReceiv(value)}
                  />
                  <View style={styles.inputtitelcounterinput}>
                    <TextInput
                      style={[{fontSize: zommIN}, styles.inputDiscripb]}
                      multiline
                      placeholderTextColor={colors.CURRENT}
                      placeholder={
                        localed === 'ar_MA'
                          ? 'تفاصيل الصرف'
                          : 'Exchange details'
                      }
                      value={descrbtion}
                      onChangeText={value => setDescrbtion(value)}
                    />
                  </View>
                  {imagop.length >= 1 ? (
                    <View style={styles.sactionImag}>
                      {imagop.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setIdnotnull(item.idimgpost);
                          }}>
                          <View style={styles.Imaghom}>
                            <TouchableHighlight
                              onPress={() => {
                                setImagView(item.url);
                                setImagViewfalse(true);
                              }}
                              style={[
                                {width: zommIN * 6, height: zommIN * 6},
                                styles.Imaghomid,
                              ]}>
                              <Image
                                resizeMode="stretch"
                                style={[
                                  {width: zommIN * 6, height: zommIN * 6},
                                  styles.imag,
                                ]}
                                source={{uri: item.url, cache: 'force-cache'}}
                              />
                            </TouchableHighlight>
                            <TouchableOpacity
                              onPress={() => {
                                deletImagestorg(item.url);
                                setIdnotnull(item.idimgpost);
                              }}
                              style={{
                                backgroundColor: colors.WHITE,
                                borderRadius: RFValue(10),
                                width: RFValue(18),
                                height: RFValue(18),
                                position: 'absolute',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                alignSelf: 'flex-end',
                              }}>
                              <FontAwesome5
                                name="trash"
                                size={15}
                                color={'#ff3636'}
                              />
                            </TouchableOpacity>
                          </View>
                        </TouchableOpacity>
                      ))}
                      <TouchableOpacity
                        onPress={() => {
                          setIdnotnull(uuid.v4);
                          setBellmodel(true);
                        }}>
                        <View style={styles.Imaghom}>
                          <View
                            style={[
                              {width: zommIN * 6, height: zommIN * 6},
                              styles.Imaghomid,
                            ]}>
                            <Image
                              resizeMode="stretch"
                              style={{width: RFValue(30), height: RFValue(30)}}
                              source={require('./ass/ICONPHOTO.png')}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.sactionImag}>
                      {listimags.map((img, index) => (
                        <View key={index}>
                          <TouchableOpacity
                            onPress={() => {
                              setIdnotnull(uuid.v4);
                              setBellmodel(true);
                            }}>
                            <View style={styles.Imaghom}>
                              <View
                                style={[
                                  {width: zommIN * 6, height: zommIN * 6},
                                  styles.Imaghomid,
                                ]}>
                                <Image
                                  resizeMode="stretch"
                                  style={{
                                    width: RFValue(30),
                                    height: RFValue(30),
                                  }}
                                  source={img}
                                />
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
            {False ? (
              <ActivityIndicator color={colors.WHITE} size={20} />
            ) : (
              <Pressable
                android_ripple={{color: colors.WHITE, borderless: true}}
                onPress={() => Puchchshing(props.IDEVacu)}
                style={[
                  {width: RFValue(150), top: -20},
                  styles.inputtitelcounterbuton,
                ]}>
                <Text style={[{fontSize: zommIN}, styles.inputdecerbuttom]}>
                  {localed === 'ar_MA'
                    ? givinit === 'تعديل'
                      ? 'تعديل'
                      : 'صرف'
                    : givinit === 'Edit'
                    ? 'edit'
                    : 'Cashing'}
                </Text>
              </Pressable>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

export default PushCashCovenant;
