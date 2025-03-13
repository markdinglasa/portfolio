import { accessToken } from "./accessToken";
import { refreshToken } from "./refreshToken";
import { randomPassword } from "./randomPassword";

class GenerateFn {
  accessToken: typeof accessToken;
  refreshToken: typeof refreshToken;
  randomPassword: typeof randomPassword;
  constructor() {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.randomPassword = randomPassword;
  }
}

export default new GenerateFn();
