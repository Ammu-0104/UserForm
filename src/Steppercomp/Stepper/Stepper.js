// import React, { useState } from 'react';
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   Container,
//   Paper,
// } from '@material-ui/core';

// const steps = ['Step 1', 'Step 2', 'Step 3'];

// const VerticalStepperForm = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const getStepContent = (stepIndex) => {
//     switch (stepIndex) {
//       case 0:
//         return <div>Step 1 Content - Your form fields go here</div>;
//       case 1:
//         return <div>Step 2 Content - Your form fields go here</div>;
//       case 2:
//         return <div>Step 3 Content - Your form fields go here</div>;
//       default:
//         return 'Unknown stepIndex';
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Vertical Stepper Form
//         </Typography>
//         <Stepper activeStep={activeStep} orientation="vertical">
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <div>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography variant="h6" gutterBottom>
//                 All steps completed - Form submitted successfully!
//               </Typography>
//               <Button onClick={handleReset}>Reset</Button>
//             </div>
//           ) : (
//             <div>
//               <div>{getStepContent(activeStep)}</div>
//               <div style={{ marginTop: 20 }}>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   style={{ marginRight: 10 }}
//                 >
//                   Back
//                 </Button>
//                 <Button variant="contained" color="primary" onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </Paper>
//     </Container>
//   );
// };

// export default VerticalStepperForm;
