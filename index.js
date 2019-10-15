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
