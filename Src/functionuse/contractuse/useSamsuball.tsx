import {useState} from 'react';
import useAsynsStorGitContrctr from './useAsynsStorGitContrctr';
export default function useSamsuball() {
  const {SumItemsSetStrog} = useAsynsStorGitContrctr('TasksCONTRAT');
  const Sumsup = newadd => {
    let objectsDolerFalse = [];
    let objectsYRFalse = [];
    let objectsSRFalse = [];
    let objectsDolertrue = [];
    let objectsYRtrue = [];
    let objectsSRtrue = [];

    newadd
      .filter(pic => pic.Done === false)
      .forEach((item, index) => {
        objectsDolerFalse.push({x: parseInt(item.SumDollar)});
        objectsSRFalse.push({x: parseInt(item.SumِSR)});
        objectsYRFalse.push({x: parseInt(item.SumِYR)});
      });
    newadd
      .filter(pic => pic.Done === true)
      .forEach((item, index) => {
        objectsDolertrue.push({x: parseInt(item.SumDollar)});
        objectsSRtrue.push({x: parseInt(item.SumِSR)});
        objectsYRtrue.push({x: parseInt(item.SumِYR)});
      });
    const sumDolerF = objectsDolerFalse.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    //sum reduce SR
    const sumYRF = objectsYRFalse.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumSRF = objectsSRFalse.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    //
    const sumDolerT = objectsDolertrue.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    //sum reduce SR
    const sumYRT = objectsYRtrue.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumSRT = objectsSRtrue.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const SumsFalse = {
      sumSR: sumSRF,
      sumYR: sumYRF,
      sumDoler: sumDolerF,
      Sumall: sumSRF + sumYRF + sumDolerF,
    };
    const SumsTrue = {
      sumSR: sumSRT,
      sumYR: sumYRT,
      sumDoler: sumDolerT,
      Sumall: sumSRT + sumYRT + sumDolerT,
    };

    SumItemsSetStrog({SumsFalse, SumsTrue});
  };
  const sumSuball = newadd => {
    let objectsDoler = [];
    let objectsYR = [];
    let objectsSR = [];

    newadd.forEach((item, index) => {
      objectsDoler.push({x: parseInt(item.SumDollar)});
      objectsSR.push({x: parseInt(item.SumِSR)});
      objectsYR.push({x: parseInt(item.SumِYR)});
    });
    const sumDoler = objectsDoler.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    //sum reduce SR
    const sumYR = objectsYR.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumSR = objectsSR.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const Sumsing = {sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler};
    Sumsup(newadd);
    return Sumsing;
    // setSum({...Sumall, sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler});
  };

  return sumSuball;
}
