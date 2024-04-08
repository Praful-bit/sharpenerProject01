/* eslint-disable react/prop-types */


function ErrorMessageCard({ title, message, onDismiss }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded z-10">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-red-800">{message}</p>
        <button
          onClick={onDismiss}
          className="mt-2 bg-blue-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default ErrorMessageCard;
