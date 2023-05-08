// lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


//Font size and Color theme
function fontsize1(){
    document.getElementById("quote").style.fontSize="30px";
    document.getElementById("cat").style.fontSize="40px";
    document.getElementById("cat2").style.fontSize="40px";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("description")[i].style.fontSize="15px";
    }
}

function fontsize2(){
    document.getElementById("quote").style.fontSize="50px";
    document.getElementById("cat").style.fontSize="60px";
    document.getElementById("cat2").style.fontSize="60px";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("description")[i].style.fontSize="20px";
    }
}

function fontsize3(){
    document.getElementById("quote").style.fontSize="70px";
    document.getElementById("cat").style.fontSize="80px";
    document.getElementById("cat2").style.fontSize="80px";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("description")[i].style.fontSize="25px";
    }
}

function theme1(){
    document.getElementById("bod").style.backgroundColor="#fca5f0e1";
    document.getElementById("cat").style.color="#8c0139e5";
    document.getElementById("cat2").style.color="#8c0139e5";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#f382a9d0";
        });

        document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
        });
    }
}

function theme2(){
    document.getElementById("bod").style.backgroundColor="#3e35e740";
    document.getElementById("cat").style.color="#0f0967e6";
    document.getElementById("cat2").style.color="#0f0967e6";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#868AF7";
        });

        document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
        });
    }
}

function theme3(){
    document.getElementById("bod").style.backgroundColor="#a3faa1e5";
    document.getElementById("cat").style.color="#025a00e9";
    document.getElementById("cat2").style.color="#025a00e9";
    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#82fa80";
        });

        document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
            document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
        });
    }
}

//random theme

function randomtheme(){
    let operator = Math.floor(Math.random() * 3);

        if(operator == 0){
            document.getElementsByClassName("colrrandom")[0].style.backgroundColor="#fca5f0";
            document.getElementById("bod").style.backgroundColor="#fca5f0e1";
            document.getElementById("cat").style.color="#8c0139e5";
            document.getElementById("cat2").style.color="#8c0139e5";
            for (let i = 0; i < 16; i++) {
                document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#f382a9d0";
                });

                document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
                });
            }

        }
        
        else if(operator == 1){
            document.getElementsByClassName("colrrandom")[0].style.backgroundColor="#807AFB";
            document.getElementById("bod").style.backgroundColor="#3e35e740";
            document.getElementById("cat").style.color="#0f0967e6";
            document.getElementById("cat2").style.color="#0f0967e6";
            for (let i = 0; i < 16; i++) {
                document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#868AF7";
                });

                document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
                });
            }
        }
        
        else{
            document.getElementsByClassName("colrrandom")[0].style.backgroundColor="#a1fa9f";
            document.getElementById("bod").style.backgroundColor="#a3faa1e5";
            document.getElementById("cat").style.color="#025a00e9";
            document.getElementById("cat2").style.color="#025a00e9";
            for (let i = 0; i < 16; i++) {
                document.getElementsByClassName("images")[i].addEventListener("mouseover", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#82fa80";
                });

                document.getElementsByClassName("images")[i].addEventListener("mouseout", function() {
                    document.getElementsByClassName("images")[i].style.backgroundColor = "#ffffffc5";
                });
            }
        }
}