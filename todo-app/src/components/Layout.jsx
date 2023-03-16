import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./navs/Header";

const Layout = () => {
  return (
    <>
      <main className="App">
        <Container className="p-3">
          <Header />
          <div className="m-3">
            <Outlet />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Layout;
