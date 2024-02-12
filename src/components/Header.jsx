function Logo() {
  return <div></div>;
}

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <button className="bg-brand-blue text-white px-4 py-2 rounded">
          Button
        </button>
      </div>
    </header>
  );
}

export default Header;
