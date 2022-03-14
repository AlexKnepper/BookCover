$(document).ready(function()
{
    var suitList = new Array("1", "2", "3", "4");
    var numList = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J");
    var randomSuit;
    var currentSuit = "1";
    var randomNum;
    var currentNum = "A";

    $(".mainSuit").delay(3000).transition({rotateY: '+=90deg'}, 1000);
    $(".suit").delay(3000).transition({rotateY: '-=45deg'}, 1000);
    $(".number").delay(3000).transition({rotateX: '+=45deg'}, 1000);
    function suitChange()
    {
      randomSuit = suitList[Math.floor(Math.random() * suitList.length)];
      while (randomSuit == currentSuit)
      {
        randomSuit = suitList[Math.floor(Math.random() * suitList.length)];
      }
      currentSuit = randomSuit;
      randomMain = 'url(images/suits/' + randomSuit + '.png)';
      $(".mainSuit").css('background-image', randomMain);
      $(".mainSuit").transition({rotateY: '+=90deg'}, 1000);
      $(".mainSuit").delay(2000).transition({rotateY: '+=90deg'}, 1000);

      randomSmall = 'url(images/smallSuits/' + randomSuit + '.png)';
      $(".suit").transition({rotateY: '+=45deg'}, 1000);
      $(".suit").delay(2000).transition({rotateY: '-=45deg'}, 1000);
      $(".suit").css('background-image', randomSmall);

      randomNum = numList[Math.floor(Math.random() * numList.length)];
      while (randomNum == currentNum)
      {
        randomNum = numList[Math.floor(Math.random() * numList.length)];
      }
      currentNum = randomNum;
      $(".number").transition({rotateX: '-=45deg'}, 1000);
      $(".number").delay(2000).transition({rotateX: '+=45deg'}, 1000);
      if (randomSuit.match("1") || randomSuit.match("3"))
      {
        $(".number").css({'color': '#CB601C'});
      }
      else if (randomSuit.match("2")  || randomSuit.match("4"))
      {
        $(".number").css({'color': 'black'});
      }
      $(".number").text(randomNum);
    }
    setInterval(suitChange, 4020);

});
