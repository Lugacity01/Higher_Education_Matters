import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const FrequentlyAsked = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>{
    setActiveIndex(activeIndex === index ? null : index);
  }

  const accordionData = [
    {
      title: "Detailed explanation of our security protocols",
      content: "At Higher Education matters, our mission is to provide a safe, secure, and high-quality educational experience for all students. We are dedicated to creating an environment where every student feels valued, protected, and empowered to reach their full potential.",
    },
    {
      title: "What is HMMG",
      content: "This is the content for section 1.",
    },
    {
      title: "Section 2",
      content: "This is the content for section 2.",
    },
    {
      title: "Section 3",
      content: "This is the content for section 3.",
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      {accordionData.map((item, index) => (
        <div key={index} className="">
          {/* Accordion Title */}
          <div
            className={`p-4 flex justify-between cursor-pointer  transition-all duration-300 ${
              activeIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="font-semibold text-lg">{item.title}</h2>

            <FontAwesomeIcon
              icon={activeIndex === index ? faMinus : faPlus}
              className="text-gray-600"
            />
          </div>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-full p-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FrequentlyAsked;