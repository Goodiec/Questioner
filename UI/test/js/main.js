if(document.getElementById("bioParagraph") != null){
    bioEditHandler();
    interestEditHandler();
}
function bioEditHandler(){
    let bioParagraph = document.getElementById("bioParagraph");
    let bioDiv = document.getElementById("bio");
    let bioEditBtn = document.getElementById("editBio");
    let bioTextareaDiv = document.getElementById("bioTextareaDiv");
    let bioTextarea = document.getElementById("bioTextarea");
    let bioSaveBtn = document.getElementById("bioSaveBtn");
    let bioContent = bioParagraph.textContent;

    bioEditBtn.onclick = function(){
        bioDiv.style.display = "none";
        bioEditBtn.style.display = "none";
        bioTextareaDiv.style.display = "block";
        bioTextarea.value = bioContent;
    }
    bioSaveBtn.onclick = function(){
        bioDiv.style.display = "block";
        bioEditBtn.style.display = "block";

        bioParagraph.textContent = bioTextarea.value.trim();
        bioTextareaDiv.style.display = "none";

    }
}



function interestEditHandler(){
    let interestsParagraph = document.getElementById("interestsParagraph");
    let interestsDiv = document.getElementById("interests");
    let interestsEditBtn = document.getElementById("editInterests");
    let interestsTextareaDiv = document.getElementById("interestsTextareaDiv");
    let interestsTextarea = document.getElementById("interestsTextarea");
    let interestsSaveBtn = document.getElementById("interestsSaveBtn");
    let interestsContent = interestsParagraph.textContent;

    interestsEditBtn.onclick = function(){
        interestsDiv.style.display = "none";
        interestsEditBtn.style.display = "none";
        interestsTextareaDiv.style.display = "block";
        interestsTextarea.value = interestsContent;
    }
    interestsSaveBtn.onclick = function(){
        interestsDiv.style.display = "block";
        interestsEditBtn.style.display = "block";

        interestsParagraph.textContent = bioTextarea.value.trim();
        interestsTextareaDiv.style.display = "none";

    }
}

voteImageSwap();
function voteImageSwap(){
    let upvote = document.getElementsByClassName("upvote");
    let downvote = document.getElementsByClassName("downvote");

    for(let i = 0; i < upvote.length; i++){
        upvote[i].onclick = function(){
            if(this.src.indexOf("h-") != -1)
                this.src = "images/up-arrow.png";
            else{
                this.src = "images/h-up-arrow.png";
                if(this.nextElementSibling.src.indexOf("h-") != -1)
                    this.nextElementSibling.src = "images/down-arrow.png";
            }
        }
    }

    for(let i = 0; i < downvote.length; i++){
        downvote[i].onclick = function(){
            if(this.src.indexOf("h-") != -1)
                this.src = "images/down-arrow.png";
            else{
                this.src = "images/h-down-arrow.png";
                if(this.previousElementSibling.src.indexOf("h-") != -1)
                    this.previousElementSibling.src = "images/up-arrow.png";
            }
        }
    }
        
}

questionComment();
function questionComment(){
    let commentBtn = document.getElementsByClassName("commentBtn");
    let commentParagraph = document.getElementsByClassName("commentParagraph");
    for(let i =0; i < commentBtn.length; i++){
        commentBtn[i].onclick = function(){
            console.log("we entered " + i)
            let commentTextAreaElement   = this.previousElementSibling;
            let textValue = commentTextAreaElement.value.trim();
            console.log(textValue)
            if(textValue.length != 0){
                textValue = "<p>"+ "--"+textValue+"</p>";
                this.parentElement.
                previousElementSibling.
                lastElementChild.
                firstElementChild.innerHTML += textValue;
                commentTextAreaElement.value = "";
            }
        }
    }
    
}



