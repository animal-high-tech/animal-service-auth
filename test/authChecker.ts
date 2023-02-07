import { AuthChecker, AuthKeyGen } from '../index';
const apiSecret = 'animal-arclight-2023';
const authServices = ['animal-front'];
const AuthCheckerMiddleware = new AuthChecker(apiSecret,authServices).build();

export default AuthCheckerMiddleware;