import {useState} from 'react';

export default function useSamsub() {
  const [Sum, setSum] = useState({
    sumSR: 0,
    sumDoler: 0,
    sumYR: 0,
  });

  const sumSub = finddata => {
    let objectsDoler = [];
    let objectYR = [];
    let objectSR = [];
    finddata?.Databes.forEach((item, index) => {
      item.arthDath === '$' || item.arthDath === 'دولار امريكي'
        ? objectsDoler.push({x: parseInt(item.sectionpriclabrr)})
        : item.arthDath === 'ريال سعودي' || item.arthDath === 'SR'
        ? objectSR.push({x: parseInt(item.sectionpriclabrr)})
        : objectYR.push({x: parseInt(item.sectionpriclabrr)});
    });

    const sumSR = objectSR.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumDoler = objectsDoler.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );
    const sumYR = objectYR.reduce(
      (accumulator, currentValue) => accumulator + currentValue.x,
      0,
    );

    return {sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler};
    // setSum({...Sum, sumSR: sumSR, sumYR: sumYR, sumDoler: sumDoler});
  };

  return [sumSub, Sum];
}
