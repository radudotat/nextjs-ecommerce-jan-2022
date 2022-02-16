import Cookies from 'js-cookie';

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key); // Type is string | undefined

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

type ReservedProduct = { id: string; price: number };
type ReservedProducts = ReservedProduct[];

export function setParsedCookie(key: string, value: ReservedProducts) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value: ReservedProducts) {
  return JSON.stringify(value);
}
