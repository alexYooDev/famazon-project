import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ signedInUser, children }) => {
  return signedInUser ? <Navigate to='/' /> : children;
};

export default PrivateRoute;
