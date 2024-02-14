import Button from "@/components/Button";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-4 py-4 flex flex-col justify-center items-center">
        <div className=" font-bold text-xl">
          <h1>About Me</h1>
        </div>
        <div>
          <p>Some text about me</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
