// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 모든 상품 가져오기
export async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  if (querySnapshot.empty) {
    return [];
  }

  const fetchedProducts = [];
  const makeProduct = (id, data) => {
    return {
      id: id,
      name: data["name"],
      price: data["price"],
      img: data["img"],
    };
  };

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    const product = makeProduct(doc.id, doc.data());
    fetchedProducts.push(product);
  });
  return fetchedProducts;
}
