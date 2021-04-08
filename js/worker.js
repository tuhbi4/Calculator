addEventListener("message", function (messageFromMain) {


    var arrayOfRandom = new Array(messageFromMain.data);

    for (var i = 0; i < arrayOfRandom.length; i++) {
        arrayOfRandom[i] = Math.floor(Math.random() * 201 - 100);
    }


    var arrayOfSorted = arrayOfRandom.slice().sort(function (a, b) {
        return a - b;
    });

    postMessage({ arrayOfRandom, arrayOfSorted });
});