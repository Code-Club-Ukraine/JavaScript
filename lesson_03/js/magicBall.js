
function getRandomAnswer() {
    let answers = [
        "Sounds good",
        "Yes, you definitely need to do it",
        "I don't think it's a good idea",
        "Maybe not today?",
        "The computer says no"
    ];

    return answers[Math.floor(Math.random() * answers.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const btnSubmit = document.getElementById('btnSubmit');
    const divText = document.getElementById('divText');
    
    btnSubmit.addEventListener('click', function() {
        const answer = getRandomAnswer();
        divText.innerText = answer;
    });
});