// Dependencies
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// Local | React-Redux
import AnimatedLogo from '../AnimatedLogo';
// Styles
import './app.scss';
function App() {
  // To dispatch action to the store
  const { darkTheme } = useSelector((state) => state.app);
  const themeClass = classNames('theme', { 'theme--dark': darkTheme }, { 'theme--light': !darkTheme });
  return (
    <div className={themeClass}>
      <div className="app" >
        <div className="section section--intro">
          <div className="intro__corners">
            <span className="intro__corners__corner intro__corners__corner__TL"></span>
            <span className="intro__corners__corner intro__corners__corner__TR"></span>
            <span className="intro__corners__corner intro__corners__corner__BR"></span>
            <span className="intro__corners__corner intro__corners__corner__BL"></span>
          </div>
          <AnimatedLogo />
        </div>
      </div>
    </div>
  );
}

export default App;
