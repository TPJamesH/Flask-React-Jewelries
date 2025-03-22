import logOut from "../api/logout";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const navigate = useNavigate();

    const logoutFunction = async (e) => {
        e.preventDefault();
        await logOut();
        navigate("/");
    };

    return logoutFunction;
}