import {setWitenFalse} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import RNFS from 'react-native-fs';
import useAsynsStorGit from '../accountant/useAsynsStorGit';
import useAsynsStorGitContrctr from '../contractuse/useAsynsStorGitContrctr';
import DocumentPicker from 'react-native-document-picker';
import {tost} from '../contractuse/expTemplet';
export default function useSavImagImport() {
  // const {tasksCOVENANT, convImge, tasksCONTRAT, sumCONTRAT, sumCOVENANT} =
  //   useSelector(state => state.userReducer);
  const {SumItemsSetStroge, getItemsStroge} = useAsynsStorGit(
    'tasksCOVENANT',
    'outGogi',
  );
  const {SumItemsSetStrog, SetItems} = useAsynsStorGitContrctr('TasksCONTRAT');
  const dispatch = useDispatch();
  // 'utf8'
  const importData = async () => {
    try {
      await DocumentPicker.pick()
        .then(async file => {
          dispatch(setWitenFalse(true));
          console.log(file[0].uri);
          await RNFS.readFile(file[0].uri).then(async date => {
            var user = JSON.parse(date);
            // setImage(ImagBack.push(user));
            await AsyncData(user);
            await componIMport(user);
            // getItemsStroge(user);
            // console.log(user);
          });
        })
        .catch(error => {
          console.log(error);
        });
      // const outputfile = `${RNFS.DownloadDirectoryPath}/Accountants/BaukAup_Accountants.json`;
    } catch (err) {
      console.log(err);
    }
  };

  const componIMport = async date => {
    // console.warn(ImagBack);
    date.AcontantImag.map(async (item, index) => {
      const outputfile = `${RNFS.DownloadDirectoryPath}/Accountants/${item.fileName}`;
      await RNFS.writeFile(outputfile, item.urlJson, 'base64')
        .then(r => {
          // console.log(r);
          dispatch(setWitenFalse(false));
        })
        .catch(err => {
          console.log(err);
          if (err) {
            tost(err);
            dispatch(setWitenFalse(false));
          }
        });
    });
  };

  const AsyncData = data => {
    getItemsStroge(data.Acontent);
    SumItemsSetStroge(data.sumAllCovenant);
    SetItems(data.Contract);
    SumItemsSetStrog(data.sumAllContrat);
  };

  return {importData};
}

// const ImageAcontent = () => {
//   setFalse(true);
//   const dataimg = [...ImagBack];
//   tasksCOVENANT.forEach(item => {
//     item.arrayOprition.forEach((pic, index) => {
//       pic.imagop.forEach(async i => {
//         // const JsonImag = await componentDidMount(i.url);
//         await RNFS.readFile(i.url, 'base64').then(date => {
//           // var databis = Buffer.from(date);
//           const JsonImag = JSON.stringify(date);
//           // console.log(databis);
//           var tasImag = {
//             idimgpost: i.idimgpost,
//             idSub: pic.id,
//             IDCUST: pic.IDCUST,
//             urlJson: date,
//             fileName: i.fileName,
//             type: i.type,
//           };
//           if (JsonImag.length > 0) {
//             setImage(dataimg.concat(tasImag));
//           }
//         });
//       });
//     });
//   });
// };
