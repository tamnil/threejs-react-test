# tests threejs + mqtt + http + react application


Use HTTPS  to work with websensors and sockets

mosquito-mqtt included in docker-compose

Run with:

npm run start

or
HTTPS=true npm run start


## bugs

- 22-12-2019: HTTPS devServer client not working - hotplug autorefresh.
    Bug in wss please correct in my-app-web/node_modules/react-dev-utils/webpackHotDevClient.js'
protocol 'ws' -> 'wss'
