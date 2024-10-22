import HEMMG_white from "../assets/icons/HEMMG_logo.png"
import HEMMG_blue from "../assets/icons/HEMMG_blue.png"

export const WhiteLogo = ({ className }) => {
  return (
    <div>
        <img src={HEMMG_white} alt="Higher_Education_Matters_Logo" className={`${className} cursor-pointer`}/>
    </div>
  )
};


export const BlueLogo = ({ className }) => {
    return (
      <div>
         <img src={HEMMG_blue} alt="Higher_Education_Matters_Logo" className={`${className} cursor-pointer`} />
      </div>
    )
  };