import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

// project imports
import NavIcon from '../NavIcon';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import useWindowSize from 'hooks/useWindowSize';

// -----------------------|| NAV ITEM ||-----------------------//

export default function NavItem({ item }) {
  const windowSize = useWindowSize();
  const configContext = useContext(ConfigContext);
  const { dispatch } = configContext;
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-ignore
  const location = useLocation();

  let itemTitle = item.title;
  if (item.icon) {
    itemTitle = (
      <>
        <span className="pc-mtext">{item.title}</span>
        {item.type === 'collapse' && (
          <span className="pc-arrow">
            <FeatherIcon icon="chevron-right" />
          </span>
        )}
      </>
    );
  }

  let itemTarget = '';
  if (item.target) {
    itemTarget = '_blank';
  }
  let navItemClass = ['pc-item'];
  const currentIndex = document.location.pathname
    .toString()
    .split('/')
    .findIndex((id) => id === item.id);
  if (currentIndex > -1) {
    navItemClass = [...navItemClass, 'active'];
  }

  const navLinkClass = ['pc-link'];

  let subContent;
  if (item.external) {
    subContent = (
      <Link to={item.url} target="_blank" rel="noopener noreferrer">
        <NavIcon items={item} />
        {itemTitle}
      </Link>
    );
  } else {
    subContent = (
      <NavLink to={item.url} className={navLinkClass.join(' ')} target={itemTarget}>
        <NavIcon items={item} />
        {itemTitle}
      </NavLink>
    );
  }
  let mainContent;
  if (windowSize.width < 992) {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(' ')} onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
        {subContent}
      </ListGroup.Item>
    );
  } else {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(' ')}>
        {subContent}
      </ListGroup.Item>
    );
  }

  return <>{mainContent}</>;
}

NavItem.propTypes = { item: PropTypes.any };
