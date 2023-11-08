# Projeto de Microcontroladores e Sistemas Embarcados (2° SEM)

## Integrantes

- Caio Bartolozzi Bastos Godoy de Toledo
  - 20.01430-9
- Carolina Perez
  -  20.00968-2
- Guilherme Banzato
  - 20.01561-5
- Leonardo Campos
  - 20.00786-8

![equipe](https://raw.githubusercontent.com/caiogtoledo/EEN251/main/equipe.jpeg)

## Objetivo
O projeto consiste em um caminhão de sorvete que é controlado remotamente

## Requisitos
- Se movimentar para frente, para trás e para os lados
- Botão para ligar e desligar
- Fácil acesso dos componentes elétrico
- Levar uma caixa de isopor com sorvetes
## Componentes eletrônicos
- Raspberry Pi
- Tela 7 polegadas Raspberry Touch
- KIT 2 motores + 4 rodas
- Ponte H
- Bateria de Lítio Íon
- Interruptor
- Jumpers
## Controle
- Projeto ReactJS Hospedado ([Controle](https://icetruckcontrol.netlify.app/))
- Conexão MQTT com broker público ([HiveMQTT](https://www.hivemq.com/demos/websocket-client/))
  
[![controle](https://raw.githubusercontent.com/caiogtoledo/ITC2000/main/videos/controle.png)](https://raw.githubusercontent.com/caiogtoledo/ITC2000/main/videos/controle.png)


## Custos (planilha em: /financeiro)
![custos](https://raw.githubusercontent.com/caiogtoledo/ITC2000/main/financeiro/Custos_ITC2000.png)
- Valor Total = R$ 1.395,26

## Demonstração - Vídeo
[![Video final](data:image/png;base64,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)](https://www.youtube.com/embed/5O3dwRa5a1M "Video final")
