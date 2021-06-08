// data
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
];



/**
* @description Represents a Dinosaur object
* @constructor
* @param {string} dino - Dinosaur data
* @param {string} image - URL of the dinosaur image
*/
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

    /**
    * @description compares the diet of a dino and the human
    * @param {human} human - the human object to compare against the dino
    * @returns {string} - text comparing the human and dino diets
    */
    compareDiet(human) {
        return this.diet === human.diet ? `${this.species} and you are both ${this.diet}s.` : `${this.species} has a different diet than you.`;
    }
    
    /**
    * @description compares the height of a dino and the human
    * @param {human} human - the human object to compare against the dino
    * @returns {string} - text comparing the human and dino height
    */
    compareHeight(human) {
        if (this.height > human.height) {
            return `${this.species} is taller than you.`;
        } else if (this.height < human.height) {
            return `${this.species} is shorter than you.`;
        } else {
            return `You and ${this.species} are the same height.`;
        }
    }

    /**
    * @description compares the weight of a dino and the human
    * @param {human} human - the human object to compare against the dino
    * @returns {string} - text comparing the human and dino weight
    */
    compareWeight(human) {
        const weightDifference = Math.abs(this.weight - human.weight);
        if (this.weight > human.weight) {
            return `${this.species} is ${weightDifference} lbs heavier than you.`;
        } else if (this.weight < human.weight) {
            return `You are ${weightDifference} lbs heavier than ${this.species}.`;
        } else {
            return `You and ${this.species} are the same weight.`;
        }
    }

}



// Create Dino Objects
let dinos = dinoData.map(d => new Dino(d, `/images/${d.species.toLowerCase()}.png`));



/**
* @description randomize the order of the dino array
* @source https://stackoverflow.com/questions/37165469/print-array-in-random-order
*/
dinos.sort(function() {
    return .5 - Math.random();
})



// Create Human Object
function Human(name, heightFt, heightIn, weight, diet, image) {
    this.name = name;
    this.height = (heightFt * 12) + heightIn;
    this.weight = weight;
    this.diet = diet;
    this.image = image;
}



function compareUserToDino() {
    var humanDataIsValid = true;
    var errorMsg = '';

    const form = {
        name: document.querySelector("#name"),
        heightFt: document.querySelector("#feet"),
        heightIn: document.querySelector("#inches"),
        weight: document.querySelector("#weight")
    };

    // remove potential invalidInput error class from form elements
    for (var e in form) {
        form[e].classList.remove('invalidInput');
    }

    // Use IIFE to get human data from form
    const human = (function createHumanObject() {
        const name = form.name.value;
        if (name === '' || typeof name !== 'string') {
            form.name.classList.add('invalidInput')
            errorMsg += 'Name is required\n';
            humanDataIsValid = false;
        }
        const heightFt = parseInt(form.heightFt.value);
        if (isNaN(heightFt)) {
            form.heightFt.classList.add('invalidInput')
            errorMsg += 'Height in feet is required\n';
            humanDataIsValid = false;
        }
        const heightIn = parseInt(form.heightIn.value);
        if (isNaN(heightIn)) {
            form.heightIn.classList.add('invalidInput')
            errorMsg += 'Height in inches is required\n';
            humanDataIsValid = false;
        }
        const weight = parseInt(form.weight.value);
        if (isNaN(weight)) {
            form.weight.classList.add('invalidInput');
            errorMsg += 'Weight is required\n';
            humanDataIsValid = false;
        }

        if (!humanDataIsValid) {
            alert(errorMsg);
            return null;
        }

        const diet = document.querySelector("#diet").value;
        return new Human(name, heightFt, heightIn, weight, diet, '/images/human.png');
    })();

    if (human) {
        // Generate Tiles for each Dino in Array
    const grid = document.querySelector('#grid');
    for (dino of dinos) {
        
        // set species
        const gridItemTitle = document.createElement('h2');
        gridItemTitle.textContent = dino.species;

        // set image
        const gridItemImg = document.createElement('img');
        gridItemImg.src = `images/${dino.species}.png`;

        // set fact
        const gridItemFact = document.createElement('p');
        if (dino.species === 'Pigeon') {
            gridItemFact.textContent = dino.fact;
        } else {
            const facts = [dino.fact, dino.compareDiet(human), dino.compareWeight(human), dino.compareHeight(human)];
            // get random item from an array
            // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
            gridItemFact.textContent = facts[Math.floor(Math.random()*facts.length)];
        }
        
        // assemble tile
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.appendChild(gridItemTitle);
        gridItem.appendChild(gridItemImg);
        gridItem.appendChild(gridItemFact);
        
        // Add tiles to DOM
        grid.appendChild(gridItem);
    }


    // add human to center tile
    const gridItemTitle = document.createElement('h2');
    gridItemTitle.innerHTML = human.name;

    const gridItemImg = document.createElement('img');
    gridItemImg.src = human.image;

    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.appendChild(gridItemTitle);
    gridItem.appendChild(gridItemImg);
  
    // place human in center of grid
    grid.insertBefore(gridItem, grid.children[grid.children.length / 2]);
        
    // Remove form from screen
    document.querySelector('#dino-compare').style.display = 'none';
    }
    
}



// On button click, prepare and display infographic
document.querySelector('#btn').addEventListener('click', compareUserToDino);



