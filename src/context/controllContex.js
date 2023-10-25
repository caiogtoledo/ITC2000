import React, { createContext, useEffect, useState } from "react";
// import { Client, Message } from "paho-mqtt";
import mqtt from "mqtt/dist/mqtt";

export const ControllContext = createContext();

// const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

export function ControllProvider({ children }) {
  const [client, setClient] = useState();
  const [lastDirection, setLastDirection] = useState();

  const initialState = {
    forward: false,
    right: false,
    back: false,
    left: false,
  };

  const [arrowsStates, setArrowsStates] = useState(initialState);
  const [speed, setSpeed] = useState(0);

  function changeDirection(direction) {
    setLastDirection(direction);
    if (arrowsStates[direction]) {
      setArrowsStates(initialState);
    } else {
      let newState = { ...initialState };
      newState[direction] = true;
      setArrowsStates(newState);
      publishMessage(direction);
    }
  }

  // enviando mensagem ao alterar velocidade
  useEffect(() => {
    publishMessage(lastDirection);
  }, [speed, lastDirection]);

  //Conexão MQTT
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const [messages, setMessages] = React.useState("?");

  const host = "wss://mqtt-dashboard.com:8884/mqtt";
  const clientId = "clientId-sergiomaua";

  const options = {
    keepalive: 60,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
  };

  useEffect(() => {
    if (!connectionStatus) {
      console.log("Connecting mqtt client");
      const mqttClient = mqtt.connect(host, options);
      mqttClient.on("connect", () => {
        setConnectionStatus(true);
        mqttClient.subscribe("robot-controlls");
        setClient(mqttClient);
      });

      mqttClient.on("message", (topic, payload, packet) => {
        setMessages(payload.toString());
        console.log("New message: " + payload.toString());
      });
    }
  }, [connectionStatus, options]);

  const publishMessage = (message) => {
    if (client) {
      client.publish("robot-controlls", `${message},${speed}`);
    }
  };

  console.log("Connections: " + connectionStatus);
  console.log("Messages: " + messages);

  return (
    <ControllContext.Provider
      value={{ arrowsStates, speed, changeDirection, setSpeed }}
    >
      {children}
    </ControllContext.Provider>
  );
}
