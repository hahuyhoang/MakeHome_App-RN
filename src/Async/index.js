import AsyncStorage from '@react-native-async-storage/async-storage';
//////SET///////
export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("userData", data);
}
export function setUpdateUser(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("updateUser", data);
}
export function setUserVeri(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("userData", data);
}

export function setUserddress(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("Userddress", data);
}
export function setOrder(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("order", data);
}
export function setProduct(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("product", data);
}

export function setReview(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("review", data);
}

export async function clearUserData() {
  return AsyncStorage.removeItem("userData");
}
//////GET////////
export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("userData").then((data) => {
      resolve(JSON.parse(data));
    });
  });
}
export async function getUserOrder() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("order").then((data) => {
      resolve(JSON.parse(data));
    });
  });
}
export async function getReview() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("review").then((data) => {
      resolve(JSON.parse(data));
    });
  });
}
