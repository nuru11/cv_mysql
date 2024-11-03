// import React, { useState, useEffect } from 'react';
// import Inputs from "../Components/Inputs/Inputs"

// const AgeCalculator = () => {
//   const [dob, setDob] = useState('');
//   const [age, setAge] = useState('');

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       return age - 1;
//     }
//     return age;
//   };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Age Calculator</h2>
//       <form>
//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <Inputs
//             type="date"
//             id="dob"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <Inputs
//             type="number"
//             id="age"
//             value={age}
//             readOnly
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgeCalculator;



///////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

// const AgeCalculator = () => {
//     const [dob, setDob] = useState('');
//     const [age, setAge] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [styles, setStyles] = useState({
//         styleOne: false,
//         styleTwo: false,
//         styleThree: false,
//         all: false,
//     });
//     const [dateOfIssue, setDateOfIssue] = useState('');
//     const [dateOfExpiry, setDateOfExpiry] = useState('');
//     const [expiryError, setExpiryError] = useState('');

//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();

//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age -= 1;
//         }
//         return age;
//     };

//     useEffect(() => {
//         if (dob) {
//             const calculatedAge = calculateAge(dob);
//             setAge(calculatedAge);

//             // Set error message if age is less than 19
//             if (calculatedAge < 19) {
//                 setErrorMessage('Applicant age should be more than 19');
//             } else {
//                 setErrorMessage(''); // Clear error message if age is valid
//             }
//         } else {
//             setAge('');
//             setErrorMessage(''); // Clear error message if no DOB is entered
//         }
//     }, [dob]);

//     useEffect(() => {
//         // Automatically set Date of Expiry to 5 years after Date of Issue
//         if (dateOfIssue) {
//             const issueDate = new Date(dateOfIssue);
//             const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
//             setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

//             // Check if expiry date has passed
//             if (expiryDate < new Date()) {
//                 setExpiryError('The expiry date has passed.');
//             } else {
//                 setExpiryError(''); // Clear error if valid
//             }
//         } else {
//             setDateOfExpiry('');
//             setExpiryError(''); // Clear error if no issue date is entered
//         }
//     }, [dateOfIssue]);

//     const handleStyleChange = (event) => {
//         const { name, checked } = event.target;

//         // If "All" checkbox is checked, set all styles to true
//         if (name === 'all') {
//             setStyles({
//                 styleOne: checked,
//                 styleTwo: checked,
//                 styleThree: checked,
//                 all: checked,
//             });
//         } else {
//             // If any style is unchecked, uncheck "All"
//             if (checked) {
//                 setStyles((prev) => ({ ...prev, [name]: checked }));
//             } else {
//                 setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
//             }
//         }
//     };

//     return (
//         <Container maxWidth="xs">
//             <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
//                 <Typography variant="h5" component="h2" align="center" gutterBottom>
//                     Age Calculator
//                 </Typography>
//                 <Grid container spacing={2} alignItems="center">
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Birth"
//                             type="date"
//                             fullWidth
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Age"
//                             type="number"
//                             fullWidth
//                             value={age}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Error Message */}
//                 {errorMessage && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {errorMessage}
//                     </Typography>
//                 )}

//                 {/* Date of Issue and Date of Expiry */}
//                 <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Issue"
//                             type="date"
//                             fullWidth
//                             value={dateOfIssue}
//                             onChange={(e) => setDateOfIssue(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Expiry"
//                             type="date"
//                             fullWidth
//                             value={dateOfExpiry}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Expiry Error Message */}
//                 {expiryError && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {expiryError}
//                     </Typography>
//                 )}

//                 {/* Checkboxes Section */}
//                 <Box sx={{ mt: 4 }}>
//                     <Typography variant="h6" gutterBottom>
//                         Select Styles
//                     </Typography>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.all}
//                                 onChange={handleStyleChange}
//                                 name="all"
//                             />
//                         }
//                         label="All"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleOne}
//                                 onChange={handleStyleChange}
//                                 name="styleOne"
//                             />
//                         }
//                         label="Style One"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleTwo}
//                                 onChange={handleStyleChange}
//                                 name="styleTwo"
//                             />
//                         }
//                         label="Style Two"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleThree}
//                                 onChange={handleStyleChange}
//                                 name="styleThree"
//                             />
//                         }
//                         label="Style Three"
//                     />
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default AgeCalculator;


