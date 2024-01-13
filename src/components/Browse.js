import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/usePopularMovies';
import useGetTrendingMovies from '../hooks/useTrendingMovies';
import useGetUpCommingMovies from '../hooks/upCommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearch = useSelector(appStore => appStore.gpt.showGptSearch)
  // console.log("show gpt value",showGptSearch);
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
    { 
    showGptSearch ? (<GptSearch/>):
      (
      <>
          <MainContainer/>
        <SecondaryContainer/>
       </>
      )}
    </>
  );
}

export default Browse