This is Clone of https://github.com/react-boilerplate/react-boilerplate

## Infrastructure Requirements
- Load Balancer
  - without sticky sessions
  - traffic port 80
- 2 FRONTEND servers under load balancer
  - traffic port 80
  - ssh port 22
- Blue-Green deployment is a must
- SSH access to connect to each server

## Server Requirements
- Node.js v8.15.1 or higher
- npm v5 or higher

## Building APP process 
Commands to run from project root directory:
- ``npm install``
- ``npm run build``

``/build`` folder will be created. Content inside it or folder should be moved to web directory.

## Caching

- index.html - 5 min
- all images .jpg .png 1 week
- all .js files 1 week

## Routing
Rewrite all pages (e.g. yourdomain.com/subpage) to yourdomain.com/index.html to let react-router take care of presenting the correct page.

Keep in mind that all hashes can change depending on changes made during commit.
Every route loads different js chunks.
