import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

export default function ActionItem({ item }) {
  return (
    <Dropdown.Item className="justify-content-between">
      <span className="d-flex align-items-center">
        <i className={`ph-duotone ${item.icon}`}></i>
        <span>{item.label}</span>
      </span>
      {item.badge && <span className={`${item.badgeClasses}`}>{item.badge}</span>}

      {item.subAvatars && (
        <div className="user-group">
          {item.subAvatars.map((src, idx) => (
            <img key={idx} src={src} alt="user" className="avatar" />
          ))}
        </div>
      )}
      {item.selectLang && (
        <span className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <select className="form-select form-select-sm border-0 shadow-none">
            {item.selectLang.map((item, index) => (
              <option key={index + 1} value={index}>
                {item}
              </option>
            ))}
          </select>
        </span>
      )}
    </Dropdown.Item>
  );
}

ActionItem.propTypes = { item: PropTypes.any };
