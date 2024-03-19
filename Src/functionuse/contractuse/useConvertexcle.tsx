import {useSelector} from 'react-redux';
import {Tofixed} from './expTemplet';
export default function useConvertexcle(kindpa) {
  const {
    tasksCONTRATID,
    tasksCONTRAT,
    tasksCOVENANT,
    tasksCOVENANTID,
    pageAc,
    localed,
  } = useSelector(state => state.userReducer);
  let arrays = [];

  const arraPrssAcont = () => {
    tasksCOVENANT
      .filter(item => item.ID === tasksCOVENANTID)
      .map((pic, index) =>
        localed === 'ar_MA'
          ? arrays.push({
              ' المبلغ المتبقي': pic.kindmony + Tofixed(pic.thremn),
              'المبلغ الذي تم صرفه ': pic.kindmony + Tofixed(pic.DescPush),
              'اجمالي الحساب ': pic.kindmony + Tofixed(pic.SumCash),
              'حالة الحساب': pic.Done === false ? 'غير منتهيه' : 'منتهيه',
              'تاريخ الانشاء': pic.TimeDate,
              'تفاصيل الصرف': pic.describtion,
              'رقم الحساب/اسم الحساب': pic.name,
            })
          : arrays.push({
              'spent amount': pic.kindmony + Tofixed(pic.DescPush),
              'total account': pic.kindmony + Tofixed(pic.SumCash),
              'Account status': pic.Done === false ? 'context' : 'finshed',
              'date creat': pic.TimeDate,
              'Exchange details': pic.describtion,
              'name or number account ': pic.name,
            }),
      );
    tasksCOVENANT
      .find(item => item.ID === tasksCOVENANTID)
      ?.arrayOprition.forEach((item, index) =>
        localed === 'ar_MA'
          ? arrays.push({
              ' المبلغ المتبقي': item.kindmony + Tofixed(item.thremn),
              'تاريخ الصرف': item.TimeCovenant,
              'مبلغ الذي تم صرفه': Tofixed(item.Covenantday),
              'تفاصيل الصرف': item.Describtions,
              'اسم الشخص المستلم': item.nameReceiving,
              م: index + 1,
            })
          : arrays.push({
              'Amount th remn': Tofixed(item.thremn),
              'Spent date': item.TimeCovenant,
              'Spent amount': Tofixed(item.Covenantday),
              'Evacuation details': item.Describtions,
              'The name of the recipient': item.nameReceiving,
              m: index + 1,
            }),
      );
  };
  const arraPrssAcontAll = () => {
    tasksCOVENANT.map((pic, index) =>
      localed === 'ar_MA'
        ? arrays.push({
            'المبلغ المتبقي': pic.kindmony + Tofixed(pic.thremn),
            'المبلغ الذي تم صرفه ': pic.kindmony + Tofixed(pic.DescPush),
            'اجمالي الحساب ': pic.kindmony + Tofixed(pic.SumCash),
            'حالة الحساب': pic.Done === false ? 'غير منتهيه' : 'منتهيه',
            'تاريخ الانشاء': pic.TimeDate,
            'تفاصيل الصرف': pic.describtion,
            'رقم الحساب/اسم الحساب': pic.name,
          })
        : arrays.push({
            'spent amount': pic.kindmony + Tofixed(pic.DescPush),
            'total account': pic.kindmony + Tofixed(pic.SumCash),
            'Account status': pic.Done === false ? 'context' : 'finshed',
            'date creat': pic.TimeDate,
            'Exchange details': pic.describtion,
            'name or number account ': pic.name,
          }),
    );
  };
  const arraPrssAcontAllSup = () => {
    tasksCOVENANT?.map(i =>
      i.arrayOprition.forEach((item, index) =>
        localed === 'ar_MA'
          ? arrays.push({
              'المبلغ المتبقي': item.kindmony + Tofixed(item.thremn),
              'تاريخ الصرف': item.TimeCovenant,
              'مبلغ الذي تم صرفه': Tofixed(item.Covenantday),
              'تفاصيل الصرف': item.Describtions,
              'اسم الشخص المستلم': item.nameReceiving,
              'اسم او رقم الحساب المستخدم': item.nameCounte,
              'م ': index + 1,
            })
          : arrays.push({
              'Amount th remn': Tofixed(item.thremn),
              'Spent date': item.TimeCovenant,
              'Spent amount': Tofixed(item.Covenantday),
              'Evacuation details': item.Describtions,
              'The name of the recipient': item.nameReceiving,
              'The name or number the Counte': item.nameCounte,
              'm ': index + 1,
            }),
      ),
    );
  };

  const arraPresAconssh = () => {
    switch (pageAc) {
      case 'InComing':
        return arraPrssAcontAll();
      case 'Outgogin':
        return arraPrssAcontAllSup();
      case 'Residual':
        return arraPrssAcontAll();
      // default:
      //   return state;
    }
  };

  const arraPrssContrct = () => {
    tasksCONTRAT
      .filter(item => item.ID === tasksCONTRATID)
      .map((pic, index) =>
        localed === 'ar_MA'
          ? arrays.push({
              ' اجمالي الحساب بالريال اليمني': Tofixed(pic.SumِYR),
              'اجمالي الحساب بالريال السعودي ': Tofixed(pic.SumِSR),
              'اجمالي الحساب بالدولار ': Tofixed(pic.SumDollar),
              'حالة الحساب': pic.Done === false ? 'نشطة' : 'منتهيه',
              'وقت انشاء الحساب': pic.Timeminet,
              'تاريخ انشاء الحساب': pic.Datetiem,
              'اسم/رقم الحساب': pic.sectionidnfy,
            })
          : arrays.push({
              'Total account in Yemeni riyals': Tofixed(pic.SumYR),
              'Total Account in Saudi Riyals': Tofixed(pic.SumSR),
              'Total Account in Dollars': Tofixed(pic.SumDollar),
              'Account Status': pic.Done === false ? 'active' : 'finished',
              'Account creation time': pic.Timeminet,
              'Account Creation Date': pic.Datetiem,
              'Account Name': pic.sectionidnfy,
            }),
      );
    tasksCONTRAT
      .find(item => item.ID === tasksCONTRATID)
      ?.databuld.forEach((item, index) =>
        localed === 'ar_MA'
          ? arrays.push({
              'اسم/بيان النفقات': item.sectiontitle,
              الوصف: item.abzrphtion,
              'تاريخ انشاء قسم النفقات': item.Time,
              'وقت انشاء قسم النفقات': item.Timeminet,
              'اجمالي القسم بالريال اليمني': Tofixed(item.SumِYR),
              'اجمالي القسم بالريال السعودي': Tofixed(item.SumِSR),
              'اجمالي القسم بالدولار ': Tofixed(item.SumDollar),
            })
          : arrays.push({
              'Expense Name/Statement': item.sectiontitle,
              description: item.abzrphtion,
              'Expense department creation date': item.time,
              'Expense section creation time': item.Timeminet,
              'Total section in Yemeni rials': Tofixed(item.SumYR),
              'Total Section in Saudi Riyals': Tofixed(item.SumSR),
              'Total section in dollars': Tofixed(item.SumDollar),
            }),
      );
    tasksCONTRAT
      .find(item => item.ID === tasksCONTRATID)
      ?.databuld.forEach(item =>
        item.Databes.map((it, index) =>
          localed == 'ar_MA'
            ? arrays.push({
                ' بيان النفقات الفرعي': it.sectiontitle,
                الوصف: it.abzrphtion,
                تاريخ: it.TimeSub,
                الوقت: it.Timeminet,
                المبلغ: Tofixed(it.sectionpriclabrr) + it.arthDath,
                م: index + 1,
              })
            : arrays.push({
                'Substatement of Expenditure': it.sectiontitle,
                Description: it.abzrphtion,
                date: it.TimeSub,
                time: it.Timeminet,
                amount: Tofixed(it.sectionpriclabrr) + it.arthDath,
                m: index + 1,
              }),
        ),
      );
  };
  const arraPrssContrctAll = () => {
    tasksCONTRAT.map((pic, index) =>
      localed === 'ar_MA'
        ? arrays.push({
            ' اجمالي الحساب بالريال اليمني': Tofixed(pic.SumِYR),
            'اجمالي الحساب بالريال السعودي ': Tofixed(pic.SumِSR),
            'اجمالي الحساب بالدولار ': Tofixed(pic.SumDollar),
            'حالة الحساب': pic.Done === false ? 'نشطة' : 'منتهيه',
            'وقت انشاء الحساب': pic.Timeminet,
            'تاريخ انشاء الحساب': pic.Datetiem,
            'اسم/رقم الحساب': pic.sectionidnfy,
          })
        : arrays.push({
            'Total account in Yemeni riyals': Tofixed(pic.SumYR),
            'Total Account in Saudi Riyals': Tofixed(pic.SumSR),
            'Total Account in Dollars': Tofixed(pic.SumDollar),
            'Account Status': pic.Done === false ? 'active' : 'finished',
            'Account creation time': pic.Timeminet,
            'Account Creation Date': pic.Datetiem,
            'Account Name': pic.sectionidnfy,
          }),
    );
  };
  const arraPrss = () => {
    switch (kindpa) {
      case 'SubprodectContracting':
        return arraPrssContrct();
      case 'Contracting':
        return arraPrssContrctAll();
      case 'AccountantSub':
        return arraPrssAcont();
      case 'AccountantInComi':
        return arraPresAconssh();
      // default:
      //   return state;
    }
  };

  return {arraPrss, arrays};
}
