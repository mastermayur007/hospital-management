const express = require("express");
const server = express();
const cors = require('cors')
const bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const salt =  10;
const jwt = require('jsonwebtoken');
require('dotenv').config();
main().catch(err => console.log(err));


async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('db connected');
}

const userSchema = new mongoose.Schema({
    Name: String,
    Mobile:{ type: Number, unique: true },
    DOB: Date,
    Age:Number,
    Height:Number,
    Weight:Number,
    BMI:Number,
    Address:String,  
    JoinDate:Date,
    EndDate:Date,
    FeesPaid:Number,
    FeesBalance:Number,
    Gender:String,
    PT:String,
    role:String,
    Password:String,
});

const User = mongoose.model('User', userSchema);


const corsOptions = { 
    credentials: true,
  };
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(cookieParser());

// CRUD - Creates
server.post('/addMember', async (req, res) => {
    try {
        let user = new User();
        const existingUser = await User.findOne({ Mobile: req.body.mobilenum })
        if (existingUser) {
            console.log("Mobile number already exists.");
            return res.status(400).json({ success: false, message: 'Mobile number already exists.' });
        }
        user.Name = req.body.name;
        user.Mobile = req.body.mobilenum;
        user.DOB = req.body.birthdate;
        user.Age = req.body.age;
        user.Height = req.body.height;
        user.Weight = req.body.weight;
        user.Address = req.body.address;
        user.JoinDate = req.body.joindate;
        user.EndDate = req.body.enddate;
        user.FeesPaid = req.body.feespaid;
        user.FeesBalance = req.body.feesbalance;
        user.PT = req.body.pt;
        user.role = "member";
        user.Password = process.env.USERPASSWORD;
        const doc = await user.save();
        // console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error('Error adding member:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
})


// CRUD -  Read 
// http://localhost:8080/getMembers
server.get('/getMembers',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

// test update

server.put("/updateMember/:id", async (req, res) => {
    const id = req.params.id;
    const updateFields = {
        Name: req.body.Name,
        Mobile: req.body.Mobile, // Mobile number being updated
        DOB: req.body.DOB,
        Age: req.body.Age,
        Height: req.body.Height,
        Weight: req.body.Weight,
        PT: req.body.PT,
        Address: req.body.Address,
        JoinDate: req.body.JoinDate,
        EndDate: req.body.EndDate,
        FeesPaid: req.body.FeesPaid,
        FeesBalance: req.body.FeesBalance,
    }
    
    try {
        // Find the existing user being updated
        const existingUser = await User.findById(id);

        if (!existingUser) {
            return res.status(404).json({ success: false, message: "Document not found." });
        }

        // Check if another document already has the same mobile number
        const existingUserWithMobile = await User.findOne({
            Mobile: updateFields.Mobile,
            _id: { $ne: id }, // Exclude the current document from the query
        });

        if (existingUserWithMobile) {
            console.log("Mobile number already in use.")
            return res.status(400).json({ success: false, message: "Mobile number already in use." });
        }

        // Update the document
        existingUser.set(updateFields); // Update the fields
        const updatedUser = await existingUser.save(); // Save the updated document
        res.json({ success: true, message: "Data updated.", updatedUser });
    } catch (error) {
        console.error('Error updating member:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})



//CRUD - Delete
// http://localhost:8080/deleteMember/:id
server.delete("/deleteMember/:id", async(req,res)=>{
    const id = req.params.id;
    const data = await User.deleteOne({_id:id});
    res.send({success:true, message:"Data Deleted Successfully.",data : data})

})

// Middleware for token verification and role-based access
function authenticateToken(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token is missing." });
    }
  
    jwt.verify(token, process.env.TOKEN, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ success: false, message: "Invalid token." });
      }
  
      req.user = decoded;
      next();
    });
  }

// login
server.post("/searchMember",async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const mem = await User.findOne({ Mobile: mobile });
        if (mem) {
            if (mem.Password === password) {
                const role = mem.role;
                const token = jwt.sign({role},process.env.TOKEN,{expiresIn:'1d'});
                res.send({ 
                    success: true, 
                    message: "Member Exists.", 
                    role: mem.role, 
                    id: mem._id, 
                    Token: token 
                });
            } else {
                res.send({ success: false, message: "Password not matched." });
            }
        } else {
            // if entered wrong mobile number while log in
            res.send({ success: false, message: "You are not Registered" });
        }
    } catch (error) {
        console.error('Error searching member:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// server started on port
server.listen(process.env.PORT,()=>{
    console.log('server started');
})

