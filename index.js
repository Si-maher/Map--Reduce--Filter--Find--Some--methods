// Let us compare forEach and Map method 

// forEach 
// Let us create an array of objects

let officers = [
    
        {id:1, name:'Captain America'},
        {id:2, name:'Captain England'},
        {id:3, name:'Captain France'},
        {id:4, name:'Captain Finland'}
    
]
// We want to loop through this array of objects and return only the id's 

// 1) Create empty array as need forEach
let officersId = []

// 2) Loop through 

officers.forEach(function (item)  {
officersId.push(item.id)

})
console.log(officersId);

// Now let us use the same array of objects, but this time using the map method to extract the data 

let officersIdMap = officers.map(function (item) {
    return item.id
})

console.log(officersIdMap);

// Here, the callback runs for each value and returns each new value in the resulting Array 

// Same object but now using an arrow function 

const officerIdMapArrow =officers.map(item => item.id)
console.log(officerIdMapArrow);


// Lets use Reduce to return some Data, in this case the pilots years of experience

let pilots = [
    {
        id:10,
        name:'Bob',
        years:1
    },
    {
        id:2,
        name:'Todd',
        years:2
    },
    {
        id:3,
        name:'Paul',
        years:3
    },
    {
        id:4,
        name:'Dave',
        years:4
    },
]

let totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years
}, 0)
console.log(totalYears);

// Like map, reduce also uses callback as well as an accumulator. 

// Arrow function for same object

let totalYearsArrow = pilots.reduce((acc, pilot) => acc + pilot.years,0)
console.log(totalYearsArrow);

// Now let us find the highest number for years of experience using reduce

let mostExPilot = pilots.reduce(function(oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot
}, {})
console.log(mostExPilot);

// ###################################### 
// Revision 
let booksId = []
let books = [
    {id:1, name:'Harry Potter'},
    {id:2, name:'LOTR'},
    {id:3, name:'WOT'}
]

books.forEach(function (item) {
    booksId.push(item.name)
})
console.log(booksId);
console.log(booksId);

let booksMap = [
    {id:1, name:'Jason Bourne'},
    {id:2, name:'Gandalf'},
    {id:3, name:'Megatron'}
]

let booksIdMap = booksMap.map(function (item) {
    return item.name
})
console.log(booksIdMap);

// ########################################## 

// Now lets use the filter method. This allows us to extract some of the elements within an array. For instance, below we have an array of objects with two factions; Rebels and Empire.
// Filter allows us to seperate these and put them into new arrays.
let cadets = [
    {
        id:2, 
        name:'Wedge Antilles',
        faction:'Empire'

    },
    {
        id:8, 
        name:'Ciena Ree',
        faction:'Rebels'

    },
    {
        id:10, 
        name:'Iden Vero',
        faction:'Empire'

    },
    {
        id:66, 
        name:'Thane Kyrell',
        faction:'Rebels'

    },
]

// Rebel array 
let rebels = cadets.filter(function(item) {
    return item.faction === 'Rebels'
})

console.log(rebels);

// Empire array 

let empire = cadets.filter(function (item) {
    return item.faction === 'Empire'
})

console.log(empire);

// And now the same but with arrow functions 

const rebelsArrow = cadets.filter(item => item.faction === 'Rebels')
console.log(rebelsArrow);

const empireArrow =cadets.filter(item => item.faction === 'Empire')
console.log(empireArrow);


// We can combine these methods because they are all called on Arrays, and filter() and map() both return new arrays, we can chain them 

let personnel = [
    {
        id:5,
        name: 'Luke Skywalker',
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id:82,
        name: 'Sabine Wren',
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id:22,
        name: 'Zeb Orellios',
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id:15,
        name: 'Ezra Bridger',
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id:5,
        name: 'Caleb Dume',
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
]

let jediPersonnel = personnel.filter(function (item) {
    return item.isForceUser 
})
console.log(jediPersonnel);

let jediScore = jediPersonnel.map(function(item) {
    return item.pilotingScore + item.shootingScore
})

console.log(jediScore);


let jediTotalScore = jediScore.reduce(function(acc, item) {
    return acc + item
},0)

console.log(jediTotalScore);