//////////////////////////

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//     const [applicantImage, setApplicantImage] = useState(null);
//     const [applicantallImage, setApplicantallImage] = useState(null);
    
//     const [applicantpassportImage, setApplicantpassportImage] = useState(null);
//     const [applicantallpassportImage, setApplicantallpassportImage] = useState(null);
    
//     const [fullBodyImage, setFullBodyImage] = useState(null);
//     const [fullBodyallImage, setFullBodyallImage] = useState(null);
    
//     const [age, setAge] = useState('');
//     const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' }); // Example personal info
//     const applicantFileInputRef = useRef(null);
//     const passportFileInputRef = useRef(null);
//     const fullBodyFileInputRef = useRef(null);

//     const applicantssubmitImage = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
        
//         // Append images and personal info
//         formData.append("applicantimage", applicantImage);
//         formData.append("passportimage", applicantpassportImage);
//         formData.append("fullbodyimage", fullBodyImage);
//         formData.append("name", "personalInfo.name");
//         formData.append("age", 22);
        
//         const result = await axios.post(
//             "http://localhost:4000/applicantupload-image",
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );

//         // Reset state after submission
//         setApplicantImage(null);
//         setApplicantpassportImage(null);
//         setFullBodyImage(null);
//         setAge('');
//     };

//     const applicantonInputChange = (setImage) => (e) => {
//         const selectedFile = e.target.files[0];
//         setImage(selectedFile);
//     };

//     const applicantgetImage = async () => {
//         const result = await axios.get("http://localhost:4000/applicantget-image");
//         setApplicantallImage(result.data.data);
//     };

//     return (
//         <div className="image-upload">
//             <form onSubmit={applicantssubmitImage} className="file-upload-form">
//                 {/* Applicant Image Upload */}
//                 <label>
//                     <span>Applicant Personal Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantImage)}
//                         style={{ display: "none" }}
//                         ref={applicantFileInputRef}
//                     />
//                     <button type="button" onClick={() => applicantFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Passport Image Upload */}
//                 <label>
//                     <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantpassportImage)}
//                         style={{ display: "none" }}
//                         ref={passportFileInputRef}
//                     />
//                     <button type="button" onClick={() => passportFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Full Body Image Upload */}
//                 <label>
//                     <span>Full Body Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setFullBodyImage)}
//                         style={{ display: "none" }}
//                         ref={fullBodyFileInputRef}
//                     />
//                     <button type="button" onClick={() => fullBodyFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Age Input */}
//                 <label>
//                     <span>Age <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="number"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                         min="18"
//                         required
//                     />
//                 </label>

//                 <button type="submit">Submit</button>
//             </form>

//             {/* Image Preview (optional) */}
//             {applicantallImage && applicantallImage.length > 0 && (
//                 <div className="image-preview">
//                     <h4>Uploaded Images:</h4>
//                     {applicantallImage.map((image, index) => (
//                         <img
//                             key={index}
//                             className="input-personal-image"
//                             alt="Uploaded"
//                             src={`./applicantimage/${image.applicantImage}`} // Adjust path as necessary
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default YourComponent;



//////////////////////////////////


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);

//   const [image2, setImage2] = useState(null);
//   const [allImage2, setAllImage2] = useState(null);

 

//   useEffect(() => {
//     getImages(); // Fetch images when the component mounts
//   }, []);


//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/tget-images");
//       setAllImage(result.data.data); // Assuming your API returns an array of images
//     } catch (error) {
//       console.error(error);
//     }
//   };
// //   const submitImage = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("image", image);
// //     // formData.append("image2", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

// //   const submitImage2 = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     // formData.append("image", image);
// //     formData.append("imaget", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const onInputChange2 = (e) => {
//     console.log(e.target.files[0]);
//     setImage2(e.target.files[0]);
//   };

