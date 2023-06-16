import axios from "axios";
import { ISignUpData } from "./pages/SignUp";
import { useMutation } from "react-query";
import { IFormData } from "./pages/Login";

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

export const OnFormPostData = () => {
  return useMutation(formPostData);
};
export const formPostData = async (data: IFormData) => {
  return await axios
    .post(`${process.env.REACT_APP_URL}/api/users/login`, data)
    .then((response) => {
      console.log(response);
      let ACCESS_TOKEN = JSON.stringify(
        response.headers["access-token"]
      ); /*.replace(/\"/gi, "")*/
      // JSON 형식이므로 JSON.stringify 를 사용해 주어야 한다. (*대소문자 주의*)
      // ACCESS_TOKEN 으로 초기화
      // console.log(ACCESS_TOKEN);
      let REFRESH_TOKEN = JSON.stringify(response.headers["refresh-token"]);
      localStorage.setItem("accessToken", ACCESS_TOKEN);
      localStorage.setItem("refreshToken", REFRESH_TOKEN);
      // console.log(localStorage.getItem("accessToken"));
    })
    .catch((error) => {
      console.log(error);
    });
};
