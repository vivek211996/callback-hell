var timel = 11;
var display=document.getElementById("countd")
  
      setTimeout(function () {
        timel--;
        display.innerHTML = timel;
        setTimeout(function () {
            timel--;
            display.innerHTML = timel;
            setTimeout(function () {
                timel--;
                display.innerHTML = timel;
                setTimeout(function () {
                    timel--;
                    display.innerHTML = timel;;
                    setTimeout(function () {
                        timel--;
                        display.innerHTML = timel;
                        setTimeout(function () {
                            timel--;
                            display.innerHTML = timel;
                            setTimeout(function () {
                                timel--;
                                display.innerHTML = timel;
                                setTimeout(function () {
                                    timel--;
                                    display.innerHTML = timel;
                                    setTimeout(function () {
                                        timel--;
                                        display.innerHTML = timel;
                                        setTimeout(function () {
                                            timel--;
                                            display.innerHTML = timel;
                                            setTimeout(function () {
                                                timel--;
                                                document.body.style.backgroundImage = "url('bg.jpg')";
                                                display.innerHTML = "Happy Birthday";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);



 