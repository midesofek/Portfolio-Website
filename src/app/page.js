import Button from "@/components/Button";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className=" py-24 flex flex-col justify-center items-center">
          <h1 className=" font-bold text-3xl">I'm Mide Sofek</h1>
          <img
            src={"./midesofek.jpg"}
            alt="midesofek"
            className="h-48 w-48 rounded-full  object-center"
          />
          <div>
            <p>Some animated text here...</p>
          </div>
          <div className=" flex space-x-4">
            <span>
              <Button>Experiences</Button>
            </span>
            <span>
              <Button>CV</Button>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
