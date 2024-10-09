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

export const GetArticles = async () => {
  try {
    const url = `${BASE_URL}/api/articles`;
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

export const getArticlesById = async (id) => {
  try {
    const url = `${BASE_URL}/api/articles/${id}`;
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
