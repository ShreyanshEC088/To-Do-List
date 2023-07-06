const express = require("express");
const bodyParser = require("body-parser");
var wrkItems = ["Homework","Code","Build"];
var items = ["Buy Food","Cook Food","Eat Food"];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
   var today = new Date();
   var currDay = today.getDay();
   var day = "";
   var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
   };
   var day = today.toLocaleDateString("en-US",options);
   res.render("list",{TitleDay: day, newListItems:items});
});

app.post("/",function(req,res){
   var item = req.body.inpTxt;
   if(req.body.list == "Work-List")
   {
      wrkItems.push(item);
      res.redirect("/work");
   }
   else
   {
      items.push(item);
      res.redirect("/");
   }
});

app.get("/work",function(req,res){
  res.render("list",{TitleDay:"Work-List", newListItems:wrkItems});
});

app.listen(3000,function(){
    console.log("Server is Running");
})

//another method to access day in javaScript
//    let numArr = ["Sunday","Monday","Tueseday","Wednesday","Thrusday","Friday","Saturday"];
//    if(currDay == 6 || currDay == 0)
//    {
//     day = numArr[currDay];
//    }
//    else 
//    {
//     day = numArr[currDay];
//    }