import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';


export default function DefaultLayout() {
<<<<<<< HEAD

  const { user } = useSelector((state) => state.auth);
=======
    const { user } = useSelector((state) => state.auth);
>>>>>>> 682cd54a83a397224c83521119fdd915365dccf9

  //  If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }
<<<<<<< HEAD

=======
>>>>>>> 682cd54a83a397224c83521119fdd915365dccf9
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-2 sm:p-6 overflow-y-auto min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
