<script type="text/javascript">


        //VARIABLES WORDS
        // try to randomize what computer chooses
        var userWords = [
            "sun",
            "mercury",
            "venus",
            "earth",
            "mars",
            "jupiter",
            "saturn",
            "uranus",
            "neptune",
            "pluto",
            "milkyway",
            "Betelgeuse",
            "Comets",
            "Constellations",
        ];

        var computerRandomChoice = 0;
        var wins = 0;
        var losses = 0;
        var lettersUsed = 0;
        var score = 0;

        // used rock paper scissors activity to help
        var directionsText = document.getElementById("directtionsText-text");
        var computerRandomChoice = document.getElementById("computerRandomChoice-text");
        var wins = document.getElementById("wins-text");
        var losses = document.getElementById("losses-text");
        var letterUsed = document.getElementById("letterUsed-text");
        var score = document.getElementById("score-text");

        document.onkeyup = function(event){
        var playerGuess = event.key;

             // Random word try used " var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];" from rock paper scissor #7 activity as template
        var computerRandomChoice = computerRandomChoice
        [Math.floor(Math.random() * computerRandomChoice.length)];

        //variables for userchoice, wins, losses, letters used, & score
        

        }


       





    </script>