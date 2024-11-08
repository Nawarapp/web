import { Link } from "react-router-dom";
import config from "../config/index.json";

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div id="about" className="">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16 mb-4 mt-7" />
        </div>
        <div className="flex items-center mb-4">
          {sections.map((section, index) => (
            <Link
              key={`${section.name}-${index}`}
              to={section.href}
              className="hover:text-gray-700 text-base cursor-pointer mr-8 leading-4 text-gray-800 dark:text-gray-600 dark:hover:text-gray-900"
            >
              {section.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-8 my-6">
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-gray-900 hover:text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center my-5">
          <p className=" text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Nawara App
          </p>
        </div>
      </div>
    </div>
  );
};
export { About };
