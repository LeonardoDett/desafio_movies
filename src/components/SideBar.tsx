
import { Button } from '../components/Button';
import {GenreResponseProps} from '../App'

interface iSideBarProps{
 genres: GenreResponseProps[];
 selectedId: number;
 handleClickButton: (id: number) => void;
}

export function SideBar({genres, selectedId, handleClickButton}: iSideBarProps ) {

  

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}