function create(element, idName, className, parent) {
    let el = document.createElement(element);
    el.setAttribute("id", idName);
    el.setAttribute("class", className);
    document.querySelector(parent).appendChild(el);
}

function addContent(elementSelector, content) {
    document.querySelector(elementSelector).innerHTML = content;
}

function displayFeedback() {
    
    create("div", "add-feedback", "feedback-container", ".customers-feedback");
    
    let clientName = document.getElementById("customers-name").value;
    create("h3", "cust-name", "cust-name golden", ".feedback-container");

    if (like) {
        addContent("#cust-name", clientName + ' gostou ');
        create("i", "like-solid", "bx bxs-like golden", "#cust-name");        
    } else if (dislike) {
        addContent("#cust-name", clientName + ' não gostou ');
        create("i", "dislike-solid", "bx bxs-dislike golden", "#cust-name");        
    } else {
        addContent("#cust-name", clientName + ' disse ');
        create("i", "", "bx bxs-message-rounded-dots golden", "#cust-name");        
    }

    let date = document.getElementById("visit-date").value;
    create("p", "cust-visit", "cust-visit golden", ".feedback-container");
    addContent("#cust-visit", date);
    
    let comment = document.getElementById("customers-comment").value;
    create("p", "cust-comment", "", ".feedback-container");
    addContent("#cust-comment", comment);
    
    create("hr", "hr", "", ".feedback-container");  

    counter++;
    colorHRelements();   
}
function colorHRelements() {
    document.getElementsByTagName("hr")[counter].setAttribute("color", "#d2ac47");
}
function hitLike() {
    like = !like;
    dislike = false;
    setThumbUp();
    likeClick++;   
}
function hitDislike() {
    dislike = !dislike;
    like = false;
    setThumbUp();
    dislikeClick++;
}
function setThumbUp() {
    if (like) {
        dislikeIcon.setAttribute("color", "#8a00ff");
        likeIcon.setAttribute("color", "darkgoldenrod");
    } else if (dislike) {
        dislikeIcon.setAttribute("color", "darkgoldenrod");
        likeIcon.setAttribute("color", "#8a00ff");
    } else {
        likeIcon.setAttribute("color", "#8a00ff");
        dislikeIcon.setAttribute("color", "#8a00ff");
    }
}

let likeIcon = document.getElementById("like-solid");
let dislikeIcon = document.getElementById("dislike-solid");
let like = false;
let dislike = false;
let likeClick = 1;
let dislikeClick = 1;

let counter = 0;
colorHRelements();