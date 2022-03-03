import {
  collection,
  addDoc,
  db,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
} from "./config";

export const saveOrdeFS = (client, dishes, total, state) => {
  return addDoc(collection(db, "order"), {
    client,
    dishes,
    total,
    state,
  });
};

export const getOrders = () => {
  const orders = collection(db, "order");
  return getDocs(orders);
};

export const getOrder = (id) => {
  const order = doc(db, "order", id)
  return getDoc(order);
};

export const onGetOrders = (callback) => {
  const order = collection(db, "order");
  return onSnapshot(order, callback);
};

export const deleteOrder = (id) => {
  const order = doc(db, "order", id)
  return deleteDoc(order);
};

export const updatePost = (id, valor) => {
  const realUpdate = doc(db, "post", id);
  return updateDoc(realUpdate, {
    state: valor,
  });
};