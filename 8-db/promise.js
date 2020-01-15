// callback------------------------

// const doWork =(callback) =>{
//     setTimeout(()=>{
//         callback(undefined,[11,3])
//     },3000)
// }

// doWork((error,result)=> {
//     if(error){
//         return console.log(error)

//     }
//     console.log(result)
// })

const doWork = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject('wrong')
        resolve([4,1,2])
        
    },3000)
    
})

doWork.then((result)=> {
    console.log('succeed',result)
}).catch((error)=> {
    console.log('Error',error)
})