import { useSelector } from "react-redux";
import { selectPageConfig } from "../pageConfig/pageConfigSlice";

const Header = () => {
  const pageConfig = useSelector(selectPageConfig);

  return (
    <header className="header">
      <div className="top-bar space-between">
        <h2 className="title">TODO</h2>
        <div className="theme-switcher">
          <img src={`/images/${pageConfig.theme}`} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
