const TailwindTest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-blue-600">Tailwind CSS is Working!</h1>
        <p className="mt-2 text-gray-700">If you see this styled properly, the CDN is active.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default TailwindTest

// Render the component in a React app
//   ReactDOM.createRoot(document.getElementById('root')).render(<TailwindTest />);
