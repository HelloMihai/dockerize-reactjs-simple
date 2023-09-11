- Pull the source code
- If pulled for the first time or the package.json changed run

docker-compose build
- Then, run the following command to start the environment.

docker-compose up -d
- To see the logs of your app

docker-compose logs -f web
- To see and follow the logs of your tests

docker-compose logs -f test
- If you need to install any npm package
    - Eg: you added a new package to develop

docker-compose exec web npm install package-name
- stop the containers

docker-compose down
- Load in browser

https://localhost:3000
- VS Code - connect to remote session
    - need Dev Containers addon from Microsoft
    - open folder /app