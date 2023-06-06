import { toast } from "react-toastify";
import CustomToast from "components/ToastBlocks/components";

export const showToast = (type, heading, subMessage) => {
    toast(<CustomToast heading={heading} subMessage={subMessage} />, {
        type: type,
        autoClose: 5000,
        closeButton: false,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        closeOnClick: true,
        delay: 250,
    });
};

export const hideAllToasts = () => {
    toast.dismiss();
};
