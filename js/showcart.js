function showCards(catId, catName) {
    const myNode = document.getElementById("flex-parent");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].cat_id != catId)
            continue;
        else {
            const element = document.getElementById("flex-parent"); // const or var
            var card1 = document.createElement("div");
            card1.classList.add("card");
            //card1.innerHTML="dasdad";
            element.appendChild(card1);


            var cardContainer1 = document.createElement("div");
            cardContainer1.classList.add("cardContainer");
            card1.appendChild(cardContainer1);


            var cardImg1 = document.createElement("div");
            cardImg1.classList.add("cardImg");
            cardContainer1.appendChild(cardImg1);
            //image must be completed.
            var cardImage1 = document.createElement("img");
            cardImage1.classList.add("cardImage");
            //var imageUrl= "url(" + "'uploads/" + allCards[i].image + "')";
            //alert(imageUrl);
            //cardImage1.style.background = imageUrl;
            var imageUrl = "uploads/" + allCards[i].image;
            cardImage1.src = imageUrl;
            //'"uploads/' + allCards[i].image + '"';
            //alert(cardImage1.src);
            cardImg1.appendChild(cardImage1);


            var cardTitle1 = document.createElement("div");
            cardTitle1.classList.add("cardTitle");
            cardContainer1.appendChild(cardTitle1);
            // it must be completed
            var cardTitleH = document.createElement("h3");
            cardTitleH.classList.add("cardTitleh3");
            cardTitleH.innerHTML = allCards[i].name;
            //alert(allCards[i].name);
            cardTitle1.appendChild(cardTitleH);

            var cardTitleHh = document.createElement("h4");
            cardTitleHh.classList.add("cardTitleh4");
            cardTitleHh.innerHTML = allCards[i].price;
            cardTitle1.appendChild(cardTitleHh);

            var cardTitlep1 = document.createElement("p");
            cardTitlep1.classList.add("cardTitlep");
            cardTitlep1.innerHTML = allCards[i].info;
            cardTitle1.appendChild(cardTitlep1);


            var cardAdd1 = document.createElement("a");
            cardAdd1.classList.add("cardAdd");
            cardAdd1.innerHTML = "add to card";
            //cardAdd1.onclick = addCard(allCards[i].id, allCards[i].price, allCards[i].image);
            cardAdd1.onclick = function(event) {
                addCard(allCards[i].id, allCards[i].price, allCards[i].image);
            }

            cardContainer1.appendChild(cardAdd1);
            //image must be completed.

            var cardInfo1 = document.createElement("a");
            cardInfo1.classList.add("cardInfo");
            cardInfo1.innerHTML = "info";
            //cardAcardInfo1.onclick = function(event) { alert(6);}
            cardInfo1.onclick = function(event) {
                cardAlert();
            }
            cardContainer1.appendChild(cardInfo1);
        }
    }
}