import { useContext } from 'react';
import { AuthContext } from './AuthContext';

// Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
