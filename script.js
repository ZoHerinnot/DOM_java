//Fonctionnalité 1  et 1-bis 

// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console 
//"clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
var  footer = document.getElementsByTagName("footer")[0];
var count = 0;
footer.addEventListener("click", function1);
function function1 () {
    count += 1
    console.log("clique numéro " + count);
};

// Fonctionnalité 2

col = document.querySelectorAll("div.collapse ");

var menu = document.getElementById("navbarHeader");
var btn = document.getElementsByClassName("navbar-toggler")[0];
var statu= true;
function hamburger() {
    if (statu == true ){    
        menu.classList.remove("collapse","bg-dark"); 
        statu = false;        
    } else{
        menu.classList.add("collapse","bg-dark");
        statu = true;
    }
}
btn.addEventListener("click", hamburger);

// Fonctionnalité 3

var text = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var cardtext = document.getElementsByClassName("card-text")[0];

function textcolor() {
    cardtext.style.color = "red";
};
text.addEventListener("click",textcolor);

// Fonctionnalité 4

var text1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var cardtext1 = document.getElementsByClassName("card-text")[1]; 
var statu = true;
function textcolor1(e) {
    if (statu == true) {   
    cardtext1.style.color = "green";  
    statu = false;  
    } else{
        cardtext1.style.color = "black";  
        statu = true;
    };
    
}
text1.addEventListener("click", textcolor1);

// Fonctionnalité 5

var bootbtn = document.getElementsByClassName("navbar")[0];
var link = document.querySelectorAll("link")[0];
var statu= true;
function ondblclick(){
    if(statu == true){
    link.setAttribute('href', '#');
    statu = false;
    }else{
        link.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')
        statu = true;
    }
}
bootbtn.addEventListener("dblclick",ondblclick);

// Fonctionnalité 6
var tab = document.getElementsByClassName("card-text");
var textElt = []
for (let i = 0; i < tab.length; i++) {
    textElt.push(tab[i].textContent)
    
}

var view = document.getElementsByClassName("btn btn-sm btn-success");

for(let i= 0 ; i < view.length; i++){

var viewElt = document.getElementsByClassName("btn btn-sm btn-success")[i];



        function hidden() {

            var txt = document.getElementsByClassName("card-text")[i];
            var picture = document.getElementsByClassName("card-img-top")[i];
            
            if (statu == true){
            txt.innerHTML="";
            picture.style.width = "20%";
            statu = false;
            }else{
                txt.innerHTML = textElt[i];
                picture.style.width = "";
                statu = true;
            }
        }

    viewElt.addEventListener("mouseover", hidden);
}

// Fonctionnalité 7

