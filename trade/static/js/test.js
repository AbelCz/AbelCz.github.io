function fetchStatus() {
    fetch('https://api137.radioshack.org/api/tokens/0x613a489785C95afEB3b404CC41565cCff107B6E0')
      .then(function (response) {
        return response.json();
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
    tbl = document.getElementsByClassName('pricerealtime');
    
    // Overwrite the existing HTML with new content received.
    tbl.innerHTML = '';

    addRow(tbl, 'Layer Number', data.currentLayer);
    addRow(tbl, 'Fan Speed', data.params.fanPercent[0] + '%');
    addRow(tbl, 'Print Progress', data.fractionPrinted + '%');
    addRow(tbl, 'Current Speed', data.speeds.top + 'mm/s');
    addRow(tbl, 'Hotend Temp', data.temps.current[1] + '°C');
    addRow(tbl, 'Bed Temp', data.temps.current[0] + '°C');
    addRow(tbl, 'Chamber Temp', data.temps.current[2] + '°C');

}