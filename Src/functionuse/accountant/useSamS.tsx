import {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import useAsynsStorGit from './useAsynsStorGit';
export default function useSamS(navigation) {
  const {SumItemsSetStroge} = useAsynsStorGit('tasksCOVENANT', navigation);
  const [Sumall, setSum] = useState({
    sumSR: 0,
    sumDoler: 0,
    sumYR: 0,
  });
  const sumSub = kPren => {
    const sumReduc = objectsDoler.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    return sumReduc;
    // setSum({...Sum, sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler});
  };

  const sumSuba = newTasks => {
    let objectsDolerC = [];
    let objectsDolerP = [];
    let objectsDolerT = [];
    let objectSRC = [];
    let objectSRP = [];
    let objectSRT = [];
    let objectYRC = [];
    let objectYRP = [];
    let objectYRT = [];

    newTasks.forEach((item, index) => {
      if (item.kindmony === '$' || item.kindmony === 'دولار امريكي') {
        objectsDolerC.push({x: parseInt(item.SumCash)});
        objectsDolerP.push({
          x: parseInt(item.DescPush) > 0 ? parseInt(item.DescPush) : 0,
        });
        objectsDolerT.push({
          x: parseInt(item.thremn) > 0 ? parseInt(item.thremn) : 0,
        });
      } else if (item.kindmony === 'ريال سعودي' || item.kindmony === 'SR') {
        objectSRC.push({x: parseInt(item.SumCash)});
        objectSRP.push({
          x: parseInt(item.DescPush) > 0 ? parseInt(item.DescPush) : 0,
        });
        objectSRT.push({
          x: parseInt(item.thremn) > 0 ? parseInt(item.thremn) : 0,
        });
      } else {
        objectYRC.push({x: parseInt(item.SumCash)});
        objectYRP.push({
          x: parseInt(item.DescPush) > 0 ? parseInt(item.DescPush) : 0,
        });
        objectYRT.push({
          x: parseInt(item.thremn) > 0 ? parseInt(item.thremn) : 0,
        });
      }
    });

    //sumCash
    const sumSRC = objectSRC.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumDolerC = objectsDolerC.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumYRC = objectYRC.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    //Push
    const sumSRP = objectSRP.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumDolerP = objectsDolerP.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumYRP = objectYRP.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    // the remn
    const sumSRR = objectSRT.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumDolerR = objectsDolerT.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumYRR = objectYRT.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumC = sumSRC + sumYRC + sumDolerC;
    const sumP = sumSRP + sumYRP + sumDolerP;
    const sumR = sumSRR + sumYRR + sumDolerR;
    const SumSush = {
      sumSR: sumSRC,
      sumYR: sumYRC,
      sumDoler: sumDolerC,
      sum: sumC,
    };
    const Push = {sumSR: sumSRP, sumYR: sumYRP, sumDoler: sumDolerP, sum: sumP};
    const remn = {sumSR: sumSRR, sumYR: sumYRR, sumDoler: sumDolerR, sum: sumR};
    const sumall = {sumCash: SumSush, Outgogin: Push, Residual: remn};
    console.log(sumall);
    SumItemsSetStroge(sumall);
    // setSum({...Sumall, sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler});
  };

  return sumSuba;
}
