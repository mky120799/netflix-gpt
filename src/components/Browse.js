import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useGetNowPlayingMovies();

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