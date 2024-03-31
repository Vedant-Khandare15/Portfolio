import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg'


function Expertise() {
  return (
    <div className="">
        
        <h1 className=" mb-16 text-5xl font-bold  text-center">My Expertise</h1>

        {/*box section*/}
         <div 
         
         style={
          {
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }
         }

         className="box-container items-center flex py-16">
           <div className="flex justify-center">
            {/* text container */}
               <div className="w-2/3 text-center space-y-4">
               <h1 className="text-4xl font-bold">I Love These Technologies</h1>
                <p className="px-8"> I showcase mastery in Core and Advanced Java alongside proficiency in JavaScript and React.js. Additionally, I specialize in Frontend Development, adeptly utilizing Tailwind CSS, HTML5, and CSS3 to deliver visually stunning and user-friendly interfaces. </p>
                <button className="text-2xl px-4 py-2 bg-green-500 rounded-full shadow-lg"> Hire Me</button>
               </div>
        
         </div>
              <div>
                   {/*Skills Container */}
                  <div className="flex justify-center px-24 h-fit space-x-3 flex-wrap">
                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> Core Java</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> Advanced Java</p>
 
                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> JavaScript</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> React.js</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full">Tailwind CSS</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> HTML5 CSS3</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> Advanced Java Projects</p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> Frontend Development </p>

                  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full"> Deployment </p>
                  
                  </div>

              </div>
          </div>

    </div>
  )
}

export default Expertise