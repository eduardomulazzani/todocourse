import {
    createBrowserRouter
} from "react-router-dom";
import Header from "../common/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CardDetails from "../pages/CardDetails";
import CreateCard from "../pages/CreateCard";

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
        path: "/createCard",
        element: (
            <>
                <Header />
                <CreateCard />
            </>
        )
    },
    {
        path: "/cardDetails/:cardId",
        element: (
            <>
                <Header />
                <CardDetails />
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