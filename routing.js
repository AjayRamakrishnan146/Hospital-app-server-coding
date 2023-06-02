const express=require('express');
const router=express.Router();

const fs=require('fs');
let data=fs.readFileSync('data.json');
let hospital = JSON.parse(data);
// console.log(hospital);

router.get('/',(req,res)=>{
    res.send(hospital);
});

router.get('/',(req,res)=>{
    res.send(hospital);
});
router.post('/add',(req,res)=>{
    console.log(req.body);
    let h1 = { 
        name :"Govt.Hospital",
        count: 5000 ,
        location:'Trivandrum'
         
    };
    hospital.push(h1);
    res.send(hospital); 
    let data = JSON.stringify(hospital);
    fs.writeFileSync('data.json', data);
});
router.put('/update/:ind',(req,res)=>{
    const index= req.params.ind;
    console.log(index);
    res.send("Updated");

})
router.delete('/delete/:ind',(req,res)=>{
    const index= req.params.ind;
    console.log(index);
    // res.send("Deleted");
    if (index >= 0 && index < hospital.length) {
        hospital.splice(index, 1);
        res.send(hospital);
      }
      let data = JSON.stringify(hospital);
      fs.writeFileSync('data.json', data);
});
module.exports=router;

















// const express=require('express');
// const router=express.Router();

// const fs=require('fs');
// let data=fs.readFileSync('data.json');
// let hospital = JSON.parse(data);
// console.log(hospital);

// router.use(express.json());
// router.use(express.urlencoded({extended:true}));


// router.get('/',(req,res)=>{
//     res.send(hospital);
// });
// router.post('/add',(req,res)=>{
//     console.log(req.body);
//     let h1 = { 
//         name :"Govt.Hospital",
//         count: 5000 ,
//         location:'Trivandrum'
         
//     };
//     hospital.push(h1);
//     res.send(hospital); 
//     let data = JSON.stringify(hospital);
//     fs.writeFileSync('data.json', data);
// });
// router.put('/update/:ind',(req,res)=>{
//     const index= req.params.ind;
//     console.log(index);
//     res.send("Updated");

// })
// router.delete('/delete/:ind',(req,res)=>{
//     const index= req.params.ind;
//     console.log(index);
//     res.send("Deleted");
// });

// module.exports=router;