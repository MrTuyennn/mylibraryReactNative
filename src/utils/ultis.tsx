// Check validator number phone local vi-VN

const regexNumberPhone =
  /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/;
export function isRegexNumberPhoneVi(number: any) {
  if (number?.trim() === '') return 'Vui lòng nhập số điện thoại';
  if (number?.trim().length < 10) return 'Vui lòng kiểm tra lại số điện thoại';
  if (regexNumberPhone.test(number)) {
    return '';
  } else {
    return 'Số điện thoại không đúng định dạng';
  }
}

// regex Email

const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isRegexEmail(email: string) {
  return regexEmail?.test(String(email?.toLowerCase()));
}

export const months = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

export const weekDays = [
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
  'Chủ nhật',
];
