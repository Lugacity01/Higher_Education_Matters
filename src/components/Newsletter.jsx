import { useState } from "react"
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";


const Newsletter = () => {

    const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChange = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    setIsLoading(true);

    // Simulate an API call (e.g., newsletter subscription)
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true); // Open modal on success
      setEmail(""); // Clear email input
    }, 2000); // Simulate a 2-second delay
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    // bg-gray-50 rounded-lg shadow-md
    <div className="lg:my-10 my-5 lg:py-6 py-0 ">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 lg:space-y-0">
            {/* Header Section */}
            <div className="lg:w-1/2 lg:space-y-6 text-center lg:text-left">
                <h1 className="text-[20px] lg:text-[33px] md:text-6xl text-[#1A3855] font-bold">
                    Join our newsletter
                </h1>
                <p className="lg:mt-2 my-2 text-[12px] md:text-lg text-gray-500">
                    Subscribe to our newsletter to receive the latest news, updates, and resources directly to your inbox.
                </p>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2">
                <form onSubmit={handleOnChange} className="flex flex-row items-center  lg:space-y-0 lg:space-x-4">
                    <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    placeholder="Enter your email"
                    className="w-full lg:w-2/3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A3855]"
                    />
                    
                    {/* <Button type="submit"
                        className={`bg-[#1A3855] text-white px-6 py-3 rounded transition-all w-full lg:w-auto ${
                            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                        }`}
                        disabled={isLoading}
                        >
                        {isLoading ? "Loading..." : "Subscribe"}
                    </Button> */}

                <Button
                    type="submit"
                    className={`bg-[#1A3855] text-white p-6 rounded transition-all  lg:w-auto ${
                        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                    }`}
                    disabled={isLoading}
                    >
                    {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin /> // Show the spinner icon when loading
                    ) : (
                        "Subscribe"
                    )}
                </Button>
                </form>
            </div>
        </div>

        {/* Modal component */}
      {modalOpen && (
        <Modal>
          <h2 className="text-lg font-semibold">Subscribed Successfully!</h2>
          <p className="mt-2 text-gray-700">You have successfully subscribed with {email}.</p>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-[#1A3855] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>

  )
}

export default Newsletter