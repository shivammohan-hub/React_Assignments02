
import Alert from "./components/Alert";
import Counter from "./components/Counter";
import Like from "./components/Like";
import Log from "./components/Log";
import LogMessege from "./components/LogMessege";
import MovieList from "./components/MovieCard";
import Product from "./components/Product";
import Result from "./components/Result";
import StudentList from "./components/StudentList";
import UserProfile from "./components/UserProfile";

export default function App () {
  return (
    <>
    {/* 5. Create a reusable ProductCard component that accepts productName, price, and category as props. Display at least three different products. */}
    
    <ProductCard name="Cricket Bat" price="1699/-" category="Sports" />
    <ProductCard name="Shoe" price="499/-" category="Footwear" />
    <ProductCard name="Laptop" price="1,20,999/-" category="Electronics" />


    {/* 6. Create a User Profile component that accepts a user's name, email, and profile image URL through props. */}

    <UserProfile name="Virat Kohli" email="virat@gmail.com" image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/virat-kohli-252402224-1x1.jpg?VersionId=mGx7d51gCNYypK4ZHfiAGaLEEqfARvMc" />


    {/* 7. Create a component that displays "Welcome Back!" if a user is logged in; otherwise, display "Please Login". */}

    <LogMessege IsLoggedIn={false} />


    {/* 8. Create a Result component that accepts marks as props. Display "Pass" if marks are 40 or above; otherwise, display "Fail". */}

    <Result marks={60} />


    {/* 9. Create a list of five student names and display them using the JavaScript map() method. */}

    <StudentList />


    {/* 10. Create a product listing using an array of objects containing product ID, name, and price. Display all products using a reusable component and assign a unique key to each item. */}

    <Product />


    {/* 11. Create a list of at least five movies with their names, genres, and release years. Display them using map() and a reusable MovieCard component. */}

    <MovieList />


    {/* 12. Create a button that displays an alert message when clicked. */}

    <Alert />


    {/* 13. Create a counter with Increase and Decrease buttons. Update the counter when the buttons are clicked. */}

    <Counter />


    {/* 14. Create a Like button using the useState hook. When clicked, it should toggle between "Like" and "Liked". */}

    <Like />


    {/* 15. Create a simple Login/Logout interface using useState. Display "Welcome User" when logged in and "Please Login" when logged out. The button text should change accordingly. */}

    <Log />

    </>
    
  )
}

