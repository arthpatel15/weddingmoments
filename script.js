var cookie_btn = document.getElementById("cookie");
var points = Number(document.getElementById("points").innerHTML);
var score = document.getElementById("points");

console.log(points)

// function cookie_click (){
//     points++;
//     score.innerHTML = points;
//     if(points%10==0){
//         document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
//     }
// }


document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        points++;
        score.innerHTML = points;
        if(points%10==0){
            document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
            document.body.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
    }
  }

