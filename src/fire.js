import { AngularFireModule } from 'angularfire2';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyB8Xahj8XA61FJR9ujb8I_6Tq9hQ8Rlr1Q",
  authDomain: "pec1-6ddda.firebaseapp.com",
  databaseURL: "https://pec1-6ddda.firebaseio.com",
  projectId: "pec1-6ddda",
  storageBucket: "pec1-6ddda.appspot.com",
  messagingSenderId: "210675955190",
  appId: "1:210675955190:web:a8b687e17b9e442e"
};
var fire = AngularFireModule.initializeApp(config);
export default fire;
