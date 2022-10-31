# UPTIME

## Endpoints

### POST /applications

REQUEST
```json
{
    "name":"Landing",
    "description":"",
    "url":"",
    "group": "project1",
    "configuration":{
        "interval": 300,
        "retries": 3,
        "retryInterval": 30
    }
}
```

RESPONSE (201)
```json
{
    "name":"Landing",
    "description":"",
    "url":"",
    "group": "project1",
    "configuration":{
        "interval": 300,
        "retries": 3,
        "retryInterval": 30
    }
}
```

### GET /applications/:group

(optional group)

RESPONSE (200)
````json
{
    "applications": [{"name":"Landing", "status":"healthy", "group":["project1"]}]
}
```

### GET /applications/:name

RESPONSE (200)
```json
{
    "name":"Landing",
    "description":"",
    "url":"",
    "group": "project1",
    "configuration":{
        "interval": 300,
        "retries": 3,
        "retryInterval": 30
    },
    "uptimeDay": 99.9,
    "uptimeMonth": 98.3
}
```