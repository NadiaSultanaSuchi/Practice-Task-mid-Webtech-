var TextField;
var wordCountEL;
var CharCountEL;
var ReverseEL;
var AnalyzeButton;

document.addEventListener("DOMContentLoaded", function() {

    TextField = document.getElementById("text-field");
    wordCountEL = document.getElementById("word-count");
    CharCountEL = document.getElementById("character-count");
    ReverseEL = document.getElementById("reverse-text");
    AnalyzeButton = document.getElementById("analyzeBtn");

    AnalyzeButton.addEventListener("click", function(e) {
        e.preventDefault();

        var text = TextField.value;

        if (text.trim() === "") {
            wordCountEL.innerText = 0;
            CharCountEL.innerText = 0;
            ReverseEL.innerText = "";
            return;
        }

        var characters = text.length;

        var parts = text.trim().split(" ");
        var count = 0;

        for (var i = 0; i < parts.length; i++) {
            if (parts[i] !== "") {
                count++;
            }
        }

        var words = count;

        var reversed = text.split("").reverse().join("");

     
        CharCountEL.innerText = characters;
        wordCountEL.innerText = words;
        ReverseEL.innerText = reversed;
    });

});
