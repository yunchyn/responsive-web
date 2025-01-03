import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./routes/home";
import Layout from "./layout";

const GlobalStyles = createGlobalStyle`
${reset};
@font-face {
  font-family: "Regular";
  src: url("/fonts/Inter-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "SemiBold";
  src: url("/fonts/Inter-SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Heading";
  src: url("/fonts/LibreBaskerville-Bold.ttf") format("truetype");
}

// 색상표
:root {
  /* Brand */
  --primary: #658c4a;
  --secondary: #e7cec0;

  /* Basic */
  --white: #ffffff;
  --black: #000000;
  --info: #0065ff;
  --success: #36b37e;
  --warning: #ffab00;
  --error: #ff5630;

  /* Grey */
  --grey-50: #f5f5f5;
  --grey-100: #e6e6e6;
  --grey-200: #cccccc;
  --grey-300: #b3b3b3;
  --grey-400: #999999;
  --grey-500: #666666;
  --grey-600: #333333;
  --grey-700: #262626;
  --grey-800: #191919;
  --grey-900: #0d0d0d;
}

body {
  font-family: "Regular";
  font-size: 16px;
  line-height: 24px;

  overflow-x: hidden;
}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
