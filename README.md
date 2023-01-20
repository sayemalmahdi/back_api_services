## HOW TO CREATE `API` USING NODE AND EXPRESS

https://docs.google.com/document/d/1mApIyx9Z8R34pcw764NZyMa9MXSrJ-U1y9daiWsrDf0/edit?usp=sharing


### `20 January 2023`

`First of all`
- Create API using Node and Express JS.
- Second Host | Deploy Node Express App on Heroku (Host REST API Live).

`Note:` Heroku is not free anymore. So, we will use another free hosting services like:

### `SOME FREE HOST SITES:`


Render - 
```
https://render.com\
```
Railway -
```
https://railway.app\
```
Cyclic - 
```
https://cyclic.sh\
```

## `NOW CREATE ALL NECESSARY FILE'S ON YOUR PROJECT.`

```
back_Api_Services
├── node_modules
├── data.json
├── index.js
├── package-lock.json
├── package.json
└──  Procfile
```
\
`1)` Create a folder Like named `back_Api_Services.`\
`2)` Inside the folder make a file Named `index.js.`\
`3)` Copy paste these codes:

```
const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
 
const port = process.env.PORT || 1000;
 
const apiData = require("./data.json");
 
app.get("/", (req, res) => {
   res.send("Hello I am live");
});
 
app.get("/service", (req, res) => {
   res.send(apiData);
});
 
app.listen(port, () => {
   console.log("Hello I am live again");
});
```
\
`4)` Make another file called `db.json` And Copy and Paste these codes:

```
[
   {
     "id": 1,
     "title": "Web Development",
     "image":
       "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "description":
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
   },
   {
     "id": 2,
     "title": "App Development",
     "image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
     "description":
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
   },
   {
     "id": 3,
     "title": "Software Development",
     "image":
       "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "description":
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
   },
   {
     "id": 4,
     "title": "Digital Marketing",
     "image":
       "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "description":
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
   },
   {
     "id": 5,
     "title": "Graphic Designer",
     "image":
       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "description":
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
   },
   {
     "id": 6,
     "title": "Thapa CodeFest",
     "image": "https://thapaonlineclass.com/images/thapa.png",
     "description":
       "It's a monthly event where we will give a project and you have to submit your project. Codefest will be mostly related to frontend projects and occasionally fullstack project."
   }
 ]
```
\
`5)` Make another file called `Procfile` 
And Copy paste these one line of codes:
```
web: node index.js
```

## `NOW BELLOW ARE HOW TO HOST LOCALLY AND REMOTELLY`
   
   `How to make it possible:` 
   After completing all the file on `back_Api_Services` then follow bellow the command.
   - Open the project on VS Code
   - Open the vs_code terminal (control + `)
   - npm init Enter (It will ask some questions)
   - Again Enter `package name: (back_api_services) `
   - Again Enter `version: (1.0.0) `
   - Again Enter `description: Backend API For Services`
   - Enter `entry point: (index.js) `
   - Enter `test command: `
   - Enter `git repository: `
   - Enter `keywords: `
   - Enter `author: sayem`
   - Enter `license: (ISC) `
   - Enter `About to write to /Users/sayemmohammedal-mahdi/Developer/back_Api_Services/package.json:`
   - `Type 'y'` Is this OK? (yes) `Enter`
   - `Done`

`Now:` 
- npm i express `Enter`
- npm i cors `Enter`
- node -v `Enter`
- node index.js `Enter`
- http://localhost:1000 `Enter`
- http://localhost:1000/service	`Enter`

`Done`


### `Deploy =>>>>`
Host your API For Free Forever
```
https://www.cyclic.sh/ 
```
```
https://app.cyclic.sh/#/app/sayemalmahdi-back_api_services/overview	
```

## YOU CAN WATCH THE FULL VIDEO HOW TO FREE HOST BY TRAVERSY MEDIA

`Video Title:` `3 Alternatives for Heroku's Free Tier - Full Stack & API Hosting` 
`Video Link:` 
```
https://www.youtube.com/watch?v=MusIvEKjqsc&t=261s	
```

`ALL 3 FREE HOST SITES:`
- Render - https://render.com
- Railway -https://railway.app
- Cyclic - https://cyclic.sh


## `BACKEND API SERVICES` BY USING `THIS REPOSITORY` AND `RAILWAY/CYCLIC`.

`(1)` `Made this using This GitHub Repo And Railway `
- https://backspiservices.up.railway.app/service	
- https://railway.app	

`2)` `Made this using This GitHub Repo And Cyclic `
- https://magnificent-slug-visor.cyclic.app/service
- https://www.cyclic.sh



