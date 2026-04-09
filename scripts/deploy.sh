#!/bin/bash
docker build -t ci-cd-app .
docker run -d -p 3000:3000 ci-cd-app
