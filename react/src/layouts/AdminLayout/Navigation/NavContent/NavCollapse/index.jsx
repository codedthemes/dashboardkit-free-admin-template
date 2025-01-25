import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

// project imports
import NavItem from '../NavItem';
import LoopNavCollapse from './index';
import NavIcon from '../NavIcon';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import useWindowSize from 'hooks/useWindowSize';

// -----------------------|| NAV COLLAPSE ||-----------------------//

export default function NavCollapse({ collapse, type }) {
  const configContext = useContext(ConfigContext);
  const { dispatch } = configContext;
  const windowSize = useWindowSize();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-ignore
  const location = useLocation();

  const { isOpen, isTrigger, collapseLayout } = configContext.state;

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === collapse.id);
    if (currentIndex > -1) {
      dispatch({ type: actionType.COLLAPSE_TOGGLE, menu: { id: collapse.id, type: type } });
    }
  }, [collapse, dispatch, type]);

  let navItems;
  if (collapse.children) {
    const collapses = collapse.children;
    navItems = Object.keys(collapses).map((item) => {
      item = collapses[item];
      switch (item.type) {
        case 'collapse':
          return <LoopNavCollapse key={item.id} collapse={item} type="sub" />;
        case 'item':
          return <NavItem key={item.id} item={item} />;
        default:
          return false;
      }
    });
  }

  let itemTitle = collapse.title;
  if (collapse.icon) {
    itemTitle = <span className="pc-mtext">{collapse.title}</span>;
  }

  let navLinkClass = ['pc-link'];

  let navItemClass = ['pc-item', 'pc-hasmenu'];
  const openIndex = isOpen.findIndex((id) => id === collapse.id);
  if (openIndex > -1) {
    navItemClass = [...navItemClass, 'active'];
    navLinkClass = [...navLinkClass, 'active'];
  }

  const triggerIndex = isTrigger.findIndex((id) => id === collapse.id);
  if (triggerIndex > -1) {
    navItemClass = [...navItemClass, 'pc-trigger'];
  }

  const currentIndex = document.location.pathname
    .toString()
    .split('/')
    .findIndex((id) => id === collapse.id);
  if (currentIndex > -1) {
    navItemClass = [...navItemClass, 'active'];
    navLinkClass = [...navLinkClass, 'active'];
  }

  const subContent = (
    <>
      <Link
        to="#"
        className={navLinkClass.join(' ')}
        onClick={() => dispatch({ type: actionType.COLLAPSE_TOGGLE, menu: { id: collapse.id, type } })}
      >
        <NavIcon items={collapse} />
        {itemTitle}
        <span className="pc-arrow">
          <FeatherIcon icon="chevron-right" />
        </span>
      </Link>
      {(!collapseLayout || windowSize.width < 992) && <ul className="pc-submenu">{navItems}</ul>}
      {collapseLayout && windowSize.width >= 992 && (
        <ListGroup variant="flush" bsPrefix=" " as="ul" className="pc-submenu">
          {navItems}
        </ListGroup>
      )}
    </>
  );

  let mainContent;

  mainContent = (
    <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(' ')}>
      {subContent}
    </ListGroup.Item>
  );

  return <>{mainContent}</>;
}

NavCollapse.propTypes = { collapse: PropTypes.object, type: PropTypes.string };
