const express = require("express");
const models = require("./src/db/models");
const {usersRoute} = require("./src/routes/users/index");
const {postsRoute} = require("./src/routes/posts/index");
const db = models.db;
const app = express();
const PORT = process.env.PORT || 8383;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.use("/", express.static(__dirname + "/src/public"));

db.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}`)
      })      
})
.catch((e) => {
    console.log(e); 
})