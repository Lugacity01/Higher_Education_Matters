// Modal.jsx
import PropTypes from "prop-types";

function Modal({ children }) {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black/25 px-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
