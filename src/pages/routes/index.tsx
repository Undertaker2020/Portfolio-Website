import {RouteObject} from "react-router";
import Home from "../Home";

const routes: RouteObject[] = [
    {
        path:"/",
        children: [
            {path:"", element:<Home />}
        ]
    }
];

export default routes;