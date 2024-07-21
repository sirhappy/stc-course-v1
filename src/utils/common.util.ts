/** sleep for n milliseconds */
export const sleep = async (millisecond: number = 0) => {
  return new Promise((resolve: (value: unknown) => void) => {
    setTimeout(() => {
      resolve(null);
    }, millisecond);
  });
};

export const getImg = (imgName: string) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url) as any as string;
};

export const uniqueSlash = (path: string) => path.replace(/(https?:\/)|(\/)+/g, '$1$2');

export const formatVND = (value: number | string) => {
  const num = +value;
  if (+num === 0)
    return '';

  return num.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
};
