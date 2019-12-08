import axios from "axios";
import { UserData } from "../modules/auth/duck/auth.interfaces";
import { unwrapResponseData } from "../utils/unwrapResponseData";

const fetchAllTrainers = async (setIsFetching: React.Dispatch<React.SetStateAction<boolean>>) => {
  setIsFetching(true);
  const response = await axios.get<UserData[]>("http://localhost:5000/user/trainers").then(unwrapResponseData);
  setIsFetching(false);
  return response;
};

const api = {
  fetchAllTrainers
};

export default api;
