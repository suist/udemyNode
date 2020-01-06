// blocking

const getUserSync = require('./src/getUserSync')

const userOne = getUserSync(1)
console.log(userOne)

const userTwo  = getUserSync(2)
console.log(userTwo)

const sum = 1+2
console.log(sum)

// fetching first user 
//print ->     fetching second user
             // printing second user 
             // calculate and print sum





// non blocking -> callback

const getUser = require('./src/getUser')

getUser(1, (user) => {
    console.log(user)


})

getUser(2,(user) => {
    console.log(user)

})

const sum = 1 +2 ;
console.log(sum);



// starting to fetch first user
// starting to fetch second user
// calculate and print sum
        // printing first user
        // printing second user 