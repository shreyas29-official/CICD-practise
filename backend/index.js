import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json([
        {
        name:"Shreyas",
        age:22,
        title:"Student"
    }
]);
});

app.listen(PORT,()=>{
    console.log(`Server running on the http://localhost:${PORT}`);
})