import axios from "axios";
import { ISignUpData } from "./pages/SignUp";
import { useMutation } from "react-query";
import { IFormData } from "./pages/Login";
import { useRecoilState } from "recoil";
import { userState } from "./Atoms";

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
  return useMutation(useFormPostData);
};

export const useFormPostData = async (data: IFormData) => {
  // const [userName, setUserName] = useRecoilState(userState);

  return await axios
    .post(`${process.env.REACT_APP_URL}/api/users/login`, data)
    .then((response) => {
      console.log(`response : ${response.data.userInfo.userNm}`);
      // setUserName(response.data.userInfo.userNm);
      // recoil 사용 예정

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

export const getChatRoomData = async () => {
  let token = await JSON.parse(localStorage.getItem("accessToken") || "{}");

  return await axios.get(`${process.env.REACT_APP_URL}/api/chatroom`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // .then((response) => {
  //   console.log("RES:");
  //   console.log(response);
  // });
};
