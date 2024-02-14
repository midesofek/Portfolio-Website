function Button({ onclick, children }) {
  return (
    <button
      className=" text-blue-900 rounded-2xl px-4 py-2 bg-white border border-blue-900 hover:bg-blue-900 hover:text-white hover:animate-pulse "
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
