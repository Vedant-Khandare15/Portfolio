import React from 'react'
import bannerImage from '../assets/img.jpg'
import bannerBackground from '../assets/banner_wallpaper.svg'



function Banner() {
  return (
    <div style={
      {
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }
     } className="main-container flex items-center ">
       <div  className="  mx-16 w-full flex text-white "> {/* text */}
        <div className="w-2/3  ">
        
        <h2 className='  text-2xl font-semibold'> I am a Frontend Deveopler </h2>

        <p className=''>
        As a beginner developer, I specialize in learning and applying fundamental programming concepts while honing my skills in web and software development. Eager to contribute to projects, I am proficient in basic languages and frameworks, with a growing understanding of industry best practices. Passionate about building innovative solutions and dedicated to continuous improvement in my craft.
       </p>


     <div className=" mt-2 cursor-pointer  icons-container flex space-x-5">
     <i class="  fa-brands text-2xl text-black  fa-linkedin"></i>
     <i class="  fa-brands text-2xl text-black fa-github-alt"></i>
     </div>
      
      

        <a className=" text-x px-2 py-2 bg-green-500 rounded-full shadow-lg" href="/contact">Contact Me</a>

        </div>

       </div>


       <div className='mt-8 w-full flex justify-center'>  {/* image */}
 <img className="rounded-full shadow w-80"  src={bannerImage} alt="" />
       </div>
    </div>
  )
}

export default Banner