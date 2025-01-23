import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project imports

import Loader from 'components/Loader/Loader';

/**
 * GuestLayout is a top-level component that wraps around the <Outlet> component
 * from react-router-dom. It is used to set the page type of the application
 * and renders the Configuration component (which is used to set the page title).
 *
 * The GuestLayout component also sets the page type based on the value from
 * the ConfigContext.
 *
 * @returns {React.ReactElement} The GuestLayout component.
 */

export default function GuestLayout() {
  let GuestLayout = (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
  return <>{GuestLayout}</>;
}
