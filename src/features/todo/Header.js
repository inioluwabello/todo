import { useDispatch, useSelector } from "react-redux";
import { selectPageConfig, setTheme } from "../pageConfig/pageConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const pageConfig = useSelector(selectPageConfig);

  return (
    <header className={`header`}>
      <div className="content">
        <div className="top-bar space-between">
          <h2 className="title">TODO</h2>
          <div
            className="theme-switcher pointer"
            onClick={() =>
              dispatch(
                setTheme(pageConfig.theme === "light" ? "dark" : "light")
              )
            }
          >
            <img src={`/images/icon-${pageConfig.theme === "light" ? "moon" : "sun"}.svg`} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
