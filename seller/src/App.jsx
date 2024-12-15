import Navbar from "./components/Navbar";
import Seller from "./pages/Seller";

const App = () => {
  return (
    <main className="bg-primary text-tertiary">
      <Navbar />
      <Seller />
    </main>
  );
};

export default App;
