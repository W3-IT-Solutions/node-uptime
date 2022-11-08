## Doppler


### Installation Linux
```bash
sudo apt-get update && sudo apt-get install -y 

apt-transport-https ca-certificates curl gnupg

curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | sudo apt-key add -

echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/doppler-cli.list

sudo apt-get update && sudo apt-get install doppler
```

### Installation Mac
```bash
# Prerequisite. gnupg is required for binary signature verification
brew install gnupg

# Next, install using brew (use `doppler update` for subsequent updates)
brew install dopplerhq/cli/doppler
```
### Login

```bash
doppler login
```

- Login: https://dashboard.doppler.com/workplace/auth/cli
- Paste the provideed code

### Setup

```bash
doppler setup
```

- Select project and environment

### Secrets

```bash
doppler secrets
```

### Run application with env variables

```bash
doppler run -- npm run dev
```
# Run project

DB
```
docker-compose up -d
```

Connection through mongo cli
```bash
mongosh --username admin --password admin
``` 

Run project
```
npm i
npm run dev
```

# Run with doppler
```
doppler run -- npm run dev
```


# UPTIME

## Endpoints

### POST /monitors

REQUEST

```json
{
  "name": "Landing",
  "description": "",
  "url": "",
  "group": "project1",
  "configuration": {
    "interval": 300,
    "retries": 3,
    "retryInterval": 30
  }
}
```

RESPONSE (201)

```json
{
  "name": "Landing",
  "description": "",
  "url": "",
  "group": "project1",
  "configuration": {
    "interval": 300,
    "retries": 3,
    "retryInterval": 30
  }
}
```

### GET /monitors/

(optional group)

RESPONSE (200)

```json
{
  "monitors": [
    { "name": "Landing", "status": "healthy", "group": ["project1"] }
  ]
}
```

### GET /detail/:id

RESPONSE (200)

```json
{
  "name": "Landing",
  "description": "",
  "url": "",
  "group": "project1",
  "configuration": {
    "interval": 300,
    "retries": 3,
    "retryInterval": 30
  },
  "uptimeDay": 99.9,
  "uptimeMonth": 98.3
}
```

## Tutorial

```
npm init
```

```
npm install express
```

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

```
npm install nodemon --save-dev
```

Modify script in package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
```

Run app:

```
npm run dev
```

## Install Cors

```
npm install cors
```

## Body parser

```
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
```

## Using Typescript

```
npm i -D typescript @types/express @types/node
```

Create tsconfig.json

```
npx tsc --init
```

Update package.json script

```
"build": "npx tsc",
"dev": "nodemon src/index.ts",
"start": "tsc && node dist/index.js"
```


## Config Database (mongo) 

Install mongoose
```
npm install mongoose
```

Create config/database.ts


```
npm i dotenv
```

### Node Cron

```
npm install --save node-cron
npm i --save-dev @types/node-cron
```


### Install ping

```
npm i ping
```