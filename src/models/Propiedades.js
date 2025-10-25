import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc
} from "firebase/firestore";
import { db } from "./firebase.js";

const propiedadesCollection = collection(db, "propiedades");


//obtener todas las propiedades
export const getAllPropiedades = async () => {
  try {
    const snapshot = await getDocs(propiedadesCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(error);
  }
};

//Obtener propiedades por ID
export const getPropiedadesById = async (id) => {
  try {
    const propiedadRef = doc(db, "propiedades", id);
    const snapshot = await getDoc(propiedadRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(`Error al obtener la propiedad con ID ${id}:`, error);
    throw error;
  }
};


//Crear propiedad

export const createPropiedades = async (data) => {
  try {
    const docRef = await addDoc(propiedadesCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};


//Borrar propiedad
export const deletePropiedad = async (id) => {
  try {
    const propiedadRef = doc(db, "propiedades", id.trim());
    const snapshot = await getDoc(propiedadRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(propiedadRef);
    return true;
  } catch (error) {
    console.error(`Error al eliminar propiedad con ID ${id}:`, error);
    return false;
  }
};


// Actualizar propiedad
export const updatePropiedad = async (id, propiedadData) => {
  try {
    const propiedadRef = doc(db, "propiedades", id.trim());
    const snapshot = await getDoc(propiedadRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(propiedadRef, propiedadData, { merge: true });
    return { id, ...propiedadData };
  } catch (error) {
    console.error(`Error al actualizar propiedad con ID ${id}:`, error);
    return false;
  }
};
