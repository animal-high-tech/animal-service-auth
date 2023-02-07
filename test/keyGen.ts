import { AuthChecker, AuthKeyGen } from '../index';

const apiSecret = 'movn';
const authServices = ['movn-apollo'];

const keyGenerator = new AuthKeyGen(apiSecret,authServices);

const main = (async ()=>{
    console.log(keyGenerator.generateKeys());
})();
