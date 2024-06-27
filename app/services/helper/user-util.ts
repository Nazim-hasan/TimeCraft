import { passwordRequirements } from "libs/shared/mocks/auth.mock";

export class User {
  public static isEmailValid = (value: string) => {
    if (new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}').test(value) === false) {
      return 'Invalid email address';
    }
    return true;
  };
  public static isPasswordValid = (value: string) => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return true;
  };
}
