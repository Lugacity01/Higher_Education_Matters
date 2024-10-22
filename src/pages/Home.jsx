import HomePage from "@/components/Home/HomePage"
import hemmglogo from '../assets/icons/HEMMG_blue.png'
import continueArrow from '../assets/icons/continue_arrow.png'
import readmore from '../assets/icons/readmore.svg'
import secureEdu from '../assets/images/secure_education.png'
import blogacademicseuccess from '../assets/images/blog_academic_seuccess.png'
import blogonlinesecurity from '../assets/images/blog_online_security.png'
import blogrolesecurity from '../assets/images/blog_role_of_security.png'
import educationProgram from '../assets/images/education_program.png'
import educationProgram1 from '../assets/images/education_program1.png'
import educationProgram2 from '../assets/images/education_program2.png'
import explorebackground from '../assets/images/explorebackground.svg'
import blogerTeacher from '../assets/images/bloger_teacher.png'
import { Button } from "@/components/ui/button"
import ProgramCard from "@/components/Home/ProgramCard"
// import frequentlyasked from "@/components/Home/frequentlyasked"
import {BlogTips, StudentTestimonial, SupportServicesCard} from "@/components/Home/SupportServicesCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import FrequentlyAsked from "@/components/Home/frequentlyasked"

const services = [
  {
    imgSrc: educationProgram,
    title: "Student Counseling",
    description: "Providing emotional and academic support to help students overcome challenges and succeed."
  },
  {
    imgSrc: educationProgram1,
    title: "Safety and Security Workshops",
    description: "Educating students on personal safety, online security, and emergency preparedness."
  },
  {
    imgSrc: educationProgram2,
    title: "Online Resources",
    description: "Access to comprehensive materials and tools to support secure learning, including guidelines on cyber safety and mental health resources."
  }
];

const testimonials = [
  {
    description: "The scholarship advisors provided invaluable guidance and support. With their help, I secured multiple scholarships that covered my tuition and more.",
    testimonialImg: educationProgram1,
    testimonialName: "Alao Sherif",
    tesetimonialRecipient: "Scholarship 2020",
  },
  {
    description: "The scholarship advisors provided invaluable guidance and support. With their help, I secured multiple scholarships that covered my tuition and more.",
    testimonialImg: educationProgram1,
    testimonialName: "Alao Sherif",
    tesetimonialRecipient: "Scholarship 2020",
  },
  {
    description: "The scholarship advisors provided invaluable guidance and support. With their help, I secured multiple scholarships that covered my tuition and more.",
    testimonialImg: educationProgram1,
    testimonialName: "Alao Sherif",
    tesetimonialRecipient: "Scholarship 2020",
  },
  {
    description: "The scholarship advisors provided invaluable guidance and support. With their help, I secured multiple scholarships that covered my tuition and more.",
    testimonialImg: educationProgram1,
    testimonialName: "Safety and Security Workshops",
    tesetimonialRecipient: "Scholarship 2020",
  },
  {
    description: "The scholarship advisors provided invaluable guidance and support. With their help, I secured multiple scholarships that covered my tuition and more.",
    testimonialImg: educationProgram1,
    testimonialName: "Safety and Security Workshops",
    tesetimonialRecipient: "Scholarship 2020",
  },
]


const blogtips = [
  {
    imgSrc: blogacademicseuccess,
    adminType:' By Admin',
    content: 'Blog',
    blogTips: 'Top Tips for Online Security for Students',
    blogContent: 'Hear directly from our students about how a secure educational environment has positively impacted their lives and learning experiences.',
    readmore: 'Read More',
    readmoreImg: readmore,

  },
  {
    imgSrc: blogonlinesecurity,
    adminType:' By Admin',
    content: 'Blog',
    blogTips: 'Top Tips for Online Security for Students',
    blogContent: 'Hear directly from our students about how a secure educational environment has positively impacted their lives and learning experiences.',
    readmore: 'Read More',
    readmoreImg: readmore,

  },
  {
    imgSrc: blogrolesecurity,
    adminType:' By Admin',
    content: 'Blog',
    blogTips: 'Top Tips for Online Security for Students',
    blogContent: 'Hear directly from our students about how a secure educational environment has positively impacted their lives and learning experiences.',
    readmore: 'Read More',
    readmoreImg: readmore,
  },
]




