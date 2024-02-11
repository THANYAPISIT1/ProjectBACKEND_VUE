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

app.get("/contract/:ConID", (req,res)=>{
    const ConID = req.params.ConID;
    const q = "SELECT * FROM contract WHERE ConID = ?";
    
    db.query(q,[ConID],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

/*app.get("/contract/:ConID", (req,res)=>{
    const ConID = req.params.ConID;
    const q = "SELECT * FROM contract WHERE ConID = ? ";
    
    db.query(q,[ConID],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})*/


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

//Show customers in Customer page//

app.get("/customers", (req,res)=>{
    const q = "SELECT * FROM customers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

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

app.listen(8800, ()=>{
    console.log("Connected to backend")
})