// 11. Create a list of at least five movies with their names, genres, and release years. Display them using map() and a reusable MovieCard component.

let movie = [
    {
        name : "Dhurandhar",
        genre : "Thriller",
        year : 2025
    },
    {
        name : "Endgame",
        genre : "Action",
        year : 2019
    },
    {
        name : "Avengers Doomsday",
        genre : "Si-Fi",
        year : 2026
    },
    {
        name : "Mirzapur",
        genre : "Drama",
        year : 2026
    },
    {
        name : "Jailer",
        genre : "Action",
        year : 2023
    },
]

export function MovieCard ({name,genre,year}) {
    return (
        <div className="shadow p-5 m-5">
            <p>Movie : {name}</p>
            <p>Genre : {genre}</p>
            <p>Releasing Year : {year}</p>
        </div>
    )
}


export default function MovieList() {
  return (
    <>
      <h1 className="p-2 m-5  text-2xl "><u>Q.11 Movie List</u></h1>
      {movie.map((props) => (
        <MovieCard
          name={props.name}
          genre={props.genre}
          year={props.year}
        />
      ))}
    </>
  );
}