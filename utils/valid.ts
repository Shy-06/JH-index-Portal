export function isEmail(email: string): boolean {
  var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  return reg.test(email);
}

export function isPhone(phone: string): boolean {
  var reg = /[0-9]{11}/;
  return reg.test(phone) && phone.length === 11;
}

export function isStuId(id: string): boolean {
  var reg = /[0-9]{12}/;
  return reg.test(id) && id.length === 12;
}

export function isID(id: string): boolean {
  var reg = /[0-9]{17}[0-9|x|X]{1}/;
  return reg.test(id) && id.length === 18;
}