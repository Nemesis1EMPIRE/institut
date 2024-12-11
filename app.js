// Import des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Configuration Firebase (remplacez par vos propres informations)
  const firebaseConfig = {
      apiKey: "AIzaSyAuTQI7IkG8kkxApdzrYq0iutQDMf27494",
      authDomain: "sallam-75921.firebaseapp.com",
      databaseURL: "https://sallam-75921-default-rtdb.firebaseio.com",
      projectId: "sallam-75921",
      storageBucket: "sallam-75921.appspot.com",
      messagingSenderId: "77848899514",
      appId: "1:77848899514:web:e4d976cb987e00d013f783",
      measurementId: "G-0N3QLT9GEE"
    };

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemple : récupérer les documents dans la collection "films"
const querySnapshot = await getDocs(collection(db, "films"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
});
