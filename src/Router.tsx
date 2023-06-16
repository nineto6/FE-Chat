import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
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
