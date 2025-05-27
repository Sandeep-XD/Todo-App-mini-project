import React from 'react'
import { useDispatch } from 'react-redux'
import authService from './lib/appwrite/auth';
import {login,logout} from './features/auth/authSlice';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch()

  React.useEffect(() => {
    authService.getCurrentUser()
    .then((response) => {
      if (response.success) {
        dispatch(login(response.data));
      } else {
        dispatch(logout());
      }
    }
    )
    .catch((error) => {
      console.error("Error fetching user:", error);
      dispatch(logout());
    })
    .finally(() => setLoading(false));
  }, []);
  
  return !loading ? (
    <div className="App">
      <h1>Welcome to the App</h1>
      {/* Add your components here */}
    </div>
  ) : (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );
}

export default App