import { data } from "autoprefixer";
import axios from "axios";

const BASE_URL = "http://103.175.216.126:8000";

const Login = async (data) => {
  try {
    const url = `${BASE_URL}/api/auth/login`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default Login;
