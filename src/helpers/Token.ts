import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string) => {
  const decodedToken = jwtDecode(token); // Decodificar el token (implementación personalizada o usar una biblioteca)

  if (!decodedToken || !decodedToken.exp) {
    // El token no es válido o no contiene información de expiración
    return true;
  }

  // Obtener la fecha de expiración en segundos y convertirla a milisegundos
  const expirationTimeInSeconds = decodedToken.exp;
  const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;

  const currentTimeInMilliseconds = new Date().getTime();

  return expirationTimeInMilliseconds < currentTimeInMilliseconds;
};
