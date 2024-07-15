const express =require("express");
const app =express();

app.use("/", (req, res)=>{
    res.send("server is connting ")
});

app.listen(5000 , console.log("sever port 5000"));

