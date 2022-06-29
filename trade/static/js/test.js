window.onload = function() {
    fetchStatus();
  };
function fetchStatus() {
    var currentUrl = window.location.href;
    if (currentUrl.includes("?")){
      var firstToken = currentUrl.split('?').pop().split('_')[0];
      fetch('https://api137.radioshack.org/api/tokens/'+firstToken)
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
    } else {
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
}  
  window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 5000; // 5 seconds.
  
    // Invoke the request every 5 seconds.
    setInterval(fetchStatus, fetchInterval);

    const ethereumButton = document.getElementsByClassName('hWQLoI');

    ethereumButton[0].addEventListener('click', () => {
      //Will Start the metamask extension
      console.log("deez ballu");
      ethereum.request({ method: 'eth_requestAccounts' });
    });
  
    const ethereumButton2 = document.getElementsByClassName('jvuCRv');
  
    ethereumButton2[0].addEventListener('click', () => {
      //Will Start the metamask extension
      ethereum.request({ method: 'eth_requestAccounts' });
    });

    const hideTheBook = document.getElementsByClassName("_3wFHO7dX4-NDkAql126wyt");

    hideTheBook[4].addEventListener('click', () => {
      // hide the book
      showPreviousTrades();
      console.log(nice);
    });
  })

  function getTheCurrentLink(){
  var currentUrl = window.location.href;
  firstToken = currentUrl.indexOf("?")+1, currentUrl.lastIndexOf(";");
  console.log(firstToken);
  };




  function appendDataAsTable(data) {
    var oldPrice = localStorage.getItem(data.data.symbol+'price');
    tbl = document.getElementById('pricerealtime');
    localStorage.setItem(data.data.symbol+'price', data.data.price);
    var currentPrice = localStorage.getItem(data.data.symbol+'price');
    asd = data.data.price.substring(0, 7);
    dsa = '$' + asd;
    var pemp = new Audio('/sounds/nice.m4a');
    var demp = new Audio('/sounds/bruh.m4a');

    if (oldPrice > currentPrice){
        document.getElementById("pricerealtime").style.color = "#ff5353"
        console.log("demp")
        demp.play();
    } else if (oldPrice < currentPrice) {
        document.getElementById("pricerealtime").style.color = "#3fb68b"
        console.log("pemp")
        pemp.play();
    } else {
        console.log("kek")
    }
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = dsa;
};

