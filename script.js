(function  () {
    var firstDiv = document.getElementsByTagName("div")[0]
    for(var i = 0; i <= 9; i++){
        var button = document.createElement("button")
        button.innerHTML = "Number " + i
        firstDiv.appendChild(button);
    }
})();