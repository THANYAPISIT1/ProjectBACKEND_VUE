import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lamadev123",
    database:"project_loan"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is backend")
})

app.get("/customers", (req,res)=>{
    const q = "SELECT * FROM customers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.get("/admin", (req,res)=>{
    const q = "SELECT * FROM admin"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.post("/admin" , (req,res)=>{
    const q = "INSERT INTO admin (`AName`,`Gmail`,`APhoneNo`,`Username`,`Password`) VALUES(?)";
    const values = [
        req.body.AName,
        req.body.Gmail,
        req.body.APhoneNo,
        req.body.Username,
        req.body.Password,
    ];

    db.query(q , [values] , (err,data)=>{
        if(err) return res.json(err)
        return res.json("Account is created successfully!");
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})