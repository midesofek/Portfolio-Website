function Button({ children }) {
  return (
    <button className="text-white px-4 bg-blue-900 py-2 rounded">
      {children}
    </button>
  );
}

export default Button;
