import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLpXCTvuwqc0C8Ifxmu-x_HyHQCL8qGLQ',
  authDomain: 'satsyou-1f741.firebaseapp.com',
  projectId: 'satsyou-1f741',
  storageBucket: 'satsyou-1f741.appspot.com',
  messagingSenderId: '251229709691',
  appId: '1:251229709691:web:b93428ac98a7b52ba589de',
};

const app = initializeApp(firebaseConfig);

let auth_mod;

try {
  auth_mod = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (error) {
  if (error.code === 'auth/already-initialized') {
    auth_mod = getAuth(app);
  } else {
    throw error;
  }
}

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

const storage = getStorage(app);

export { auth_mod, db, storage };

export default app;
