// // const express = require("express");
// // const path = require("path");
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv");

// // const multer = require("multer"); 
// // const router = express.Router();


// // require("../models/testapplicantmultipleimage.js"); 
// // const TestApplicantimg = mongoose.model("TestApplicantimg");










// // router.get("/tget-images", async (req, res) => {
// //     try {
// //       const images = await TestApplicantimg.find(); // Retrieve all documents from the collection
// //       res.json({ status: "ok", data: images });
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ status: "error", message: error.message });
// //     }
// //   });
   
  
// //   const TestMulstorage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, path.join(__dirname, "../../cv-builder-1-main/src/applicantimagetest/"));
// //     },
// //     filename: function (req, file, cb) {
// //       const uniqueSuffix = Date.now() + '-' + file.originalname;
// //       cb(null, uniqueSuffix);
// //     }, 
// //   });
  
// //   const testMulupload = multer({ storage: TestMulstorage });
  
// //   router.post("/tupload-image", testMulupload.fields([{ name: 'personalimage' }, { name: 'fullbodyimage' }, { name: 'passportimage' }, { name: 'video' }]), async (req, res) => {
    
// //     let experience;
// //     if (req.body.experience) {
// //       experience = JSON.parse(req.body.experience);
// //     } else {
// //       experience = []; 
// //     }



// //    console.log(req.body.country + " nnnnnnnnnnnnnn")
   
    
// //     try { 
// //       const imageNames = {
// //         personalimage: req.files['personalimage'] ? req.files['personalimage'][0].filename : null,
// //         fullbodyimage: req.files['fullbodyimage'] ? req.files['fullbodyimage'][0].filename : null,
// //         passportimage: req.files['passportimage'] ? req.files['passportimage'][0].filename : null,
// //         video: req.files['video'] ? req.files['video'][0].filename : null,
// //         name: req.body.name,
// //         surname: req.body.surname,
// //         middleName: req.body.middleName,
// //         applicationNo: req.body.applicationNo,
// //         sex: req.body.sex, 
// //         placeofbirth: req.body.placeofbirth, 
// //         passportIssuePlace: req.body.passportIssuePlace,
// //         passportnum: req.body.passportnum,
// //         nationality: req.body.nationality, 
// //         martialstatus: req.body.martialstatus,
// //         numberofchildren: req.body.numberofchildren,
// //         religion: req.body.religion,
// //         weight: req.body.weight,
// //         height: req.body.height,
// //         educationattainment: req.body.educationattainment,
// //         postappliedfor: req.body.postappliedfor,
// //         contractperiod: req.body.contractperiod, 
// //         arabicdegree: req.body.arabicdegree,
// //         englishdegree: req.body.englishdegree,
// //         ownphonenum: req.body.ownphonenum,
// //         contactphonenum: req.body.contactphonenum,
// //         dateofbirth: req.body.dateofbirth,
// //         age: req.body.age, 
// //         dateofissue: req.body.dateofissue,
// //         expireddate: req.body.expireddate,
// //         country: req.body.country,
// //         position: req.body.position,
// //         period: req.body.period,
// //         babysitting: req.body.babysitting === "true" ? true : false,
// //         cleaning: req.body.cleaning === "true" ? true : false,
// //         washing: req.body.washing === "true" ? true : false, 
// //         cooking: req.body.cooking === "true" ? true : false,
// //         eldercare: req.body.eldercare === "true" ? true : false,
// //         monthlysalarySaudi: req.body.monthlysalarySaudi,
// //         monthlysalaryJordan: req.body.monthlysalaryJordan,
// //         experience: experience,



// //         visaNo: req.body.visaNo,
// //         sponsorId: req.body.sponsorId,
// //         sponsorAddress: req.body.sponsorAddress,
// //         nationalId: req.body.nationalId,
// //         email: req.body.email,
// //         sponsorName: req.body.sponsorName,
// //         sponsorPhone: req.body.sponsorPhone,
// //         agent: req.body.agent,
// //         sponsorArabic: req.body.sponsorArabic,
// //         visaType: req.body.visaType,
// //         fileNo: req.body.fileNo, 
// //         wakala: req.body.wakala,
// //         signedUp: req.body.signedUp,
// //         biometricId: req.body.biometricId,
// //         contract: req.body.contract,
// //         stickerVisa: req.body.stickerVisa,
// //         currentNationality: req.body.currentNationality,
// //         laborId: req.body.laborId,

 
  
// //       };
  
// //       console.log(req.body.babysitting  + " kkkkkkk")
  
// //       const newImageEntry = new TestApplicantimg(imageNames);
// //       await newImageEntry.save();
  
