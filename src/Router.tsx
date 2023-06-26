import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <App />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <NavBar />
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
  ]);

  return router;
};

export default function Router() {
  const router = useRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
