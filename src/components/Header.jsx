import Button from "./Button";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Navbar className=" h-8" />
        <Button>Say Hello 👋</Button>
      </div>
    </header>
  );
}

export default Header;
