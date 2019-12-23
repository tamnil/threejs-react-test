import * as Paho from "paho-mqtt";

var location = {
hostname: "tailor.cloudmqtt.com",
port: "37946",
path:"/",
  clientId: "brws"
};

var client = new Paho.Client(
  location.hostname,
Number(location.port),
location.path,
  location.clientId
);

console.log(client);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({
  useSSL: true,
  userName: "tamnil",
  password: "tamnil",
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

client.onMessageArrived = function (message) {
  console.log("Message Arrived: " + message.payloadString);
}
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
}




export default client;
