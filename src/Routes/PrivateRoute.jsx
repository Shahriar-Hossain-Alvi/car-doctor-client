import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center my-10">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;