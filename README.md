# rpg-libary-with-routes

## setup api
run
```
npm install
```
in character api folder
then import <code>character.json</code> to mongodb
make sure mongodb and mongoimport is installed then run in data folder
```
mongoimport --jsonArray --db characterDB --collection characters --file characters.json 
```
start server with
```
npm start
```
## Project setup for vue
```
npm install
```
in main folder
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

