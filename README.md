# location-project

## How to run in localhost
- You have had installed docker on your local machine.
- You have to run a redis docker image to persist the application data, to run the docker image you have to execute the
following instructions on terminal: docker run --name redisdb -p 6379:6379 redis, this will download the redis image if
there is no one installed and will run a new docker instance with redis on it.
- When the redis instance is running, you have to clone this repository and run npm install on the root folder to install 
locally all necessary nodejs dependencies.
- Then, you have to run npm run start, a npm script to run the server and start listening to different client requests. If 
there is a problem with nodemon when you run the script, you have to install nodemon dependency with npm i nodemon.
- When the server is running yo can made requests on http://localhost:3000/locations.

## Tests with front-end page
- You have to clone the project from this repo https://github.com/JohanCamiloL/location-project-front and open the index.html.
- To send requests with the given form on the webpage, the server needs to stay running to handle client requests.
