import React from 'react'
import Title from './Title'
import { TracingBeam } from '@/components/ui/education'

export default function Education() {
  const educations=[
    {
      title:"B.E. Electronics and Communication",
      describe:"I am currently pursuing IIIrd year of my B.E. in Electronics and Communication (ECE) from Muffakham Jah College of Engineering and Technology (MJCET), Hyderabad. My GPA for the first two years is 3.71.",
      grade:"GPA: 3.71"
    },
    {
      title:"Senior Secondary School",
      describe:"I did my Senior Secondary schooling from International Indian School, Jubail, Saudi Arabia. I scored 94.4% in my 12th grade.",
      grade:"Percentage: 94.4%"
    },
    {
      title:"Secondary School",
      describe:"I did my Secondary schooling from International Indian School, Jubail, Saudi Arabia. I scored 92.8% in my 10th grade.",
      grade:"Pecentage: 92.8%"
    },
  ]
  return (
    <div className='items-center justify-center flex flex-col mt-14'>
        <h1 className='font-bold group-hover:text-blue-700 transition-all text-3xl'>Education 📘</h1>
        <div className=' w-48 h-1 bg-blue-800 rounded-full'></div>
        
        <div className='pt-20 gap-5'>
        {educations.map((edu,index) =>{
            return(
                        <TracingBeam key={index}
                        >
                           <div className='space-y-5 ml-14 lg:ml-8 flex flex-col'>
                            <h1 className='text-2xl font-bold'>{edu.title}</h1>
                            <div className='flex items-center gap-5'>
                                <h1 className='text-lg font-bold text-cyan-500'>{edu.grade}</h1>
                            </div>
                            <p>{edu.describe}</p>
                            </div>
                            <br/><br/>
                        </TracingBeam>
                  )
                })}
          </div>    
        </div>
  )
}
