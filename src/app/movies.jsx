import Image from "next/image";
import Link from "next/link";

export default function Movies({ title, release, poster_path, id }) {
  const imagePath = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div>
      <h1 className="py-2 px-3">{title}</h1>
      <h2 className="py-2 px-3">{release}</h2>
      <div>
        <Image
          className="border rounded-2xl"
          src={imagePath}
          alt={title}
          width={500}
          height={300}
        />
      </div>
      <Link href={`/${id}`}>
        <span className="btn w-full text-center">Movie Details</span>
      </Link>
    </div>
  );
}
