#!/bin/bash

killall node

# Переходим в папку с первым приложением и запускаем его
cd simple_api
npm i
npm run start &

# Переходим в папку со вторым приложением и запускаем его
cd ..
cd biletopoisk
npm i
npm run dev &