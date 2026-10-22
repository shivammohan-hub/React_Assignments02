// 5. Create a reusable ProductCard component that accepts productName, price, and category as props. Display at least three different products.

export default function ProductCard(props) {
    let name = props.name
    let price = props.price
    let category = props.category

    return (

        <div className="shadow p-5 w-fit m-5 flex items-center gap-5">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h1 className="text-3xl font-bold">{price}</h1>
            <p className="text-xl font-semibold">{category}</p>
        </div>

    )
}