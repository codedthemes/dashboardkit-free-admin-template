import { useContext } from 'react';

// project imports
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import { ConfigContext } from 'contexts/ConfigContext';

// -----------------------|| NAV BAR ||-----------------------//

export default function NavBar() {
  const configContext = useContext(ConfigContext);
  const { headerBackColor, collapseTabMenu, collapseHeaderMenu } = configContext.state;

  let headerClass = ['pc-header', headerBackColor];
  if (collapseHeaderMenu) {
    headerClass = [...headerClass, 'mob-header-active'];
  }

  let mobDrpClass = ['me-auto pc-mob-drp t'];
  if (collapseTabMenu) {
    mobDrpClass = [...mobDrpClass, 'mob-drp-active'];
  }

  let navBar = (
    <>
      <div className="header-wrapper">
        <div className={mobDrpClass.join(' ')}>
          <NavLeft />
        </div>
        <div className="ms-auto">
          <NavRight />
        </div>
      </div>
      {(collapseTabMenu || collapseHeaderMenu) && <div className="pc-md-overlay" />}
    </>
  );

  return <header className={headerClass.join(' ')}>{navBar}</header>;
}
