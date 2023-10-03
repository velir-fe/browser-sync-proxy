# Browsersync Proxy
## Installation and Usage:

 

**Step 1**: install
```bash
$ npm install @velir-fe/browser-sync-proxy
```

**Step 2**: create a `sitesConfig` object in your **package.json** file with the following code
```json
"sitesConfig": {
    "default": {
      "src": "/path_to_fe_source_files", 
      "build": "/path_to_fe_build_files", 
      "proxy": "url_to_proxy.com",  
      "route": "/route_to_replace_with_local_files", 
    },
};

```

optionally SSL cert and key can be passed. See [BrowserSync Documentation](https://browsersync.io/docs/options#option-https) for more info.
```json
"sitesConfig": {
    "default": {
     ...
     "html":{
      "cert": "/path_to_cert",
      "key": "/path_to_key",
     }
    },
};

```

**Step 3**: run proxy
```bash
$ proxy --site default

```

 