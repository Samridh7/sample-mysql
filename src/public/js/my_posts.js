function loadMyPosts(){
    const userId = JSON.parse(window.localStorage.user).id;
    $.get(`/api/posts?userId=${userId}`, (posts) => {
          for(let p of posts){
              $('#post-container').append($(`
              <div class="col-4">
              <div class="card mx-2 my-2">
              <div class="card-body">
                <h5 class="card-title text-center">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">${p.user.name}</h6>
                <p class="card-text">${p.body}.</p>
                <a href="#" class="card-link">Comment</a>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
              </div>
            `)
            )
          }
    })
}