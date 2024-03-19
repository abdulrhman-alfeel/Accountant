import {setWitenFalse} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import RNFS from 'react-native-fs';
export default function useSavExport() {
  const {tasksCOVENANT, tasksCONTRAT, sumCONTRAT, sumCOVENANT} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();
  // 'utf8',
  const ImageAcontent = async dataimg => {
    // console.log(dataimg)
    try {
      if (dataimg.length > 0 || tasksCOVENANT.length > 0) {
        let dataAllapplction = {
          Acontent: tasksCOVENANT,
          AcontantImag: dataimg,
          sumAllCovenant: sumCOVENANT,
          Contract: tasksCONTRAT,
          sumAllContrat: sumCONTRAT,
        };
        const url = `${RNFS.DownloadDirectoryPath}/Accountants/Backups`;
        let val = 0
        await RNFS.readDir(url)
          .then(value => {
            console.log(value.length);
            val += value.length + 1
          })
          .catch(err => console.log(err));

        RNFS.mkdir(url).then(async () => {
          RNFS.writeFile(
            `${url}/BaukAup_Accountants${val}.json`,
            JSON.stringify(dataAllapplction),
          )
            .then(() => {
              dispatch(setWitenFalse(false));
            })
            .catch(err => console.log(err));
        });
      } else {
        console.log('empty');
        dispatch(setWitenFalse(false));
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(dataimg);
    // setFalse(false);
    return dataimg;
  };
  return {ImageAcontent};
}
