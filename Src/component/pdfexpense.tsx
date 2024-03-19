import React, {useState} from 'react';
import ReactNetiv, {
  Text,
  ToastAndroid,
  TouchableOpacity,
  PermissionsAndroid,
  View,
} from 'react-native';
import htmlToPdf from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import {useSelector} from 'react-redux';
import FileViewer from 'react-native-file-viewer';
import {tost} from '../functionuse/contractuse/expTemplet';
import useFindexpnses from '../functionuse/contractuse/useFindexpnses';
//  const CustomPdfView = requireNativeComponent();
function newFunction(): ReactNetiv.Rationale | undefined {
  return {
    title: 'Storage permission needed',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  };
}

export default function Pdfexpense(props): JSX.Element {
  const [findTaskss] = useFindexpnses(props.findJson);
  const {tasksCONTRAT, tasksCOVENANT,tasksCOVENANTID, localed} = useSelector(
    state => state.userReducer,
  );

  let id = 0;
  const createPDF = async () => {
    console.log(tasksCOVENANTID);
    const file = await htmlToPdf.convert(props.options);
    console.log(file.filePath);
    ToastAndroid.showWithGravity(
      localed === 'ar_MA'
        ? 'تم التحويل إلى ملف pdf  بنجاح'
        : 'Converted to PDF successfully',
      ToastAndroid.CENTER,
      ToastAndroid.SHORT,
    );
    const fileExistS = await RNFS.exists(file.filePath);
    const newFilePath = `${RNFS.DownloadDirectoryPath}/Accountants/Acontnt${
      findTaskss?.name?.length > 0
        ? findTaskss?.name
        : findTaskss?.sectionidnfy?.length > 0
        ? findTaskss?.sectionidnfy
        : props.findJson
    }.pdf`;
    console.log(newFilePath);
    // access
    await RNFS.moveFile(file.filePath, newFilePath).then(() => {
      console.log('move imag' + file.filePath + 'moveing' + newFilePath);
    });
    FileViewer.open(newFilePath) // absolute-path-to-my-local-file.
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
    // RNFS.openFile(file.filePath, 'application/pdf')
    //   .then(() => console.log('File opened successfully'))
    //   .catch(error => console.error('Error opening file', error));
    if (!fileExistS) {
      console.log('file doesnt exist');
      return;
    }
  };

  const handleClick = async () => {
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
      createPDF();
    }
  };
  const data = () => {
    let JsonData = [];
    switch (props.findJson) {
      case 'SubprodectContracting':
        return (JsonData = tasksCONTRAT);
      case 'Contracting':
        return (JsonData = tasksCONTRAT);
      case 'AccountantSub':
        return (JsonData = tasksCOVENANT);
      case 'AccountantInComi':
        return (JsonData = tasksCOVENANT);
      default:
        return JsonData;
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={props.onprestyle}
        onPress={() => {
          props.onpressfale();
          const JsonData = data();
          JsonData.length > 0
            ? handleClick()
            : tost(
                localed == 'ar_MA'
                  ? 'لايوجد لديك بيانات مسجلة'
                  : 'You have no recorded data',
              );
        }}>
        <Text style={props.text}>
          {localed === 'ar_MA' ? 'تحويل PDF' : 'PDF Converter'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