// //   const getImage = async () => {
// //     const result = await axios.get("http://localhost:4000/tget-image");
// //     console.log(result);
// //     setAllImage(result.data.data);
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={submitImage}>
// //         <input type="file" accept="image/*" onChange={onInputChange}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimagetest/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}

// // <form onSubmit={submitImage2}>
// //         <input type="file" accept="image/*" onChange={onInputChange2}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimgtwo/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}
// //     </div>
// //   );

// const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image) formData.append("image", image);
//     if (image2) formData.append("imaget", image2);
  
//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       // Handle successful upload...
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   return (
//     <div>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         <button type="submit">Submit</button>
//       </form>
//       {/* {allImage && allImage.map((data) => (
//         <img key={data.image} src={`http://localhost:4000/images/${data.image}`} height={100} width={100} alt="uploaded" />
//       ))} */}

// {/* {allImage == null
//         ? ""
//         : allImage.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })} */}




//     </div>
//   );
// }
// export default App;



/////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [allimages, setallImages] = useState([]);
//   const [formData, setFormData] = useState({
//     image: null,
//     image2: null,
//     name: "",
//     surname: "",
//     placeofbirth: "",
//     passportnum: "",
//     nationality: "",
//     martialstatus: "",
//     numberofchildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationattainment: "",
//     postappliedfor: "",
//     contractperiod: "",
//     arabicdegree: "",
//     englishdegree: "",
//     ownphonenum: "",
//     contactphonenum: "",
//     dateofbirth: "",
//     age: "",
//     dateofissue: "",
//     expireddate: "",
//     country: "",
//     position: "",
//     period: "",
//     babysitting: false,
//     cleaning: false,
//     washing: false,
//     cooking: false,
//     eldercare: false,
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: "",
//   });

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     if (formData.image) data.append("image", formData.image);
//     if (formData.image2) data.append("imaget", formData.image2);
//     Object.keys(formData).forEach((key) => {
//       if (key !== "image" && key !== "image2") {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />
//         <input type="text" name="placeofbirth" placeholder="Place of Birth" value={formData.placeofbirth} onChange={handleChange} />
//         <input type="text" name="passportnum" placeholder="Passport Number" value={formData.passportnum} onChange={handleChange} />
//         <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
//         <input type="text" name="martialstatus" placeholder="Marital Status" value={formData.martialstatus} onChange={handleChange} />
//         <input type="number" name="numberofchildren" placeholder="Number of Children" value={formData.numberofchildren} onChange={handleChange} />
//         <input type="text" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />
//         <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
//         <input type="number" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
//         <input type="text" name="educationattainment" placeholder="Education Attainment" value={formData.educationattainment} onChange={handleChange} />
//         <input type="text" name="postappliedfor" placeholder="Post Applied For" value={formData.postappliedfor} onChange={handleChange} />
//         <input type="text" name="contractperiod" placeholder="Contract Period" value={formData.contractperiod} onChange={handleChange} />
//         <input type="text" name="arabicdegree" placeholder="Arabic Degree" value={formData.arabicdegree} onChange={handleChange} />
//         <input type="text" name="englishdegree" placeholder="English Degree" value={formData.englishdegree} onChange={handleChange} />
//         <input type="text" name="ownphonenum" placeholder="Own Phone Number" value={formData.ownphonenum} onChange={handleChange} />
//         <input type="text" name="contactphonenum" placeholder="Contact Phone Number" value={formData.contactphonenum} onChange={handleChange} />
//         <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
//         <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
//         <input type="date" name="dateofissue" value={formData.dateofissue} onChange={handleChange} />
//         <input type="date" name="expireddate" value={formData.expireddate} onChange={handleChange} />
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
//         <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
//         <input type="text" name="period" placeholder="Period" value={formData.period} onChange={handleChange} />
        
//         {/* Checkboxes for additional services */}
//         <label>
//           Babysitting:
//           <input type="checkbox" name="babysitting" checked={formData.babysitting} onChange={handleChange} />
//         </label>
//         <label>
//           Cleaning:
//           <input type="checkbox" name="cleaning" checked={formData.cleaning} onChange={handleChange} />
//         </label>
//         <label>
//           Washing:
//           <input type="checkbox" name="washing" checked={formData.washing} onChange={handleChange} />
//         </label>
//         <label>
//           Cooking:
//           <input type="checkbox" name="cooking" checked={formData.cooking} onChange={handleChange} />
//         </label>
//         <label>
//           Eldercare:
//           <input type="checkbox" name="eldercare" checked={formData.eldercare} onChange={handleChange} />
//         </label>

//         <input type="number" name="monthlysalarySaudi" placeholder="Monthly Salary (Saudi)" value={formData.monthlysalarySaudi} onChange={handleChange} />
//         <input type="number" name="monthlysalaryJordan" placeholder="Monthly Salary (Jordan)" value={formData.monthlysalaryJordan} onChange={handleChange} />

//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image2: e.target.files[0] })} />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
//       {images.length === 0 ? (
//         <p>No images found.</p>
//       ) : (
//         images.map((data) => (
//           <div key={data._id}>
//             <img src={`http://localhost:4000/applicantimagetest/${data.image}`} height={100} width={100} alt="Uploaded" />
//             {data.image2 && (
//               <img src={`http://localhost:4000/applicantimgtwo/${data.image2}`} height={100} width={100} alt="Uploaded" />
//             )}
//             {/* Display additional fields */}
//             <p>Name: {data.name} {data.surname}</p>
//             <p>Nationality: {data.nationality}</p>
//             <p>Education: {data.educationattainment}</p>
//             {/* Add more fields as needed */}
//           </div>
//         ))
//       )}

// {images == null
//         ? ""
//         : images.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })}

//     </div>
//   );
// }

// export default App;




////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [imagePreview1, setImagePreview1] = useState(null);
//   const [imagePreview2, setImagePreview2] = useState(null);

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const onInputChange = (e) => {
//     const file = e.target.files[0];
//     setImage1(file);
//     if (file) {
//       setImagePreview1(URL.createObjectURL(file));
//     }
//   };

//   const onInputChange2 = (e) => {
//     const file = e.target.files[0];
//     setImage2(file);
//     if (file) {
//       setImagePreview2(URL.createObjectURL(file));
//     }
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image1) formData.append("image", image1);
//     if (image2) formData.append("imaget", image2);

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return ( 
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         {imagePreview1 && <img src={imagePreview1} alt="Preview 1" height={100} width={100} />}
        
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         {imagePreview2 && <img src={imagePreview2} alt="Preview 2" height={100} width={100} />}
        
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
  



///////////////////////////////////////////////////
// import React, { useState, useRef, useCallback } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button
// } from '@mui/material';

// import imagePlaceholder from "../image_placeholder/download.png"
// import { useDropzone } from 'react-dropzone';
// import Tesseract from 'tesseract.js';

// function App() {
//   const [passportData, setPassportData] = useState({
//     name: '',
//     surname: '',
//     nationality: '',
//     age: '',
//     passportNumber: '',
//     placeOfBirth: '',
//     birthDate: ''
//   });
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: "",
//     placeOfBirth: "",
//     passportNo: "", // Not required
//     nationality: "",
//     maritalStatus: "",
//     numberOfChildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationAttainment: "",
//     postAppliedFor: "",
//     contractPeriod: "",
//     arabicDegree: "",
//     englishDegree: "",
//     ownPhoneNumber: "",
//     contactPhoneNumber: "",
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: ""
//   });

//   const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);
//   const applicantpassportimagefileInputRef = useRef(null);
//   const [imageforpassportimage, setImageforpassportimage] = useState(null)



//   const [showModal, setShowModal] = useState(false);

//   const updateText = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];

//     const currState = { ...personalInfo };
//     if (Array.isArray(currState[targetStateField])) {
//       let arrIndex = e.target.id.split('-')[2];
//       currState[targetStateField][arrIndex][e.target.id.split('-')[3]] = e.target.value;
//     } else {
//       currState[targetStateField] = e.target.value;
//     }

//     setPersonalInfo(currState);
//   };

//   const addRecord = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];
//     const currState = { ...personalInfo };

//     let count = currState[targetStateField];
//     let newRecord = typeof count[0] === 'object' ? { ...count[0] } : '';

//     for (let item in newRecord) {
//       newRecord[item] = '';
//     }

//     count.push(newRecord);
//     currState[targetStateField] = count;

//     setPersonalInfo(currState);
//   };

//   const submit = () => {
//     setShowModal(true);
//   };

//   const confirmSubmission = async () => {
//     const { name, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

//     // Check if required fields are filled (passportNo is not required)
//     if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
//       toast.error("Please fill all the required fields.", {
//         position: "top-center"
//       });
//       return;
//     }

//     // Proceed with form submission logic here
//     // ...
//     toast.success("Form submitted successfully!");
//     setShowModal(false); // Close the modal after submission
//   };

//   const cancelSubmission = () => {
//     setShowModal(false); // Close the modal without submitting
//   };

//   const onInputChangeforpassportimagea = (e) => {
//     const file = e.target.files[0];
//     console.log(e.target.files[0]);
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file))
//     }
//   };

