import React from "react"
import background from '../Assets/Poster_bg.svg'
import image from '../Assets/Poster_img.svg'
import msg from '../Assets/MessegeSymbol.svg'
import { Stepper, Step, Popover,PopoverHandler,PopoverContent, Button } from "@material-tailwind/react";
import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';

const Poster = ({handlePay}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isYesSelected, setIsYesSelected] = useState(false);
    const [showPop, setShowPop] = useState(false)
  
    const handleRadioChange = (e) => {
      const { value } = e.target;
      if (value === 'yes') {
        setIsYesSelected(true);
        setActiveStep(activeStep + 1);
        setShowPop(false)
      } else {
        setIsYesSelected(false);
        setShowPop(true)

      }
    };
  
    return(
        <section className="px-8 py-6 space-y-4 pt-20">
        <div className="w-full h-14 rounded-xl bg-secondary text-xs lg:text-xl flex  justify-center items-center p-4">As per RBI guidelines, activate your card within 1 st 30 days to avoid card closure.</div>
            <div className="flex flex-col md:flex-row rounded-xl h-80 -ml-20" >
                <div className="w-full md:w-2/5 relative">
                    <img src={background} className="w-full h-80" alt="Background" />
                    <div className="absolute top-0 left-1/4 transform -translate-x-1/4 text-center w-[70%]">
                        <img src={image} className="w-full h-44 mx-auto" alt="Overlay" />
                        <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-2xl text-white">
                        Activate your card to <br />
                        claim benefits worth <br />
                        <span className="text-secondary font-black">Rs 3,600</span>
                        </h2>
                    </div>
                </div>
            
                <div className="w-full md:w-3/5">
                    <div className="w-full py-5 px-8  text-center">
                        <div className="text-xl p-4">Unlock Offers worth Rs. 3,600</div>
                        <Stepper activeStep={activeStep}
                        lineClassName="#d9d9d"
                        activeLineClassName="bg-secondary"
                        >
                            <Step
                            className={`ring-2 z-0 ${activeStep >= 0 ? '!bg-primary ring-secondary ring-offset-2' : 'bg-gray-500 ring-gray-500 ring-offset-2'}`}
                            >
                            1
                            </Step>
                            <Step
                            className={`ring-2 z-0 ${activeStep >= 1 ? '!bg-primary ring-secondary ring-offset-2' : 'bg-gray-500 ring-gray-500 ring-offset-2'}`}
                            >
                            2
                            </Step>
                            <Step
                            className={`ring-2 z-0 ${activeStep >= 2 ? '!bg-primary ring-secondary ring-offset-2' : 'bg-gray-500 ring-gray-500 ring-offset-2'}`}
                            >
                            3
                            </Step>
                        </Stepper>

                        {activeStep === 0 && (
                            <div className="mt-16 border p-4 flex items-center">
                            <h2 className="font-bold text-xl mb-4 text-left">Have you set your PIN?</h2>
                            <div className="flex ml-auto items-center">
                                <label className="flex items-center mr-4">
                                <span className="mr-2 text-lg">No</span>
                                <input
                                    type="radio"
                                    name="terms"
                                    value="no"
                                    onChange={handleRadioChange}
                                    className="form-radio custom-radio"
                                />
                                </label>
                                <label className="flex items-center">
                                <span className="mr-2 text-lg">Yes</span>
                                <input
                                    type="radio"
                                    name="terms"
                                    value="yes"
                                    onChange={handleRadioChange}
                                    className="form-radio custom-radio"
                                />
                                </label>
                            </div>
                            </div>
                        )}

                        {activeStep === 1 && (
                            <div className="mt-16 border p-4 flex items-center">
                            <h2 className="font-bold text-xl mb-4 text-left">Have you set your transcript limit?</h2>
                            <div className="flex ml-auto items-center">
                                <label className="flex items-center mr-4">
                                <span className="mr-2 text-lg">No</span>
                                <input
                                    type="radio"
                                    name="secondStep"
                                    value="no"
                                    onChange={handleRadioChange}
                                    className="form-radio custom-radio"
                                />
                                </label>
                                <label className="flex items-center">
                                <span className="mr-2 text-lg">Yes</span>
                                <input
                                    type="radio"
                                    name="secondStep"
                                    value="yes"
                                    onChange={handleRadioChange}
                                    className="form-radio custom-radio"
                                />
                                </label>
                            </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div className="mt-16 border p-4 flex flex-col md:flex-row justify-between items-center">
                            <h2 className="font-bold text-xl mb-4 md:mb-0 text-left">
                              One last step to claim activation <br /> benefits: Do a transaction worth 1 RS
                            </h2>
                            <button className="px-10 py-2 bg-primary text-white rounded-xl" onClick={handlePay}>
                              Pay 1 Rs
                            </button>
                          </div>
                        )}
                
                    <Popover placement="bottom"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                    }}
                    >
                    <div className="relative z-20">
                    {(activeStep === 0 && showPop) &&
                    <PopoverHandler>
                        <Button variant="text" className="flex flex-row "><img src={msg} className="w-5"></img><span className="px-2">How to set PIN?</span></Button>
                    </PopoverHandler>
                    }
                    {(activeStep === 1 && showPop) &&
                    <PopoverHandler>
                        <Button variant="text" className="flex flex-row "><img src={msg} className="w-5"></img><span className="px-2">How to transcript limit?</span></Button>
                    </PopoverHandler>
                    }
                    <PopoverContent className="relative p-4">
                        <button
                        className="absolute top-2 right-2 p-1 text-gray-600 hover:text-gray-900"
                        onClick={() => console.log('Close popover')}
                        >
                        {/* <XMarkIcon className="h-5 w-5" /> */}
                        </button>
                        {activeStep === 0 &&
                        <>
                        <div className="mb-4">
                        How to set PIN?
                        </div>
                        <div className="space-y-2">
                            <ol class="list-decimal px-3">
                            <li>Generate PIN from nearest ATM</li>
                            <li>Login to internet banking and generate PIN</li>
                            <li>Send SMS and generate</li>
                            </ol>
                        {/* <Button variant="text" className="w-full border-none">
                            Option 1
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 2
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 3
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 4
                        </Button> */}
                        </div>
                        </>
                         }
                        {activeStep === 1 &&
                        <>
                        <div className="mb-4">
                        How to transcript limit?
                        </div>
                        <div className="space-y-2">
                        <Button variant="text" className="w-full border-none">
                            Option 1
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 2
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 3
                        </Button>
                        <Button variant="text" className="w-full border-none">
                            Option 4
                        </Button>
                        </div>
                        </>
                         }
                    </PopoverContent>
                    </div>    
                    
                    </Popover>
                </div>
            </div>
        </div>
    </section>
        
)}

export default Poster