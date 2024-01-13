import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openAi from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(appStore => appStore.config.lang);
  const searchText = useRef();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
     console.log("json printing:",json)
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // make an API call to get the movie result//"commedy hindi movie"
    const gptQuery =
      'Act as Movie Recommendation System and suggest some movies for the query' +
      searchText.current.value +
      ". Only give names of 5 movies, must be comma separated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmal, Koi Mil Gya";

    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {
      // handle this here: write error handling for it
      console.error('Error in OpenAI response');
      return;
    }
    console.log(gptResults)
    console.log(gptResults.choices?.[0].message.content);

    const gptMovies =  gptResults.choices?.[0].message.content.split(',');

     console.log(gptMovies);
    // For each movie, I will search TMDB API
    const PromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    
    //[Hera Pheri, Andaz Apna Apna, Chupke Chupke, Angoor, Tanu Weds Manu]
    
    console.log("PromiseArray:",PromiseArray)

 

    const tmdbResults = await Promise.all(PromiseArray);

    //[promise, promise, promise, promise, promise]
    
    console.log("after the array of Promise resolved tmdbresults:",tmdbResults)

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-full md:w-1/2 bg-black grid grid-cols-12'
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
