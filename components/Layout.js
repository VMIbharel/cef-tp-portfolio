import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-vh-100">
        <div className="container-fluid">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
