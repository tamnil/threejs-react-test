# tests threejs + mqtt + http + react application

Tamnil Saito Junior(temnil@gmail.com)

Testing/ Benchmarking and data analysis

threejs(webGL) + web protocols and iot integrations

### current development:
sensor on external development:  esp32 + mpu6050 + QMC588


### partial results:

- 3rs party subscription - cloud mqtt: 100ms/single request ; 300ms/ double request (from microcontroller)
note: first tests sending data to cloud MQTT - browser didnt received the messages from subscribed topic  - 30-12-2019


Use HTTPS  to work with websensors and sockets

mosquito-mqtt included in docker-compose

Run with:

npm run start

or
HTTPS=true npm run start


Please set the enviroment vars in '.env.sample' and save a new copy named '.env'

## bugs

- 22-12-2019: HTTPS devServer client not working - hotplug autorefresh.
    Bug in wss please correct in my-app-web/node_modules/react-dev-utils/webpackHotDevClient.js'
protocol 'ws' -> 'wss'
