import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // تحميل JavaScript الخاص بـ Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد Font Awesome

import "./App.css";
import Layout from "./Componants/Layout/Layout";
import Home from "./Componants/Home/Home";
import TempletOne from "./Componants/TempletOne/TempletOne";
import DataContextProvider from "./Componants/DataContext/DataContext";
import FinalResult from "./Componants/FinalResult/FinalResult";

// تحديد basename حسب اسم الريبو
const basename = process.env.NODE_ENV === 'production' ? '/resume-maker-site' : '';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataContextProvider> {/* ✅ وضع DataContextProvider داخل Router */}
        <Layout />
      </DataContextProvider>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "templet-one", element: <TempletOne /> },
      { path: "final-result", element: <FinalResult /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} basename={basename} />;
}

export default App;