//   const onInputChangeforpassportimage = (e) => {
//     const file = e.target.files[0];
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file));
//         recognizeMRZa(file); // Call recognizeMRZ here to process the uploaded image
        

//       }
// };

// const recognizeMRZa = (file) => {
//   Tesseract.recognize(
//       file,
//       'eng',
//       {
//           logger: (m) => console.log(m), // Log progress
//       }
//   ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//   });
// };

//   /////////////////////////////////////////

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     recognizeMRZ(file);
//   }, []);

//   const recognizeMRZ = (file) => {
//     Tesseract.recognize(
//       file,
//       'eng',
//       {
//         logger: (m) => console.log(m), // Log progress
//       }
//     ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//     });
//   };

//   const extractPassportData = (text) => {
    



   



//     const lines = text.split('\n');
//     const mrzLines = lines.filter(line => line.match(/^[A-Z0-9<]+$/));

//     if (mrzLines.length < 2) return { name: '', surname: '', nationality: '', age: '', passportNumber: '', placeOfBirth: '', birthDate: '' };

//     const line1 = mrzLines[0]; // e.g., P<UTOEJANE<<<JOHN<<<<<<<<<<<<<<<<<<<<<<<<<
//     const line2 = mrzLines[1]; // e.g., 1234567890UTO7408129M1204159<<<<<<<<<<<<<<<<<

