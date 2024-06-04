import { Stepper } from "@mui/material";
import basic from "../Content/basic";
import property from "../Content/property";
import photos from "../Content/photos";
import pricing from "../Content/pricing";
import others from "../Content/others";
import amenities from "../Content/amenities";
import locations from "../Content/locations";
import { useState } from "react";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const steps = [
      { label: 'Basic', component: basic },
      { label: 'Location', component: locations},
      { label: 'Property', component: property },
      { label: 'Photos', component: photos },
      { label: 'Pricing', component: pricing },
      { label: 'Others', component: others },
      { label: 'Amenities', component: amenities},
    ];
  
    const handleSelectStep = (stepIndex) => {
      setCurrentStep(stepIndex);
    };
  
    const CurrentStepComponent = steps[currentStep].component;
  
    return (
      <div style={{ display: 'flex' }}>
        {/* Sidebar Stepper */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onSelectStep={handleSelectStep}       
        />
        {/* Content */}
        <div style={{ marginLeft: '20px' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam alias cupiditate autem labore similique atque nemo explicabo ut cum numquam obcaecati minima, in, delectus facilis. Cupiditate, minima voluptas? Magnam, obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo commodi facilis error numquam sint vero? Totam velit voluptatem eos obcaecati, est adipisci corrupti ipsam iusto culpa labore nihil blanditiis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, doloremque delectus. Quibusdam aspernatur qui eum odio debitis praesentium facere alias, optio corrupti? Tempore delectus, nam sed quidem hic voluptates nemo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum unde in totam quas molestias maiores nisi error odio minima blanditiis, itaque voluptates ullam hic. Ab, porro magnam! Obcaecati, doloribus!
          <CurrentStepComponent />
        </div>
      </div>
    );
  };
  
  export default MultiStepForm;