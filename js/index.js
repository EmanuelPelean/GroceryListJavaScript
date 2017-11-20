//add functions to button
var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);
};

var btns = document.querySelectorAll('button');
for (var i=btns.length-1;i>=0;i--) {
  btns[i].addEventListener('click',loading);
}


//check which boxes are checked, if checked add their string result to the msg2 array
function getCheckboxvalue() {
    var msg2=[];
    var prices=[];
for (var i=0;i< document.getElementsByClassName("checkbox-custom").length;i++){
   if (document.getElementsByClassName("checkbox-custom")[i].checked) {
    msg2.push(document.getElementsByClassName("checkbox-custom")[i].value);
     
    switch(i) {
    case 0:
        prices.push(document.getElementById("price1").innerHTML);
        break;
    case 1:
        prices.push(document.getElementById("price2").innerHTML);
        break;
    case 2:
        prices.push(document.getElementById("price3").innerHTML);
        break;
    case 3:
        prices.push(document.getElementById("price4").innerHTML);
        break;
    case 4:
        prices.push(document.getElementById("price5").innerHTML);
        break;
    case 5:
        prices.push(document.getElementById("price6").innerHTML);
        break;
    case 6:
        prices.push(document.getElementById("price7").innerHTML);
        break;
    case 7:
        prices.push(document.getElementById("price8").innerHTML);
        break;
    case 8:
        prices.push(document.getElementById("price9").innerHTML);
        break;
    case 9:
        prices.push(document.getElementById("price10").innerHTML);
        break;
        
    default:
    }
    
    }
}
    for (var i = 0; i<msg2.length; i++) {
      var textnode = document.createTextNode(msg2[i] + " $" + prices[i] + "\n"); 
        document.getElementById("listItems").appendChild(textnode); 
    }
  
    var total = 0;
    for (i = 0; i<prices.length; i++) {
      total = total + parseInt(prices[i]);
      
    }
  
  
      document.getElementById("pResult").innerHTML = "Your subtotal is : $" + total;
      var totalCost = (total * .06) + total;
      document.getElementById("pResult2").innerHTML = "Your total is : $" + totalCost;

      
  
} 

function pay()
{
  $(".receipt").slideUp("slow");
  $(".paid").slideDown("slow");
}

/*barcode from https://codepen.io/verpixelt/pen/cEJLa*/