import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
export type AddProdcut = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
type ErrorType = {
  title?: string;
  price?: string;
};
type CreateProductFormProp = {
  getDataFrom: (product: AddProdcut) => void;
};
const FormComponent:React.FC<CreateProductFormProp> = ({getDataFrom}) => {
  const [product, setProduct] = useState<AddProdcut>({
    title: "",
    price: 0,
    description: "",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });
  useEffect(() =>{
    getDataFrom(product);
  }, [product, getDataFrom])
  const [error, setError] = useState<ErrorType>({});
  useEffect(() => {
    const newError: ErrorType = {};
    if (product.title.length && product.title.length < 3) {
      newError.title = "Title must be more then 5 character ";
    }
    if (product.price && Number(product.price) <= 0) {
      newError.price = "Price must be greater then 0";
    }
    setError(newError);
  }, [product.title, product.price]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target);
    const { id, value } = e.target;
    setProduct((prevPro) => ({
      ...prevPro,
      [id]: value,
    }));
  };
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product Title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="Smart-Phone"
          onChange={handleChange}
          value={product.title}
          required
        />
        {error.title && <p className="text-red-500">{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput
          id="price"
          type="number"
          onChange={handleChange}
          value={product.price}
          required
        />
        {error.price && <p className="text-red-500">{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea
          id="description"
          onChange={handleChange}
          value={product.description}
          placeholder="product"
        />
      </div>
    </form>
  );
};
export default FormComponent;