//     // Extracting name
//     const names = line1.substring(5, 44).replace(/</g, ' ').trim().split('<<');
//     const surname = names[0] ? names[0].trim() : ''; // Add check for surname
//     const name = names[1] ? names[1].trim() : ''; // Add check for given name

//     const nationality = line2.substring(10, 13) || '';
//     const passportNumber = line2.substring(0, 9) || '';

//     // Extracting birth date and gender
//     const birthDate = line2.substring(13, 19) || ''; // Birthdate in YYMMDD format
//     const gender = line2.charAt(20) || '';

//     // Calculate age
//     const year = birthDate ? parseInt(birthDate.substring(0, 2), 10) : 0;
//     const month = birthDate ? parseInt(birthDate.substring(2, 4), 10) : 0;
//     const day = birthDate ? parseInt(birthDate.substring(4, 6), 10) : 0;
//     const age = new Date().getFullYear() - (year < 50 ? 2000 + year : 1900 + year); // Basic age calculation

//     // Extracting place of birth
//     const placeOfBirth = line1.substring(44, 69).replace(/</g, ' ').trim() || '';


    

//     // Format birth date as YYYY-MM-DD for display
//     const formattedBirthDate = birthDate ? `20${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}` : '';


//     const startIndex = 5; // Starting at character 5
//     const firstEndIndex = line1.indexOf('<', startIndex); // Find the first '<' after the start index

//     const extractedTexts = [];

//     if (firstEndIndex !== -1) {
//       // First extraction
//       const firstResult = line1.substring(startIndex, firstEndIndex);
//       extractedTexts.push(firstResult);
      
//       // Skip two characters after the first result
//       const secondStartIndex = firstEndIndex + 2;
//       const secondEndIndex = line1.indexOf('<', secondStartIndex); // Find the next '<'

     
//       if (secondEndIndex !== -1) {
//         const secondResult = line1.substring(secondStartIndex, secondEndIndex);
//         extractedTexts.push(secondResult);
        
