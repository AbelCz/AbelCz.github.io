window.onload = function() {
    fetchStatus();
  };
function fetchStatus() {
    fetch('https://api137.radioshack.org/api/tokens/0x613a489785C95afEB3b404CC41565cCff107B6E0')
      .then(function (response) {
        return response.json();
        console.log(data);
      })
      .then(function (data) {
        appendDataAsTable(data);
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
    fullnameoftoken = document.getElementsByClassName('_3TcfXW9zOvs5Y857gZVxgv');
    fullnameoftoken2 = document.getElementsByClassName('_1WwkcxTzl-09aDCpRhYU1u')
    symboloftoken = document.getElementsByClassName('_3Bx-FZIaBbVKssHb-LYGou');
    symboloftoken2 = document.getElementsByClassName('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6');
    symboloftoken3 = document.getElementsByClassName('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO _1Io-xGeWSmRodp84w_CceQ');
    symboloftoken4 = document.getElementsByClassName('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6')
    localStorage.setItem(data.data.symbol+'price', data.data.price);
    var currentPrice = localStorage.getItem(data.data.symbol+'price');
    asd = data.data.price.substring(0, 7);
    dsa = '$' + asd
    

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
    fullnameoftoken.innerHTML = data.data.fullnameoftoken
    fullnameoftoken2.innerHTML = "Connect your " + data.data.fullnameoftoken + " wallet to deposit funds & start trading."
    symboloftoken.innerHTML = data.data.symbol
    symboloftoken2.innerHTML = data.data.symbol
    symboloftoken3.innerHTML = data.data.symbol
    symboloftoken4.innerHTML = data.data.symbol
}

_3TcfXW9zOvs5Y857gZVxgv