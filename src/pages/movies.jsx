import MoviesBanner from "@/layouts/Section/MoviesBanner";
import Collections from "@/sections/Collections";

export const metadata = {
  title: 'Movies & Shows',
}

export default function () {
  return (
    <div>
      <MoviesBanner/>
      <Collections/>
    </div>
  )
}
