import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDebug: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [firebaseStatus, setFirebaseStatus] = useState<string>('Initializing...');

  useEffect(() => {
    // Check Firebase initialization
    try {
      if (auth) {
        setFirebaseStatus('Firebase initialized successfully');
        
        // Check auth state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthStatus(`Logged in as: ${user.email}`);
          } else {
            setAuthStatus('Not logged in');
          }
        }, (error) => {
          setAuthStatus(`Auth error: ${error.message}`);
        });

        return () => unsubscribe();
      } else {
        setFirebaseStatus('Firebase auth not initialized');
      }
    } catch (error) {
      setFirebaseStatus(`Firebase error: ${error}`);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm max-w-xs z-50">
      <div className="font-bold mb-2">Auth Debug</div>
      <div className="space-y-1">
        <div>Firebase: {firebaseStatus}</div>
        <div>Auth: {authStatus}</div>
        <div>Domain: {window.location.hostname}</div>
      </div>
    </div>
  );
};

export default AuthDebug;