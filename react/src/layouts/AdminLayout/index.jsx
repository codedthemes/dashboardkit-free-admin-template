import { useContext, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project imports
import MobileHeader from './MobileHeader';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import useWindowSize from 'hooks/useWindowSize';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import Loader from 'components/Loader/Loader';

// -----------------------|| ADMIN LAYOUT ||-----------------------//

export default function AdminLayout() {
  const windowSize = useWindowSize();
  const configContext = useContext(ConfigContext);
  const bodyElement = document.body;
  const { collapseLayout } = configContext.state;
  const { dispatch } = configContext;
  useEffect(() => {
    if (windowSize.width > 992 && windowSize.width <= 1024) {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }
  }, [dispatch, windowSize]);

  if (windowSize.width > 992 && collapseLayout) {
    bodyElement.classList.add('minimenu');
  } else {
    bodyElement.classList.remove('minimenu');
  }

  let containerClass = ['pc-container'];

  let adminlayout = (
    <>
      <MobileHeader />
      <NavBar />
      <Navigation />
      <div className={containerClass.join(' ')}>
        <div className="pcoded-content">
          <>
            <Breadcrumb />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        </div>
        <a
          href="https://codedthemes.com/item/dashboardkit-react-admin-template/"
          target="_blank"
          className="btn btn-primary position-fixed bottom-0 end-0 mb-5 me-3 z-1"
          rel="noreferrer"
        >
          Buy Now
        </a>
      </div>
    </>
  );
  return <>{adminlayout}</>;
}
