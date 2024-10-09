import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("access");

    if (!accessToken) {
      navigate("/");
    }
  }, [navigate]);
};

export default useAuth;
