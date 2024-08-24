import React from 'react'
import './Images.css'
import GalleryData from './GalleryData'


const Images = () => {

    
    // console.log(imgBox)
    const openImg = (e) => {
      
      e.target.style.width = "800px";
      e.target.style.height = "600px"; 
      e.target.style.border = "2px solid white"
      console.log(e)
  }

  

  return (
    <div>
              <div className="container-fluid flex justify-center items-center flex-col bg-slate-700 w-full h-full">

        <h1 className='text-white text-5xl text-center p-4 font-bold'>React Gellary Image</h1>

        <div className="imgParent  flex flex-wrap justify-around items-center  w-11/12 h-5/6   ">
        {
          GalleryData.map((data,ind) => (
            <div key={ind} onClick={openImg}  className="imgBox img w-60 h-48 border-solid border-2 border-transparent  mb-[10px] ">
               
              
              <img 
            
            
              className=' img w-60 h-48 rounded-lg ' 
              src={data.img}  />
          </div>
          ))

          
        }

        </div>

        
        </div>
    </div>
  )
}

export default Images
 