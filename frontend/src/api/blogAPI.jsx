import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.resonse.data : e);
    return null;
  }
};

const blogAPI = {};

blogAPI.getAllPosts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}posts/`));
};

export default blogAPI;
