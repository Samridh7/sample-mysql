let navlinks = $('.navbar-nav .nav-link');

navlinks.click((ev) => {
     let componentUrl = `${$(ev.target).attr('data-component')}.html`  
     $('#content').load(componentUrl);
    // console.log($(ev.target).attr('data-component'));
})