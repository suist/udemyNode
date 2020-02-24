const express = require('express')
const multer = require('multer')
const router = new express.Router()
const auth = require('../middleware/auth')
const User =require('../models/user')




//create
router.post('/users',async (req,res)=>{
    const user = new User(req.body)
    try { 
        
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({user,token})
        
    } catch (error) {
        res.status(400).send(error)
        
    }

    // const user = new User(req.body)

    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    
    // })


})

//login 
router.post('/users/login', async (req,res) =>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()

        res.send({user,token})
    }catch(e){
        res.status(400).send()

    }
})

//logout
router.post('/users/logout',auth,async (req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
        return token.token !== req.token
    })
    await req.user.save()
    res.send()
        
    } catch (error) {
        res.status(500).send()
        
    }
})

//logout all
router.post('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
        
        
    }catch(e){
        res.status(500).send()
    }
})


//read user
router.get('/users/me',auth, async (req,res)=>{
    res.send(req.user)
    // try {
    //     // const users= await User.find({})
    //     res.send(users)
        
    // } catch (error) {
    //     res.status(500).send()
        
    // }
//     User.find({}).then((users)=>{
//         res.send(users)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
    

// })

})

//read user by binded id
router.get('/users/:id',async (req,res)=>{
    const _id= req.params.id
    try {
        
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

        
    } catch (error) {
        res.status(500).send()
        
    }
})

//update
router.patch('/users/me',auth, async (req, res)=>{
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name','email','password','age']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))


        if(!isValidOperation){

            return res.status(400).send({error: 'Invalid updated!~'})
        }


    try {

        await updates.forEach((update)=>req.user[update]= req.body[update])
        // const user = await User.findById(req.params.id)

        // updates.forEach((update)=>user[update] = req.body[update])

        await req.user.save()
        // const user = await User.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators:true})

        // if(!user) {
        //     return res.status(404).send()
        // }

        res.send(req.user)
        
    } catch (error) {

        res.status(400).send(error)
        
    }
}
)

//delete
router.delete('/users/me',auth, async (req,res)=>{
    try {
        await req.user.remove()
        res.send(req.user)
    //  const user =await User.findByIdAndDelete(req.params.id)
     
    //  if(!user){
    //      return res.status(404).send()
    //  }

    //  res.send(user)
        
    } catch (error) {

        res.status(500).send()
        
    }
})

//upload avatar

const upload = multer({

    limits: {
        fileSize:1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            return cb(new Error ('File must be a image file!'))
        }

        cb(undefined,true)
    }
})

router.post('/users/me/avatar',auth, upload.single('avatar'), async (req,res)=>{
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.send()

}, (error,req,res,next) => {
    res.status(400).send({ error: error.message })
})

// <img src="data:image/jpg;base64,55/662345345/5345... ">-> html 로 buffer 로 변환된 binary image 보는법

router.delete('/users/me/avatar',auth, async(req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send(req.user)
    

})

//serving up file!
router.get('/users/:id/avatar',async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        
        if(!user || !user.avatar) {
            throw new Error()
        }
        res.set('Content-Type','image/jpg')
        res.send(user.avatar)
    }catch(e) {

        res.status(404).send()
    }


})


//     const _id= req.params.id
//     User.findById(_id).then((user)=>{
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })



module.exports = router