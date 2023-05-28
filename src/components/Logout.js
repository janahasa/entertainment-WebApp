import { auth } from './firebase-config';

export const handleLogout = () => {
  auth.signOut()
    .then(() => {
      console.log('sucessful');
      // Logout successful
      // You can perform any additional actions after logout here
    })
    .catch((error) => {
      // An error occurred during logout
      // Handle the error appropriately
      console.log('Logout error:', error);
    });
};
