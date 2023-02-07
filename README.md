# Animal-Service-Auth
A auth lib provides service to service authentication.
### Install

#### Step 0: Create Github access token

[Create Github Access Token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

#### Step 1: Config .npmrc file

Create .npmrc file on root directory, and use your Github access token
```
@animal-high-tech:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR-GITHUB-ACCESS-TOKEN
```

#### Step 2: Install the library to your project
#####  Install from the command line:
```
    npm install @animal-high-tech/animal-service-auth
```

#### OR
#####  Install via package.json:
```
    "@animal-high-tech/animal-service-auth": "^1.1.0"
```

### Usage

#### Key Generator

Typescript Example:
```
import { AuthKeyGen } from '@animal-high-tech/animal-service-auth';

const apiSecret = 'animal';
const authServices = ['animal-apollo'];

const keyGenerator = new AuthKeyGen(apiSecret,authServices);

console.log(keyGenerator.generateKeys());

/*
    Map(1) {
        'animal-apollo' => 'eyJhbGciOiJIUzI1NiJ9.bW92bi1hcG9sbG8.zqMTlPEBzJkPLr-fXQEuSXokiiZTyexGPQWLenh3qLk'
    }
*/
```

Use the generated token as a bearer token.
#### Auth Checker

#### Step 1: Create a serviceAuth.ts file

```

import { AuthChecker } from '@animal-high-tech/animal-service-auth';
const apiSecret = 'animal';
const authServices = ['animal-apollo'];
const AuthCheckerMiddleware = new AuthChecker(apiSecret,authServices).build();

export default AuthCheckerMiddleware;

```

#### Step 2: Use the AuthCheckerMiddleware to verify incoming requests.

Typescript Example:
```
import express, { Express, Request, Response } from 'express';

const app: Express = express();

import AuthCheckerMiddleware from './serviceAuth';
app.use(AuthCheckerMiddleware);
app.post('/test',async(req: Request, res: Response, next: any)=>{
    res.json({world:"hello",...req.body});
});

```

Or

```
import express, { Express, Request, Response } from 'express';

const app: Express = express();

import AuthCheckerMiddleware from './serviceAuth';

app.post('/test', AuthCheckerMiddleware, async(req: Request, res: Response, next: any)=>{
    res.json({world:"hello",...req.body});
});

```

