import {
    createBrowserRouter
} from "react-router-dom";
import Header from "../common/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        )
    },
    {
        path: "*",
        element: (
            <>
                <Header />
                <NotFound />
            </>
        )
    },
]);

export default Router;