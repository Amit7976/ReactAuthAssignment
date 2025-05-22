import usersData from "../data/users.json";

////////////////////////////////////////////////////////////////////////////////////////////

const STORAGE_KEY = "thisIsEducaseIndiaInternshipAssignment";

////////////////////////////////////////////////////////////////////////////////////////////

export const getAllUsers = () => {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  const localUsers = stored ? JSON.parse(stored) : [];
  return [...usersData, ...localUsers];
};

////////////////////////////////////////////////////////////////////////////////////////////

interface User {
    email: string;
    password: string;
    [key: string]: any;
}

////////////////////////////////////////////////////////////////////////////////////////////

export const saveUser = (user: User): void => {
    const users = getAllUsers();
    users.push(user);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

////////////////////////////////////////////////////////////////////////////////////////////

export const findUser = (email: string, password: string): User | undefined => {
    const users = getAllUsers();
    return users.find((u: User) => u.email === email && u.password === password);
};

////////////////////////////////////////////////////////////////////////////////////////////

export const isEmailTaken = (email: string): boolean => {
    const users = getAllUsers();
    return users.some((u: User) => u.email === email);
};