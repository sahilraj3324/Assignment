import React, { useRef, useState } from "react";
import img from "../assets/noth.png"
import logo from "../assets/icon.svg"
import {useNavigate} from "react-router-dom"

const CreatePage = () => {
    const nav = useNavigate();

    const [avatarSelected, setAvatarSelected] = React.useState(false);
  const [location, setLocation] = React.useState("San Francisco");

  const handleNextClick = () => {
    // Handle the "Next" button click here
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };


  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
     .then((response) => response.text())
     .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
     .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className=" p-10 shadow-    ">
      <div className="mb-6 items-center justify-center  text-center">
      <div>
        <a href="/" className='text-xl font-semibold flex items-center space-x-3 text-black mb-10'>
                <img src={logo} alt="" className='w-10 inline-block items-center'/>
                <span className="text-black text-bold" >AniWorld </span>
            </a>
        </div>

{/* //uploadimage */}

        <div className="p-1 flex  justify-center w-50  h-full">
        
    <div className=" rounded-md p-3 flex flex-col ">
        <div className=" w-full">
        <h1 className="text-5xl font-bold mb-6 text-left  mt-10 ">Welcome! Let's create your profile</h1>
        <p className="text-gray-700 mb-8 text-left ">
        Let others get to know you better! You can do these later
      </p>
        <h2 className="text-2xl text-left font-bold mb-2">Add an avatar</h2>
        </div>
    
      <label htmlFor="image-upload-input" className="text-lg font-bold mb-10 cursor-pointer w-full text-left ">
        {image? image.name : ""}
      </label>
      <div onClick={handleClick} style={{ cursor: "pointer" }} className="flex space-x-30 ml-4">
        {image? (
          <img src={URL.createObjectURL(image)} alt="upload image" className="h-40 w- rounded-full" />
        ) : (
          <img src={img} alt="upload image" className="h- w-40 ml-9e border-2 border-dashed rounded-full" />
        )}
   <button className="">
        <input
          id="image-upload-input"
          type="file"
         
          onChange={handleImageChange}
          ref={hiddenFileInput}
          placeholder="file"
          className=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
        </button>
      </div>
      <div className="mb-6 w-full">
        <h2 className="text-2xl text-left mt-10 font-bold mb-5">Add your location</h2>
       
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          className="w-full p-2 border  rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Enter your location"
        />
      </div>
      <div className="flex items-start   w-full">
        <button
          type="button"
          className="bg-first hover:bg-green text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>{nav("/what")}}
        
        >
          Next
        </button>
      </div>
      
    </div>
  </div>

        <div className="mt-">
          
          
        </div>
      </div>
     
    </div>
  )
}

export default CreatePage
