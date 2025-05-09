import PropTypes from 'prop-types';
// -----------------------|| NAV ICON ||-----------------------//

export default function NavIcon({ items }) {
  let navIcons;
  if (items.icon) {
    navIcons = (
      <span className="pc-micon">
        <i className={`ph-duotone ${items.icon}`}></i>
      </span>
    );
  }

  return <>{navIcons}</>;
}

NavIcon.propTypes = { items: PropTypes.any };
