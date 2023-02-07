
import * as Express from 'express';
const router = Express.Router();
const jwt = require('jsonwebtoken');


class AuthChecker {
    apiSecret:string = ''
    authServices:string[] = [];
    router:any = null;
    constructor(apiSecret:string, authServices:string[]){
        this.apiSecret = apiSecret;
        this.authServices = authServices;
        this.router = router;
    }
    build():Express.Router{
        this.router.use(async (req:Express.Request,res:Express.Response,next:any)=>{
            const authToken = req.headers.authorization?.split(' ')[1];
            if(authToken){
                try{
                    const decode = jwt.verify(authToken, this.apiSecret);
                    const {serviceName} = decode
                    if(this.authServices.includes(serviceName)){
                        next();
                    }else{
                        next(new Error(`Service not found - ${serviceName}`));
                    }
                }catch(e){
                    next(new Error('API Key Verification fail'));
                }
            }else{
                next(new Error('No Token Found'));
            }
        });
        return this.router;
    }
}



export default AuthChecker;