import AppRoutes from "./router/routes";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "react-toastify/dist/ReactToastify.css";
import "@styles/styles.scss";

function App() {
    return (
        <RecoilRoot>
            <RecoilNexus />
            <AppRoutes />
            <ToastContainer newestOnTop={true} />
        </RecoilRoot>
    );
}

export default App;
