import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../views/layout";
import { routes } from './routes';
import { Login } from "../views/pages/login";
import { ProtectedRoute } from "./ProtectedRoute";

export const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Navigate replace to="/home" /></ProtectedRoute>} />

                <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    {routes.map((item, index) => (
                        <Route key={index} path={item.path} element={<ProtectedRoute>{item.component}</ProtectedRoute>} />
                    ))}
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>

        </Router>
    );
};
