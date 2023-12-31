# Digital Innovation - Coding Project
Dear Students,

this is the repository for our DI coding project for the winter term 2022/23. You will find all information and assignments here. The code we produce during the tutorial sessions will be pushed to this repo, so you can build upon it for your homework assignments. Example solutions for the assignments will also be added to this repo.

## Schedule
### Wednesdays - Live Coding Sessions 
Our live coding sessions will be held from 12:15pm to 1:45pm in the same room as the lecture.

### Consultation
I will be available for questions and problems every Friday and Saturday. This is a voluntary offer to everyone. If you need help with anything, please notify me with a short email, also shortly describing the problem. We will set up an appropriate Zoom meeting.

## Assignment until 01.02.2023
Please continue our implementation of the ShoppingList.jsx component to allow it to add items to the shopping list.

## Assignment until 25.01.2023
I have completed the implementation of the login component. After the tutorial I added two more things:
1. After a successful login, the application changes the route to /lists to display the current list of shopping lists (not implemented yet)
2. After an unsuccessful login, an error message gets displayed below the input fields.
Until next week, please implement the SignUp.jsx component to have similar functionality as the login component. 

## Assignment until 12.01.2022
1. We are currently saving plain text passwords to the database, which is an absolute no-go from a security perspective.
Please change our server so that passwords are hashed. Please use the bcrypt framework for hashing. 
You can use [this hashing tutorial](https://dev.to/aditya278/understanding-and-implementing-password-hashing-in-nodejs-2m84#) as an inspiration
2. We implemented sign up and login functionality and generate a JWT token for a successful login. 
A check for the validity of this token needs to be added to every API endpoint. You can refer to
[this JWT tutorial](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/) for inspiration.

Please be aware that I will be available for consultation on Thursday, 23.12.2021 and Monday, 10.01.2022 from 3pm to 5pm.

**Update 11.01.2022:** I have pushed my suggestion for solving this assignment to the
repository.

## Assignment until 22.12.2021
Continue the implementation of our backend (API endpoints, controllers and data access). Similar to the */items* endpoints we created in today's tutorial, please implement the following:

Add shopping lists to the application. Shopping lists have a name (listName: String) and a list of items as content (content: [String]). Please remember that we need a new collection in our database and API endpoints for accessing, creating and deleting lists.
Additionally, we need to be able to modify lists (adding and removing items).

Required endpoints:
- GET /lists
  Returns a list of all available shopping lists
- POST /lists
  Creates a new shopping list. Accepts the listName as a parameter
- GET /lists/:id
  Returns a shopping list identified by the id
- PUT /lists/:id
  Updates a shopping list, identified by its id. 
- DELETE /lists/:id
  Removes a shopping list from the database, identified by its id

You can make use of the same code logic, as we implemented for the items. This is a bit more advanced than what we did in the tutorial, but everyone should be able to implement everything except the *PUT /list/:id* endpoint. That will take a bit of research and additional understanding 😉 

Suggestion: Start by ignoring the content parameter and implement shopping lists with "listName" as its only attribute. Adding the content later simplifies the setup and helps to get the logic right.

**Update 20.12.2021:** I have pushed my suggestion for solving this assignment to the 
repository.

## Assignment until 15.12.2021
For an introduction to React, please follow [this tutorial](https://reactjs.org/tutorial/tutorial.html). Please follow the "Setup Option 2" as you can familiarize yourself with your local coding environment that way. You don't need to implement the "Time Travel" feature (but you can, if you want to 😉)

Please set up a mongoDB Database. As said in our session, you can either set it up locally, or use the [hosting service Atlas](https://account.mongodb.com/account/register). Detailed instructions can be found in ATLAS.md.

## Used Tools
- [Latest version of NodeJS](https://nodejs.org/en/download/) \
  Node JS is the engine that allows us to run JavaScript files on our computers. It is needed for the development of our application.
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) \
  git is a tool for version control of our source code. It helps organize changes and allows a rollback to previous versions, should we mess up somewhere.
- Graphical git tool: e.g. [SourceTree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/) \
  as git in the command line is a bit hard to get into, we will be using a graphical git tool. It enables us to visualize our git repo and allows us to use git without the need to learn all the command line commands.
- JS IDE: e.g. [Webstorm](https://www.jetbrains.com/webstorm/download/) (Pro version is free of charge for students) or [Visual Studio Code](https://code.visualstudio.com/download) \
  This is where we will be coding our project. We could also use a plane text editor, but an IDE has many cool and helpful functionalities.
- [Postman](https://www.postman.com/downloads/) \
  This is a tool to test the API endpoints of our backend.

\* I will be using SourceTree and Webstorm in our sessions

In our next coding session, I will show you all the tools, so you know what they do and how they work.
