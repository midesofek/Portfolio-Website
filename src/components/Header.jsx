import Button from "./Button";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Navbar className=" h-8" />
        <Button>
          <a href="mailto:midesofek@gmail.com">Say Hello 👋</a>
        </Button>
      </div>
    </header>
  );
}

export default Header;
