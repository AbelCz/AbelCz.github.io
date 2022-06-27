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
    tbl = document.getElementById('pricerealtime');
    asd = data.data.price.substring(0, 7);
    dsa = "$"&asd
    
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = dsa;

}