window.onload = function() {
    fetchStatus();
    //fetchWalletStatus();
  };
function fetchStatus() {
    let currentUrl = window.location.href;
    if (currentUrl.includes("?")){
      let firstToken = currentUrl.split('?').pop().split('_')[0];
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
    let fetchInterval = 5000; // 5 seconds.
  
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
      console.log("nice");
    });
  })

  function getTheCurrentLink(){
  let currentUrl = window.location.href;
  firstToken = currentUrl.indexOf("?")+1, currentUrl.lastIndexOf(";");
  console.log(firstToken);
  };




  function appendDataAsTable(data) {
    let oldPrice = localStorage.getItem(data.data.symbol+'price');
    tbl = document.getElementById('pricerealtime');
    localStorage.setItem(data.data.symbol+'price', data.data.price);
    let currentPrice = localStorage.getItem(data.data.symbol+'price');
    asd = data.data.price.substring(0, 7);
    dsa = '$' + asd;
    let pemp = new Audio('/sounds/nice.m4a');
    let demp = new Audio('/sounds/bruh.m4a');

    if (oldPrice > currentPrice){
        document.getElementById("pricerealtime").style.color = "#ff5353"
        console.log("demp")
        demp.play();
    } else if (oldPrice < currentPrice) {
        document.getElementById("pricerealtime").style.color = "#3fb68b"
        console.log("pemp")
        pemp.play();
    } else {
      console.log("kek");
    }
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = dsa;
};