//         // Skip one character after the second result
//         const thirdStartIndex = secondEndIndex + 1;
//         const thirdEndIndex = line1.indexOf('<', thirdStartIndex); // Find the next '<'
         
        
//         if (thirdEndIndex !== -1) {
//           const thirdResult = line1.substring(thirdStartIndex, thirdEndIndex);
//           extractedTexts.push(thirdResult);
//           personalInfo.name = thirdResult;
//         } else {
//           extractedTexts.push(line1.substring(thirdStartIndex)); // If no '<' is found, return the rest of the string
//         }
//       }
//     }


   

//     return { name, surname, nationality, age, passportNumber, placeOfBirth, birthDate: formattedBirthDate };
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });


//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop a passport photo here, or click to select one</p>
//       </div>
//        <div className="image-upload">
           
//            <div className="image-preview">
//                <img
//                    className="input-personal-image"
//                    alt="Personal"
//                    src={
//                        applicantpassportimagePreview !== null
//                            ? applicantpassportimagePreview
//                            : imagePlaceholder
//                    }
//                    onClick={() => applicantpassportimagefileInputRef.current.click()}
//                />
//            </div>
//            <input
//                type="file"
//                accept="image/*"
//                onChange={onInputChangeforpassportimage}
//                style={{ display: "none" }}
//                ref={applicantpassportimagefileInputRef}
//            />
//            <label>
//                <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
//            </label>
          
       
//    </div>
//    <div className="image-preview">
//   <img
//     className={`input-personal-image ${imageforpassportimage ? 'red-filter' : ''}`} // Apply red filter if there's an image
//     alt="Personal"
//     src={
//       applicantpassportimagePreview !== null
//         ? applicantpassportimagePreview
//         : imagePlaceholder
//     }
//     onClick={() => applicantpassportimagefileInputRef.current.click()}
//   />
// </div>
//    {passportData && (
//         <div>
//           <h3>Extracted Passport Data:</h3>
//           <p><strong>Name:</strong> {passportData.name}</p>
//           <p><strong>Surname:</strong> {passportData.surname}</p>
//           <p><strong>Nationality:</strong> {passportData.nationality}</p>
//           <p><strong>Age:</strong> {passportData.age}</p>
//           <p><strong>Passport Number:</strong> {passportData.passportNumber}</p>
//           <p><strong>Place of Birth:</strong> {passportData.placeOfBirth}</p>
//           <p><strong>Birth Date:</strong> {passportData.birthDate}</p>
//         </div>
//       )}
      
//       <NameArea callback={updateText} info={personalInfo} newField={addRecord} />
//       <Button variant="contained" color="primary" onClick={submit}>Save</Button>
//       <ToastContainer position="top-center" />

//       <Dialog open={showModal} onClose={cancelSubmission}>
//         <DialogTitle>Confirm Submission</DialogTitle>
//         <DialogContent>
//           <p>Are you sure you want to submit the form?</p>
//         </DialogContent>
//         <DialogActions>
//           <Button 
//             onClick={cancelSubmission} 
//             style={{ backgroundColor: '#f44336', color: 'white' }} // Red for "Back"
//           >
//             Back
//           </Button>
//           <Button 
//             onClick={confirmSubmission} 
//             style={{ backgroundColor: '#4caf50', color: 'white' }} // Green for "Proceed anyway"
//           >
//             Proceed anyway
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default App;





////////////////////////////////  paste to multiple field

// import React, { useState } from "react";
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";

// function App() {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: '',
//     placeOfBirth: '',
//     passportNo: '',
//     nationality: '',
//     maritalStatus: '',
//     numberOfChildren: '',
//     religion: '',
//     weight: '',
//     height: '',
//     educationAttainment: '',
//     postAppliedFor: '',
//     contractPeriod: '',
//     arabicDegree: '',
//     englishDegree: '',
//     ownPhoneNumber: '',
//     contactPhoneNumber: '',
//     monthlysalarySaudi: '',
//     monthlysalaryJordan: '',
//     Qualifications: "",
//     job: ""
//   });