// //       console.log(imageNames);
// //       res.json({ status: "ok", images: imageNames });
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ status: "error", message: error.message });
// //     }
// //   });
  
  
// //   router.get("/tget-images", async (req, res) => {
// //     try {
// //       const images = await TestApplicantimg.find(); // Retrieve all documents from the collection
// //       res.json({ status: "ok", data: images });
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ status: "error", message: error.message });
// //     }
// //   });
  
// //   router.delete('/tget-images/:id', async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //       const result = await TestApplicantimg.findByIdAndDelete(id);
// //       if (!result) {
// //         return res.status(404).json({ status: 'error', message: 'Image not found' });
// //       }
// //       res.json({ status: 'ok', message: 'Image deleted successfully' });
// //     } catch (error) {
// //       console.error('Error deleting image:', error);
// //       res.status(500).json({ status: 'error', message: 'Internal server error' });
// //     }
// //   });
  
// //   router.put('/tget-images/:id', async (req, res) => {
// //     const { id } = req.params;
// //     const updateData = req.body; // Expecting the updated data in the request body 
  
// //     try {
// //       const result = await TestApplicantimg.findByIdAndUpdate(id, updateData, { new: true });
// //       if (!result) {
// //         return res.status(404).json({ status: 'error', message: 'Image not found' });
// //       }
// //       res.json({ status: 'ok', data: result });
// //     } catch (error) {
// //       console.error('Error updating image:', error);
// //       res.status(500).json({ status: 'error', message: 'Internal server error' });
// //     }
// //   });
  
  
// //   // router.get("/tget-images/:id", async (req, res) => {
// //   //   try {
// //   //     const id = req.params.id;
// //   //     const imageEntry = await TestApplicantimg.findById(id);
      
// //   //     console.log("Fetching details for ID:", id);
// //   //     if (!imageEntry) {
// //   //       return res.status(404).json({ status: "error", message: "Image not found" });
// //   //     }
  
// //   //     res.json({ status: "ok", data: imageEntry });
// //   //   } catch (error) { 
// //   //     console.error(error);
// //   //     res.status(500).json({ status: "error", message: error.message });
// //   //   }
// //   // });

 
// //   router.get("/detail/tget-images", async (req, res) => { 
// //     const { createdAt } = req.query;

// //     console.log("Fetching details for createdAt:", createdAt);

// //     try {
// //         // Ensure createdAt is a valid date string 
// //         const date = new Date(createdAt);
// //         if (isNaN(date.getTime())) {
// //             return res.status(400).json({ status: "error", message: "Invalid date format" });
// //         }

// //         // Fetch the image entry that matches the exact createdAt date
// //         const imageEntry = await TestApplicantimg.findOne({ createdAt: new Date(createdAt) });

// //         if (!imageEntry) {
// //             return res.status(404).json({ status: "error", message: "Image not found" });
// //         }

// //         res.json({ status: "ok", data: imageEntry });
// //     } catch (error) {
// //         console.error("Error fetching image:", error);
// //         res.status(500).json({ status: "error", message: error.message });
// //     }
// // });


// //   module.exports = router;


// /////////////////////////////////////////////////////////////////////


// const express = require("express");
// const path = require("path");
// const dotenv = require("dotenv");
// const multer = require("multer");
// const { TestApplicantimg } = require("../models/testapplicantmultipleimage"); // Adjust import based on your Sequelize model setup
// const router = express.Router();

// dotenv.config();

// // Configure storage for multer
// const TestMulstorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../../cv-builder-1-main/src/applicantimagetest/"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// const testMulupload = multer({ storage: TestMulstorage });

// // Get all images
// router.get("/tget-images", async (req, res) => {
//   try {
//     const images = await TestApplicantimg.findAll(); // Retrieve all records from the TestApplicantimg table
//     res.json({ status: "ok", data: images });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Upload new image
// router.post("/tupload-image", testMulupload.fields([{ name: 'personalimage' }, { name: 'fullbodyimage' }, { name: 'passportimage' }, { name: 'video' }]), async (req, res) => {
//   let experience;
//   if (req.body.experience) {
//     experience = JSON.parse(req.body.experience);
//   } else {
//     experience = [];
//   }

