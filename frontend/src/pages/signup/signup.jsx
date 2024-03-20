import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"


const signup = () => {

   const [inputs, setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
   })
   
    const {loading, signup} = useSignup();

   const genderCheckBox = (gender)=>{
          setInputs({...inputs, gender})
   }

   const handleSubmit = async(e) =>{
           e.preventDefault();
           await signup(inputs);
         // console.log(inputs)
   }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
     <div className='w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
      <span className='text-blue-500'>Chatting</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Full Name</span>
        </label>
      <input type="text" placeholder="Enter Your Name" 
      className=" input input-bordered input-accent w-full max-w-xs" 
      value={inputs.fullName}
      onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
      />
      </div>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>username</span>
        </label>
      <input type="text" placeholder="Enter username" 
      className=" input input-bordered input-accent w-full max-w-xs" 
      value={inputs.username}
      onChange={(e)=> setInputs({...inputs, username: e.target.value})}
      />
      </div>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
        </label>
      <input type="password" placeholder="Enter Password" 
      className=" input input-bordered input-accent w-full max-w-xs" 
      value={inputs.password}
      onChange={(e)=> setInputs({...inputs, password: e.target.value})}
      />
      </div>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Confirm Password</span>
        </label>
      <input type="password" placeholder="Confirm Password" 
      className=" input input-bordered input-accent w-full max-w-xs" 
      value={inputs.confirmPassword}
			onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
      />
      </div>
      <GenderCheckBox  checkBoxChange = {genderCheckBox} selectedGender={inputs.gender}/>
      <Link to='/login' className='text-sm hover:underline hover:text-blue-400 mt-2 '  >
        Already have an account?</Link>
         <div>
           <button className="btn btn-block btn-sm mt-2" disabled={loading}>
           {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
           </button>

           
         </div>
      </form>
     </div>
    </div>
  )
}

export default signup
