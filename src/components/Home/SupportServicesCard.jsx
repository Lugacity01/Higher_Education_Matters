import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


export const SupportServicesCard = ({imgSrc, title, description}) => {
  return (
    <div className="py-5 ">
        <div className="lg:py-8 lg:px-10 p-6 space-y-3 bg-[#fff] rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.5)]">
            <img src={imgSrc} alt={title} className="w-24 h-24 rounded-full"/>
            <div className=" space-y-2">
                <h1 className="md:text-[24px] flex justify-start text-[18px] text-[#1A3855] font-bold">{title}</h1>
                <p className="md:text-[18px] flex justify-start text-[14px] text-[#727272]  text-justify">{description}</p>
            </div>
        </div> 
    </div>
  )
}



export const StudentTestimonial = ({description, testimonialImg, testimonialName, tesetimonialRecipient }) => {
    return (
      <div className="py-5 ">
          <div className="lg:py-8 lg:px-10 p-6 col-span-4 leading-8 space-y-3 bg-[#fff] rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.5)]">
                  <div className=" lg:space-y-2">
                      <p className="md:text-[18px] flex justify-start text-[14px] text-justify lg:leading-[2rem] leading-[1.5rem]">
                          {description}
                      </p>
                  </div>
                  
                  <div className="grid grid-cols-12 items-center gap-2">
                      <div className="col-span-2">
                          <img src={testimonialImg} alt="" className="w-12 h-12 rounded-full"/>
                      </div>
                      
                      <div className="col-span-10 lg:leading-[1.5rem] leading-[1rem]">
                          <h1 className="md:text-[18px] text-[14px] font-bold">{testimonialName}</h1>
                          <p className="md:text-[18px] text-[14px]">{tesetimonialRecipient}</p>
                      </div>                      
                  </div>
              </div> 
      </div>
    )
  }



  export const BlogTips = ({imgSrc, adminType, content, blogTips, blogContent, readmore, readmoreImg }) =>{

    return (
        <>
            <div className="relative lg:col-span-6 ">
                <img src={imgSrc}  alt="blogerTeacher" className="w-full h-full" />

                <div className="absolute flex justify-between p-2 lg:p-3 left-0 right-0 lg:top-[135px] top-[155px] lg:max-w-[100%] text-[#fff] bg-[#110f0f83] shadow-[0_0px_10px_rgba(0,0,0,0.5)]">
                    <span> <FontAwesomeIcon icon={faUser} /> {adminType}</span>
                    <p className="bg-[#ffff] text-[#1A3855] rounded-full px-4 py-1 text-bold">{content}</p>
                </div>
            </div>

            <div className="col-span-6 ">
                <div className="space-y-2">
                    <p className="md:text-[14px] lg:text-[18px] font-bold text-[#1A3855]">{blogTips}</p>
                    <p className="md:text-[18px] text-[14px]text-[#727272] text-justify">{blogContent}</p>
                    <Link to="/readmore" className="flex"> 
                        <span className="md:text-[16px] text-[13px]text-[#727272] text-[#1A3855] font-bold">{readmore}</span> 
                        <img src={readmoreImg} alt="Readmore" />
                    </Link>
                </div>


            </div>
        
        </>
    
    )
  }