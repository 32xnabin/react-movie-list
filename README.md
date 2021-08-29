# react-movie-list
(for simplicity I have not used .env file to have few things like api key and api urls)
- Webpack and essentials configuration done manually
- tailwindcss for styling framework
- eslint and prettier for linting
- jest to test the component
- Dockerized
- react-spring for animation
- language: typescript

# Installation

clone the repo
```
git clone https://github.com/32xnabin/react-movie-list.git
```
```
cd react-movie-list
```
```
npm install
```
```
npm start
```

# testing
```
npm run test:watch
```
in the prompt press a to run all test
(the test is really basic but is configured to scale later)
# Docker
```
docker build --tag react .
```
```
docker-compose run movie
```
# site deployed to netlify

https://gallant-yonath-916661.netlify.app/



