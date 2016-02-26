# env-publisher

generate an env js file from environment variables like this post : http://jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/


installation 

```
npm install browserenv-generator
```


usage

```
browserenv-generator --prefix=ENV_PREFIX --outfile=/path/to/genarate/env.js
```

where

`--prefix` is the begining of one or more environment variable
`--outfile` is a path to the file to be generated


## Sample generated file

env

```
$ env
BROWSERENV_CLIENT_ID=AIE34534534534534
BROWSERENV_API_URL=http://dockerhost:3000/app/api.php?UIE
NODE_VERSION=5.7.0
HOSTNAME=5c756449fa69
TERM=xterm
NPM_CONFIG_LOGLEVEL=info
HOME=/root
…
```

command : `browserenv-generator --prefix=BROWSERENV_ --outfile=./env.js`

```
(function (window) {
  window.__env = window.__env || {};
  window.__env.CLIENT_ID = 'AIE34534534534534';
  window.__env.API_URL = 'http://dockerhost:3000/app/api.php?UIE';
}(this));

```
