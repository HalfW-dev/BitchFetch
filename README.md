# BitchFetch

Link to app: https://touhoubitchfetch.netlify.app/

## Technologies used:

###### React
A JavaScript front-end library/framework to help build the UI

###### MongoDB
A NoSQL easy-to-use database to store data (in this case the fetched data or the bitch info)

###### NodeJS
A JavaScript runtime that powers the back-end

###### Express
A NodeJS framework which helps building the API way easier

###### Heroku
A cloud platform that is used to host the API

###### Netlify
Another hosting platform that hosts touhoubitchfetch.netlify.app

### Behind the scenes

After accessing touhoubitchfetch.netlify.app, the React app will be rendered and displayed, with a button saying "Fetch Bitches". Clicking the button will start a synchronous process of:
 - React sends a GET request to the NodeJS/Express API
 - The API then also sends a GET request to the MongoDB database
 - The database responses with data, which the API converts to JSON and responses that JSON data back to React
 - React deals with the JSON data it receives and renders it to be screen based on the React code
 - The bitch info is displayed

### Why don't you connect straight from React to the database?

Short answer: security and performance reasons

Long answer: Connecting to any database requires putting credentials in your code. Since browser-side/client-side code (like those of React) can be read by any user by simply opening the DevTool, directly connecting to the database from React means exposing your database credentials to the public. With your database credentials, anyone can read, write, delete data in your database.
When an API or a back-end app is introduced between React and MongoDB, the app will do the talking for you. It would ask the data from the database and then fetch it to React. Since back-end app stays in the server side (as the name suggests), the database credentials are safely stored in the server, away from the curious eyes in the client side.

### But I see your NodeJS/Express code in the repo. Doesn't that just defeat the purpose of having an API?
The code in the GitHub repo is without the credentials.

### But then how to do you make the app work without the credentials?
This GitHub repo is not for hosting the application, it's simply just a place to post my code for maintainance and review. The hosting is done by Heroku and Netlify, and credentials are provided to Heroku and Netlify (and of course Heroku and Netlify do not show the credentials to anyone but the owner, which is me).
