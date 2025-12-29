import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-vh-100">
        {children}
      </main>
      <Footer />
    </>
  );
}
