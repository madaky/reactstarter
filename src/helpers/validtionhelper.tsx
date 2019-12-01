
export const required = (value:any) => (value ? undefined : "Required");

export const maxLength = (max:number) => (value:any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

export const number = (value:any) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = (min:number) => (value:any) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const minValue18 = minValue(18);

export const email = (value:any) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
}

export const tooOld = (value:any) =>
  value && value > 65 ? "You might be too old for this" : undefined;

export const aol = (value:any) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;