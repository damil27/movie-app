// import Image from 'next/image'

export default async function MoviesDetails({ params }) {
  const { moviedetails } = params;
  //   const imagePath = `https://image.tmdb.org/t/p/original/`;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${moviedetails}?api_key=${process.env.api_key}`
  );
  const {
    title,
    overview,
    runtime,
    tagline,
    original_title,
    status,
    release_date,
  } = await data.json();
  //   console.log(res);
  return (
    <div>
      <h2> {title}</h2>
      <h2>Run-Time: {runtime}</h2>
      <h2 className="btn">{status}</h2>
    </div>
  );
}
