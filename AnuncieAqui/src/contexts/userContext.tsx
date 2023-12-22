import React, { createContext, useContext, useState } from 'react';

const users: Array<User> = [
  { id: 1, name: "Roberto", email: "roberto@email.com", access: "low", password: "1234" },
  { id: 2, name: "Larissa", email: "larissa@email.com", access: "medium", password: "1234" },
  { id: 3, name: "Priscila", email: "priscila@email.com", access: "high", password: "1234" }
]

type UserContextProps = {
  currentUser: User;
  login: (email: string, password: string) => void
}

const UserContext = createContext<UserContextProps>({
  currentUser: undefined as UserContextProps["currentUser"],
  login: undefined as UserContextProps["login"]
});

type User = {
  id: number;
  name: string;
  email: string;
  access: "low" | "medium" | "high";
  password: string;
}

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<User>()

  const login = (email: string, password: string) => {
    const userLogged = users.filter(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password)
    if(userLogged.length > 0) {
      setCurrentUser(userLogged[0])
      return
    } 
    alert("Usuário não cadastrado!")
  }

  return (
    <UserContext.Provider value={{ currentUser, login }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  return {
    ...context
  }
}