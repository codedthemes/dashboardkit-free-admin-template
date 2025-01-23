// react-bootstrap
import { ListGroup, Dropdown } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

// -----------------------|| NAV LEFT ||-----------------------//

export default function NavLeft() {
  return (
    <ListGroup as="ul" bsPrefix=" " className="list-unstyled">
      <Dropdown as="li" className="pc-h-item">
        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0 active ">
          Level
        </Dropdown.Toggle>
        <Dropdown.Menu className="pc-h-dropdown">
          <Dropdown.Item className="dropdown-item" as={Link} to="#">
            <i className="material-icons-two-tone">account_circle</i>
            <span>My Account</span>
          </Dropdown.Item>
          <div className="pc-level-menu">
            <Link to="#" className="dropdown-item">
              <i className="material-icons-two-tone">list_alt</i>
              <span className="float-end">
                <FeatherIcon icon="chevron-right" className="me-0" />
              </span>
              <span>Level2.1</span>
            </Link>
            <div className="dropdown-menu pc-h-dropdown">
              <Link className="dropdown-item" to="#">
                <i className="fas fa-circle" />
                <span>Support</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="fas fa-circle" />
                <span>Settings</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="fas fa-circle" />
                <span>Lock Screen</span>
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="fas fa-circle" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
          <Dropdown.Item className="dropdown-item" as={Link} to="#">
            <i className="material-icons-two-tone">settings</i>
            <span>Settings</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" as={Link} to="#">
            <i className="material-icons-two-tone">support</i>
            <span>Support</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" as={Link} to="#">
            <i className="material-icons-two-tone">https</i>
            <span>Lock Screen</span>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" as={Link} to="#">
            <i className="material-icons-two-tone">chrome_reader_mode</i>
            <span>Log out</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup>
  );
}
