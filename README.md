# t3chfest2018

Offline first PWA for my T3chfest 21018 Workshop

You can find the slides [here](https://speakerdeck.com/garcianavalon/offlinefirst-pwa-con-firebase-y-vue-dot-js)

And a live version [here](https://t3chfest2018.firebaseapp.com)
## Setup

``` bash
# install dependencies
npm install
```

## Development

Start your dev server. Changes to your files will reload automatically the app.

**Remember:** offline won't work in this setup

```bash
# serve with hot reload at localhost:8080
npm run dev
```

## Pre-production

Before deploying your app, you can test it in a pre-pro environment using firebase CLI.

Offline will work in this enviroment.

**NOTE:** If you are working on other projecs, be careful with installed service workers on localhost

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
firebase serve
```

## Deploying
Simply deploy to firebase hosting

```bash
firebase deploy

# check your app
firebase open
```
## Resources

For detailed explanation on how things work in the template, checkout the [official guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