//   try {
//     const imageNames = {
//       personalimage: req.files['personalimage'] ? req.files['personalimage'][0].filename : null,
//       fullbodyimage: req.files['fullbodyimage'] ? req.files['fullbodyimage'][0].filename : null,
//       passportimage: req.files['passportimage'] ? req.files['passportimage'][0].filename : null,
//       video: req.files['video'] ? req.files['video'][0].filename : null,
//       name: req.body.name,
//       surname: req.body.surname,
//       middleName: req.body.middleName,
//       applicationNo: req.body.applicationNo,
//       sex: req.body.sex,
//       placeofbirth: req.body.placeofbirth,
//       passportIssuePlace: req.body.passportIssuePlace,
//       passportnum: req.body.passportnum,
//       nationality: req.body.nationality,
//       martialstatus: req.body.martialstatus,
//       numberofchildren: req.body.numberofchildren,
//       religion: req.body.religion,
//       weight: req.body.weight,
//       height: req.body.height,
//       educationattainment: req.body.educationattainment,
//       postappliedfor: req.body.postappliedfor,
//       contractperiod: req.body.contractperiod,
//       arabicdegree: req.body.arabicdegree,
//       englishdegree: req.body.englishdegree,
//       ownphonenum: req.body.ownphonenum,
//       contactphonenum: req.body.contactphonenum,
//       dateofbirth: req.body.dateofbirth,
//       age: req.body.age,
//       dateofissue: req.body.dateofissue,
//       expireddate: req.body.expireddate,
//       country: req.body.country,
//       position: req.body.position,
//       period: req.body.period,
//       babysitting: req.body.babysitting === "true",
//       cleaning: req.body.cleaning === "true",
//       washing: req.body.washing === "true",
//       cooking: req.body.cooking === "true",
//       eldercare: req.body.eldercare === "true",
//       monthlysalarySaudi: req.body.monthlysalarySaudi,
//       monthlysalaryJordan: req.body.monthlysalaryJordan,
//       experience: experience,
//       visaNo: req.body.visaNo,
//       sponsorId: req.body.sponsorId,
//       sponsorAddress: req.body.sponsorAddress,
//       nationalId: req.body.nationalId,
//       email: req.body.email,
//       sponsorName: req.body.sponsorName,
//       sponsorPhone: req.body.sponsorPhone,
//       agent: req.body.agent,
//       sponsorArabic: req.body.sponsorArabic,
//       visaType: req.body.visaType,
//       fileNo: req.body.fileNo,
//       wakala: req.body.wakala,
//       signedUp: req.body.signedUp,
//       biometricId: req.body.biometricId,
//       contract: req.body.contract,
//       stickerVisa: req.body.stickerVisa,
//       currentNationality: req.body.currentNationality,
//       laborId: req.body.laborId,
//     };

//     const newImageEntry = await TestApplicantimg.create(imageNames); // Using Sequelize to create a new entry
//     res.json({ status: "ok", images: newImageEntry });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Delete an image by ID
// router.delete('/tget-images/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await TestApplicantimg.destroy({ where: { id } }); // Using Sequelize to delete the entry
//     if (!result) {
//       return res.status(404).json({ status: 'error', message: 'Image not found' });
//     }
//     res.json({ status: 'ok', message: 'Image deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting image:', error);
//     res.status(500).json({ status: 'error', message: 'Internal server error' });
//   }
// });

// // Update an image by ID
// router.put('/tget-images/:id', async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body; // Expecting the updated data in the request body 

//   try {
//     const [updated] = await TestApplicantimg.update(updateData, { where: { id } }); // Using Sequelize to update the entry
//     if (!updated) {
//       return res.status(404).json({ status: 'error', message: 'Image not found' });
//     }
//     const updatedImage = await TestApplicantimg.findByPk(id); // Retrieve the updated image
//     res.json({ status: 'ok', data: updatedImage });
//   } catch (error) {
//     console.error('Error updating image:', error);
//     res.status(500).json({ status: 'error', message: 'Internal server error' });
//   }
// });

// // Get details of an image by createdAt date
// router.get("/detail/tget-images", async (req, res) => { 
//   const { createdAt } = req.query;

//   try {
//     const date = new Date(createdAt);
//     if (isNaN(date.getTime())) {
//       return res.status(400).json({ status: "error", message: "Invalid date format" });
//     }

//     const imageEntry = await TestApplicantimg.findOne({ where: { createdAt: date } }); // Adjusting to use Sequelize
//     if (!imageEntry) {
//       return res.status(404).json({ status: "error", message: "Image not found" });
//     }

//     res.json({ status: "ok", data: imageEntry });
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// module.exports = router;





/////////////////////////////////////////////////////////////


const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { TestApplicantimg } = require("../models/testapplicantmultipleimage");
const mysql = require('mysql2');
const cors = require('cors');
 

const router = express.Router();

