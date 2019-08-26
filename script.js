
var clickFooter = document.querySelector("footer");

clickFooter.addEventListener("click", onClickFooter);
x = 0;
function onClickFooter() {
	console.log(`clique ${x+=1}`);
};

// humberger
var col = document.querySelectorAll("div.collapse ");
var menu = document.getElementById("navbarHeader");
var btn = document.getElementsByClassName("navbar-toggler")[0];
var statu= true;
function hamburger() {
   if (statu == true ){
       menu.classList.remove("collapse");
       statu = false;
   } else{
       menu.classList.add("collapse");
       statu = true;
   }
}
btn.addEventListener("click", hamburger);


// fonction 3

var carFonction = document.querySelectorAll("div.card-body")[0];
console.log(carFonction);
var boutton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(boutton)

function colorChange() {
	carFonction.style.color = "red"
}

boutton.addEventListener("click", colorChange)

// fonction 4

var carFonction1 = document.querySelectorAll("div.card-body")[1];
var boutton1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

var color = true;
function colorChange1() {
	if (color == true) {
	carFonction1.style.color = "green";
		color = false;
	}
	else {
	carFonction1.style.color = "";
	color = true;
	}
}
boutton1.addEventListener("click", colorChange1);


//fonction 5
var head = document.querySelector("header");
console.log(head)

var stat = true;
function remove() {
	if (stat == true) {
	document.querySelector("link").disabled = true;
	stat = false;
	} else {
		document.querySelector("link").disabled = false;
		stat = true;
	}
}

head.addEventListener("dblclick", remove)

// fonction 6
let view = document.getElementsByClassName("btn btn-sm btn-success")
for (let i = 0; i < view.length; i++) {

let card = document.querySelectorAll("div.col-md-4")[i];
let text = document.querySelectorAll("p.card-text")[i];
let text1 = document.querySelectorAll("small.text-muted")[i];

let stat = true
function mouse() {
	if (stat == true) {
	card.style.width = "20%";
	text.style.display = 'none';
	text1.style.display = 'none';
	stat = false;
	} else {
		card.style.width = "";
		text.style.display = 'block';
		text1.style.display = 'block';
		stat = true;
	}
}

view[i].addEventListener("mousemove", mouse)

}

//fonction 7
var btn = document.getElementsByClassName("btn btn-secondary my-2")[0];
console.log(btn)
var up = document.getElementsByClassName("row")[1]
console.log(up)

function upCase() {
	up.insertBefore(up.lastChild, up.firstChild);
} 

btn.addEventListener("click", upCase)