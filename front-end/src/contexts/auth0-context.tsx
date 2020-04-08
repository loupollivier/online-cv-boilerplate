import React, { createContext, useContext, useState, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

interface ContextProps {
  auth0Client: any,
  isLoading: boolean,
  isAuthenticated: boolean,
  user: any,
  loginWithRedirect: any,
  getTokenSilently: any,
  getIdTokenClaims: any,
  logout: any,
}

export const Auth0Context = createContext<ContextProps>({
  auth0Client: null,
  isLoading: true,
  isAuthenticated: false,
  user: null,
  loginWithRedirect: () => { },
  getTokenSilently: () => { },
  getIdTokenClaims: () => { },
  logout: () => { },
});

export const useAuth0 = () => useContext(Auth0Context);

const Auth0Provider: React.FC = props => {
  const [auth0Client, setAuth0Client] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<any>(null)

  async function handleRedirectCallback(client: any) {
    setIsLoading(true);
    await client.handleRedirectCallback();
    const user = await client.getUser();
    setUser(user);
    setIsAuthenticated(true);
    setIsLoading(false);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    const config: any = {
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin
    };
    async function initializeAuth0() {
      const client = await createAuth0Client(config);
      setAuth0Client(client);
      if (window.location.search.includes('code=')) {
        return handleRedirectCallback(client);
      }
      const isAuthenticated = await client.isAuthenticated();
      const user = isAuthenticated ? await client.getUser() : null;
      setIsAuthenticated(true);
      setUser(user);
    };
    initializeAuth0();
  }, []);

  return (
    <Auth0Context.Provider value={{
      auth0Client: auth0Client,
      isLoading: isLoading,
      isAuthenticated: isAuthenticated,
      user: user,
      loginWithRedirect: (...p: any) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p: any) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p: any) => auth0Client.getIdTokenClaims(...p),
      logout: (...p: any) => auth0Client.logout(...p),
    }}>
      {props.children}
    </Auth0Context.Provider>
  )
}

export default Auth0Provider;