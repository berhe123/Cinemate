import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark: bg-slate-800">
        <Routes>
            <Route path="" element={<MovieList apipath= "movie/now_playing" title ="Home"/>} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apipath= "movie/popular" title="popular" />} />
            <Route path="movies/top" element={<MovieList apipath= "movie/top_rated" title="top rated"  />} />
            <Route path="movies/upcoming" element={<MovieList apipath= "movie/upcoming" title ="upcoming"/>} />
            <Route path="search" element={<Search apipath="search/movie"/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
