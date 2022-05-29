$(() => {
    $('#navbar').load('/navbar.html', loginIfNeeded); 
    $('#footer').load('/footer.html');
    $('#content').load('/all_posts.html');
    // loginIfNeeded()
})

function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    console.log(currentUser);
    if(!currentUser){
        $.post('/api/users', {}, (user) => {
            if(user){
                console.log("logged in as ", user.name);
                window.localStorage.user = JSON.stringify(user);
                currentUser = user;
                $('#nav-user').text(currentUser.name); 
            }
        })
    }
    else{
        console.log("resuming session as ", currentUser.name);
        $('#nav-user').text(currentUser.name); 
    }
}