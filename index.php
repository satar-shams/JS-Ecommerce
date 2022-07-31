<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<meta charset="utf-8"/>
<style>
</style>
</head>

<body>
<script src="js/DomFunctions.js"></script>

<script>
class Cards {
  constructor(id, image, name, price, info, catId) {
    this.id = id;
	this.image = image;
    this.name = name;
	this.price = price;
	this.info = info;
	this.catId = catId;
  }
  show() {
    let txt = this.id + " \n " + this.image + " \n " +  this.name 
		+ "\n  " +	this.price + " \n " +	this.info + " \n " + this.catId;
    return txt;
  }
}
var allCards = [];
function getCards(id, image, name, price, info, cat_id){
	element = new Cards(id, image, name, price, info, cat_id);	
	var myJSON = '{' + '"id":' + id + ',"image":' +'"' + image +'"' + ',"name":'  + '"' + name + '"' + ',"price":' + price + ',"info":' + '"' + info +'"' + ',"cat_id":' + cat_id + '}'  ;
	var myObj = JSON.parse(myJSON);
	allCards.push(myObj);	
}
function sss()
{	
	alert(JSON.stringify(allCards[2]));
	alert(allCards.length);
}
</script>
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <i id="iconshop" class="material-icons" style="font-size:36px; cursor:pointer;" 
	onclick="addItemToCard()">add_shopping_cart</i>  
 <div class="search-container">
    <!-- <form action="/action_page.php"> -->
    <form action="">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>

<script> </script>

<div class="header">
  <h1>JS HTML DOM </h1> 
</div>
<div class="row">
  <div class="col-3 col-s-3 menu">	
	<ul id="menulist">		
	<!-- here we get categories from data base -->
	<!-- codes are deleted and moved to ext.php -->	
	<?php
	$firstCatId=0;
	$signalcat = 0;
	?>	
	<li class="catt" onclick='showCards(1, "chocolate")'> chocolate</li>
	<li class="catt" onclick='showCards(2, "Coffee")'> Coffee</li>
	<li class="catt" onclick='showCards(3, "lighter")'> Lighter</li>
    </ul>
  </div>
  <div class="col-9 col-s-9">
    <div id="flex-parent" class="flex-container">	
	
	<!-- here we get data from data base -->
	<!-- codes are deleted and moved to ext.php -->	
	<script>
		getCards("1", "c1.jpg", "Kinder", 25, "some inforamtion", 1);
		getCards("2", "c2.jpg", "Lindt", 140, "some inforamtion", 1);
		getCards("3", "c3.jpg", "Godiva", 111, "some inforamtion", 1);
		getCards("4", "c2.jpg", "Lindt", 140, "some inforamtion", 1);
		getCards("5", "g1.jpg", "Starbucks", 20, "some inforamtion", 2);
		getCards("6", "g2.jpg", "Costa Coffee", 50, "some inforamtion", 2);
		getCards("7", "g3.jpg", "McCafé", 40, "some inforamtion", 2);
		getCards("8", "z1.jpg", "Zippo", 150, "some inforamtion", 3);
		getCards("9", "z2.jpg", "Zippo", 200, "some inforamtion", 3);
    </script>	
	
	<script src="js/showcart.js"></script>
	</div>	
  </div>
</div>
<div class="footer">
  <p>All rights are reserved</p>
</div>

<!-- The Modal -->
<div id="id01" class="w3-modal">
  <div class="w3-modal-content">
    <div class="w3-container">
      <span onclick="closeModal()"
      class="w3-button w3-display-topright">&times;</span>       
	  <div id="divparent" class="grid-container">	  
		<!--content added with js -->	  
	  </div>	  
	  <form action="/action_page.php">		  	  
		  <input type="submit" value="payment">
		    <textarea id="paymap" style="display:none;" name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
			<br><br>
	  </form> 	
	</div>
  </div>
</div>


<script>
function updateMap(){
	//alert(mapCard.size);
	if(mapCard.size > 0){
		let text = "";
		mapCard.forEach (function(value, key) {
		  text += value.id + ' = ' + value.count + "\n";
		})
		document.getElementById("paymap").value = text;		
	}
}
showCards(<?php echo $firstCatId;?> ,"sad");
//this line active first category when page loaded
showCards(1, "chocolate");
</script>

</body>
</html>


