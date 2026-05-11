const AuthLayout = () => {
  return (
    // Main container: full screen, centered content, light gray background
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-max-w-md">
        {/* Branding/Logo Area */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to AppName
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {/* The Auth Card */}
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-lg sm:px-10">
          {/* Child routes (Login/Register forms) render here */}
        </div>

        {/* Optional footer links for the auth section */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Secure, encrypted authentication
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
