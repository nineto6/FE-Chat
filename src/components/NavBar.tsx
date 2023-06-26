import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const nav = useNavigate();

  const movePage = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const getId = event.currentTarget.id;
    // console.log(getId);

    getId == "home" ? nav("/") : nav(`/${getId}`);
  };

  return (
    <>
      <h2 id="home" onClick={movePage}>
        home
      </h2>
      <h2 id="login" onClick={movePage}>
        login
      </h2>
      <h2 id="signup" onClick={movePage}>
        signup
      </h2>
    </>
  );
}
