# Wose - Addressing obesity! Exercise with your friends ! Wose is an exercise vedio application to lose your weight. It is build based on the purpose to solve obesity problems. This product is made for DECO7381 course by Team MakkaPakka.

## Technology Stack | Name | Stack | | ------ | ------ | | Front-end | Ionic Angular, Material UI, SCSS | | Back-end | Express.js (Node.js), Capacitor | | Database | MongoDB | | Deployment | MongoDB Atlas

## Repositories - [Front- end](https://github.com/OliviaChh/wose_app/tree/main/src/app) - Code base for Front-end on Github - [Back-end](https://github.com/OliviaChh/wose_app/tree/main/server) - Code base for Back-end on Github

## Features
### 
* Dashboard - See Video list (all Video or based on category) - Search Video - See Video detail - workout with other user - Add friends
* Community - See my friends list - Delete friends - Search friends
* Calorie - Store my daily calorie intake using food's calorie API (https://developer.edamam.com/food-database-api-docs)
* My - Meal suggestion, Achievement system, Update personal information

## Development Guide
#### Set Up -
###
1. Clone the repository 
```
git clone https://github.com/OliviaChh/wose_app
```
2. Install packages and dependencies
```
npm install
cd server
npm install
cd ../
npm init -y
```
3. Run the nodejs command to connect to database
```
nodemon server
``` 
4. Before pushing to the master, please build the project first using following code. This is to make sure that there are no errors and that the project can be deployed successfully. 
```
ionic serve
```
5. Before pushing, please make sure you remove all `console.log` comments during development. 

#### Project Structure - 
###
* Server: Contains configuration files for database and passport package.
* Service: Contains controllers for each model.
* Middlewares: Contains middlewares for routes.
* Model: Contains schema definition for models.
* Routes: Contains routes for API.
* App: All front-end page and component.


## Team member
###
* Hansheng Li
* Chia-Hsin Hung
* Chieh-Hsun Mai
* Junyao Jiang
* Sutao Xu
* Xiwei Ruan
