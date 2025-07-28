import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

export default function DefaultLayout() {

  const { user } = useSelector((state) => state.auth);

  //  If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-2 sm:p-6 overflow-y-auto min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
