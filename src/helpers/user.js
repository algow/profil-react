const AUTH = 'AUTH_PROFILE';

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem(AUTH));

  if(!user) {
    return false;
  }
  return true;
}

export const setUserData = (userData) => {
  localStorage.setItem(AUTH, JSON.stringify(userData));
}

export const getUserData = () => {
  return JSON.parse(localStorage.getItem(AUTH));
}

export const removeUserData = () => {
  localStorage.removeItem(AUTH);
}