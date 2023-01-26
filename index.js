const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const postPhoto = document.getElementsByClassName("post-photo")
const mainDiv = document.querySelector("main")

renderPosts()

function renderPosts(){
    let mainDivHtml = ""
    for (i = 0; i < posts.length; i++){
        mainDivHtml += 
            `<div class="post">
            <div class="user-informations">
                <img src=${posts[i].avatar}>
                <div>
                    <p class="post-user-name">${posts[i].name}</p>
                    <p class="post-user-location bold-text">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-photo" ondblclick="like(${i})" src=${posts[i].post}>
            <div class="actions">
                <img class="like-button" id="likeBtn${i}" onclick="like(${i})" src="images/icon-heart.png" alt="">
                <img src="images/icon-comment.png" alt="">
                <img src="images/icon-dm.png" alt="">
            </div>
            <p class="likes" id="post-likes-${i}"><span class="bold-text">${posts[i].likes}</span> likes</p>
            <p class="coments"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment} lol</p>
        </div>`
    }
    mainDiv.innerHTML = mainDivHtml
}

function like(postNum){
    const btnLike = document.getElementById("likeBtn" + postNum)
    const numLikes = document.getElementById("post-likes-" + postNum)
    if(posts[postNum].liked){

        posts[postNum].likes -= 1
        posts[postNum].liked = false
        btnLike.src = "images/icon-heart.png"
        numLikes.innerHTML = `<span class="bold-text">${posts[postNum].likes}</span> like`

    }else{
        posts[postNum].likes += 1
        posts[postNum].liked = true
        btnLike.src = "images/icon-heart-fill.png"
        numLikes.innerHTML = `<span class="bold-text">${posts[postNum].likes}</span> like`
    }   
}


// likeBtn[0].addEventListener("click", function(){
//     if (this.src == "http://127.0.0.1:5500/images/icon-heart.png"){
//         this.src = "images/icon-heart-fill.png"
//     }else{
//         this.src = "images/icon-heart.png"
//     }
// })

// postPhoto[0].addEventListener("dblclick", function(){
//     if (likeBtn[0].src == "http://127.0.0.1:5500/images/icon-heart.png"){
//         likeBtn[0].src = "images/icon-heart-fill.png"
//     }else{
//         likeBtn[0].src = "images/icon-heart.png"
//     }
// })