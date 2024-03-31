import React from 'react';
import {useState} from 'react';
import bannerImage from "../assets/img1.avif";

function About() {
  const [data, setData] = useState({
    image:bannerImage,
    title:"Java Developer",
    desc1:`I am a final year Bachelor of Engineering student majoring in Electronics And Telecommunication Engineering. I possess expertise in Java programming, web development, and frameworks like React.js. During my internship at P.R. SOFTWARES, I successfully contributed to the "Bank Management System" project, demonstrating proficiency in Java programming and GUI design. My project portfolio includes a Java-based Chatting Application, Bank Management System, and Quiz Application, showcasing my diverse skill set. Proficient in tools like Apache Netbeans and GitHub, I am ready to make valuable contributions to software development projects.
    `,
    actionButton:{
      title:"Read More..",
      link:'/read more'
    }
  })
  return (
    <>
      <div className="main-container  border py-16">
        <h1 className="text-center pb-16 text-5xl  font-bold">About Me</h1>
        <div className="flex items-center">
          {/* image container */}
          <div className="w-1/2 flex justify-center">
            <img className="width-fit" src={data.image} alt="Vedant R. Khandare" />
          </div>
          
          {/* text container */}
          <div className="w-1/2  flex justify-start">
            <div className="space-y-5  w-2/3">
            <h1 className='text-4xl  font-semibold '>
              {data.title}
            </h1>
            <p>
              {data.desc1}
            </p>
            <button className='bg-green-500 px-3 py-2 text-2xl rounded-full shadow-lg  '>{data.actionButton.title}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
