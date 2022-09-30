import localStore from "./localstore.util";
import { updateHeaders } from "../services/HttpProvider";

export const getToken = () => localStore.get_data("userToken");

export const setToken = (token) => localStore.store_data("userToken", token);
export const setUserRole = (token) => localStore.store_data("userRole", token);
export const getUser = () => localStore.get_data("user");

export const saveUser = (user) => localStore.store_data("user", user);

export const logout = async () => {
  await localStore.remove_data("userToken");
  await localStore.remove_data("user");
  await localStore.remove_data("userRole");
  await updateHeaders();
  return true;
};

class Auth {
  constructor() {
    this.user = {};
  }

  async setUserFromLocal() {
    const user = await getToken();
    this.user = user ? user : {};
  }

  set setUser(user) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }

  async logout() {
    await logout();
    this.user = {};
  }
}

export const authClass = new Auth();

export const filterLanguage = (data) => {
  let filteredLanguage = [];
  for (let file in data["files"]) {
    let language = data["files"][file].language;
    if (filteredLanguage.indexOf(language) === -1) {
      filteredLanguage.push(language);
    }
  }
  return filterLanguage
};
