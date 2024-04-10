import React, { useState }  from 'react'
import feature from "../assets/it1.png"
import fea from "../assets/it2.png"
import feat from "../assets/it3.png"
import f from "../assets/icon.svg"
import {useNavigate} from "react-router-dom"

const What = ({id, label, onChange }) => {

    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("account@refero.design");
    const [password, setPassword] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  return (
    <div className="">
         <div>
        <a href="/" className='text-xl font-semibold flex items-center space-x-3 text-black mt-10 ml-10'>
                <img src={f} alt="" className='w-10 inline-block items-center'/>
                <span className="text-black text-bold" >AniWorld </span>
            </a>
        </div>
    <div className="max-w-[1320px] mx-auto mt-20 m-20">
    <h1 className="text-4xl text-center p-5 ">What brings to you on Dribble ?</h1>
    <p className='text-center text-xl'>choose option which help u the more</p>
    </div>
    <div className='my-24 md:px-24 px-4 max-w-screen-2xl mx-auto'>
      <div className='flex flex-col lg:flex-row justify-betwee items-start gap-10'>
        
        <div className='w-full'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center 
             hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                    <img src={feature} alt='' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5 mb-2'>Conventient study schedule</h5>
                    <p className='text-xl'>what ever it takes to reach the top</p>
                    <div>
                    
                    <input
        type="checkbox"
        id={id}
        className=" h-5 w-full item-center mt-5 rounded-xl"
        onChange={onChange}
        
      />
      </div></div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center 
             hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                    <img src={fea} alt='' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5'>Conventient study schedule</h5>
                    <p>what ever it takes to reach the top</p><div>
                    
                    <input
        type="checkbox"
        id={id}
        className=" h-5 w-full item-center mt-5 "
        onChange={onChange}
        
      />
      </div></div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center  
             hover:-translate-y-4 transition-all duration-300 cursor-pointer border-blue'>
                <div>
                    <img src={feat} alt='' className='object-center' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5'>Conventient study schedule</h5>
                    
                    <p>what ever it takes to reach the top</p><div>
                    
                    <input
        type="checkbox"
        id={id}
        className=" h-5 w-full item-center mt-5 "
        onChange={onChange}
        
      />
      </div>
       
                </div>
            </div>
            </div>
        </div>
       
      </div>
       
    </div>
    <div className='w-full text-center mb-10'>

    <h2 className='text-2xl font-semibold'>anything else</h2>
    <button 
    onClick={()=>{nav("/home")}}
    className='bg-first text-2xl text-dark py-2 px-20 transition-all duration-300 rounded-xl hover:text-dark hover:bg-blue mt-5 mb-2'>finish</button>
    <p className='text-xl'>or press return</p>
    </div>
    
</div>
  );
}

export default What
