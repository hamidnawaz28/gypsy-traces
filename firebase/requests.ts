import { doc, setDoc } from "firebase/firestore";
import db from "./firestore";
const addADoc = async (collection: string, data: any) => {
  await setDoc(doc(db, collection, Date.now().toString()), data);
};
export { addADoc };
