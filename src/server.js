const express = require("express");
const models = require("./db/models");
const {usersRoute} = require("./routes/users/index");
const {postsRoute} = require("./routes/posts/index");
const db = models.db;
const app = express();
const PORT = process.env.PORT || 8383;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.use("/", express.static(__dirname + "/public"));

db.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}`)
      })      
})
.catch((e) => {
    console.log(e); 
})