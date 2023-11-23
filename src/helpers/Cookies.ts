export const setCookie = (name: string, value: string, days: number = 1) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Calcula la fecha y hora de expiración

  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; secure; ${expires}; path=/;`;
};

export const getCookiee = (nombre: string) => {
  const name = `${nombre}=`;
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}

export const deleteCookie = (name:string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=;`;
}