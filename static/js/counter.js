var countDownDate = new Date("dec 25, 2021 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  

  document.getElementById("timer").innerHTML = days+':'+hours+':'+minutes+':'+seconds ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = '00:00:00:00';
  }
}, 1000);