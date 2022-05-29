const sequelize = require("sequelize");

const db = new sequelize({
    dialect: "mysql",
    database: 'socialmediaappdb',
    username: 'socialuser',
    password: 'socialpass',
})

const COLID_DEF = {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: sequelize.DataTypes.STRING(30),
    allowNull: false,
    unique: true
}

const COL_TITLE_DEF = {
    type: sequelize.DataTypes.STRING(100),
    allowNull: false
}
const Users = db.define('user', {
    id: COLID_DEF,
    name: COL_USERNAME_DEF,
})

const Posts = db.define('post', {
    id: COLID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: COLID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT({length: "tiny"}),
        allowNull: false
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports = {
    db,
    Users,
    Posts,
    Comments
}