import React from 'react'
import Movie from './Movie'
import movies from '../Movie.json'
const Movies = () => {
  return (
    <>
 <div className='container mt-5'>
      <div className="row">
      {/* {
        movies.map((elemnet,indexof)=> {
       return(      
        <Movie key={indexof}
         title={elemnet.Title} 
          year={elemnet.Year}
         poster={elemnet.Poster}/>
       )
        })
     } */}

     {
      movies.map((elemnet)=>{
        return(
          <Movie title={elemnet.Title} year={elemnet.Year} poster={elemnet.Poster}  />
        )
      })
     }
     </div>
    </div>  

    </>
  )
}

export default Movies