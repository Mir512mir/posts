let serverURL = "http://65.109.13.139:9191";

let token = "";
token = localStorage.getItem("jwt")


fetch(serverURL + "/posts", {
    headers: {
        "x-access-token": token
    }
})
    .then(response => response.json())
    .then(data => {
        console.log('Data: ', data);
        data.map((item) => {
            if (item.image) {
                let onePost = `<div class="col-md-4">
                <div class="card card-01">
                 <img class="card-img-top" src="${item.image}" alt="Card image cap">
                <div class="card-body">
                <span class="badge-box"><i class="fa fa-check"></i></span>
                <h4 class="card-title></h4>
    
                <div class="icons-box"><button class="heart-button"><img src="images/heart.svg"></button>
                <button class="heart-button"><img src="images/chat.svg"></button>
                <button class="heart-button"><img src="images/send.svg"></button>
                
                   <span>Liked by <a class="post__name--underline" href="#"> </a> and
                    <a href="#">${item.likes.length} others</a></span>
                <div class="post__description">
                   <span>
                    ${item.title}<br>${item.description}
                  </span>
                </div>

                <span class="post__date-time">30 minutes ago</span>
                
                 </div>
                </div>
                </div>`;

                document.getElementById("posts").innerHTML += onePost;
            }
        })
    });

{

}


