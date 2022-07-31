class Card {
    constructor(id, count, price, image) {
        this.id = id;
        this.count = count;
        this.price = price;
        this.image = image;
    }

    get pcount() {
        return this.count;
    }
    set pcount(x) {
        this.count = x;
    }
    inc() {
        this.count++;
    }
    dec() {
        if (this.count > 0)
            this.count--;
        else {
            this.count = 0;
        }
    }
}


// Create a Map
var mapCard = new Map();

function addCard(id, price, image) {
    if (mapCard.has(id)) {
        mapCard.get(id).inc();
    } else {
        cd = new Card(id, 1, price, image);
        mapCard.set(id, cd);
    }
    document.getElementById("iconshop").style.color = "red";
}

function cardAlert() {
    let text = "";
    mapCard.forEach(function(value, key) {
        text += key + ' => ' + value.pcount + "<br>"
    })

    alert(text);
}

// List all entries
function addItemToCard() {
    if (mapCard.size < 1) {
        alert("cart is empty");
        return;
    }
    removeDives();
    updateMap();
    let text = "";

    // in this paer we add table header by using JS HTML DOM
    const element = document.getElementById("divparent");
    var namee = document.createElement("div");
    var node = document.createTextNode("id");
    namee.appendChild(node);

    var img = document.createElement("div");
    var node = document.createTextNode("image");
    img.appendChild(node);

    var quant = document.createElement("div");
    var node = document.createTextNode("quantity");
    quant.appendChild(node);

    quant.setAttribute('id', 'I1');

    var price = document.createElement("div");
    var node = document.createTextNode("price");
    price.appendChild(node);

    var inc = document.createElement("div");
    var node = document.createTextNode("inc");
    inc.appendChild(node);

    var dec = document.createElement("div");
    var node = document.createTextNode("dec");
    dec.appendChild(node);

    var del = document.createElement("div");
    var node = document.createTextNode("");

    del.appendChild(node);
    del.style.opacity = "0";

    element.appendChild(namee);
    element.appendChild(img);
    element.appendChild(quant);
    element.appendChild(price);
    element.appendChild(inc);
    element.appendChild(dec);
    element.appendChild(del);

    // in this part we add items to shopping cart
    mapCard.forEach(function(value, key) {
        var namee = document.createElement("div");
        var node = document.createTextNode(value.id);
        namee.appendChild(node);

        var img = document.createElement("div");
        // var node = document.createTextNode(value.image);
        // img.appendChild(node);
        img.classList.add("imgCartDiv");

        // img.style.backgroundSize = "cover";
        // var imageUrl = "url(" + "'uploads/" + value.image + "')";
        // img.style.background = imageUrl;

        var img1 = document.createElement("img");
        img1.classList.add("imgCart");
        img1.src = "uploads/" + value.image;
        img.appendChild(img1);



        var quant = document.createElement("div");
        var node = document.createTextNode(value.count);
        quant.appendChild(node);
        quant.setAttribute('id', 'q' + value.id);

        var price = document.createElement("div");
        var node = document.createTextNode(value.price * value.count);
        price.appendChild(node);
        price.setAttribute('id', 'p' + value.id);

        var inc = document.createElement("button");
        var node = document.createTextNode("+");
        inc.appendChild(node);
        inc.setAttribute('id', 'inc' + value.id);

        var dec = document.createElement("button");
        var node = document.createTextNode("-");
        dec.appendChild(node);
        dec.setAttribute('id', 'dec' + value.id);

        var del = document.createElement("button");
        var node = document.createTextNode("*");
        del.appendChild(node);
        del.style.opacity = "0";
        del.setAttribute('id', 'del' + value.id);


        element.appendChild(namee);
        element.appendChild(img);
        element.appendChild(quant);
        element.appendChild(price);
        element.appendChild(inc);
        element.appendChild(dec);
        element.appendChild(del);

        inc.onclick = function(event) {
            var incId = parseInt(this.id.substring(3));
            if (mapCard.has(incId)) {
                mapCard.get(incId).inc();
                document.getElementById('q' + incId).innerHTML = mapCard.get(incId).count;
                document.getElementById('p' + incId).innerHTML = mapCard.get(incId).count * mapCard.get(incId).price;
            } else {
                document.getElementById('q' + incId).innerHTML = 0;
            }
            updateMap();
        }

        dec.onclick = function(event) {

            var decId = parseInt(this.id.substring(3));

            if (mapCard.has(decId)) {
                mapCard.get(decId).dec();
                document.getElementById('q' + decId).innerHTML = mapCard.get(decId).count;
                document.getElementById('p' + decId).innerHTML = mapCard.get(decId).count * mapCard.get(decId).price;
            } else {
                document.getElementById('q' + decId).innerHTML = 0;
                document.getElementById('p' + decId).innerHTML = 0;
            }
            updateMap();
        }

        del.onclick = function(event) {
            var delId = this.id.substring(3);
            // alert(delId);
            // removeDives();
            addItemToCard()
        }

    })

    document.getElementById('id01').style.display = 'block';
}

//remove all div es  from modal
function removeDives() {
    const myNode = document.getElementById("divparent");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

function closeModal() {
    //removeDives();
    document.getElementById('id01').style.display = 'none';
}

// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        //removeDives();
    }
}

function incc(id) {
    alert(id);
}