const pool = mysql.createPool({
  host: "localhost", 
  user: "root",
  password: "",
  database: "cv"
}).promise();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../cv-builder-1-main/src/applicantimagetest/");
    
    // Check if directory exists, create it if not
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  }, 
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// Routes
router.get("/tt", async (req, res) => {
  try {
    const images = await TestApplicantimg.findAll(); 
    res.json({ status: "ok", data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});


// router.get("/tt", async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM testapplicantimg");
//     // res.json({ status: "ok", data: rows });
//     res.json(rows)
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });


router.post("/tupload-image", upload.fields([
  { name: 'personalimage' }, 
  { name: 'fullbodyimage' }, 
  { name: 'passportimage' }, 
  { name: 'video' }
]), async (req, res) => {
  // let experience = [];
  // if (req.body.experience) {
  //   experience = JSON.parse(req.body.experience);
  // }

  try {
    const newImageEntry = {
      personalimage: req.files['personalimage'] ? req.files['personalimage'][0].filename : null,
      fullbodyimage: req.files['fullbodyimage'] ? req.files['fullbodyimage'][0].filename : null,
      passportimage: req.files['passportimage'] ? req.files['passportimage'][0].filename : null,
      video: req.files['video'] ? req.files['video'][0].filename : null,
      // Map other fields similarly...
      name: req.body.name,
      surname: req.body.surname,
      middleName: req.body.middleName,
      applicationNo: req.body.applicationNo,
      sex: req.body.sex, 
      placeofbirth: req.body.placeofbirth, 
      passportIssuePlace: req.body.passportIssuePlace,
      passportnum: req.body.passportnum,
      nationality: req.body.nationality, 
      martialstatus: req.body.martialstatus,
      numberofchildren: req.body.numberofchildren,
      religion: req.body.religion,
      weight: req.body.weight,
      height: req.body.height,
      educationattainment: req.body.educationattainment,
      postappliedfor: req.body.postappliedfor,
      contractperiod: req.body.contractperiod, 
      arabicdegree: req.body.arabicdegree,
      englishdegree: req.body.englishdegree,
      ownphonenum: req.body.ownphonenum,
      contactphonenum: req.body.contactphonenum,
      dateofbirth: req.body.dateofbirth,
      age: req.body.age, 
      dateofissue: req.body.dateofissue,
      expireddate: req.body.expireddate,
      country: req.body.country,
      position: req.body.position,
      period: req.body.period,
      babysitting: req.body.babysitting === "true",
      cleaning: req.body.cleaning === "true",
      washing: req.body.washing === "true", 
      cooking: req.body.cooking === "true",
      eldercare: req.body.eldercare === "true",
      monthlysalarySaudi: req.body.monthlysalarySaudi,
      monthlysalaryJordan: req.body.monthlysalaryJordan,
      experience: req.body.experience,
      visaNo: req.body.visaNo,
      sponsorId: req.body.sponsorId,
      sponsorAddress: req.body.sponsorAddress,
      nationalId: req.body.nationalId,
      email: req.body.email,
      sponsorName: req.body.sponsorName,
      sponsorPhone: req.body.sponsorPhone,
      agent: req.body.agent,
      sponsorArabic: req.body.sponsorArabic,
      visaType: req.body.visaType,
      fileNo: req.body.fileNo, 
      wakala: req.body.wakala,
      signedUp: req.body.signedUp,
      biometricId: req.body.biometricId,
      contract: req.body.contract,
      stickerVisa: req.body.stickerVisa,
      currentNationality: req.body.currentNationality,
      laborId: req.body.laborId,
    };

    const createdImage = await TestApplicantimg.create(newImageEntry);
    res.json({ status: "ok", images: createdImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/tt", async (req, res) => {
  try {
    const images = await TestApplicantimg.findAll(); 
    res.json({ status: "ok", data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});


router.delete('/tget-images/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TestApplicantimg.destroy({ where: { id } });
    if (!result) {
      return res.status(404).json({ status: 'error', message: 'Image not found' });
    }
    res.json({ status: 'ok', message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

router.put('/tget-images/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const [updated] = await TestApplicantimg.update(updateData, { where: { id } });
    if (!updated) {
      return res.status(404).json({ status: 'error', message: 'Image not found' });
    }
    const updatedImage = await TestApplicantimg.findByPk(id);
    res.json({ status: 'ok', data: updatedImage });
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

router.get("/detail/tget-images", async (req, res) => {
  const { createdAt } = req.query;

  try {
    const date = new Date(createdAt);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ status: "error", message: "Invalid date format" });
    }

    const imageEntry = await TestApplicantimg.findOne({ where: { createdAt: date } });
    if (!imageEntry) {
      return res.status(404).json({ status: "error", message: "Image not found" });
    }

    res.json({ status: "ok", data: imageEntry });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ status: "error", message: error.message }); 
  }
});

module.exports = router;