//   const updateText = (e) => {
//     const { id, value } = e.target;
//     const [targetStateArea, targetStateField] = id.split('-');

//     if (targetStateArea === 'personalInfo') {
//       setPersonalInfo((prevState) => ({
//         ...prevState,
//         [targetStateField]: value
//       }));
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault(); // Prevent the default paste behavior
//     const pastedData = e.clipboardData.getData('text/plain');

//     // Split the pasted data into lines
//     const lines = pastedData.split('\n').map(line => line.trim());

//     console.log(pastedData)
    
//     // Create a temporary object to hold extracted values
//     const newPersonalInfo = { ...personalInfo };

//     // Map the fields based on the pasted data
//     lines.forEach(line => {
//       if (line.includes('Surname')) {
//         newPersonalInfo.surname = line.split('Surname')[1].trim();
//       }
//       if (line.includes('Given Names')) {
//         newPersonalInfo.name = line.split('Given Names')[1].trim();
//       }
//       if (line.includes('Marital Status')) {
//         newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
//       }
//       if (line.includes('Religion')) {
//         newPersonalInfo.religion = line.split('Religion')[1].trim();
//       }
//       if (line.includes('Job')) {
//         newPersonalInfo.job = line.split('Job')[1].trim();
//       }
//       if (line.includes('Qualifications')) {
//         newPersonalInfo.Qualifications = line.split('Qualifications')[1].trim();
//       }
//       if (line.includes('Mobile Number')) {
//         newPersonalInfo.contactPhoneNumber = line.split('Mobile Number')[1].trim();
//       }
//       if (line.includes('Passport Number')) {
//         newPersonalInfo.passportNo = line.split('Passport Number')[1].trim();
//       }
//       if (line.includes('Passport Issue Place')) {
//         newPersonalInfo.placeOfBirth = line.split('Passport Issue Place')[1].trim();
//       }
//     });

//     // Update the state with the new values
//     setPersonalInfo(newPersonalInfo);
//   };

//   return (
//     <div>
//       <NameArea 
//         callback={updateText} 
//         info={personalInfo} 
//         onPaste={handlePaste} // Pass the handlePaste function to NameArea
//       />
//     </div>
//   );
// }

// export default App;


//////////////////


import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import NameArea from "../Components/Inputs/NameAreaInputs";
import {Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel, Button,  } from '@mui/material';


