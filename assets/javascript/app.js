$(document).ready(function () {

    // VARIABLES-----------------

    // Question and answers in an array
    var questions = [
        {
            question: "Which Robin was murder by the Joker with a crow bar?",
            answers: ["Dick Grayson", "Jason Todd", "Time Drake", "Damian Wayne"],
            values: [false, true, false, false],
            // details: write about the issue number
            // gif: come up with a gif
        }
    ]

    // Score
    var currentQuestion = 0;
    var correct = 0;
    var wrong = 0;
    var none = 0;

    // FUNCTIONS--------------------------------------

    // click the start button
    // Had to research best way to start the game
    $("#start").on("click", function () {
        $("#start").fadeToggle("slow", displayQ)
    })

    // Display the quiz content
    function displayQ() {
        // tried at first to do .empty but that did not work
        $(".message-content").remove();
        $("#start").remove();

        // link the html elements to variables
        var questionArea = $("<div>");
        questionArea.attr("id", "question-area")
        var timer = $("<h2>")
        var question = $("<h2>")

        // Researched why my quiz was not displaying properly and append seemed to be the answer

        // Append the elements to the content area
        questionArea.appendTo("#content")
        timer.appendTo(questionArea)
        question.appendTo(questionArea)

        // Timer

        var time = 15;
        timer.html("<h2>" + time + " seconds remaining</h2>")

        var countDown = setInterval(function () {
            time--;
            timer.html("<h2>" + time + " seconds remaining</h2>")

            if (time === 0) {
                clearInterval(countDown)
                questionArea.fadeToggle("slow", timedOut)
                none++;
            }
        }, 1000);


        // Got completly lost on what to do next
        // All the credit to google for this part

        question.html(questions[currentQuestion].question)

        // Display the answers as list items using a for loop
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            var answers = $("<button>")
            answers.html(questions[currentQuestion].answers[i])
            answers.addClass("answer-buttons")
            answers.attr("value", questions[currentQuestion].values[i])
            answers.attr("id", "a" + i)
            answers.appendTo(questionArea)
        };

        //Slides the answers into place
        $("#a0").animate({ "left": "+=600px" })

        // click function for selecting the answer
        $(".answer-buttons").on("click", function () {
            console.log($(this).attr("value"));

            //If statement for correct answers

            if ($(this).attr("value") === "true") {
                questionArea.fadeToggle("slow", displayCorrect)
                clearInterval(countDown);
                correct++;
            };

            //If statement for incorrect answers
            if ($(this).attr("value") === "false") {
                questionArea.fadeToggle("slow", displayWrong)
                clearInterval(countDown)
                wrong++;
            };
        });
    };

    // Again got completely lost on what to do next

    // This function will display the correct answer screen
    function displayCorrect() {
        var cycle = setTimeout(displayQ, 10000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        // Declare content that will go into the messageArea
        var winMessage = $("<h2>");
        var detail = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        winMessage.appendTo($(messageArea));
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        winMessage.text("Correct!");
        detail.text(questions[currentQuestion].detail)
        image.attr("src", questions[currentQuestion].gif)

        // Game over function
        if (currentQuestion === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 10000)
        }
        currentQuestion++;
    };

    // This function will display the wrong answer screen
    function displayWrong() {
        var cycle = setTimeout(displayQ, 10000);
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h2>");
        var detail = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        lossMessage.appendTo(messageArea)
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
        detail.text(questions[currentQuestion].detail)
        image.attr("src", questions[currentQuestion].gif)

        // If there are no questions left, then run this function to display gameOver
        if (currentQuestion === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 10000)
        }
        currentQuestion++;
    };

    // This will display the time out screen
    function timedOut() {
        var cycle = setTimeout(displayQ, 10000);
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h2>");
        var detail = $("<h2>")
        var image = $("<img>")
        // Append it all to the content container and add text and images
        messageArea.appendTo($("#content"));
        lossMessage.appendTo(messageArea)
        detail.appendTo($(messageArea))
        image.appendTo($(messageArea))
        lossMessage.html("You timed out! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
        detail.text(questions[currentQuestion].detail)
        image.attr("src", questions[currentQuestion].gif)

        // If there are no questions left, then run this function to display gameOver
        if (currentQuestion === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 10000)
        }
        currentQuestion++;
    };

    // This will display when the currentQuestion amount is equal to questions.length - 1. In other words, when all questions have been answered
    function gameOver() {
        // Clear out the post-question message
        $(".message-content").remove();
        var totalCorrect = $("<h3>")
        var totalIncorrect = $("<h3>")
        var totalNone = $("<h3>")
        var restart = $("<button>")
        totalCorrect.appendTo($("#content"))
        totalCorrect.html("You got " + correct + " correct!")
        totalIncorrect.appendTo("#content")
        totalIncorrect.html("You got " + wrong + " wrong.")
        totalNone.appendTo("#content")

        // If block to determine if question or questions should be used
        if (none === 1) {
            totalNone.html("You didn't answer " + none + " question.")
        }
        if (none > 1 || none === 0) {
            totalNone.html("You didn't answer " + none + " questions.")
        }

        // This is the end of where I got lost the second time. Wanted to turn in a completed game but without this chunk of code it was not going to happen.

        // Restart button
        restart.addClass("restart")
        restart.text("Restart")
        restart.appendTo($("#content"))
        
        $(".restart").on("click", function () {
            totalCorrect.remove();
            totalIncorrect.remove();
            totalNone.remove();
            restart.remove();
            currentQuestion = 0;
            correct = 0; //records number of correct answers
            wrong = 0; //records number of wrong answers
            none = 0;
            displayQ();
        })
    }
})


