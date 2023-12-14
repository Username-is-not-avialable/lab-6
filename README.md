#  Hardhat проект
Hardhat (твердая шляпа, каска) - фреймворк для компиляции, тестирования и деплоя смарт-контракта в локальной сети hardhat network. 
Этот проект содержит начальный код и инструкции для создания распределенного приложения на основе react и hardhat. 

Структура проекта включает в себя основные директории: 
- `/app` - фронтенд на `React`;
- `/contracts` - файлы с исходным кодом смарт-контрактов;
- `/test` - файлы для тестирования смарт-контрактов.

## 1 Настройка окружения 
Setting up your Node.js environment for Ethereum development
Для работы понадобится nodejs 20 версии, git и редактор VS Code. 
Настоятельно рекомендуем работать в среде linux или macOS. 
Стабильность работы в среде WSL windows не гарантируется.  

Клонируйте репозиторий и установите зависимости для `hardhat` и фронтенд-приложения:
```sh
git clone https://github.com/labintsev/hardhat-tutorial
cd hardhat-tutorial
npm i
cd app
npm i
```

# 2 Создание и настройка проекта hardhat
В корневой папке проекта выполните инициализацию проекта с пустым файлом `hardhat.config.js`
Для этого выполните команду: 
```sh
npx hardhat init
```
С помощью стрелок выберите пункт `Create an empty hardhat.config.js` и нажмите ввод. 
В созданном файле `hardhat.config.js` добавьте настройку версии компилятора `solidity`: 
```js
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};
```
Реализация компилятора `solidity` на языке  

после переменной `solidity` добавьте переменную `  paths: { artifacts: "./app/src/artifacts",   },`. 
Эта настройка отвечает за тот путь, в который будут размещаться результаты компиляции (артифакты) смарт-контрактов. 
Мы размещаем их в папке фронтенд приложения, т.к. деплой и обращение к публичным методам смарт-контракта будут проводиться из пользовательского интерфейса. 


# 3
The basics of a Solidity smart contract that implements a token

# 4
Writing automated tests for your contract using Hardhat

# 5
Debugging Solidity with console.log() using Hardhat Network

# 6
Deploying your contract to Hardhat Network and Ethereum testnets 




