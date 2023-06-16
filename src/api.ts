import axios from "axios";
import { ISignUpData } from "./pages/SignUp";
import { useMutation } from "react-query";

export const OnSignUpData = () => {
  return useMutation(SignUpData);
};
export const SignUpData = async (data: ISignUpData) => {
  return await axios
    .post(`${process.env.REACT_APP_URL}/api/users/signup`, data)
    .then((res) => {
      console.log(res.data);
    });
};
