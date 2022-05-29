const { Posts, Users } = require("../db/models");


async function createNewPost(userId, title, body) {
    const post = await Posts.create({
        userId,
        title,
        body
    })
    return post
}

async function showAllPosts(query) {
    let where = {}
    if(query.userId){
        where.userId = query.userId
    }
    // todo handle query params
    const posts = await Posts.findAll({
        include : [ Users ],
        where
    })
    return posts;
}

// async function tasks() {
//     // console.log(await createNewPost(
//     //     1,
//     //     "this is sample title 1",
//     //     "this is body of sample title 1"
//     // )
//     // )
//     // console.log(await createNewPost(
//     //     2,
//     //     "this is sample title 2",
//     //     "this is body of sample title 2"
//     // )
//     // )
//     // console.log(await createNewPost(
//     //     3,
//     //     "this is sample title 3",
//     //     "this is body of sample title 3"
//     // )
//     // )
//     const posts = await showAllPosts();
//     for(let p of posts){
//         console.log(`${p.title} \n author: ${p.user.name} ${p.body}`);
//     }
// }

// tasks();

module.exports = {
       createNewPost,
       showAllPosts
}
