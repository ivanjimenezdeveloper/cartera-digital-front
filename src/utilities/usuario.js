import jwtDecode from "jwt-decode";

export const esTokenExpirado = (token) => {
  try {
    const { exp } = jwtDecode(token);

    if (exp < (new Date().getTime() + 1) / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};
