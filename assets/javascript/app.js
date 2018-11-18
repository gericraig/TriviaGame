$(document).ready(function () {

    // VARIABLES-----------------

    // Question and answers in an array
    var questions = [
        {
            question: "Which Robin was murder by the Joker with a crow bar?",
            answers: ["Dick Grayson", "Jason Todd", "Time Drake", "Damian Wayne"],
            values: [false, true, false, false],
            detail: " After Jason is killed by the Joker and resurrected in the Lazarus Pit, he goes on to become the Red Hood.",
            gif: "assets/images/1.gif",
        },
        {
            question: "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
            answers: ["Ra's Al Ghul", "Bane", "Joker", "Killer Croc"],
            values: [false, true, false, false],
            detail: "After deducing Batman's secret identity and invading the sanctity of Wayne Manor and the Batcave, Bane not only defeated Batman, but broke his back, leaving him crippled and wheelchair-bound.",
            gif: "assets/images/2.gif",
        },
        {
            question: "Which of the following characters did Bruce Wayne have a child with?",
            answers: ["Poison Ivy", "Harley Quinn", "Talia Al Ghul", "Catwoman"],
            values: [false, false, true, false],
            detail: "Talia told Batman she'd had a miscarriage, but actually left the child (Damian Wayne) to be raised by the League of Assassins.",
            gif: "assets/images/3.gif",
        },
        {
            question: "What member of the Batman family became Oracle?",
            answers: ["Huntress", "Catwoman", "Batwoman", "Batgirl"],
            values: [false, false, false, true],
            detail: "After being shot by the Joker and left paraplegic, Batgirl (Barbara Gordon) reinvents herself as the computer expert and information broker Oracle.",
            gif: "assets/images/4.gif",
        },
        {
            question: "Which of the following characters has NOT fought crime as Batgirl?",
            answers: ["Laurel Lance", "Barbara Gordon", "Charlie Gage-Radcliffe", "Betty Kane"],
            values: [true, false, false, false],
            detail: "Betty Kane was the Golden Age Batgirl. Superpowered teen Charlie Gage-Radcliffe briefly donned the Batgirl costume after Barbara was injured. Laurel Lance is the Black Canary.",
            gif: "assets/images/5.gif",
        },
        {
            question: "Who first replaced Batman when he was paralyzed by Bane?",
            answers: ["Azrael", "Robin", "Red Hood", "Nightwing"],
            values: [true, false, false, false],
            detail: "Azrael (Jean-Paul Valley) plays a pivotal role in the Knightfall story arc (1993-1994), in which he stands in as Batman after Bruce Wayne is defeated and paralyzed at the hands of Bane.",
            gif: "assets/images/6.gif",
        },
        {
            question: "What superpower does the Joker have?",
            answers: ["super intelligence", "none", "poison breath", "super strength"],
            values: [false, true, false, false],
            detail: "He uses his expertise in chemical engineering to develop poisonous or lethal concoctions, and thematic weaponry, including razor-tipped playing cards, deadly joy buzzers, and acid-spraying lapel flowers.",
            gif: "assets/images/7.gif",
        },
        {
            question: "Where does Batman send his most twisted foes for rehabilitation?",
            answers: ["Graystone Psychiatric Hospital", "Arkham Asylum", "Gotham Asylum", "Pennhurst Asylum"],
            values: [false, true, false, false],
            detail: "Located on the outskirts of Gotham, Arkham Asylum is a psychiatric hospital where many of Batman's foes are sent for rehabilitation. Unfortunately, inmates escape on a regular basis.",
            gif: "assets/images/8.gif",
        },
        {
            question: "What alias does Batman often use when working undercover?",
            answers: ["Bruce Wayne", "Don Fortunato", "Matches Malone", "Carmine Falcone"],
            values: [false, false, true, false],
            detail: "Matches Malone is the name of a small-time criminal and a common guise adopted by Batman to infiltrate the Gotham's criminal underworld.",
            gif: "assets/images/9.gif",
        },
        {
            question: "When the Scarecrow used his fear gas on the Joker, what was the Clown Prince of Crime's greatest fear?",
            answers: ["Someone else killing Batman", "Nothing", "Falling into a chemical vat", "Getting married to Harley Quinn"],
            values: [false, true, false, false],
            detail: "In Detective Comics #664, Scarecrow betrays Joker by spraying him with fear gas, but it has absolutely no effect; Joker then beats Scarecrow senseless with a chair.",
            gif: "assets/images/10.gif",
        },
        {
            question: "Who killed Batman's parents?",
            answers: ["The Joker", "Carmine Falcone", "Sal Maroni", "Joe Chill"],
            values: [false, false, false, true],
            detail: "The mugger is not given a name until Batman #47 (June-July 1948) when Batman discovers that Joe Chill, the small-time crime boss he is investigating, is none other than the man who killed his parents.",
            gif: "assets/images/11.gif",
        },
        {
            questions: "Who killed Dick Grayson's parents?",
            answers: ["Sal Maroni", "Tony Zucco", "Carmine Falcone", "Joe Chill"],
            values: [false, true, false, false],
            detail: "Zucco tries to extort the circus where the Flying Graysons are the main attraction. When the ringmaster refuses to pay, he sabotages the highwire ropes, which break and send Dick's parents falling to their deaths.",
            gif: "assets/images/12.gif",
        },
        {
            question: "Who is the Joker's accomplice and lover?",
            answers: ["Harley Quinn", "Payton Riley", "Zatanna", "Lady Shiva"],
            values: [true, false, false, false],
            detail: "Harley Quinn met the Joker while working as a psychiatrist at Arkham Asylum. During therapy sessions, she fell in love with him and eventually helped him escape.",
            gif: "assets/images/13.gif",
        },
        {
            question: "What former District Attorney became the villain known as Two-Face?",
            answers: ["Flod Lawton", "Jason Blood", "Harvey Dent", "Harvey Bullock"],
            values: [false, false, true, false],
            detail: "Harvey Dent went insane after a mob boss threw acidic chemicals at him during a trial, hideously scarring the left side of his face. He subsequently adopted the Two-Face persona, becoming a criminal obsessed with duality.",
            gif: "assets/images/14.gif",
        },
        {
            question: "Bruce Wayne's parents died outside of what theater?",
            answers: ["Royal Theater", "Ridglea Theater", "Gotham Theater", "Monarch Theater"],
            values: [false, false, false, true],
            detail: "Thomas and Martha Wayne were walking home from the Monarch Theater with Bruce, when they were gunned down by a mugger who wanted Martha's pearl necklace.",
            gif: "assets/images/15.gif",
        },

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


