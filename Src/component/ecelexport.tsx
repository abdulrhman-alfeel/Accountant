import React, {useState} from 'react';
import RNFS from 'react-native-fs';
import ReactNetiv, {
  PermissionsAndroid,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import XLSX from 'xlsx';
import {tost} from '../functionuse/contractuse/expTemplet';
import FileViewer from 'react-native-file-viewer';
import {colors} from '../constants/colors';
export default function ExportExcel({
  text,
  onprestyle,
  onpressecel,
  options,
  caseuTarg,
  findJson,
}) {
  const [count, setCount] = useState(0);
  const {tasksCOVENANT, tasksCONTRAT, localed} = useSelector(
    state => state.userReducer,
  );

  const exportToExcel = async () => {
    setCount(count + 1);

    // const table = elementRef.current('elemnts');
    let wb = XLSX.utils.book_new();
    // let ws = XLSX.utils.json_to_sheet(options)

    let ws = XLSX.utils.json_to_sheet(options);

    XLSX.utils.book_append_sheet(wb, ws, 'Users');

    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    // Write generated excel to Storage

    const puting = `${RNFS.DownloadDirectoryPath}/Accountants/Accountant_${
      caseuTarg === 'AllList'
        ? 'AllList'
        : caseuTarg?.name?.length > 0
        ? caseuTarg.name
        : caseuTarg?.sectionidnfy?.length > 0
        ? caseuTarg.sectionidnfy
        : 'AllList'
    }_${count}.xlsx`;
    RNFS.writeFile(puting, wbout, 'ascii')
      .then(r => {
        console.log('Success', r);
        //
        FileViewer.open(puting).catch(error => {
          tost(
            localed === 'ar_MA'
              ? 'لايوجد تطبيق مثبت لديك يفتح هذا الملف'
              : error,
          );
        });
        tost(
          localed === 'ar_MA'
            ? 'تم التحويل إلى ملف Excel  بنجاح'
            : 'Converted to Excel successfully',
        );
      })
      .catch(e => {
        console.log('Error', e);
      });
    console.log(puting);
  };

  const handleClick = async () => {
    try {
      // Check for Permission (check if permission is already given or not)
      let isPermitedExternalStorage = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (!isPermitedExternalStorage) {
        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          newFunction(),
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          // exportToExcelAccountant();
          // kindpag === 'contracting'
          //   ? exportToExcel()
          //   : exportToExcelAccountant();
          exportToExcel();
          console.log('Permission granted');
        } else {
          // Permission denied
          console.log('Permission denied');
        }
      } else {
        // Already have Permission (calling our exportDataToExcel function)
        exportToExcel();
        // kindpag === 'contracting' ? exportToExcel() : exportToExcelAccountant();
      }
    } catch (e) {
      console.log('Error while checking permission');
      console.log(e);
      return;
    }
  };
  const data = () => {
    let JsonData = [];
    switch (findJson) {
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
        onPress={e => {
          onpressecel();
          const JsonData = data();
          JsonData.length > 0
            ? handleClick()
            : tost(
                localed == 'ar_MA'
                  ? 'لايوجد لديك بيانات مسجلة'
                  : 'You have no recorded data',
              );
        }}
        style={onprestyle}>
        <Text style={text}>
          {localed === 'ar_MA' ? 'Excel تحويل' : 'Excel Converter'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
// RNFS.openFile(filePath, 'application/pdf')
// .then(() => console.log('File opened successfully'))
// .catch(error => console.error('Error opening file', error));
function newFunction(): ReactNetiv.Rationale | undefined {
  return {
    title: 'Storage permission needed',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  };
}
