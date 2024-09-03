import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import StaringPage from "./components/StartingPage/StaringPage.jsx";
import Main from "./components/main/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaringPage />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/convert",
        element: <Main />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
