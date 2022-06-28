window.onload = function() {
    fetchStatus();
  };
function fetchStatus() {
    fetch('https://api137.radioshack.org/api/tokens/0x613a489785C95afEB3b404CC41565cCff107B6E0')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        appendDataAsTable(data);
        tokenDetails(data);
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
  }
  
  window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 5000; // 5 seconds.
  
    // Invoke the request every 5 seconds.
    setInterval(fetchStatus, fetchInterval);
  });


  function appendDataAsTable(data) {
    var oldPrice = localStorage.getItem(data.data.symbol+'price');
    tbl = document.getElementById('pricerealtime');
    localStorage.setItem(data.data.symbol+'price', data.data.price);
    var currentPrice = localStorage.getItem(data.data.symbol+'price');
    asd = data.data.price.substring(0, 7);
    dsa = '$' + asd;
    

    if (oldPrice > currentPrice){
        document.getElementById("pricerealtime").style.color = "#ff5353"
        console.log("demp")
    } else if (oldPrice < currentPrice) {
        document.getElementById("pricerealtime").style.color = "#3fb68b"
        console.log("pemp")
    } else {
        console.log("kek")
    }
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = dsa;
};

function tokenDetails(data){
  var fullnameoftokentext = data.data.name;
  var symboloftokentext = data.data.symbol;
  fullnameoftoken = document.getElementById('_3TcfXW9zOvs5Y857gZVxgv');
  //fullnameoftoken2 = document.getElementById('3Bx-FZIaBbVKssHb-LYGou');
  fullnameoftoken3 = document.getElementById('_1WwkcxTzl-09aDCpRhYU1u');
  symboloftoken = document.getElementById('_3Bx-FZIaBbVKssHb-LYGou');
  symboloftoken2 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6 number2');
  symboloftoken3 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6');
  symboloftoken4 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO _1Io-xGeWSmRodp84w_CceQ');
  fullnameoftoken.innerHTML = fullnameoftokentext;
  //fullnameoftoken2.innerHTML = fullnameoftokentext;
  fullnameoftoken3.innerHTML = 'Connect your ' + fullnameoftokentext + ' wallet to deposit funds & start trading.';
  symboloftoken.innerHTML = symboloftokentext;
  symboloftoken2.innerHTML = symboloftokentext;
  symboloftoken3.innerHTML = symboloftokentext;
  symboloftoken4.innerHTML = symboloftokentext;
};


function switcher() {
  console.log("Hello world!");

  //delete
  document.getElementsByClassName("_30_dV41WvMclCi77kevilg")[0].innerHTML = "";
  //create
  const e = document.createElement('div');
  e.classList.add("_3kxlwrAELU8bAzRcWY5C4U");
  document.getElementsByClassName("_30_dV41WvMclCi77kevilg")[0].appendChild(e);

  const f = document.createElement('span');
  f.classList.add("_30CFAEwoCaJLtTWSr1YyU4");
  f.innerHTML = "Select market";
  document.getElementsByClassName("_3kxlwrAELU8bAzRcWY5C4U")[0].appendChild(f);

  const g = document.createElement('span');
  g.classList.add("AZo34VCmA4oZOJ3Yp3mqn._2JsEUUssaQhHp3oz89-xZs");
  document.getElementsByClassName("_3kxlwrAELU8bAzRcWY5C4U")[0].appendChild(g);

  const h = document.createElement('span');
  h.innerHTML = "Tap to close";
  document.getElementsByClassName("AZo34VCmA4oZOJ3Yp3mqn._2JsEUUssaQhHp3oz89-xZs")[0].appendChild(h);

  const i = document.createElement('svg');
  i.innerHTML = '<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.6038 4.48532C2.80395 4.74532 3.19605 4.74532 3.3962 4.48532L5.84441 1.305C6.09751 0.976213 5.86313 0.5 5.44821 0.5H0.551788C0.136868 0.5 -0.0975129 0.976213 0.155586 1.305L2.6038 4.48532Z" fill="#6f6e84"></path></svg>';
  document.getElementsByClassName("AZo34VCmA4oZOJ3Yp3mqn._2JsEUUssaQhHp3oz89-xZs")[0].appendChild(i);


  fetch('https://api137.radioshack.org/api/pairs');
}