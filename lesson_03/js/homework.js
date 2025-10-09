function rndOffence() {
    let randomBodyParts = ["eye", "nose", "skull"];
    let randomAdjectives = ["stinky", "dreary", "silly"];
    let randomWords = ["fly", "otter", "club", "monkey", "rat"];
    // Choose a random body part from the randomBodyParts array:
    let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
    // Choose a random adjective from the randomAdjectives array:
    let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
    // Choose a random word from the randomWords array:
    let randomWord = randomWords[Math.floor(Math.random() * 5)];
    // Join random strings into a sentence:
    let randomInsult = "Your " + randomBodyPart + " looks like a " + randomAdjective + " " + randomWord + "!!!";
    //"Your nose looks like a silly otter!!!"
    document.querySelector(".block-area").innerHTML = randomInsult;
}