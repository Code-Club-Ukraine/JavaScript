function displayArray() {
//step 1 slide 2
// var dinosaur1 = "Tyrannosaurus";
// var dinosaur2 = "Velociraptor";
// var dinosaur3 = "Stegosaurus";
// var dinosaur4 = "Triceratops";
// var dinosaur5 = "Brachiosaurus";
// var dinosaur6 = "Pteranodon";
// var dinosaur7 = "Apatosaurus";
// var dinosaur8 = "Diplodocus";
// var dinosaur9 = "Compsognathus";
//step 2 slide 3
// let dinosaurs = [
//     "Tyrannosaurus", 
//     "Velociraptor", 
//     "Stegosaurus", 
//     "Triceratops", 
//     "Brachiosaurus", 
//     "Pteranodon", 
//     "Apatosaurus", 
//     "Diplodocus", 
//     "Compsognathus"
    // ];
    // alert(dinosaurs);
//step 3 slide 4
// dinosaurs[0]; // "Tyrannosaurus"
    // dinosaurs[3]; // "Triceratops"
    // alert(dinosaurs[0]);
    // alert(dinosaurs[3]);
//step 4 slide 5 
    // dinosaurs [0] = "Tyrannosaurus Rex";
    // alert(dinosaurs); //show, that element under the index 0 has changed
//step 5 slide 6
    // let dinosaur = [];
// dinosaur[0] = "Tyrannosaurus";
// dinosaur[1] = "Velociraptor";
// dinosaur[2] = "Stegosaurus";
    // dinosaur[3] = "Triceratops";
// dinosaur[4] = "Brachiosaurus";
// dinosaur[5] = "Pteranodon";
// dinosaur[6] = "Apatosaurus";
// dinosaur[7] = "Diplodocus";
// dinosaur[8] = "Compsognathus";
    // alert(dinosaur);
//step 6 slide 7
// dinosaurs [33] = "Philosoraptor";
    // alert(dinosaur);
//step 7 slide 8
    // let dinosaursAndNumbers = [3, "dinosaurs", 10];
    // alert(dinosaursAndNumbers);
//step 8 - length array
    //let ninjaTurtles = ["Raphael", "Michelangelo", "Donatello"];
    // let ninjaTurtlesLenght = ninjaTurtles.length;
    // alert(ninjaTurtlesLenght);
//step 9 - array.push
    // let animals = [];
// animals.push("Cat"); //1
// animals.push("Dog"); //2
// animals.push("Llama");
// alert(animals); //["Cat", "Dog", "Llama"]
    // ert(animals.length);
//step 9 - array.unshift
// animals[0]; //"Cat"
// animals.unshift("Monkey");
// alert(animals); //["Monkey", "Cat", "Dog", "Llama"]
// animals.unshift("Polar bear");
// alert(animals); //["Polar bear", "Monkey", "Cat", "Dog", "Llama"]
// alert(animals[0]); //"Polar bear"
// alert(animals[2]); //"Cat"
//step 9 - array.pop
// alert(animals); ["Polar bear", "Monkey", "Cat", "Dog", "Llama"]
    // let lastAnimal = animals.pop();
// alert(lastAnimal); //"Llama"
// alert(animals); //["Polar bear", "Monkey", "Cat", "Dog"]
// animals.pop(); //"Dog"
// alert(animals); //["Polar bear", "Monkey", "Cat"]
    // animals.unshift(lastAnimal);
// alert(animals); //["Llama", "Polar bear", "Monkey", "Cat"]
//step 10 - array.shift
// alert(animals); //["Llama", "Polar bear", "Monkey", "Cat"]
    // let firstAnimal = animals.shift();
// alert(firstAnimal); //"Llama"
// alert(animals); //"Polar bear", "Monkey", "Cat"]
//step 11 - array.concat()
// let furryAnimals = ["Alpaca", "Ring-tailed lemur", "Yeti"];
// let scalyAnimals = ["Boa constrictor", "Godzilla"];
    // let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// alert(furryAndScalyAnimals); //["Alpaca", "Ring-tailed lemur", "Yeti", "Boa constrictor", "Godzilla"]
// alert(furryAnimals); //["Alpaca", "Ring-tailed lemur", "Yeti"]
// alert(scalyAnimals); //["Boa constrictor", "Godzilla"]
//step 12 - array.concat() - Combining several arrays
// let furryAnimals = ["Alpaca", "Ring-tailed lemur", "Yeti"];
// let scalyAnimals = ["Boa constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];
    // let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// alert(allAnimals); // ["Alpaca", "Ring-tailed lemur", "Yeti", "Boa constrictor", "Godzilla", "Macaw", "Dodo"]
//step 13 - array.indexOf()
// let colors = ["red", "green", "blue"];
// colors.indexOf("blue"); //2
// colors.indexOf("green"); //1

    // If the element whose index you are requesting is not in the array, JavaScript will return the value −1.
// colors.indexOf("purple"); //-1
//step 14 - array.join()
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// boringAnimals.join(); // "Monkey,Cat,Fish,Lizard"
//step 15 - array.join() - different types of separators
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// boringAnimals.join(" - "); //"Monkey - Cat - Fish - Lizard"
// boringAnimals.join("*"); //"Monkey*Cat*Fish*Lizard"
// boringAnimals.join(" and ") //"Monkey and Cat and Fish and Lizard"
// boringAnimals.join(" ") //"Monkey Cat Fish Lizard"
}