function tokenDetails(data){
  let fullnameoftokentext = data.data.name;
  let symboloftokentext = data.data.symbol;
  //let symbolcolletoraltext = data3.data.symbol;
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
  let currentUrl2 = window.location.href;
    if (currentUrl2.includes("?")){
      let secondToken = currentUrl2.split('_').pop();
      fetch('https://api137.radioshack.org/api/tokens/'+secondToken)
      .then(function (response) {
        return response.json();
      })
      .then(function (data3) {
        let symbolcolletoraltext = data3.data.symbol;
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
        let symbolcolletoraltext = data4.data.symbol;
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
    let totalpairs = Object.keys(data2.data).length;
    let keyNames = Object.keys(data2.data);
    console.log("total trades " + totalpairs);
    console.log(data2.data);

    for (let zozo = 0; zozo <= totalpairs; zozo++) {
      base_symbols = data2.data[keyNames[zozo]].base_symbol;
      base_names = data2.data[keyNames[zozo]].base_name;
      quote_symbols = data2.data[keyNames[zozo]].quote_symbol;
      lowercase_symbols = base_symbols.toLowerCase();
      url_logos = "https://abelcz.github.io/currencies/"+lowercase_symbols+".svg"
      prices = data2.data[keyNames[zozo]].price;
      base_addresses = data2.data[keyNames[zozo]].base_address;
      quote_addresses = data2.data[keyNames[zozo]].quote_address;
      href_for_tokens = "/trade/trade/?"+base_addresses+"_"+quote_addresses;
      //eth button
      let m = document.createElement('a');
      m.classList.add("_1i_jfKy_CR-3JEUUoLyTyo");
      m.setAttribute("role","button");
      m.setAttribute("href",href_for_tokens);
      document.getElementsByClassName("_6_s1igBgOZG_l67nN_HjG")[0].appendChild(m);
      
      let n = document.createElement('div');
      n.classList.add("_2jve0XRK1SS7xTFWQHU7sV");
      document.getElementsByClassName("_1i_jfKy_CR-3JEUUoLyTyo")[zozo].appendChild(n);

    
      let o = document.createElement('div');
      o.classList.add("_3703-MxhX16pYBOSod3SpG");
      document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[zozo].appendChild(o);

      let p = document.createElement('div');
      p.classList.add("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS");
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(p);
      //add image

      let q = document.createElement('img');
      q.src = url_logos;
      document.getElementsByClassName("_1WIhq_BSoc6G4Z_9FtHB63","_242klziznfQnEkLJuh1ZoS")[zozo].appendChild(q);
      //add name

      let r = document.createElement('span');
      r.innerHTML = base_names;
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(r);
      //add ticker

      let s = document.createElement('span');
      s.classList.add("_38idpiULmwLdV8ZLER8eXp","aZJzIkLG4sRsoY7PeO5H6");
      s.innerHTML =  base_symbols+"/"+quote_symbols;
      document.getElementsByClassName("_3703-MxhX16pYBOSod3SpG")[zozo].appendChild(s);

  
      let t = document.createElement('div');
      t.classList.add("_2d-dptgdt6bp7FHSPkHbT6");
      document.getElementsByClassName("_2jve0XRK1SS7xTFWQHU7sV")[zozo].appendChild(t);
      // price here

      let u = document.createElement('span');
      u.innerHTML = prices;
      document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[zozo].appendChild(u);


      let v = document.createElement('div');
      v.classList.add("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R");
      document.getElementsByClassName("_2d-dptgdt6bp7FHSPkHbT6")[zozo].appendChild(v);
      //price change

      let w = document.createElement('span');
      w.innerHTML = "percentage";
      document.getElementsByClassName("_1spo-4DNNHD_uNqIyedTNs","_3CAUNSCsacK-I2JgikLL4R")[zozo].appendChild(w);

      document.getElementsByClassName("_30_dV41WvMclCi77kevilg","open")[0].setAttribute("id","closed");
    }
  }
// the previous trades section omg om gom go mgo mgom gogm ogm ogm ogm gomog m ogmo gmogm ogm ogm gomg ogm o mgo mogm ogmom gom gom go mgo mgo gmo gm
 function showPreviousTrades(){
  let hideOrderBook = document.getElementsByClassName("_3zhDTrkiD2aZbl97c3BSNG")[0];
  hideOrderBook.innerHTML = "";
  //let oldBookButton = document.getElementsByClassName("_3wFHO7dX4-NDkAql126wyt _-0q9IsXZcH1dLHnmhteQ7")[1];
  let hideOrderBookButton = document.getElementsByClassName("_-0q9IsXZcH1dLHnmhteQ7")[1];
  hideOrderBookButton.classList.add('_3wFHO7dX4-NDkAql126wyt');
  hideOrderBookButton.classList.remove('_3wFHO7dX4-NDkAql126wyt');
  hideOrderBookButton.classList.remove('_-0q9IsXZcH1dLHnmhteQ7');
  let theBigTradeButton = document.getElementsByClassName('_3wFHO7dX4-NDkAql126wyt')[3];
  theBigTradeButton.classList.add('_3wFHO7dX4-NDkAql126wyt');
  theBigTradeButton.classList.add('_-0q9IsXZcH1dLHnmhteQ7');
  theBigTradeButton.classList.remove('_3wFHO7dX4-NDkAql126wyt');
  
  fetchPreviousTrades();
 }
function fetchPreviousTrades(){
    const secondsSinceEpoch = Math.round(Date.now() / 1000 - 3600)
    fetch('https://api.radioshack.org/v1/trades/range?start='+secondsSinceEpoch+'&end=9999999999')
    .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log("got tot eh first one");
            PreviousTrades(data);
            //every 5 sec
            let fetchInterval2 = 5000; // 1 seconds.
  
            // Invoke the request every 1 seconds.
            setInterval(fetchPreviousTrades, fetchInterval2);
          })
          .catch(function (err) {
            console.log('error: ' + err);
          });
};

    function PreviousTrades(data){
      let currentUrl10 = window.location.href;
      leftside = currentUrl10.split('?').pop().split('_')[0].toLowerCase();
      console.log("rightside: "+leftside);
      rightside = currentUrl10.split('_').pop().toLowerCase();
      let lengthnessoflinks = data.length;
      console.log(lengthnessoflinks);
      console.log("rightside: "+rightside);
      let getRidOfThis = document.getElementsByClassName("_3zhDTrkiD2aZbl97c3BSNG")[0];
      getRidOfThis.classList.remove("_3zhDTrkiD2aZbl97c3BSNG");

      let toproww = document.createElement('div');
      toproww.classList.add("_2H-KnsGBQ-xgYidGE8XypH");
      document.getElementsByClassName("_2nZgkBSqEo0JyF1xLxrfaa")[0].appendChild(toproww);

      console.log('toproww=', toproww);

      let toprow = document.createElement('div');
      toprow.classList.add("_2ab3SH6MAkzo43W9WCX5No");
      document.getElementsByClassName("_2H-KnsGBQ-xgYidGE8XypH")[0].appendChild(toprow);

      let toprow2 = document.createElement('div');
      toprow2.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_1p3YrEenhsnTZrupGOZVOj");
      toprow2.innerHTML = "Size ";
      document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow2);

      //var thisShitcoin = document.getElementsByClassName("_38idpiULmwLdV8ZLER8eXp _2p9QAAMCqbu8kWNa-OxhxO aZJzIkLG4sRsoY7PeO5H6")[0].innerHTML;
      //let toprowSymbol = document.createElement('div');
      //toprowSymbol.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_1Io-xGeWSmRodp84w_CceQ");
      //toprowSymbol.innerHTML = "test";
      //docoument.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs _1p3YrEenhsnTZrupGOZVOj")[0].appendChild(toprowSymbol);


      let toprow3 = document.createElement('div');
      toprow3.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_2vJHIXEgndqu-Cq35HsqZt");
      document.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs _1p3YrEenhsnTZrupGOZVOj")[0].appendChild(toprow3);

      let toprow4 = document.createElement('div');
      toprow4.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_3RdijzfMpz7h3mZQEstaGy");
      toprow4.innerHTML = "Price ";
      document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow4);

      let toprow41 = document.createElement('div');
      toprow41.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_2vJHIXEgndqu-Cq35HsqZt");
      toprow41.innerHTML = "USD";
      document.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs _3RdijzfMpz7h3mZQEstaGy")[0].appendChild(toprow41);

      let toprow5 = document.createElement('div');
      toprow5.classList.add("_38idpiULmwLdV8ZLER8eXp","_2p9QAAMCqbu8kWNa-OxhxO","_2vJHIXEgndqu-Cq35HsqZt");
      document.getElementsByClassName("_3-OvbtdtsAtsuRCbktIDXs _3RdijzfMpz7h3mZQEstaGy")[0].appendChild(toprow5);

      let toprow6 = document.createElement('div');
      toprow6.classList.add("_3-OvbtdtsAtsuRCbktIDXs","_3U1i7AzOk6yO_edgzEnIJI");
      toprow6.innerHTML = "Time";
      document.getElementsByClassName("_2ab3SH6MAkzo43W9WCX5No")[0].appendChild(toprow6);

      let bottomrow = document.createElement('div');
      bottomrow.classList.add("_3rhft_8tou3TxOH2wrLf_P");
      document.getElementsByClassName("_2H-KnsGBQ-xgYidGE8XypH")[0].appendChild(bottomrow);
      // add price
      //let feed = document.createElement('div');
      //feed.classList.add("_3rhft_8tou3TxOH2wrLf_P");
      //document.getElementsByClassName("_2H-KnsGBQ-xgYidGE8XypH")[0].appendChild(feed);
      // feed 1 loop here
      //let feed = document.createElement('div');
      //feed.classList.add("_2H-KnsGBQ-xgYidGE8XypH");
      //document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz","FnnkD_kOLThFafR6bqKu9")[0].appendChild(feed);

      



        let max = 0;
        let buys = 0;
        let sells = 0;

        for (let i = 0; i < lengthnessoflinks; i++) {
          //console.log('i=', i);
          //console.log("total links lengthness:"+lengthnessoflinks);
          tokens_in = data[i].tokenAddressIn;
          tokens_out = data[i].tokenAddressOut;
          tx_hash = data[i].hash;
          //console.log("hash: "+tx_hash);
          tokens_in_amount = Math.round(data[i].tokenAmountIn * 100) / 100;
          tokens_out_amount = Math.round(data[i].tokenAmountOut * 100) / 100;
          price = Math.round(data[i].amountUsd * 100) / 100;
          time = data[i].timestamp;
          let datetime = new Date(0);
          datetime.setUTCSeconds(time);
          let timestamp = datetime.toString().substring(16, 24);
          href_for_txid = "https://blockscan.com/tx/"+tx_hash;

            if (data[i].tokenAddressIn === leftside && data[i].tokenAddressOut === rightside) {
              buys++;
              max = Math.max(max, tokens_in_amount);
              console.log('tokens_in_amount=', tokens_in_amount);
              console.log(data[i]);
              console.log("exp1");
                //top row button

              let feed2 = document.createElement('div');
              feed2.classList.add("dvIq_OZoY8VUH70vCqckz","FnnkD_kOLThFafR6bqKu9");
              document.getElementsByClassName("_3rhft_8tou3TxOH2wrLf_P")[0].appendChild(feed2);
                
              console.log('document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9")=', document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9"));
              console.log(11);
              let pricecolor = document.createElement('div');
              console.log(12);
              pricecolor.classList.add("_1C-D0uZhA8Ep3ASdoMbdPR","_2xqGgVJfiUA6YcqvCn_Z13");
              pricecolor.style = "width:2px";
              console.log(13);
              //pricecolor. add width 1px
              let els = document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9");
              els[els.length - 1].appendChild(pricecolor);

              console.log(22);
              
              //other elements here
              let feed3 = document.createElement('div');
              feed3.classList.add("_1s82us_xipfJAAmP5kFka9");
              els = document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9");
              els[els.length - 1].appendChild(feed3);
              
              console.log(23);
              let feed6 = document.createElement('div');
              feed6.classList.add("_1p3YrEenhsnTZrupGOZVOj","_2xqGgVJfiUA6YcqvCn_Z13");
              els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
              els[els.length - 1].appendChild(feed6);
              
              console.log(24);
              let feed7 = document.createElement('span');
              feed7.innerHTML = tokens_in_amount;
              els = document.getElementsByClassName("_1p3YrEenhsnTZrupGOZVOj _2xqGgVJfiUA6YcqvCn_Z13");
              console.log(els);
              els[els.length - 1].appendChild(feed7);
              
              console.log(25);

             
              let feed4 = document.createElement('div');
              feed4.classList.add("_3RdijzfMpz7h3mZQEstaGy");
              feed4.innerHTML = math.round(price / tokens_in_amount * 10000)/10000;
              els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
              els[els.length - 1].appendChild(feed4);

              let feed5 = document.createElement('div');
              feed5.classList.add("_3U1i7AzOk6yO_edgzEnIJI");
              feed5.innerHTML = timestamp;
              els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
              els[els.length - 1].appendChild(feed5);


            } else if (data[i].tokenAddressIn === rightside && data[i].tokenAddressOut === leftside) {
              sells++;
              max = Math.max(max, tokens_out_amount);

              // feed 1 loop here
              //let feed2 = document.createElement('div');
              //feed2.classList.add("_2H-KnsGBQ-xgYidGE8XypH");
              //feed2.innerHTML = "";
              //document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz","FnnkD_kOLThFafR6bqKu9")[0].appendChild(feed2);

              let feed2 = document.createElement('div');
              feed2.classList.add("dvIq_OZoY8VUH70vCqckz","FnnkD_kOLThFafR6bqKu9");
              document.getElementsByClassName("_3rhft_8tou3TxOH2wrLf_P")[0].appendChild(feed2);

              console.log('222 document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9")=', document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9"));
              let pricecolor = document.createElement('div');
              pricecolor.classList.add("_1C-D0uZhA8Ep3ASdoMbdPR","_3f6v7G3F-zXEJU7j-zQ_8R");
              pricecolor.style = "width:2px";
              //pricecolor. add width 1px
              let els = document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9");
              els[els.length - 1].appendChild(pricecolor);

                //other elements here
              let feed3 = document.createElement('div');
              feed3.classList.add("_1s82us_xipfJAAmP5kFka9");
              els = document.getElementsByClassName("dvIq_OZoY8VUH70vCqckz FnnkD_kOLThFafR6bqKu9");
              els[els.length - 1].appendChild(feed3);
             
              let feed6 = document.createElement('div');
             feed6.classList.add("_1p3YrEenhsnTZrupGOZVOj","_3f6v7G3F-zXEJU7j-zQ_8R");
             els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
             console.log('els=', els);
             els[els.length - 1].appendChild(feed6);

             let feed7 = document.createElement('span');
              feed7.innerHTML = tokens_out_amount;
              els = document.getElementsByClassName("_1p3YrEenhsnTZrupGOZVOj _3f6v7G3F-zXEJU7j-zQ_8R");
              console.log(els);
              els[els.length - 1].appendChild(feed7);

              let feed4 = document.createElement('div');
              feed4.classList.add("_3RdijzfMpz7h3mZQEstaGy");
              feed4.innerHTML = math.round(price / tokens_out_amount * 10000)/10000;
              els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
              els[els.length - 1].appendChild(feed4);

              let feed5 = document.createElement('div');
              feed5.classList.add("_3U1i7AzOk6yO_edgzEnIJI");
              feed5.innerHTML = timestamp;
              els = document.getElementsByClassName("_1s82us_xipfJAAmP5kFka9");
              els[els.length - 1].appendChild(feed5);

            } 
            
        console.log("exp3");
      //let totaltrades = Object.keys(data6.tokenAddressIn).length;
      //console.log("total trades " + totaltrades);
      //console.log(data6.data);
      }
      console.log('max=', max);
      console.log('buys=', buys);
      console.log('sells=', sells);
      let buyEls = document.getElementsByClassName("_1C-D0uZhA8Ep3ASdoMbdPR _2xqGgVJfiUA6YcqvCn_Z13");
      let sellEls = document.getElementsByClassName("_1C-D0uZhA8Ep3ASdoMbdPR _3f6v7G3F-zXEJU7j-zQ_8R");
      console.log('buyEls=', buyEls.length);
      console.log('sellEls=', sellEls.length);

      let currBuy = 0;
      let currSell = 0;
      for (let i = 0; i < lengthnessoflinks; i++) {
        if (data[i].tokenAddressIn === leftside && data[i].tokenAddressOut === rightside) {
          let percent = Math.round(data[i].tokenAmountIn / max * 100);
          console.log('percent=', percent);
          buyEls[currBuy].style.width = `${percent}px`;
          currBuy++;
        } else if (data[i].tokenAddressIn === rightside && data[i].tokenAddressOut === leftside) {
          let percent = Math.round(data[i].tokenAmountOut / max * 100);
          console.log('percent=', percent);
          console.log('sellEls[currSell]=', sellEls[currSell]);
          sellEls[currSell].style.width = `${percent}px`;
          currSell++;
        }
      }

    };

function fetchWalletStatus() {
  try {
      Session.set('connected',web3.isConnected())
      getElementsByClassName("sc-giAqHp.jvuCRv")[0].style.display = "none";
    getElementsByClassName("sc-giAqHp.hWQLoI")[0].style.display = "none";
  }
  catch (e) {
      Session.set('connected',false)
  }
}



 



