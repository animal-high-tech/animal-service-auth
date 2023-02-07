const jwt = require('jsonwebtoken');

class AuthKeyGen {
    apiSecret: string = '';
    authServices: string[] = [];
    constructor(apiSecret: string, authServices: string[]) {
        this.apiSecret = apiSecret;
        this.authServices = authServices;
    }
    generateKeys(): Map<string, string> {
        const map = new Map();

        for (const serviceName of this.authServices) {
            const token = jwt.sign({serviceName}, this.apiSecret, {
                expiresIn: '90d'
            });
            const key: string = `${`${serviceName}`}`;
            map.set(key, token);

            return map;
        }
        return map;
    }
}

export default AuthKeyGen;