import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project_loan"
})

app.use(express.json())
app.use(cors())

//Show contract in Contract page//
app.get("/contract", (req,res)=>{
    const q = "SELECT * FROM contract"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

//Show contract in specific Contract page//
app.get("/contract/:ConID", (req,res)=>{
    const ConID = params.ConID;
    const q = "SELECT * FROM contract WHERE ConID = ? ";
    
    db.query(q,[ConID],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

//Craete contract in Contract page//
app.post("/contract" , (req,res)=>{
    const q = "INSERT INTO contract (`LoanDate`,`ReturnDate`,`Duration`,`Status`,`Priciple`,`Interest`,`Penality`,`ReturnMoney`,`CusID`,`AID`) VALUES(?)";
    const values = [
        req.body.LoanDate,
        req.body.ReturnDate,
        req.body.Duration,
        req.body.Status,
        req.body.Priciple,
        req.body.Interest,
        req.body.Penality,
        req.body.ReturnMoney,
        req.body.CusID,
        req.body.AID
    ];

    db.query(q , [values] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("Contract is created successfully!");
    })
})


//Update contract in Contract page//
app.put("/contract/:ConID",(req,res) =>{
    const ConID = req.params.ConID;
    const q = "UPDATE contract SET `LoanDate` = ?,`ReturnDate` = ?,`Duration` = ?,`Status` = ?,`Priciple` = ?,`Interest` = ?,`Penality` = ?,`ReturnMoney` = ?,`CusID` = ?,`AID` = ? WHERE ConID = ?";

    const values=[
        req.body.LoanDate,
        req.body.ReturnDate,
        req.body.Duration,
        req.body.Status,
        req.body.Priciple,
        req.body.Interest,
        req.body.Penality,
        req.body.ReturnMoney,
        req.body.CusID,
        req.body.AID
    ]


    db.query(q , [...values,ConID] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("Contract has been updated successfully!");
    })
})

//-------------------------------------------------------------------------------//
//Show customers in Customer page//
app.get("/customers", (req,res)=>{
    const q = "SELECT * FROM customers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

//Show customers in specific Customers page//
app.get("/customers/:CusID", (req,res)=>{
    const CusID = req.params.CusID;
    const q = "SELECT * FROM customers WHERE CusID = ? ";
    
    db.query(q,[CusID],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

//Create customers in Customers page//
app.post("/customers" , (req,res)=>{
    const q = "INSERT INTO customers (`CusName`,`SSN`,`Address`,`CusPhoneNo`,`Facebook`,`Income`,`Asset`) VALUES(?)";
    const values = [
        req.body.CusName,
        req.body.SSN,
        req.body.Address,
        req.body.CusPhoneNo,
        req.body.Facebook,
        req.body.Income,
        req.body.Asset,
    ];


    db.query(q , [values] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("Account is created successfully!");
    })
})

//Update customers in Customers page//
app.put("/customers/:CusID",(req,res) =>{
    const CusID = req.params.CusID;
    const q = "UPDATE customers SET `CusName` = ?,`SSN` = ?,`Address` = ?,`CusPhoneNo` = ?,`Facebook` = ?,`Income` = ?,`Asset` = ? WHERE CusID = ?";

    const values=[
        req.body.CusName,
        req.body.SSN,
        req.body.Address,
        req.body.CusPhoneNo,
        req.body.Facebook,
        req.body.Income,
        req.body.Asset
    ]


    db.query(q , [...values,CusID] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("Contract has been updated successfully!");
    })
})

//-------------------------------------------------------------------------------//
//Show list finance in finance by ConID
//app.get("/financial/:ConID", (req,res)=>{
//    const ConID = req.params.ConID;
//    const q = "SELECT * FROM financial WHERE ConID = ? ";
//    
//    db.query(q,[ConID],(err,data)=>{
//        if(err) return res.json(err)
//        return res.json(data);
//    })
//})

//Total Amount in financial page
app.get("/financial/:ConID", (req, res) => {
    const ConID = req.params.ConID;
    const q = "SELECT *, (SELECT SUM(Amount) FROM financial WHERE ConID = ?) AS TotalAmount FROM financial WHERE ConID = ?";

    db.query(q, [ConID, ConID], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});




//Create list fibancial in financial page
app.post("/financial/:ConID" , (req,res)=>{
    const ConID = req.params.ConID;
    const q = "INSERT INTO financial (`FDate`,`Detail`,`Amount`,`Total`,`ConID`) VALUES(?) ";
    const values = [
        req.body.FDate,
        req.body.Detail,
        req.body.Amount,
        req.body.Total,
        ConID
    ];


    db.query(q , [values] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("finance is created successfully!");
    })
})


// listen port 8800 //
app.listen(8800, ()=>{
    console.log("Connected to backend")
})