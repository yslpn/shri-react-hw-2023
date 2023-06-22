import Comments from "@/components/Comments";
import FilmDetails from "@/components/FilmDetails";

export default function Page({ params }: { params: { id: string } }) {
  const filmId = params.id;

  return (
    <div className="flex flex-col gap-6">
      <FilmDetails filmId={filmId} />
      <Comments filmId={filmId} />
    </div>
  );
}
