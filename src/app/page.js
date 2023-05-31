import Image from "next/image";
import Movies from "./movies";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.api_key}`
  );
  const { results } = await data.json();
  // console.log(results);
  return (
    <main className="my-12">
      <div className="grid gap-2 grid-cols-fluid mx-10  ">
        {results.map((movie) => (
          <div
            key={movie.id}
            className="scale-90 hover:scale-100 transition ease-in-out duration-500   border-slate-600  "
          >
            <Movies
              id={movie.id}
              poster_path={movie.poster_path}
              release={movie.release_date}
              title={movie.title}
            />
            
          </div>
        ))}
      </div>
    </main>
  );
}
