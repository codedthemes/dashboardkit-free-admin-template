import { useContext, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project imports
import Navigation from './Navigation';
import NavBar from './NavBar';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import useWindowSize from 'hooks/useWindowSize';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import Loader from 'components/Loader/Loader';

import { BUY_NOW } from 'config/constant';

// -----------------------|| ADMIN LAYOUT ||-----------------------//

export default function AdminLayout() {
  const windowSize = useWindowSize();
  const configContext = useContext(ConfigContext);
  const bodyElement = document.body;
  const { layout, collapseLayout } = configContext.state;
  const { dispatch } = configContext;
  useEffect(() => {
    if (windowSize.width > 992 && windowSize.width <= 1024 && layout !== 'horizontal') {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }
  }, [dispatch, layout, windowSize]);

  if (windowSize.width > 992 && collapseLayout) {
    bodyElement.classList.add('minimenu');
  } else {
    bodyElement.classList.remove('minimenu');
  }

  let boxClass = ['pc-content'];

  let adminlayout = (
    <>
      <Navigation />
      <NavBar />
      <div className="pc-container">
        <div className={boxClass.join(' ')}>
          <>
            <Breadcrumb />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        </div>
        <a href={BUY_NOW} target="_blank" className="btn btn-danger position-fixed bottom-0 end-0 mb-5 me-3 z-1" rel="noreferrer">
          Buy Now
        </a>
      </div>
      <Footer />
    </>
  );

  return <>{adminlayout}</>;
}
