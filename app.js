const express=require("express");
const proRouter=require("./routes/pro.js");
const bodyParser=require("body-parser");
let app=express();
app.listen(5500);
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
  extended:false
}));

app.use("/pro",proRouter);