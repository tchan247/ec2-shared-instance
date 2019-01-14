#!/bin/bash
echo -- check run start app script
node apps/test-app-1/app.js & node apps/test-app-2/app.js &
