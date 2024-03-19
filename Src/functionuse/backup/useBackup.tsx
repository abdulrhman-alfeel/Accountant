import RNFS from 'react-native-fs';
import useSavExport from './useSavExport';
import {useSelector} from 'react-redux';
import {setWitenFalse} from '../../redux/actions';
import {useDispatch} from 'react-redux';
export default function useBackup() {
  const {ImageAcontent} = useSavExport();
  const {tasksCOVENANT} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  var tasImag;
  var dataimg = [];

  const PressBackup = async () => {
    // console.log(trusefal);
    dispatch(setWitenFalse(true));
    for (item of tasksCOVENANT) {
      for (pic of item.arrayOprition) {
        for (i of pic.imagop) {
          // console.log(i);
          // const JsonImag = await componentDidMount(i.url);
          await RNFS.readFile(i.url, 'base64').then(date => {
            tasImag = {
              idimgpost: i.idimgpost,
              idSub: pic.id,
              IDCUST: pic.IDCUST,
              urlJson: date,
              fileName: i.fileName,
              type: i.type,
            };
            dataimg.push(tasImag);
          });
        }
      }
    }
    await ImageAcontent(dataimg);
    // setArraImag(arraImagd);
    // console.log(imagdata);
  };
  return {PressBackup};
}
