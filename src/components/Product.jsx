// 10. Create a product listing using an array of objects containing product ID, name, and price. Display all products using a reusable component and assign a unique key to each item.

const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Book", price: 250 },
];

function ProductList({ name, price }) {
  return <p className="text-2xl py-2 px-4 font-semibold shadow m-5">{name}  -  ₹{price}</p>;
}

export default function Product() {
  return products.map((product) => (
    <ProductList key={product.id} {...product} />
  ));
}