function tokenDetails(data){
  var fullnameoftokentext = data.data.name;
  var symboloftokentext = data.data.symbol;
  //var symbolcolletoraltext = data3.data.symbol;
  fullnameoftoken = document.getElementById('_3TcfXW9zOvs5Y857gZVxgv');
  //fullnameoftoken2 = document.getElementById('3Bx-FZIaBbVKssHb-LYGou');
  fullnameoftoken3 = document.getElementById('_1WwkcxTzl-09aDCpRhYU1u');
  symboloftoken = document.getElementById('_3Bx-FZIaBbVKssHb-LYGou');
  symboloftoken2 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6 number2');
  symboloftoken3 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6');
  symboloftoken4 = document.getElementById('_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO _1Io-xGeWSmRodp84w_CceQ');
  //symbolcolletoral = document.getElementById('priceinwhat');
  //symbolcolletoral2 = document.getElementById('sc-kTCsyW gxdqsh');

  tokenlogo = document.getElementById('tokenLogoPage');
  fullnameoftoken.innerHTML = fullnameoftokentext;
  //fullnameoftoken2.innerHTML = fullnameoftokentext;
  fullnameoftoken3.innerHTML = 'Connect your ' + fullnameoftokentext + ' wallet to deposit funds & start trading.';
  symboloftoken2.innerHTML = symboloftokentext;
  symboloftoken3.innerHTML = symboloftokentext;
  symboloftoken4.innerHTML = symboloftokentext;
  //symbolcolletoral.innerHTML = symbolcolletoraltext;
  //symbolcolletoral2.innerHTML = symbolcolletoraltext;
  lowercase_symbols2 = symboloftokentext.toLowerCase();
  url_logos2 = "https://abelcz.github.io/currencies/"+lowercase_symbols2+".svg";
  tokenlogo.src = url_logos2;
  var currentUrl2 = window.location.href;
    if (currentUrl2.includes("?")){
      var secondToken = currentUrl2.split('_').pop();
      fetch('https://api137.radioshack.org/api/tokens/'+secondToken)
      .then(function (response) {
        return response.json();
      })
      .then(function (data3) {
        var symbolcolletoraltext = data3.data.symbol;
        symbolcolletoral = document.getElementById('priceinwhat');
        symbolcolletoral2 = document.getElementById('sc-kTCsyW gxdqsh');
        symbolcolletoral.innerHTML = symbolcolletoraltext;
        symbolcolletoral2.innerHTML = symbolcolletoraltext;
        symboloftoken.innerHTML = symboloftokentext+" / "+symbolcolletoraltext;
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
    } else {
    fetch('https://api137.radioshack.org/api/tokens/0x2791bca1f2de4661ed88a30c99a7a9449aa84174')
      .then(function (response) {
        return response.json();
      })
      .then(function (data4) {
        var symbolcolletoraltext = data4.data.symbol;
        symbolcolletoral = document.getElementById('priceinwhat');
        symbolcolletoral2 = document.getElementById('sc-kTCsyW gxdqsh');
        symbolcolletoral.innerHTML = symbolcolletoraltext;
        symbolcolletoral2.innerHTML = symbolcolletoraltext;
        symboloftoken.innerHTML = symboloftokentext;
        symboloftoken.innerHTML = symboloftokentext+" / "+symbolcolletoraltext;
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
  }
};


function switcher() {
  console.log("Hello world!");
  const listbuttonExists = document.getElementById("closed");
  if (listbuttonExists === null){
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
    g.classList.add("AZo34VCmA4oZOJ3Yp3mqn","_2JsEUUssaQhHp3oz89-xZs");
    document.getElementsByClassName("_3kxlwrAELU8bAzRcWY5C4U")[0].appendChild(g);

    const h = document.createElement('span');
    h.innerHTML = "Tap to close";
    document.getElementsByClassName("AZo34VCmA4oZOJ3Yp3mqn","_2JsEUUssaQhHp3oz89-xZs")[0].appendChild(h);

    const i = document.createElement('svg');
    i.innerHTML = '<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.6038 4.48532C2.80395 4.74532 3.19605 4.74532 3.3962 4.48532L5.84441 1.305C6.09751 0.976213 5.86313 0.5 5.44821 0.5H0.551788C0.136868 0.5 -0.0975129 0.976213 0.155586 1.305L2.6038 4.48532Z" fill="#6f6e84"></path></svg>';
    document.getElementsByClassName("AZo34VCmA4oZOJ3Yp3mqn","_2JsEUUssaQhHp3oz89-xZs")[0].appendChild(i);

    const j = document.createElement('div');
    j.classList.add("GV27ba5q8OKFWJJOAIZpH");
    document.getElementsByClassName("_1YMMq6xZbYvcxQOeLv5m-t")[0].appendChild(j);

    const k = document.createElement('div');
    k.classList.add("_14rwWgDcatef27EFjPdYOM");
    document.getElementsByClassName("GV27ba5q8OKFWJJOAIZpH")[0].appendChild(k);

    const l = document.createElement('div');
    l.classList.add("_6_s1igBgOZG_l67nN_HjG");
    l.setAttribute("id","_6_s1igBgOZG_l67nN_HjG");
    document.getElementsByClassName("_14rwWgDcatef27EFjPdYOM")[0].appendChild(l);
    //eth button
    /*const m = document.createElement('div');
    m.classList.add("_1i_jfKy_CR-3JEUUoLyTyo","_1uC2xzVGl7L8alfssRyH8r");
    m.setAttribute("role","button");
    document.getElementsByClassName("_6_s1igBgOZG_l67nN_HjG")[0].appendChild(m);

    const n = document.createElement('div');
    n.classList.add("_2jve0XRK1SS7xTFWQHU7sV");
    document.getElementsByClassName("_1i_jfKy_CR-3JEUUoLyTyo","_1uC2xzVGl7L8alfssRyH8r")[0].appendChild(n);

    const o = document.createElement('div');
    o.classList.add("_3703-MxhX16pYBOSod3SpG");
    document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[0].appendChild(o);

    const p = document.createElement('div');
    p.classList.add("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS");
    document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[0].appendChild(p);
    //add image
    const q = document.createElement('img');
    q.src = "/currencies/eth.svg";
    document.getElementsByClassName("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS")[0].appendChild(q);
    //add name
    const r = document.createElement('span');
    r.innerHTML = "Ethereum";
    document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[0].appendChild(r);
    //add ticker
    const s = document.createElement('span');
    s.classList.add("_38idpiULmwLdV8ZLER8eXp","aZJzIkLG4sRsoY7PeO5H6");
    s.innerHTML = "ETH";
    document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[0].appendChild(s);

    const t = document.createElement('div');
    t.classList.add("_2d-dptgdt6bp7FHSPkHbT6");
    document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[0].appendChild(t);
    // price here
    const u = document.createElement('span');
    u.innerHTML = "price here";
    document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[0].appendChild(u);

    const v = document.createElement('div');
    v.classList.add("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R");
    document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[0].appendChild(v);
    //price change
    const w = document.createElement('span');
    w.innerHTML = "percentage"
    document.getElementsByClassName("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R")[0].appendChild(w);*/
  

    fetchTokenlist();
} else {
  location.reload();
}
}


function fetchTokenlist(){
  fetch('https://api137.radioshack.org/api/pairs')
  .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          tokenList(data2);
        })
  };
  function tokenList(data2){
    var totalpairs = Object.keys(data2.data).length;
    let keyNames = Object.keys(data2.data);
    console.log("total trades " + totalpairs);
    console.log(data2.data);

    for (var zozo = 0; zozo <= totalpairs; zozo++) {
      base_symbols = data2.data[keyNames[zozo]].base_symbol;
      base_names = data2.data[keyNames[zozo]].base_name;
      quote_symbols = data2.data[keyNames[zozo]].quote_symbol;
      lowercase_symbols = base_symbols.toLowerCase();
      url_logos = "https://abelcz.github.io/currencies/"+lowercase_symbols+".svg"
      prices = data2.data[keyNames[zozo]].price;
      base_addresses = data2.data[keyNames[zozo]].base_address;
      quote_addresses = data2.data[keyNames[zozo]].quote_address;
      href_for_tokens = "/trade/trade/?"+base_addresses+"_"+quote_addresses
      //eth button
      var m = document.createElement('a')
      m.classList.add("_1i_jfKy_CR-3JEUUoLyTyo")
      m.setAttribute("role","button")
      m.setAttribute("href",href_for_tokens)
      document.getElementsByClassName("_6_s1igBgOZG_l67nN_HjG")[0].appendChild(m)
      
      var n = document.createElement('div')
      n.classList.add("_2jve0XRK1SS7xTFWQHU7sV")
      document.getElementsByClassName("_1i_jfKy_CR-3JEUUoLyTyo")[zozo].appendChild(n);

    
      var o = document.createElement('div')
      o.classList.add("_3703-MxhX16pYBOSod3SpG")
      document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[zozo].appendChild(o)

      var p = document.createElement('div')
      p.classList.add("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS")
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(p)
      //add image

      var q = document.createElement('img')
      q.src = url_logos
      document.getElementsByClassName("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS")[zozo].appendChild(q)
      //add name

      var r = document.createElement('span')
      r.innerHTML = base_names
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(r)
      //add ticker

      var s = document.createElement('span');
      s.classList.add("_38idpiULmwLdV8ZLER8eXp","aZJzIkLG4sRsoY7PeO5H6")
      s.innerHTML =  base_symbols+"/"+quote_symbols
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(s)

  
      var t = document.createElement('div')
      t.classList.add("_2d-dptgdt6bp7FHSPkHbT6")
      document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[zozo].appendChild(t)
      // price here

      var u = document.createElement('span')
      u.innerHTML = prices
      document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[zozo].appendChild(u)


      var v = document.createElement('div');
      v.classList.add("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R")
      document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[zozo].appendChild(v)
      //price change

      var w = document.createElement('span')
      w.innerHTML = "percentage"
      document.getElementsByClassName("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R")[zozo].appendChild(w)

      document.getElementsByClassName("_30_dV41WvMclCi77kevilg","open")[0].setAttribute("id","closed");
    }
  }
// the previous trades section omg om gom go mgo mgom gogm ogm ogm ogm gomog m ogmo gmogm ogm ogm gomg ogm o mgo mogm ogmom gom gom go mgo mgo gmo gm
 function showPreviousTrades(){
  var hideOrderBook = document.getElementsByClassName("_3zhDTrkiD2aZbl97c3BSNG")[0];
  hideOrderBook.innerHTML = "";
  //var oldBookButton = document.getElementsByClassName("_3wFHO7dX4-NDkAql126wyt _-0q9IsXZcH1dLHnmhteQ7")[1];
  var hideOrderBookButton = document.getElementsByClassName("_-0q9IsXZcH1dLHnmhteQ7")[1];
  hideOrderBookButton.classList.add('_3wFHO7dX4-NDkAql126wyt');
  hideOrderBookButton.classList.remove('_3wFHO7dX4-NDkAql126wyt');
  hideOrderBookButton.classList.remove('_-0q9IsXZcH1dLHnmhteQ7');
  var theBigTradeButton = document.getElementsByClassName('_3wFHO7dX4-NDkAql126wyt')[3];
  theBigTradeButton.classList.add('_3wFHO7dX4-NDkAql126wyt');
  theBigTradeButton.classList.add('_-0q9IsXZcH1dLHnmhteQ7');
  theBigTradeButton.classList.remove('_3wFHO7dX4-NDkAql126wyt');
  fetchPreviousTrades();
 }
function fetchPreviousTrades(){
    fetch('https://api.radioshack.org/v1/trades/range?start=1655861751&end=9999999999')
    .then(function (response) {
            return response.json();
          })
          .then(function (data6) {
            PreviousTrades(data6);
          })
    }
    function PreviousTrades(data6){
      var totaltrades = Object.keys(data6.tokenAddressIn).length;
      let keyTokensIn = Object.keys(data6.tokenAddressIn);
      console.log("total trades " + totaltrades);
      console.log(data6.data);
  
      for (var dodo = 0; dodo <= totaltrades; dodo++) {
        tokens_in = data6.tokenAddressIn[dodo];
        tokens_out = data6.tokenAddressOut[dodo];
        tx_hash = data2.amountUsd[dodo];
        timestamp = data2.timestamp[dodo];
        tokens_in_amount = data2.tokenAmountIn[dodo];
        tokens_out_amount = data2.tokenAmountOut[dodo];
        href_for_txid = "https://blockscan.com/tx/"+tx_hash
        //top row button
        var toprow = document.createElement('div')
        toprow.classList.add("_2ab3SH6MAkzo43W9WCX5No")
        document.getElementsByClassName("_2H-KnsGBQ-xgYidGE8XypH")[0].appendChild(toprow)

        var toprow2 = document.createElement('div')
        toprow2.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_1p3YrEenhsnTZrupGOZVOj")
        toprow2.innerHTML = "Size "
        document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow2)

        var toprow3 = document.createElement('div')
        toprow3.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_2vJHIXEgndqu-Cq35HsqZt")
        document.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs","_1p3YrEenhsnTZrupGOZVOj")[0].appendChild(toprow3)

        var toprow4 = document.createElement('div')
        toprow4.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_3RdijzfMpz7h3mZQEstaGy")
        toprow4.innerHTML = "Price "
        document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow4)

        var toprow5 = document.createElement('div')
        toprow5.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_2vJHIXEgndqu-Cq35HsqZt")
        document.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs","_3RdijzfMpz7h3mZQEstaGy")[0].appendChild(toprow5)

        var toprow = document.createElement('div')
        toprow6.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_3U1i7AzOk6yO_edgzEnIJI")
        toprow6.innerHTML = "Time"
        document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow6)

        var bottomrow = document.createElement('div')
        toprow.classList.add("_3rhft_8tou3TxOH2wrLf_P")
        document.getElementsByClassName("_2H-KnsGBQ-xgYidGE8XypH")[0].appendChild(toprow)
      }
    }



 



