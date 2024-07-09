import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase/setup";

const Login = ({closeModal}) => {
    
    const [email,setEmail] = useState(false)
    const[phone,setPhone] = useState("")
    const [user,setUser] = useState<any>(null)
    const [otp,setOtp] = useState("")
    
    const googleSigning = async() =>{
      try{
        await signInWithPopup(auth,googleProvider)
      }catch(err){
        console.error(err);
      }
      
    }

    const sendOtp = async() =>{
      try{
        const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
        const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
        setUser(confirmation)

      }catch(err){
        console.error(err)
      }
   
    }

    const verifyOtp = async() => { 
      try{
        await user.confirm(otp)
      }catch(err){
        console.error(err)
      }
      

    }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
              <h1 className="cursor-pointer" onClick={closeModal}>X</h1>
              <h3
                className=" ml-40 text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
               {phone? "Confirm your phone number":"Login or Signup"} 
              </h3>
            </div>
            <hr className="mt-4" />
            <h1 className=" ml-5 mt-4 font-semibold text-2xl">{!phone &&"Welcome To TravFomo"}</h1>
           {email?<input type="email" id="" className="h-12 ml-5 border border-spacing-1 text-gray-900 text-sm rounded-lg border-black block w-11/12 p-2.5 outline-none mt-2" placeholder="Email" required />
                : <PhoneInput
                    value={phone}
                    onChange={() => setPhone("+" + phone)}
                    placeholder="Phone number "
                    inputStyle={{ width: "463px", height: "50px", fontSize: "17px" }}
                    containerStyle={{ marginTop: "15px" ,marginLeft:"20px", }}
            />}
           {email && <input type="text" id="" className="h-12 ml-5 border border-spacing-1 text-gray-900 text-sm rounded-lg border-black block w-11/12 p-2.5 outline-none mt-2" placeholder="password" required />}
            <div className="mt-3 ml-5" id="recaptcha"></div>
            {phone && <button onClick={sendOtp} className="ml-5 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-11/12 mt-3">
              Send OTP
            </button>}
           {user && <input type="text" onChange={(e) => setOtp(e.target.value)} id="" className="h-12 ml-5 border border-spacing-1 text-gray-900 text-sm rounded-lg border-black block w-11/12 p-2.5 outline-none mt-2" placeholder="OTP" required />}
           {otp && <button onClick={verifyOtp} className="ml-5 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-11/12 mt-3">
              Verify OTP
            </button>}
            <h5 className="text-xs ml-5 mt-1">
              We'll call or text you to confirm your number. Standard message
              and data rates apply. privacy policy
            </h5>
            {!phone && <button className="ml-5 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-11/12 mt-3">
              {email?"Agree & Continue ":"Continue"}
              </button>}
            <h1 className="text-center mt-3">or</h1>
            {!phone &&<div className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-xl">
              <i className="fa-brands fa-facebook text-3xl ml-20"></i>
              <h1 className="ml-10">Continue with Facebook</h1>
            </div>}
            
            {!phone &&<div onClick={googleSigning} className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl">
              <i className="fa-brands fa-google text-3xl ml-20"></i>
              <h1 className="ml-10">Continue with Google</h1>
            </div>}

            {!email ? <div onClick={()=> setEmail(true)} className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl">
              <i className="fa-regular fa-envelope text-3xl ml-20"></i>
              <h1 className="ml-10">Continue with Gmail</h1>
            </div>
            
            :<div onClick={()=> setEmail(false)} className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl">
              <i className="fa-solid fa-mobile-screen-button text-3xl ml-20"></i>
              <h1 className="ml-10">Continue with phone</h1>
            </div>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
