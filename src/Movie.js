import React from 'react';
import PropTypes from "prop-types";

// Movie component는 state가 필요하지 않으므로 function으로 생성한다.

function Movie({id, year, title, summary, poster}){
    return (
        <div class="movies___movie">

        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;