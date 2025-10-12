
function getAnswer() {
    // step 1 - show that a number from 0 to 4 is returned
    // alert(Math.floor(Math.random() * 4)); 
    // step 2 - since we have 4 elements in the array, we get a random index from 0 to 4 and get a word from this array
    // let randomWords = ["Explosion", "Cave", "Princess", "Pencil"];
    // let randomIndex = Math.floor(Math.random() * 4);
    // alert(randomWords[randomIndex]);
    // step 3 - Program for random choice of options
    // let phrases = [
    //     "Sounds good",
    //     "Yes, you definitely need to do it",
    //     "I don't think it's a good idea",
    //     "Maybe not today?",
    //     "The computer says no"
    // ];

    // return phrases[Math.floor(Math.random() * 5)];
}


document.addEventListener('DOMContentLoaded', function() {
    const btnSubmit = document.getElementById('btnSubmit');
    const divText = document.getElementById('divText');
    
    btnSubmit.addEventListener('click', function() {
        const answer = getAnswer();
        divText.textContent = answer;
    });
});