import * as Paho from "paho-mqtt";

const Client = () => {
  let location = {
    hostname: "localhost",
    port: 1883
  };

  var client = new Paho.MQTT.Client(
    location.hostname,
    Number(location.port),
    "clientId"
  );

  console.log(client);
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  return client;
};

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
}

export default Client;
