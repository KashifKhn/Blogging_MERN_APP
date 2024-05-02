import { useEffect, useState } from "react";
import useAuth from "../../Hooks/auth/useAuth";
import useRefreshToken from "../../Hooks/auth/useRefreshToken";

const PersistentLogin = ({ children }) => {
  const { authState, persistent } = useAuth();
  const refresh = useRefreshToken();
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    !authState?.isAuthenticated && persistent && checkRefreshToken();
  }, [authState, refresh]);

  return <>{children}</>;
};

export default PersistentLogin;
