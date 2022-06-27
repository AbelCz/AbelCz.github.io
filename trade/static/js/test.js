function fetchStatus() {
    fetch('https://api137.radioshack.org/api/tokens/0x613a489785C95afEB3b404CC41565cCff107B6E0')
      .then(function (response) {
        return response.json();
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
    tbl = document.getElementsByClassName('pricerealtime');
    
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = "New Heading";

}