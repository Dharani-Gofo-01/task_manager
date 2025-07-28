import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function GuestLayout() {

    const { user } = useSelector((state) => state.auth);

  //  If user is logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2 sm:p-0">
      <div className="w-full max-w-md sm:max-w-lg mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