const Home = () => {

  return (
    <>
      <HomePage/>

        <section className="px-8 py-4 transition-all duration-300 ease-linear  md:px-12 lg:py-[25.72px] 2xl:px-20">

          <div className="overflow-hidden py-4">
                <marquee >
                  <div className="flex justify-between ">
                      <img src={hemmglogo} alt="logo"  />
                      <img src={hemmglogo} alt="logo"  />
                      <img src={hemmglogo} alt="logo"  />
                      <img src={hemmglogo} alt="logo"  />
                  </div>
                </marquee>
          </div>

          
          {/* About Us */}
          <div className="py-4 flex flex-col gap-10 md:flex-row items-center justify-between">
              <div className="flex-shrink-0  mb-4 md:mb-0">
                <img src={secureEdu} alt="Secure Education" className="w-fit h-auto" />
              </div>

              <div className="space-y-4 ">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">About us</Button>
                
                <div className="mb-4 text-justify space-y-2">
                  <p className="text-[26px] md:text-[48px] font-semibold">Securing Education for All</p>
                  <p className="leading-6 md:leading-8 md:text-[18px] text-[14px] ">
                    At Higher Education Matter, we are passionate about creating safe, secure, and
                    empowering educational environments. Our mission is to ensure that every student has the opportunity to learn and grow in a space where they feel protected and supported. With a dedicated team of experts and years of experience, we’re proud to lead the way in establishing best practices for educational security.
                    Our vision is to inspire institutions around the world to prioritize safety and help students thrive academically and personally.
                  </p>
                </div>

                <Button className='mr-4 rounded-md bg-transparent hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#1A3855] hover:text-[#fff] hover:bg-[#1A3855]'>Learn More</Button>
              </div>
          </div>


          {/* Programs and Services */}
          <div className="py-16">

            <div className="">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">Programs and Services</Button>
            </div>

            <div className="py-4 grid grid-cols-12 gap-2 lg:gap-10 items-center">
              <div className="col-span-12 md:col-span-5">
                <p className="text-[26px] md:text-[48px] font-semibold">Educational Program</p>
              </div>
              
              <div className="col-span-12 md:col-span-7 ">
                <p className="md:text-[18px] leading-6 md:leading-8 text-[14px] text-justify">
                  Our diverse educational programs are designed to meet the needs of all students while ensuring a secure learning environment. From primary education to advanced courses, our programs are built on a foundation of safety and academic excellence.
                </p>
              </div>
            </div>

            <div className="lg:flex block gap-10 lg:space-y-0 space-y-20">

                <ProgramCard
                  imgSrc={educationProgram2}
                  title="Primary Education"
                  description="Focus on building a strong educational foundation in a ..."
                  arrow={continueArrow}
                />

                <ProgramCard
                  imgSrc={educationProgram1}
                  title="Secondary Education"
                  description="Preparing students for higher education and future caree..."
                  arrow={continueArrow}
                />

                <ProgramCard
                  imgSrc={educationProgram}
                  title="Advance Courses"
                  description="Specialized programs that provide in-depth knowledg..."
                  arrow={continueArrow}
                />

            </div>

          </div>

          {/* SUPPORT SERVICES */}
          <div className="py-16">

            <div className="">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">Support Services</Button>
            </div>

            <div className="py-4 grid grid-cols-12 gap-2 lg:gap-10 items-center">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[26px] md:text-[48px] leading-[2rem] md:leading-[3.5rem] font-semibold">Guiding Students Toward Safe and Successful Learning</p>
                  {/* style={{lineHeight: "1rem"}}  */}
                </div>
                
                <div className="col-span-12 md:col-span-5 ">
                  <p className="md:text-[18px] leading-6 md:leading-8 text-[14px] text-justify">
                    We offer a range of support services to help students navigate their educational journey safely and successfully.
                  </p>
                </div>
            </div>

            <div className="grid grid-cols-12 lg:gap-10 gap">
                {services.map((service, index) => (
                  <div key={index} className="col-span-12  lg:col-span-4">
                    <SupportServicesCard
                      imgSrc={service.imgSrc}
                      title={service.title}
                      description={service.description}
                    />
                  </div>
                ))}
            </div>

          </div>
         
          {/* STUDENT TESTIMONIAL */}
          <div className="py-10">

            <div className="max-w-[600px] mx-auto text-center space-y-3">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">Studeny Testimonial</Button>
                <p className="text-[26px] md:text-[48px] leading-[2rem] md:leading-[3.5rem] font-semibold">Don’t take our word for it —hear from our students</p>
                <p className="md:text-[18px] text-[14px]text-[#727272]">Hear directly from our students about how a secure educational environment has positively impacted their lives and learning experiences.</p>
            </div>


            <div className="py-5 gap-9 lg:grid lg:grid-cols-12">

                {testimonials.map((testimonial, index) =>(
                  <div key={index} className="col-span-12 lg:col-span-4">
                      <StudentTestimonial
                          description={testimonial.description}
                          testimonialImg={testimonial.testimonialImg} 
                          testimonialName={testimonial.testimonialName}
                          tesetimonialRecipient={testimonial.tesetimonialRecipient}
                          
                          />
                  </div>

                ))}
          </div>

          </div>


          {/* STUDENT TESTIMONIAL */}
          <div className="py-16">

            <div className="">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">Blog</Button>
            </div>

            <div className="py-4 grid grid-cols-12 gap-2 lg:gap-10 items-center">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[24px] md:text-[48px] leading-[2rem] md:leading-[3.5rem] font-semibold">Explore Our Latest Articles on Education Security</p>
                  {/* style={{lineHeight: "1rem"}}  */}
                </div>
                
                <div className="col-span-12 md:col-span-5 ">
                  <p className="md:text-[18px] leading-6 md:leading-8 text-[14px] text-justify">
                      Stay informed with our latest articles on securing education. Our blog covers a wide range of topics.
                  </p>
                </div>
            </div>

            <div className="grid grid-cols-12 lg:gap-10 ">
                {/* Left blog */} 
                <div className="relative col-span-12 lg:col-span-6">
                    <div className="">
                      <img src={blogerTeacher} alt="blogerTeacher" />
                    </div>

                    <div className="absolute flex justify-between lg:p-6 p-4 left-0 right-0 lg:top-[380px] top-[170px] lg:max-w-[100%] text-[#fff] bg-[#110f0f83] shadow-[0_0px_10px_rgba(0,0,0,0.5)]">
                        <span> <FontAwesomeIcon icon={faUser} /> By Admin</span>
                        <p className="bg-[#ffff] text-[#1A3855] rounded-full px-4 py-1 text-bold">Blog</p>
                    </div>

                    <div className="space-y-3 pt-4">
                        <p className="md:text-[14px] lg:text-[18px] font-bold text-[#1A3855]">Top Tips for Online Security for Students</p>
                        <p className="md:text-[18px] text-[14px]text-[#727272] text-justify">
                          Discover essential strategies for creating a safe and supportive learning environment. Our expert 
                          tips will guide you in fostering a space where students can thrive both academically and personally. 
                          Learn how to implement effective safety measures and promote a secure atmosphere for all.
                        </p>
                        <Link to="/readmore" className="flex"> 
                              <span className="md:text-[16px] text-[13px]text-[#727272] text-[#1A3855] font-bold">Read More</span> 
                              <img src={readmore} alt="Readmore" />
                          </Link>
                    </div>
                </div>


                {/* Right blog */}
                <div  className="col-span-12 space-y-5 lg:col-span-6">
                    {blogtips.map((tip, index) =>(
                      <div key={index} className="lg:grid lg:grid-cols-12 block gap-6 items-center">
                          <BlogTips
                            imgSrc= {tip.imgSrc}
                            adminType= {tip.adminType}
                            content= {tip.content}
                            blogTips= {tip.blogTips}
                            blogContent={tip.blogContent} 
                            readmore= {tip.readmore}
                            readmoreImg={tip.readmoreImg}
                          />
                      </div>
                      
                      ))}
                </div>
            </div>

          </div>


          {/* FAQ */}
          <div className="py-10">
            <div className=" mx-auto text-center space-y-3">
                <Button className="mr-4 rounded-md bg-[#1A3855] hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-[#1A3855] px-4 py-6 text-[#ffff] hover:text-[#1A3855] hover:bg-[#fff]">Frequently Asked Questions</Button>
                <p className="text-[20px] md:text-[48px] text-[#1A3855] leading-[1.5rem] md:leading-[3.5rem] font-semibold">
                    Find answers to common questions about our commitment to secure education.
                </p>
                {/* <p className="md:text-[18px] text-[14px]text-[#727272]">Hear directly from our students about how a secure educational environment has positively impacted their lives and learning experiences.</p> */}
            </div>

            {/* Accordion */}
            <div>
              <FrequentlyAsked/>
            </div>
          </div>


          <img src={explorebackground} alt="" />
        </section>
    </>
  )
}

export default Home