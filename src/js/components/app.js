export default class LoginValidator {
    static check(login) {
      const regString = /^[^\d-_][\w-]+[^\d-_]$/;
      const regInt = /\d{4,}/;
      if (!regString.test(login) || regInt.test(login)) {
        throw new Error('Bad login');
      }
      return true;
    }
  }