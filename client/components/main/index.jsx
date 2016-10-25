import React from 'react';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

const Main = props => {
  const renderRoutes = (routes, prefix) => {
    return (
      <ul>
        {routes.map(route => {
          return (
            <li key={route.path}>
              <Link to={prefix ? `${prefix}${route.path}` : route.path}>{route.path}</Link>
              {route.childRoutes ? renderRoutes(route.childRoutes, prefix ? `${prefix}${route.path}/` : route.path) : null}
            </li>
            );
        })}
      </ul>
    );
  };
  console.log(props);
  return (
    <section className={styles.main}>
      {renderRoutes(props.routes.filter(route => route.path || route.childRoutes))}
    </section>
  );
};

Main.displayName = 'Main';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default Main;

