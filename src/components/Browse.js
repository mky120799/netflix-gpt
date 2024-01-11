import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/usePopularMovies';
import useGetTrendingMovies from '../hooks/useTrendingMovies';
import useGetUpCommingMovies from '../hooks/upCommingMovies';


const Browse = () => {
  
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTrendingMovies();
  useGetUpCommingMovies();

  return (
   <>
    {/* 
       MainContainer
        - VideoBackground
        - VideoTitle
       SecondarycONTAINER
        - MovieList * n
          - cards * n
     */}

    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  );
}

export default Browse