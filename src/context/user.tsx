import { createContext, useEffect, useState, ReactNode, SetStateAction } from "react";
import { getAuth, signInWithEmailAndPassword, signOut as signOutFirebase, onAuthStateChanged, User } from 'firebase/auth';

interface UserContextProps {
  couldLogin: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  user: User | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const auth = getAuth();
  const [couldLogin, setCouldLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, listenAuth);
  }, []);

  const listenAuth = (userState: User | null) => {
    console.log('listenAuth', userState);
    setUser(userState);
    setLoading(false);
  };

  const signIn = (email: string, password: string) => {
    console.log('xxx', email, password);
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Lógica adicional aqui, se necessário
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  };

  const signOut = () => {
    console.log('sai!!!');
    setLoading(true);

    signOutFirebase(auth)
      .then(() => {
        console.log("deslogado com sucesso");
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  };

  return (
    <UserContext.Provider value={{ couldLogin, signIn, signOut, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
