
    // Create Dino Constructor
    class Dino {
        constructor(dino, image) {
            this.species = dino.species
            this.weight = dino.weight
            this.height = dino.height
            this.diet = dino.diet
            this.where = dino.where
            this.when = dino.when
            this.fact = dino.fact
            this.image = image
        }
    }


    // Create Dino Objects
    const dinoData = [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]


const dinos = dinoData.map(d => new Dino(d, `/images/${d.species.toLowerCase()}.png`))



function compareUserToDino() {
    // Create Human Object
    function Human(name, heightFt, heightIn, weight, diet, image) {
        this.species = name
        this.heightFt = heightFt
        this.heightIn = heightIn
        this.weight = weight
        this.diet = diet
        this.image = image
    }

    // Use IIFE to get human data from form

    const human = (function createHumanObject(){
        const name = document.querySelector("#name").value
        const heightFt = document.querySelector("#feet").value
        const heightIn = document.querySelector("#inches").value
        const weight = document.querySelector("#weight").value
        const diet = document.querySelector("#diet").value
    
        //Creating and returning a human object
        return new Human(name, heightFt, heightIn, weight, diet, '/images/human.png');
    })();

    console.log(human)

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
    document.querySelector('#dino-compare').style.visibility = "hidden"
}


// On button click, prepare and display infographic
document.querySelector('#btn').addEventListener('click', compareUserToDino)
