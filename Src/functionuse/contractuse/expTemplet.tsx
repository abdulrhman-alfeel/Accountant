import {ToastAndroid} from 'react-native';
import {locale} from '../../locale';

export const tost = text =>
  ToastAndroid.showWithGravity(text, ToastAndroid.CENTER, ToastAndroid.LONG);

export const ToastOk = () =>
  tost(locale === 'ar_MA' ? 'تم الحفظ بنجاح' : 'Saved successfully');
export const ToastNos = () =>
  tost(locale === 'ar_MA' ? 'لم يتم الحفظ' : 'not Saved successfully');
export const musTost = () =>
  tost(
    locale === 'ar_MA'
      ? 'يجب اكمال البيانات '
      : 'The required data must be completed',
  );

export const Tofixed = text =>
  parseInt(text)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
