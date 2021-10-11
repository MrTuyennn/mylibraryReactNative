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
