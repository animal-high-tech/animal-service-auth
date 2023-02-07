import { AuthChecker, AuthKeyGen } from '../index';
const apiSecret = 'movn';
const authServices = ['movn-apollo'];
const AuthCheckerMiddleware = new AuthChecker(apiSecret,authServices).build();

export default AuthCheckerMiddleware;