function toggleTrivia() {
    let triviaList = document.getElementById('trivia-list');
    let output = document.getElementById('reveal-btn')
    if (triviaList.hidden) {
        triviaList.hidden = false;
        output.innerHTML = "Click me to hide";
    } else {
        triviaList.hidden = true;
        output.innerHTML = "Click me to reveal"
    }
}
