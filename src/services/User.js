import axios from "axios";

const BASE_URL = "http://103.175.216.126:8000";

function getAuthTokenFromCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "access") {
      return value;
    }
  }
  return null;
}

const authToken = getAuthTokenFromCookies();

export const GetUsers = async () => {
  try {
    const url = `${BASE_URL}/api/users`;
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const UpdateUser = async (id, data) => {
  try {
    const url = `${BASE_URL}/api/users/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const response = await axios.patch(url, data, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const DeleteUser = async (id) => {
  try {
    const url = `${BASE_URL}/api/users/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const response = await axios.delete(url, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetProfile = async () => {
  try {
    const url = `${BASE_URL}/api/auth/me`;
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
