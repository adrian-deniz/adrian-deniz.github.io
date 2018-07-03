var deck = document.querySelector("#deck");
deck.addEventListener("click", doSomething, false);
var compareItems = [];
var clickedItem;
var myVar = [];
var apple;
var apple2;
var cardNames = ["Spades", "Hearts", "Diamonds", "Clubs"];
var matched_pairs = 0;


function doSomething(e) {
  if (e.target !== e.currentTarget) {
    e.target.setAttribute("class", "stop");
    e.target.setAttribute("style", "background-color: #333;");
    clickedItem = e.target.id;
    compareItems.push(clickedItem);
    e.target.textContent = cardNames[clickedItem];

    apple = setTimeout(function () {
      e.target.setAttribute("style", "background-color: #0066c;");
      e.target.textContent = "Face Down";
      e.target.removeAttribute("class", "stop");
      document.getElementsByTagName("ul")[0].removeAttribute("class", "stop");
      clickedItem = null;
      apple = null;
      myVar.length = 0;
      compareItems.length = 0;
    }, 2000);

     myVar.push(apple);
     if (myVar.length === 2) {
       document.getElementsByTagName("ul")[0].setAttribute("class", "stop");
       if (compareItems[0] === compareItems[1]) {
         match_sound.play();
         apple2 = setTimeout(function () {
           matched_pairs ++;
           console.log(matched_pairs);
           if (matched_pairs == 4) {
             var node = document.createElement("H1");
             var textnode = document.createTextNode("Great Job!");
             node.appendChild(textnode);
             document.getElementById("deck").appendChild(node);
           }
         }, 200);
         clearTimeout(myVar[0]);
         clearTimeout(myVar[1]);
         document.getElementsByTagName("ul")[0].removeAttribute("class", "stop");
         clickedItem = null;
         apple = null;
         myVar.length = 0;
         compareItems.length = 0;


       }
     }
   }
  e.stopPropagation();
}
