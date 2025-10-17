import Header   from "./components/Header.jsx";
import About    from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer   from "./components/Footer.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200 font-mono flex flex-col items-center px-6">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