function App() {
  
  const initialPersonalInfo = {
    name: '',
    email: '',
    phone: '',
    about: '',
    surname: '',
    placeOfBirth: '',
    passportNo: '',
    nationality: '',
    maritalStatus: 'Marital Status',
    numberOfChildren: '',
    religion: 'Religion',
    weight: '',
    height: '',
    educationAttainment: '',
    postAppliedFor: '',
    contractPeriod: '',
    arabicDegree: '',
    englishDegree: '',
    ownPhoneNumber: '',
    contactPhoneNumber: '',
    monthlysalarySaudi: '',
    monthlysalaryJordan: '',
    Qualifications: "",
    job: ""
  };


  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

  const handleClearAll = () => {
    setPersonalInfo(initialPersonalInfo);
    
    setDob('');
    setAge('');
    setExpCheck({
      exp1: true,
      exp2: true,
      exp3: true,
      exp4: false,
      exp5: true,
      all: false,
    });
  };

  const updateText = (e) => {
        const { id, value } = e.target;
        const [targetStateArea, targetStateField] = id.split('-');
    
        if (targetStateArea === 'personalInfo') {
          setPersonalInfo((prevState) => ({
            ...prevState,
            [targetStateField]: value
          }));
        }
      };

      const [expcheck, setExpCheck] = useState({
        exp1: true,
        exp2: true,
        exp3: true,
        exp4: false,
        exp5: true,
        all: false,
      });

      const handleExpChange = (event) => {
        const { name, checked } = event.target;
    
        // If "All" checkbox is checked, set all styles to true
        if (name === 'all') {
            setExpCheck({
            exp1: checked,
            exp2: checked,
            exp3: checked,
            exp4: checked,
            exp5: checked,
            all: checked,
          });
        } else {
          // If any style is unchecked, uncheck "All"
          if (checked) {
            setExpCheck((prev) => ({ ...prev, [name]: checked }));
          } else {
            setExpCheck((prev) => ({ ...prev, [name]: checked, all: false }));
          }
        }
      };

      const [dob, setDob] = useState('');
      const [age, setAge] = useState('');


      const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age -= 1;
        }
        return age;
      };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent the default paste behavior
    const pastedData = e.clipboardData.getData('text/plain');

    // Split the pasted data into lines
    const lines = pastedData.split('\n').map(line => line.trim());

    console.log("lkdffffffff", pastedData)
    console.log("lllllllllllllll", lines)

    // personalInfo.surname = lines[lines.indexOf("Surname") + 1]
    personalInfo.maritalStatus = lines[lines.indexOf("Marital Status") + 1]

    // setDob(lines[lines.indexOf("Date of Birth") + 1])
    
    // Create a temporary object to hold extracted values
    const newPersonalInfo = { ...personalInfo };
    const kk = {...setDob}

    // Map the fields based on the pasted data
    lines.forEach(line => {
      
        personalInfo.surname = lines[2];
      if(line.includes("Surname")) {
        newPersonalInfo.surname = lines[lines.indexOf("Surname") + 1]
      }
      if (line.includes('Given Names')) {
        newPersonalInfo.name = lines[lines.indexOf("Given Names") + 1]
      
      }
      if (line.includes('Marital Status')) {
        // newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
        newPersonalInfo.maritalStatus = lines[lines.indexOf("Marital Status") + 1]
      }
      if (line.includes('Religion')) {
        newPersonalInfo.religion = lines[lines.indexOf("Religion") + 1]     
       }
      if (line.includes('Job')) {
        newPersonalInfo.postAppliedFor = lines[lines.indexOf("Job") + 1]  
      }
      if (line.includes('Qualifications')) {
        newPersonalInfo.educationAttainment = lines[lines.indexOf("Qualifications") + 1]  
      }
      if (line.includes('Mobile Number')) {
        newPersonalInfo.ownPhoneNumber = lines[lines.indexOf("Mobile Number") + 1]  
      }
      if (line.includes('Passport Number')) {
        newPersonalInfo.passportNo = lines[lines.indexOf("Passport Number") + 1]  
      }
      if (line.includes('Passport Issue Place')) {
        newPersonalInfo.about = lines[lines.indexOf("Passport Issue Place") + 1]  
      }
      if (line.includes('Passport Issue Place')) {
        newPersonalInfo.placeOfBirth = line.split('Passport Issue Place')[1].trim();
      } 
      if (line.includes("Date of Birth")) {
       setDob(lines[lines.indexOf("Date of Birth") + 1])
      }
    });

    // Update the state with the new values
    setPersonalInfo(newPersonalInfo);
  };

  return (
    <div onPaste={handlePaste} style={{ padding: '20px' }}>
      <div>{personalInfo.ownPhoneNumber} ssssssfff</div>
      <NameArea callback={updateText} info={personalInfo} />
      <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={age}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>


        <Box sx={{ boxShadow: 3, borderRadius: 2, mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Select EXPERIANCE
            </Typography>
            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.all}
                        onChange={handleExpChange}
                        name="all"
                    />
                }
                label="All"
            /> */}

           
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp1}
                        onChange={handleExpChange}
                        name="exp1"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="BABY SITTING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp2}
                        onChange={handleExpChange}
                        name="exp2"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="CLEANING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp3}
                        onChange={handleExpChange}
                        name="exp3"
                        // disabled={projectInfo.project[0].name === ""} // Disable if age is less than 18
                    />
                }
                label="WASHING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp4}
                        onChange={handleExpChange}
                        name="exp4"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="COOKING"
            />
          
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp5}
                        onChange={handleExpChange}
                        name="exp5"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="ELDER CARE"
            />
           
        </Box>
        
        <Button variant="contained" color="secondary" onClick={handleClearAll} style={{ marginTop: '20px' }}>
        Clear All
      </Button>
    </div>
  );
}

export default App;