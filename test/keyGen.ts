import { AuthChecker, AuthKeyGen } from '../index';

const apiSecret = 'animal-arclight-2023';
const authServices = ['animal-front'];

const keyGenerator = new AuthKeyGen(apiSecret,authServices);

const main = (async ()=>{
    console.log(keyGenerator.generateKeys());
})();
