import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import useUser from '../hooks/useUser';
import NavLiFavoriteSong from './NavLiFavoriteSong';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegPlayCircle } from 'react-icons/fa';
import { addAlbum } from '../redux/modules/playUris';

const NavBar = () => {
  const { userId } = useUser();
  const dispatch = useDispatch();
  //@ts-ignore
  const track = useSelector((state) => state.albumTrackSliceReducer);
  const trackData = track.map((item: any) => ({ title: item.name, artist: item.artists[0].name }));
  return (
    <Nav>
      <div id="logoBody">
        <Link to="/">
          <img src="/assets/logo_horizontal.png" alt="Logo" />
        </Link>
      </div>
      <ul
        style={{
          marginTop: '1rem',
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {userId && <NavLiFavoriteSong />}
      </ul>
      <div
        style={{
          marginTop: '1rem',
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        <Link
          to="/playlist"
          style={{
            color: 'white'
          }}
        >
          PLAYLIST🎶
        </Link>
        <h3
          style={{
            marginTop: '1rem',
            marginBottom: '1rem',
            color: 'white'
          }}
        >
          Playing Now
        </h3>
      </div>
      <div className="playing-now-ctn">
        {trackData.map((item: any, index: number) => {
          return (
            <ul className="playListCtn">
              <li key={item.uri}>{item.title.length < 10 ? item.title : `${item.title.slice(0, 10)}...`}</li>
              <li key={index}>{item.artist}</li>
              <FaRegPlayCircle className="FaRegPlayCircle" />
            </ul>
          );
        })}
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  width: 100%;
  padding: 0 0.5rem 0.5rem;
  position: relative;
  z-index: 9;

  #logoBody {
    position: relative;
    background: rgba(144, 144, 144, 0.33);
    border-radius: 8px;
    padding: 0.2rem;
    transition: background-color 0.8s, transform 0.2s;
  }

  #logoBody:hover {
    transform: scale(1.017);
    background: rgba(144, 144, 144, 0.53);
  }

  img {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width: 90%;
    height: auto;
    cursor: pointer;
    filter: grayscale(0.6);
    transition: filter 0.8s;
  }
  img:hover {
    filter: none;
  }
  .nav-bar-menu-ctn {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 8px;
  }

  .playing-now-ctn {
    padding: 0.1rem;
    max-height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(224, 224, 224, 0.234);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 5px;
    }
  }

  .playListCtn {
    display: grid;
    border: 1px solid white;
    color: #fff;
    background: rgb(255, 185, 81, 0.4);
    grid-template-columns: 1.5fr 1fr 0.35fr;
    justify-items: center;
    align-items: center;
    border-radius: 8px;
    padding: 0 0.5rem;
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0;
    &:hover {
      background: rgb(255, 185, 81, 1);
      transform: scale(1.008);
    }
  }
  li {
    margin: 10px 0;
  }
`;
