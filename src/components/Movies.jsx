import {Movie} from './Movie'

function Movies (props) {
    //get array with movies by default it's empty
    const {movies = []} = props;

    //if array still empty we see "Nothing found"
    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )) : (<h4>Nothing found</h4>)
    }
    </div>
}

export {Movies}