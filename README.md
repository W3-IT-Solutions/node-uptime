# UPTIME

## Endpoints

### POST /applications

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

### GET /applications/

(optional group)

RESPONSE (200)

```json
{
  "applications": [
    { "name": "Landing", "status": "healthy", "group": ["project1"] }
  ]
}
```

### GET /applications/:name

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
