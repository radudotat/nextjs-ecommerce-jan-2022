import Cookies from 'js-cookie';

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key); // Type is string | undefined

  console.log('getParsedCookie', key, cookieValue);
  // Narrowing
  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type is string
  } catch (err) {
    return undefined;
  }
}

type reservedProduct = { id: string; price: number };
export type reservedProducts = reservedProduct[];

export function setParsedCookie(key: string, value: reservedProducts) {
  console.log('setParsedCookie', key, value);

  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value: reservedProducts) {
  return JSON.stringify(value);
}
