import {useSelector} from 'react-redux';
import useFindexpnses from './useFindexpnses';
import {useEffect} from 'react';
export default function useConvertpdf(carmsu, count, kindpa) {
  const {pageAc, localed} = useSelector(state => state.userReducer);
  const [findTaskss] = useFindexpnses(kindpa);
  const {tasksCONTRATID, tasksCONTRAT, tasksCOVENANT, tasksCOVENANTID} =
    useSelector(state => state.userReducer);
  let options = {};

  let ContrctingSub = {
    html: `
      <!DOCTYPE html>
      <html lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <Style>
        body{
            width: 95%;
            margin: auto;
            margin-top: 35px;
        }
        table {
        border-collapse: collapse;
        width: 90%;
        color: #333;
        font-family: Arial, sans-serif;
        font-size: 8px;
        text-align: left;
        padding: 5px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
      } 
      table th {
      background-color: #447dee;
      color: #fff;
      font-weight: bold;
      font-family:'Tajawal';
      font-size: 13px;
      padding: 3px;
      text-transform: uppercase;
      /* letter-spacing: 1px; */
      text-align: center;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #ccc;
      }
      table tr:nth-child(even) td {
      background-color: #f2f2f2;
      }
      table tr:hover td {
      background-color: #ffedcc;
      }
      table td {
      background-color: #fff;
      padding: 3px;
      text-align: center;
      font-family:'Tajawal';
      font-size: 11px;
      border-bottom: 1px solid #ccc;
      font-weight: bold;
      }
      .footer{
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
      
      }
      .namedata{
        display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height:70%;
      padding: 5px;
      }
      h4{
        font-family:'Tajawal';
      }
      h5 {
        font-family:'Tajawal';
        margin: auto;
      }
      p{
        margin: 5px;
        font-family:'Tajawal';
      }
      span{
        height: 80%;
        margin: auto;
        margin-left: 10px;
        text-align: center;
      }
      </Style>
      <body>
      ${tasksCONTRAT
        .filter(item => item.ID === tasksCONTRATID)
        .map(
          (pic, index) =>
            `<table>
     
             <thead>
                                <tr>
                                    <thead>
  ${
    localed == 'ar_MA'
      ? `            <tbody>
                                            <th style="text-align: center;border-color: #333;"  colspan="8">كشف تفصيلي عن الحساب</th>
                                               <tr>
                                                   <th style="text-align: center;border-color: #333;"  colspan="3">الاجمالي</th>
                                                   <th scope="col" rowspan="2">حالة الحساب</th>
                                                   <th scope="col" rowspan="2">الوقت</th>
                                                   <th scope="col" rowspan="2">تاريخ </th>
                                                   <th scope="col" colspan="2"  rowspan="2">اسم/رقم الحساب</th>        
                                                   <!-- rowspan="2" هذه للدمج عمودي -->
                                               </tr>
                                               <th scope="col">بالريال السعودي</th>
                                               <th scope="col">بالدولار</th>
                                               <th scope="col">بالريال اليمني</th>                                      
                                           </tbody>`
      : `  <tbody>
  <th style="text-align: center;border-color: #333;" colspan="8">Detailed account statement</th>
  <tr>
  <th style="text-align: center;border-color: #333;" colspan="3">total</th>
  <th scope="col" rowspan="2">Account status</th>
  <th scope="col" rowspan="2">time</th>
  <th scope="col" rowspan="2">date </th>
  <th scope="col" colspan="2" rowspan="2">Account name/number</th> 
  <!-- rowspan="2" this is for vertical merge -->
  </tr>
  <th scope="col"> Saudi Riyal</th>
  <th scope="col">in dollars</th>
  <th scope="col"> Yemeni rial</th> 
  </tbody>`
  }
                                   </thead>
                                   </tr>         
                                   <tbody>                  
                                       <tr>
                                           <td>${parseInt(pic.SumِSR)
                                             .toFixed(2)
                                             .replace(
                                               /(\d)(?=(\d{3})+(?!\d))/g,
                                               '$1,',
                                             )}</td>
                                           <td>${parseInt(pic.SumDollar)
                                             .toFixed(2)
                                             .replace(
                                               /(\d)(?=(\d{3})+(?!\d))/g,
                                               '$1,',
                                             )}</td>
                                           <td>${parseInt(pic.SumِYR)
                                             .toFixed(2)
                                             .replace(
                                               /(\d)(?=(\d{3})+(?!\d))/g,
                                               '$1,',
                                             )}</td>
                                           <td>${
                                             localed == 'ar_MA'
                                               ? pic.Done === false
                                                 ? 'نشطة'
                                                 : 'منتهيه'
                                               : pic.Done === false
                                               ? 'Active'
                                               : 'Finished'
                                           }</td>
                                           <td>${pic.Timeminet}</td>
                                           <td>${pic.Datetiem}</td>
                                           <td>${pic.sectionidnfy}</td>
                                   </tr>            
                                   </tbody>
                                <tr>
                                </table>
                                <table>
                             ${pic.databuld.map(
                               (item, index) =>
                                 `
              <thead>
     ${
       localed === 'ar_MA'
         ? `<tbody>
              <th style="text-align: center;border-color: #333; background-color:darkblue;"  colspan="8">تفصيل اقسام الحساب</th>
                                          <tr>
                                            <th style="text-align: center;border-color: #333;"  colspan="3">الاجمالي</th>
                                            <th scope="col" rowspan="2">الوقت</th>
                                            <th scope="col" rowspan="2">تاريخ </th>
                                            <th scope="col" rowspan="2">الوصف</th>
                                            <th scope="col"   rowspan="2">اسم/بيان النفقات</th>        
                                            <th scope="col"  rowspan="2">م</th>        
                                        </tr>
                                        <th scope="col">بالريال السعودي</th>
                                        <th scope="col">بالدولار</th>
                                        <th scope="col">بالريال اليمني</th>
                            </tr>         
                            </tbody>`
         : `<tbody>
                            <th style="text-align: center;border-color: #333; background-color:darkblue;" colspan="8">Breakdown of account sections</th>
                            <tr>
                            <th style="text-align: center;border-color: #333;" colspan="3">total</th>
                            <th scope="col" rowspan="2">time</th>
                            <th scope="col" rowspan="2">date </th>
                            <th scope="col" rowspan="2">description</th>
                            <th scope="col" rowspan="2">expense name/statement</th> 
                            <th scope="col" rowspan="2">m</th> 
                            </tr>
                            <th scope="col"> Saudi Riyal</th>
                            <th scope="col">in dollars</th>
                            <th scope="col"> Yemeni rial</th>
                            </tr> 
                            </tbody>`
     }
                            </thead>
                            <tbody>
                                <tr >
                                    <td>${parseInt(item.SumِSR)
                                      .toFixed(2)
                                      .replace(
                                        /(\d)(?=(\d{3})+(?!\d))/g,
                                        '$1,',
                                      )}</td>
                                    <td>${parseInt(item.SumDollar)
                                      .toFixed(2)
                                      .replace(
                                        /(\d)(?=(\d{3})+(?!\d))/g,
                                        '$1,',
                                      )}</td>
                                    <td>${parseInt(item.SumِYR)
                                      .toFixed(2)
                                      .replace(
                                        /(\d)(?=(\d{3})+(?!\d))/g,
                                        '$1,',
                                      )}</td>
                                    <td>${item.Timeminet}</td>
                                    <td>${item.Time}</td>
                                    <td>${item.abzrphtion}</td>
                                    <td>${item.sectiontitle}</td>
                                    <td>${index + 1}</td>
                            </tr>      
                            </table>
                            <table>                  
       ${
         localed == 'ar_MA'
           ? `</tbody>
                            <th style="text-align: center;border-color: #333; "  colspan="6">نفقات القسم</th>
                            <tr>
                                <th style="text-align: center;border-color: #333;" >المبلغ</th>
                                <th scope="col" rowspan="2">الوقت</th>
                                <th scope="col" rowspan="2">تاريخ </th>
                                <th scope="col" rowspan="2">الوصف</th>
                                <th scope="col" rowspan="2">اسم/بيان</th>
                                <th scope="col" rowspan="2">م</th>
                                <!-- rowspan="2" هذه للدمج عمودي -->
                            </tr>
                            <tbody>`
           : `                        </tbody>
  <th style="text-align: center;border-color: #333; " colspan="6">Department Expenses</th>
  <tr>
  <th style="text-align: center;border-color: #333;" >amount</th>
  <th scope="col" rowspan="2">time</th>
  <th scope="col" rowspan="2">date </th>
  <th scope="col" rowspan="2">description</th>
  <th scope="col" rowspan="2">name/statement</th>
  <th scope="col" rowspan="2">m</th>
  <!-- rowspan="2" this is for vertical merge -->
  </tr>
  </tbody>`
       }
                            ${item?.Databes.filter(
                              carmsu.length > 0
                                ? i => i.arthDath === carmsu
                                : i => i.idHOM === item.idHOM,
                            ).map(
                              (it, index) =>
                                ` <tr>
                                    <td>${
                                      parseInt(it.sectionpriclabrr)
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          '$1,',
                                        ) + it.arthDath
                                    }</td>
                                    <td>${it.Timeminet}</td>
                                    <td>${it.TimeSub}</td>
                                    <td>${it.abzrphtion}</td>
                                    <td>${it.sectiontitle}</td>
                                    <td>${index + 1}</td>
                                </tr>
                                </tbody>`,
                            )} `,
                             )}
                            </table>
                            </table>`,
        )
        .join('')}  
                            <!-- tm-app-feature-header -->
                     
             
      </body>
      </html>
     `,
    fileName: `Account_${findTaskss?.sectionidnfy}pdf_${count}`,
    directory: 'Documents',
  };
  const Contrctingall = {
    html: `
    <!DOCTYPE html>
    <html lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <Style>
      body{
          width: 95%;
          margin: auto;
          margin-top: 35px;
      }
      table {
      border-collapse: collapse;
      width: 90%;
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 8px;
      text-align: left;
      padding: 5px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
    } 
    table th {
    background-color: #447dee;
    color: #fff;
    font-weight: bold;
    font-family:'Tajawal';
    font-size: 13px;
    padding: 3px;
    text-transform: uppercase;
    /* letter-spacing: 1px; */
    text-align: center;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #ccc;
    }
    table tr:nth-child(even) td {
    background-color: #f2f2f2;
    }
    table tr:hover td {
    background-color: #ffedcc;
    }
    table td {
    background-color: #fff;
    padding: 3px;
    text-align: center;
    font-family:'Tajawal';
    font-size: 11px;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    }
    .footer{
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
    
    }
    .namedata{
      display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:70%;
    padding: 5px;
    }
    h4{
      font-family:'Tajawal';
    }
    h5 {
      font-family:'Tajawal';
      margin: auto;
    }
    p{
      margin: 5px;
      font-family:'Tajawal';
    }
    span{
      height: 80%;
      margin: auto;
      margin-left: 10px;
      text-align: center;
    }
    </Style>
    <body>
      <table>
           <thead>
                              <tr>
                                  <thead>
                                  ${
                                    localed == 'ar_MA'
                                      ? `            <tbody>
                                                                <th style="text-align: center;border-color: #333;"  colspan="8">كشف تفصيلي عن الحساب</th>
                                                                   <tr>
                                                                       <th style="text-align: center;border-color: #333;"  colspan="3">الاجمالي</th>
                                                                       <th scope="col" rowspan="2">حالة الحساب</th>
                                                                       <th scope="col" rowspan="2">الوقت</th>
                                                                       <th scope="col" rowspan="2">تاريخ </th>
                                                                       <th scope="col" colspan="2"  rowspan="2">اسم/رقم الحساب</th>        
                                                                       <!-- rowspan="2" هذه للدمج عمودي -->
                                                                   </tr>
                                                                   <th scope="col">بالريال السعودي</th>
                                                                   <th scope="col">بالدولار</th>
                                                                   <th scope="col">بالريال اليمني</th>                                      
                                                               </tbody>`
                                      : `  <tbody>
                      <th style="text-align: center;border-color: #333;" colspan="8">Detailed account statement</th>
                      <tr>
                      <th style="text-align: center;border-color: #333;" colspan="3">total</th>
                      <th scope="col" rowspan="2">Account status</th>
                      <th scope="col" rowspan="2">time</th>
                      <th scope="col" rowspan="2">date </th>
                      <th scope="col" colspan="2" rowspan="2">Account name/number</th> 
                      <!-- rowspan="2" this is for vertical merge -->
                      </tr>
                      <th scope="col"> Saudi Riyal</th>
                      <th scope="col">in dollars</th>
                      <th scope="col"> Yemeni rial</th> 
                      </tbody>`
                                  }
                                 ${tasksCONTRAT
                                   .map(
                                     (pic, index) =>
                                       ` <tr>
                                         <td>${parseInt(pic.SumِSR)
                                           .toFixed(2)
                                           .replace(
                                             /(\d)(?=(\d{3})+(?!\d))/g,
                                             '$1,',
                                           )}</td>
                                         <td>${parseInt(pic.SumDollar)
                                           .toFixed(2)
                                           .replace(
                                             /(\d)(?=(\d{3})+(?!\d))/g,
                                             '$1,',
                                           )}</td>
                                         <td>${parseInt(pic.SumِYR)
                                           .toFixed(2)
                                           .replace(
                                             /(\d)(?=(\d{3})+(?!\d))/g,
                                             '$1,',
                                           )}</td>
                                         <td>${
                                           pic.Done === false
                                             ? 'نشطة'
                                             : 'منتهيه'
                                         }</td>
                                         <td>${pic.Timeminet}</td>
                                         <td>${pic.Datetiem}</td>
                                         <td colspan='2'>${
                                           pic.sectionidnfy
                                         }</td>
                                         <td>${index + 1}</td>
                                 </tr>  `,
                                   )
                                   .join('')}           
                                 </tbody>
                              <tr>
                              </table>
                          </table>
                          <!-- tm-app-feature-header -->
           
    </body>
    </html>
   `,
    fileName: `Exprenss_contract_pdf_${count}`,
    directory: 'Documents',
  };

  let Accontan = {
    html: `
       <!DOCTYPE html>
   <html lang="ar">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
   </head>
   <Style>
     body{
         width: 95%;
         margin: auto;
         margin-top: 35px;
     }
     table {
     border-collapse: collapse;
     width: 90%;
     color: #333;
     font-family: Arial, sans-serif;
     font-size: 8px;
     text-align: left;
     padding: 5px;
     border-radius: 5px;
     overflow: hidden;
     box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
     margin: auto;
     margin-top: 10px;
     margin-bottom: 10px;
   } 
   table th {
   background-color: #447dee;
   color: #fff;
   font-weight: bold;
   font-family:'Tajawal';
   font-size: 13px;
   padding: 3px;
   text-transform: uppercase;
   /* letter-spacing: 1px; */
   text-align: center;
   border-top: 1px solid #fff;
   border-bottom: 1px solid #ccc;
   }
   table tr:nth-child(even) td {
   background-color: #f2f2f2;
   }
   table tr:hover td {
   background-color: #ffedcc;
   }
   table td {
   background-color: #fff;
   padding: 3px;
   text-align: center;
   font-family:'Tajawal';
   font-size: 11px;
   border-bottom: 1px solid #ccc;
   font-weight: bold;
   }
   .footer{
     height: 70px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 100px;
   
   }
   .namedata{
     display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   height:70%;
   padding: 5px;
   }
   h4{
     font-family:'Tajawal';
   }
   h5 {
     font-family:'Tajawal';
     margin: auto;
   }
   p{
     margin: 5px;
     font-family:'Tajawal';
   }
   span{
     height: 80%;
     margin: auto;
     margin-left: 10px;
     text-align: center;
   }
   </Style>
   <body>
   ${tasksCOVENANT
     .filter(item => item.ID === tasksCOVENANTID)
     .map(
       (pic, index) =>
         `
   <table>
      <thead>
                          <tr>
                                 <thead>
                                 <th style="text-align: center;border-color: #333; background-color:darkblue;"  colspan="7">${
                                   localed === 'ar_MA'
                                     ? 'كشف تفصيلي لصرف  الحساب'
                                     : ' Detailed statement of the release of the custody'
                                 }</th> 
                                        <tbody>
                                        <tr>
                                    
                                        <th scope="col" rowspan="2">${
                                          localed === 'ar_MA'
                                            ? 'المبلغ الذي تم صرفه'
                                            : 'spent amount'
                                        }</th>
                                        <th scope="col" rowspan="2">${
                                          localed === 'ar_MA'
                                            ? 'الاجمالي'
                                            : 'total'
                                        }</th>
                                        <th scope="col" rowspan="2">${
                                          localed === 'ar_MA'
                                            ? 'حالة الحساب'
                                            : 'Account status'
                                        }</th>
                                        <th scope="col" rowspan="2">${
                                          localed === 'ar_MA' ? 'تاريخ' : 'date'
                                        } </th>
                                        <th scope="col" rowspan="2">${
                                          localed === 'ar_MA'
                                            ? 'تفاصيل الصرف'
                                            : 'Exchange details'
                                        }</th>
                                        <th scope="col" colspan="2"  rowspan="2">${
                                          localed === 'ar_MA'
                                            ? 'رقم الحساب/اسم الحساب'
                                            : 'name'
                                        }</th>    
                                        <!-- rowspan="2" هذه للدمج عمودي -->
                                    </tr>    
                                        </tbody>
                                </thead>
                                </tr>         
                                <tbody>                  
                                    <tr>
                                        <td>${
                                          pic.kindmony +
                                          parseInt(pic.DescPush)
                                            .toFixed(2)
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              '$1,',
                                            )
                                        }</td>
                                        <td>${
                                          pic.kindmony +
                                          parseInt(pic.SumCash)
                                            .toFixed(2)
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              '$1,',
                                            )
                                        }</td>
                                        <td>${
                                          localed === 'ar_MA'
                                            ? pic.Done === false
                                              ? 'غير منتهيه'
                                              : 'منتهيه'
                                            : pic.Done === false
                                            ? 'Unfinished'
                                            : 'Finished'
                                        }</td>
                                        <td>${pic.TimeDate}</td>
                                        <td>${pic.describtion}</td>
                                        <td>${pic.name}</td>
                                </tr>            
                                </tbody>
                             <tr>
                          <thead>
                          </table>
                          ${pic.arrayOprition.map(
                            (item, index) =>
                              `  <table>
                          <tbody>
                         
                        <tbody style="align-self:center; justify-content:center">
                        <tr>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA' ? 'م' : 'M'
                        }</th>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA'
                            ? 'المتبقي لحتى الان'
                            : 'number th remn'
                        }</th>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA'
                            ? 'المبلغ الذي تم صرفه'
                            : 'Spent amount'
                        }</th>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA'
                            ? 'تفاصيل الصرف'
                            : 'Exchange details'
                        }</th>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA' ? 'تاريخ' : 'date'
                        } </th>
                        <th scope="col" rowspan="2">${
                          localed === 'ar_MA'
                            ? 'اسم الشخص المستلم'
                            : 'The name of the recipient'
                        }</th>
                        <th scope="col" colspan="2"  rowspan="2">${
                          localed === 'ar_MA'
                            ? 'اسم /رقم الحساب المستخدم'
                            : 'name or account using'
                        }</th>    
                        <!-- rowspan="2" هذه للدمج عمودي -->
                    </tr>        
                                    
                                 </tbody>
                         </thead>
                         </tr>         
                         <tbody>
                             <tr>
                                <td>${parseInt(item.thremn)
                                  .toFixed(2)
                                  .replace(
                                    /(\d)(?=(\d{3})+(?!\d))/g,
                                    '$1,',
                                  )}</td>
                                 <td>${parseInt(item.Covenantday)
                                   .toFixed(2)
                                   .replace(
                                     /(\d)(?=(\d{3})+(?!\d))/g,
                                     '$1,',
                                   )}</td>
                                 <td>${item.Describtions}</td>
                                 <td>${item.TimeCovenant}</td>
                                 <td>${item.nameReceiving}</td>
                                 <td>${item.nameCounte}</td>
                                 <td>${index + 1}</td>
                         </tr>                
                         </tbody>
                      </tbody>
                         <!-- tm-app-feature-header -->
                     </table>
                     <div style="margin-bottom: 20px; flex-direction: column; display: flex;width: 100%; margin: auto;">
 
                          <h4 style="display:${
                            item.imagop.length > 0 ? 'flex' : 'none'
                          } padding:5px;width:50%;margin:auto; text-align: center;border-color: #333; color:#ccc;border-radius: 15px; background-color:rgb(9, 9, 53);" colspan="5">${
                                item.imagop.length > 0
                                  ? localed === 'ar_MA'
                                    ? 'مرفقات الاخلاء'
                                    : 'Evacuation attachments'
                                  : 'لايوجد مرفقات'
                              }</h4>
   
                 <div  style="flex-wrap: wrap; flex-direction: row; display: flex;width: 95%; margin: auto;">
                 ${item.imagop.map(
                   it =>
                     `<div style=" margin: 5px;width:200px; height:200px; border-radius:10px; background-color: #b8cef9;">
                     <img src=${it.url}  style="width: 100%;height: 100%;" />
                 </div>`,
                 )}
                 </div>
                 `,
                          )}`,
     )
     .join('')}  
          
   </body>
   </html>
      `,
    fileName: `Account_${findTaskss?.name}pdf_${count}`,
    directory: 'Documents',
  };


  const AccontaninComin = {
    html: `
     <!DOCTYPE html>
 <html lang="ar">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
 </head>
 <Style>
   body{
       width: 95%;
       margin: auto;
       margin-top: 35px;
   }
   table {
   border-collapse: collapse;
   width: 90%;
   color: #333;
   font-family: Arial, sans-serif;
   font-size: 8px;
   text-align: left;
   padding: 5px;
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
   margin: auto;
   margin-top: 10px;
   margin-bottom: 10px;
 } 
 table th {
 background-color: #447dee;
 color: #fff;
 font-weight: bold;
 font-family:'Tajawal';
 font-size: 13px;
 padding: 3px;
 text-transform: uppercase;
 /* letter-spacing: 1px; */
 text-align: center;
 border-top: 1px solid #fff;
 border-bottom: 1px solid #ccc;
 }
 table tr:nth-child(even) td {
 background-color: #f2f2f2;
 }
 table tr:hover td {
 background-color: #ffedcc;
 }
 table td {
 background-color: #fff;
 padding: 3px;
 text-align: center;
 font-family:'Tajawal';
 font-size: 11px;
 border-bottom: 1px solid #ccc;
 font-weight: bold;
 }
 .footer{
   height: 70px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
 
 }
 .namedata{
   display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 height:70%;
 padding: 5px;
 }
 h4{
   font-family:'Tajawal';
 }
 h5 {
   font-family:'Tajawal';
   margin: auto;
 }
 p{
   margin: 5px;
   font-family:'Tajawal';
 }
 span{
   height: 80%;
   margin: auto;
   margin-left: 10px;
   text-align: center;
 }
 </Style>
 <body>

 <table>
    <thead>
                        <tr>
                               <thead>
                               <th style="text-align: center;border-color: #333; background-color:darkblue;"  colspan="9">${
                                 localed === 'ar_MA'
                                   ? ` كشف تفصيلي عن ${
                                       pageAc === 'Residual'
                                         ? 'المتبقي'
                                         : pageAc === 'Outgogin'
                                         ? 'المصروف'
                                         : 'البيانات الرئيسية'
                                     } لجميع الحسابات  `
                                   : ' Detailed statement of the release of the custody'
                               }</th> 
                                      <tbody>
                                      <tr>
                                  
                                
                                ${
                                  pageAc === 'Residual'
                                    ? `
                                   <th scope="col" rowspan="2">${
                                     localed === 'ar_MA'
                                       ? 'المبلغ المتبقي'
                                       : 'the remn amount'
                                   }</th>`
                                    : '.'
                                }
                                      <th scope="col" rowspan="2">${
                                        localed === 'ar_MA'
                                          ? 'المبلغ الذي تم صرفه'
                                          : 'spent amount'
                                      }</th>
                                      <th scope="col" rowspan="2">${
                                        localed === 'ar_MA'
                                          ? 'الاجمالي'
                                          : 'total'
                                      }</th>
                                      <th scope="col" rowspan="2">${
                                        localed === 'ar_MA'
                                          ? 'حالة الحساب'
                                          : 'Account status'
                                      }</th>
                                      <th scope="col" rowspan="2">${
                                        localed === 'ar_MA' ? 'تاريخ' : 'date'
                                      } </th>
                                      <th scope="col"  colspan="2" rowspan="2">${
                                        localed === 'ar_MA'
                                          ? 'تفاصيل الحساب'
                                          : 'Exchange details'
                                      }</th>
                                      <th scope="col"   rowspan="2">${
                                        localed === 'ar_MA'
                                          ? 'رقم الحساب/اسم الحساب'
                                          : 'name'
                                      }</th>    
                                      <th scope="col" rowspan="2">${
                                        localed === 'ar_MA' ? 'م' : 'm'
                                      }</th>
                                      <!-- rowspan="2" هذه للدمج عمودي -->
                                  </tr>    
                                      </tbody>
                              </thead>
                              </tr>         
                              <tbody>  
                              ${tasksCOVENANT
                                .map(
                                  (pic, index) =>
                                    `                
                                  <tr>
                                  ${
                                    pageAc === 'Residual'
                                      ? `<td>${pic.thremn}</td>`
                                      : '.'
                                  }
                                      <td>${
                                        pic.kindmony +
                                        parseInt(pic.DescPush)
                                          .toFixed(2)
                                          .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            '$1,',
                                          )
                                      }</td>
                                      <td>${
                                        pic.kindmony +
                                        parseInt(pic.SumCash)
                                          .toFixed(2)
                                          .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            '$1,',
                                          )
                                      }</td>
                                      <td>${
                                        localed === 'ar_MA'
                                          ? pic.Done === false
                                            ? 'غير منتهيه'
                                            : 'منتهيه'
                                          : pic.Done === false
                                          ? 'Unfinished'
                                          : 'Finished'
                                      }</td>
                                      <td>${pic.TimeDate}</td>
                                      <td  colspan="2">${pic.describtion}</td>
                                      <td >${pic.name}</td>
                                      <td>${index + 1}</td>
                              </tr>    `,
                                )
                                .join('')}         
                              </tbody>
                           <tr>
                        <thead>
                        </table> 
         
 </body>
 </html>
    `,
    fileName: `Account_${findTaskss?.name}pdf_${count}`,
    directory: 'Documents',
  };
  const AccontanOutgogin = {
    html: `
     <!DOCTYPE html>
 <html lang="ar">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
 </head>
 <Style>
   body{
       width: 95%;
       margin: auto;
       margin-top: 35px;
   }
   table {
   border-collapse: collapse;
   width: 90%;
   color: #333;
   font-family: Arial, sans-serif;
   font-size: 8px;
   text-align: left;
   padding: 5px;
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
   margin: auto;
   margin-top: 10px;
   margin-bottom: 10px;
 } 
 table th {
 background-color: #447dee;
 color: #fff;
 font-weight: bold;
 font-family:'Tajawal';
 font-size: 13px;
 padding: 3px;
 text-transform: uppercase;
 /* letter-spacing: 1px; */
 text-align: center;
 border-top: 1px solid #fff;
 border-bottom: 1px solid #ccc;
 }
 table tr:nth-child(even) td {
 background-color: #f2f2f2;
 }
 table tr:hover td {
 background-color: #ffedcc;
 }
 table td {
 background-color: #fff;
 padding: 3px;
 text-align: center;
 font-family:'Tajawal';
 font-size: 11px;
 border-bottom: 1px solid #ccc;
 font-weight: bold;
 }
 .footer{
   height: 70px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
 
 }
 .namedata{
   display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 height:70%;
 padding: 5px;
 }
 h4{
   font-family:'Tajawal';
 }
 h5 {
   font-family:'Tajawal';
   margin: auto;
 }
 p{
   margin: 5px;
   font-family:'Tajawal';
 }
 span{
   height: 80%;
   margin: auto;
   margin-left: 10px;
   text-align: center;
 }
 </Style>
 <body>
 ${tasksCOVENANT
   .map(
     (pic, index) =>
       `
                        ${pic.arrayOprition.map(
                          (item, index) =>
                            `  <table>
                        <tbody>
                       
                      <tbody style="align-self:center; justify-content:center">
                      <tr>
            
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA'
                          ? 'المتبقي لحتى الان'
                          : 'number th remn'
                      }</th>
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA'
                          ? 'المبلغ الذي تم صرفه'
                          : 'Spent amount'
                      }</th>
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA'
                          ? 'تفاصيل الصرف'
                          : 'Exchange details'
                      }</th>
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA' ? 'تاريخ' : 'date'
                      } </th>
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA'
                          ? 'اسم الشخص المستلم'
                          : 'The name of the recipient'
                      }</th>
                      <th scope="col" colspan="2"  rowspan="2">${
                        localed === 'ar_MA'
                          ? 'اسم /رقم الحساب المستخدم'
                          : 'name or account using'
                      }</th>    
                      <th scope="col" rowspan="2">${
                        localed === 'ar_MA' ? 'م' : 'M'
                      }</th>
                      <!-- rowspan="2" هذه للدمج عمودي -->
                  </tr>        
                                  
                               </tbody>
                       </thead>
                       </tr>         
                       <tbody>
                           <tr>
                              <td>${parseInt(item.thremn)
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                               <td>${parseInt(item.Covenantday)
                                 .toFixed(2)
                                 .replace(
                                   /(\d)(?=(\d{3})+(?!\d))/g,
                                   '$1,',
                                 )}</td>
                               <td>${item.Describtions}</td>
                               <td>${item.TimeCovenant}</td>
                               <td>${item.nameReceiving}</td>
                               <td>${item.nameCounte}</td>
                               <td>${index + 1}</td>
                       </tr>                
                       </tbody>
                    </tbody>
                       <!-- tm-app-feature-header -->
                   </table>
                   <div style="margin-bottom: 20px; flex-direction: column; display: flex;width: 100%; margin: auto;">

                        <h4 style="display:${
                          item.imagop.length > 0 ? 'flex' : 'none'
                        } padding:5px;width:50%;margin:auto; text-align: center;border-color: #333; color:#ccc;border-radius: 15px; background-color:rgb(9, 9, 53);" colspan="5">${
                              item.imagop.length > 0
                                ? localed === 'ar_MA'
                                  ? 'مرفقات الاخلاء'
                                  : 'Evacuation attachments'
                                : 'لايوجد مرفقات'
                            }</h4>
 
               <div  style="flex-wrap: wrap; flex-direction: row; display: flex;width: 95%; margin: auto;">
               ${item.imagop.map(
                 it =>
                   `<div style=" margin: 5px;width:200px; height:200px; border-radius:10px; background-color: #b8cef9;">
                   <img src=${it.url}  style="width: 100%;height: 100%;" />
               </div>`,
               )}
               </div>
               `,
                        )}`,
   )
   .join('')}  
       
 </body>
 </html>
    `,
    fileName: `Account_${findTaskss?.name}pdf_${count}`,
    directory: 'Documents',
  };
  const dataSwitch = () =>{
    let AccountanAll = {};
  switch (pageAc) {
    case 'InComing':
      return (AccountanAll = AccontaninComin);
    case 'Outgogin':
      return (AccountanAll = AccontanOutgogin);
    case 'Residual':
      return (AccountanAll = AccontaninComin);
    default:
      return AccountanAll;
  }
}

  switch (kindpa) {
    case 'SubprodectContracting':
      return (options = ContrctingSub);
    case 'Contracting':
      return (options = Contrctingall);
    case 'AccountantSub':
      return (options = Accontan);
    case 'AccountantInComi':
      return (
        options =  dataSwitch());

    default:
      return options;
  }

 
}
