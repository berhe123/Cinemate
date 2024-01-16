import { Link } from "react-router-dom"
import pageNotFoundImage from "../assets/images/pagenotfound.png"
import { useEffect } from "react"
export const PageNotFound = () => {
  useEffect(() => {
    document.title ="page not found/cinemate"
  })
  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
   <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 Opps!</p>
   <div className="max-w-lg">
   <img className="rounded" src ={pageNotFoundImage} alt ="404 page not found" />
   </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to ="/">
          <button className="w-64 text-xl bg-white rounded-lg py-2.5 px-5">back to cinemate</button>
        </Link>
       
      </div>
    </section>
  )
}
