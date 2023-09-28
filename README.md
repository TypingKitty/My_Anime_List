# My_Anime_List
Implemented my own version of my anime list with my own database.
Database : mySQL
Frontend : Reactjs
Backend : Nodejs

# Deployment 
Create a database using DumpSQL folder. 
Order : user ->...->anime_character->trigger

Get a local copy of the code:
<sub>
git clone https://github.com/TypingKitty/My_Anime_List.git
cd My_Anime_List
</sub>
Modify server\config\db.js according to your database.

Install dependencies:
<sub>
cd frontend
npm i
</sub>
Now, you can start a local web server by running:
<sub>
cd server
node index.js
cd ..
cd frontend
npm run dev
</sub>
Go to the respective localhost to view the site.