import { Navigate } from "react-router-dom";
import { useStore } from "../../store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

    const { token } = useStore()

    // Verifica si el usuario está autenticado
    if (token !== null) {
        return children;
    }

    // Si el usuario no está autenticado, no renderizar nada (null)
    return <Navigate to="/login" />;
};
