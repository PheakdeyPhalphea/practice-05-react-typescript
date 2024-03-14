import { useEffect, useState } from "react";
import { FooterComponent } from "./FooterComponents/Footer";
import NavBarComponents from "./NavBarComponents/NavBar";
import LoadingComponent from "./LoadingComponents/loading";
import { CardProductComponent } from "./CardComponents/Card";
import ButtonComponent from "./ButtonComponents/Button";
export type product = {
  title: string;
  price: number;
  image: string;
};
export const HomeComponent = () => {
  const [getProduct, setGetProduct] = useState<product[]>();
  const [getLoading, setGetLoading] = useState(false);
  const URL = "https://fakestoreapi.com/products";
  const getData = async () => {
    setGetLoading(true);
    try {
      const response = await fetch(URL);
      const jsonBody = await response.json();
      console.log(jsonBody);
      setGetProduct(jsonBody);
    } catch (error) {
      console.log(error);
    } finally {
      setGetLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <header>
        <nav>
          <NavBarComponents />
        </nav>
      </header>
      <main className="py-10 px-36">
        <section className="py-5">
          <ButtonComponent />
        </section>
        {getLoading ? (
          <div>
            <LoadingComponent />
          </div>
        ) : (
          <section className="grid grid-cols-4 gap-5">
            {getProduct?.map((e, index) => (
              <CardProductComponent
                image={e.image}
                title={e.title}
                key={index}
                price={e.price}
              />
            ))}
          </section>
        )}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};
