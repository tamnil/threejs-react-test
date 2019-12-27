import * as Paho from "paho-mqtt";



console.log('mqtt init')
const env = process.env

var location = {
  hostname:env.REACT_APP_MQTT_HOST,
  port: env.REACT_APP_MQTT_PORT,
  path: env.REACT_APP_MQTT_PATH,
  clientId: env.REACT_APP_MQTT_CLIENTID
};

var client = new Paho.Client(
  location.hostname,
  Number(location.port),
  location.path,
  location.clientId
);


// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({
  useSSL: true,
  userName: env.REACT_APP_MQTT_USER,
  password:env.REACT_APP_MQTT_PASSWORD,
  onSuccess: onConnect
});

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  var message = new Paho.Message("Hello");
  message.destinationName = "World";
  client.send(message);
  client.subscribe("teste/test");
}

client.onMessageArrived = function(message) {
  console.log("Message Arriveda: " + message.payloadString);
};
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArriveda:" + message.payloadString);
}

export default client;
