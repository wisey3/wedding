
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a beautiful wedding website for Mr & Mrs Baker-Washburns wedding created by Mary Baker

## Technologies
Project is created with:
* React: XX.X
* NodeJS: XX.X
* ANT: XX.X

## Setup
To run this project inside a docker container:

```
$docker build -t wedding_react:dev .
$docker run -it --rm -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true wedding_react:dev
```

use ```--detach or -d``` instead to detach the docker container, so it can run in the background instead of interactively(```-it```)
```
$docker run  --detach  --rm -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true wedding_react:dev
```
Visit localhost:3001 in your browser.


## Contribute

Contributions are always welcome!

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

## Contributors
[Mary Baker](https://github.com/marybees)