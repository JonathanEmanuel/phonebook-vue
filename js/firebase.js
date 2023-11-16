import { firebaseConfig } from './config.js'
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getFirestore,
    collection, 
    getDocs,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    doc

} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
  // Your web app's Firebase configuration



  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Conexioncon la FireStorage
const db = getFirestore(app);

export const getPhonebooks = async () => {
    const querySnapshot =  await getDocs( collection(db, 'phonebook' )  )
    const data = [];
    querySnapshot.forEach((doc) => {
        const { name, email, phone} = doc.data();
        data.push({
            id: doc.id,
            name: name,
            email: email,
            phone: phone
        })
    });
    return data;
}

export const getContactById = async (id) => {

  const docRef = doc(db, 'phonebook', id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    //console.log("No such document!");
    return {}
  }

}


export const deletePhonebook = async (id) => {
  await deleteDoc(doc(db, "phonebook", id));
}

export const updatePhonebook = async ( data, id ) => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "phonebook", id), data);
}

export const savePhonebook = async ( data ) => {
  try {
    const doc = await addDoc( collection(db, 'phonebook') , data)
    return doc.id;
  } catch ( e){
    console.error(e)
  }
}