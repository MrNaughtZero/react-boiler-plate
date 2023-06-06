import "../styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function CustomToast({ heading, subMessage }) {
    return (
        <div className="toast-wrapper">
            <h4>{heading}</h4>
            <p>{subMessage}</p>
        </div>
    );
}

export default CustomToast;
