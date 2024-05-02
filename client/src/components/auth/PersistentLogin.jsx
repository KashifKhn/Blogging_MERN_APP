import { useEffect, useState } from "react";
import useAuth from "../../Hooks/auth/useAuth";
import useRefreshToken from "../../Hooks/auth/useRefreshToken";
import { useLocation } from "react-router-dom";
import LoadingSkeleton from "../HomePage/LoadingSkeleton";

const PersistentLogin = ({ children }) => {
  const { authState, persistent } = useAuth();
  const location = useLocation();
  const refresh = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRefreshToken = async () => {
      if (authState?.isAuthenticated) {
        return;
      }
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !authState?.isAuthenticated && persistent
      ? checkRefreshToken()
      : setIsLoading(false);
  }, [authState, refresh]);

  return <>{isLoading ? <LoadingSkeleton /> : children}</>;
};

export default PersistentLogin;
