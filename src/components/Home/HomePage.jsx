
import ImgBg from "../../assets/images/background_image.png";
import ImageHero from "../ImageHero";
import { Button } from "../ui/button";


const HomePage = () => {
  return (
      <ImageHero imageSrc={ImgBg} className={"items-center "}>

        <div className="text-center max-w-[750px] mx-auto lg:space-y-5 space-y-5">
            <p className="mt-4 text-[12px] text-[#1A3855] font-[600]  lg:text-[16px] bg-[#fff] p-2 rounded-full max-w-[300px] mx-auto">
              Securing Education for Every Student
            </p>
            <h1 className="lg:text-[70px] text-[30px] leading-[2rem] lg:leading-[4.5rem] font-bold text-white ">
                Secure Your Future with Quality Education
            </h1>
            <p className="mt-2 text-[12px] text-gray-300 md:text-lg">
                At Higher Education Matters, we believe that a secure and safe educational
                environment is the foundation for successful learning. Our commitment to
                security in education ensures that every student can focus on their studies
                without fear or distraction.
            </p>
            <div className="mt-6 space-x-6">
              <Button className='mr-4 rounded-md bg-transparent hover:border-[#1A3855] transition-all duration-600 ease-linear  border border-white px-4 py-6 text-white hover:bg-[#1A3855]'>
                  Explore our Programs
              </Button>

              <Button className='rounded-md border bg-white border-white px-4 py-6 text-[#1A3855] hover:bg-white hover:text-blue-600'>
                  Get Started
              </Button>
              
             
            </div>
        </div>
      </ImageHero>
  );
};

export default HomePage;
