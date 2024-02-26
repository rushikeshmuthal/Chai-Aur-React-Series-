import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready")
})

//get List of 3 jokes

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"First joke",
            content:'this is the first joke'
        },
        {
            id:2,
            title:"Second joke",
            content:'this is the second joke'
        },
        {
            id:3,
            title:"Third joke",
            content:'this is the third joke'
        },
    ]
    res.send(jokes)
})

const port =  process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`server is runnint at ${port}`);
})