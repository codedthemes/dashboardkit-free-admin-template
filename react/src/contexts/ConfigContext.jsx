import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

// project imports
import * as actionType from 'store/actions';
import { CONFIG } from 'config/constant';

const initialState = {
  ...CONFIG,
  isOpen: [], // for active default menu
  isTrigger: [] // for active default menu, set blank for horizontal
};
const ConfigContext = createContext({});
const { Provider } = ConfigContext;

function ConfigProvider({ children }) {
  let trigger = [];
  let open = [];

  const [state, dispatch] = useReducer((stateData, action) => {
    switch (action.type) {
      case actionType.COLLAPSE_MENU:
        return {
          ...stateData,
          collapseMenu: !stateData.collapseMenu
        };
      case actionType.COLLAPSE_HEADERMENU:
        return {
          ...stateData,
          collapseHeaderMenu: !stateData.collapseHeaderMenu
        };

      case actionType.COLLAPSE_TOGGLE:
        if (action.menu.type === 'sub') {
          open = stateData.isOpen;
          trigger = stateData.isTrigger;

          const triggerIndex = trigger.indexOf(action.menu.id);
          if (triggerIndex > -1) {
            open = open.filter((item) => item !== action.menu.id);
            trigger = trigger.filter((item) => item !== action.menu.id);
          }

          if (triggerIndex === -1) {
            open = [...open, action.menu.id];
            trigger = [...trigger, action.menu.id];
            trigger = [...trigger, action.menu.id];
          }
        } else {
          open = stateData.isOpen;
          const triggerIndex = stateData.isTrigger.indexOf(action.menu.id);
          trigger = triggerIndex === -1 ? [action.menu.id] : [];
          open = triggerIndex === -1 ? [action.menu.id] : [];
        }

        return {
          ...stateData,
          isOpen: open,
          isTrigger: trigger
        };
      default:
        throw new Error();
    }
  }, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <>{children}</>{' '}
    </Provider>
  );
}

export { ConfigContext, ConfigProvider };

ConfigProvider.propTypes = { children: PropTypes.any };
