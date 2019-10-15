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



