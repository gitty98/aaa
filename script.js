function answer(correct) {
    const result = document.getElementById("quiz-result");
        if (correct) {
            result.textContent = "🎉 That's right! HTML gives a web page its structure. Great work!";
        } else {
            result.textContent = "💜 Good try! HTML helps create the structure of a web page. Try again!";
        }
    }