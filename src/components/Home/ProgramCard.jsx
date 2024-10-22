

const ProgramCard = ({imgSrc, title, description, arrow}) => {
  return (
    <div className="relative">
        <img src={imgSrc} alt={title} />
        
        <div className="absolute p-6 lg:top-[230px] top-[150px] bg-[#fff] lg:max-w-[350px] lg:left-[25px] max-w-[300px] left-[5px] rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-12 gap-2  items-center">
                <div className="col-span-10 space-y-2">
                    <h1 className="md:text-[24px] text-[18px] text-[#1A3855] font-bold">{title}</h1>
                    <p className="md:text-[18px] text-[14px] text-[#727272]">{description}</p>
                </div>
                <div className="justify-self-end col-span-2">
                    <img src={arrow} alt="Continue"  />
                </div>
            </div>
        </div>

    </div>                       
  )
}

export default ProgramCard