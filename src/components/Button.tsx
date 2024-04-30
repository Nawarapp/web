import { Link } from 'react-router-dom';

interface Props {
  isActive?: boolean;
  toggleActive?: () => void;
}
const ButtonMenu: React.FC<Props> = ({ isActive, toggleActive }) => {
  return (
    <>
      <div>
        <button
          className={`hamburger hamburger--spin ${isActive ? 'is-active' : ''}`}
          type="button"
          onClick={toggleActive}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </>
  );
};

const ButtonBack = () => {
  return (
    <>
      <div className=" text-tertiary  ">
        <Link to="/">
          <p className="text-xs lg:text-sm font-semibold ml-4">Volver</p>
          <img className="w-20 lg:w-20 h-4" src="./flecha.png" alt="" />
        </Link>
      </div>
    </>
  );
};

export { ButtonMenu, ButtonBack };
