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
      })
      .then(function (data){
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
}

function tokenDetails(data){
  fullnameoftoken = document.getElementById('_3TcfXW9zOvs5Y857gZVxgv');
  var fullnameoftokentext = data.data.name;
  var symboloftoken = data.data.symbol;
    fullnameoftoken2 = document.getElementById('_1WwkcxTzl-09aDCpRhYU1u');
    symboloftoken = document.getElementById('_3Bx-FZIaBbVKssHb-LYGou');
    symboloftoken2 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6');
    symboloftoken3 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO _1Io-xGeWSmRodp84w_CceQ');
    symboloftoken4 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6');
    fullnameoftoken.innerHTML = fullnameoftokentext;
    fullnameoftoken2.innerHTML = 'Connect your ' + fullnameoftokentext + ' wallet to deposit funds & start trading.';
    symboloftoken.innerHTML = symboloftoken;
    symboloftoken2.innerHTML = symboloftoken;
    symboloftoken3.innerHTML = symboloftoken;
    symboloftoken4.innerHTML = symboloftoken;

}