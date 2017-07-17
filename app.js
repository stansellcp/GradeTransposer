window.onload = function() {

  var letterA = 'A';
  var letterB = 'B';
  var letterC = 'C';
  var letterD = 'D';
  var letterF = 'F';
  var notValid = 'Enter a value between 1 and 100';
  var noEntry = 'No entry';
  var average = 0;

  var button = document.getElementById('grade');

  button.addEventListener('click', function () {
    document.getElementById('letter1').innerHTML = "";
    document.getElementById('letter2').innerHTML = "";
    var g1 = document.getElementById('g1').value;
    var g2 = document.getElementById('g2').value;

    if ((g1 >= 90) && (g1 <= 100)) {
      document.getElementById('letter1').innerHTML = letterA;
    } else if ((g1 >= 80) && (g1 <= 89)) {
      document.getElementById('letter1').innerHTML = letterB;
    } else if ((g1 >= 70) && (g1 <= 79)) {
      document.getElementById('letter1').innerHTML = letterC;
    } else if ((g1 >= 60) && (g1 <= 69)) {
      document.getElementById('letter1').innerHTML = letterD;
    } else if ((g1 <= 59) && (g1 >= 1)) {
      document.getElementById('letter1').innerHTML = letterF;
    } else if (g1 == 0) {
      document.getElementById('letter1').innerHTML = notValid;
    } else {
      document.getElementById('letter1').innerHTML = notValid;
    }

    if ((g2 >= 90) && (g2 <= 100)) {
      document.getElementById('letter2').innerHTML = letterA;
    } else if ((g2 >= 80) && (g2 <= 89)) {
      document.getElementById('letter2').innerHTML = letterB;
    } else if ((g2 >= 70) && (g2 <= 79)) {
      document.getElementById('letter2').innerHTML = letterC;
    } else if ((g2 >= 60) && (g2 <= 69)) {
      document.getElementById('letter2').innerHTML = letterD;
    } else if ((g2 <= 59) && (g2 >= 1)) {
      document.getElementById('letter2').innerHTML = letterF;
    } else if (g2 == 0) {
      document.getElementById('letter2').innerHTML = notValid;
    } else {
      document.getElementById('letter2').innerHTML = notValid;
    }

    if (g2 != 0) {
      average = parseInt(g1) + parseInt(g2);
      average = average/2;
      averageDecimal = average.toFixed(2);
      document.getElementById('averageNumber').innerHTML = averageDecimal;
      if ((average >= 90) && (average <= 100)) {
        document.getElementById('averageLetter').innerHTML = letterA;
      } else if ((average >= 80) && (average <= 89)) {
        document.getElementById('averageLetter').innerHTML = letterB;
      } else if ((average >= 70) && (average <= 79)) {
        document.getElementById('averageLetter').innerHTML = letterC;
      } else if ((average >= 60) && (average <= 69)) {
        document.getElementById('averageLetter').innerHTML = letterD;
      } else if ((average <= 59) && (average >= 1)) {
        document.getElementById('averageLetter').innerHTML = letterF;
      }
    } else {
      document.getElementById('averageNumber').innerHTML = g1;
      document.getElementById('averageLetter').innerHTML =
      document.getElementById('letter1').innerHTML;
    }
  });
};
