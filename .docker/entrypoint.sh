#!/bin/bash

npm install
npx prisma init
npm run build
npm run start:dev
