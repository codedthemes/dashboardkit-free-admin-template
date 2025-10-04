import { DOCS_LINK, SUPPORT_LINK } from 'config/constant';
import { ConfigContext } from 'contexts/ConfigContext';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

// -----------------------|| NAV BAR ||-----------------------//

export default function Footer() {
  const configContext = useContext(ConfigContext);
  const { boxLayout } = configContext.state;

  let footerClass = ['footer-wrapper'];

  if (boxLayout === true) {
    footerClass = [...footerClass, 'container'];
  } else {
    footerClass = [...footerClass, 'container-fluid'];
  }

  return (
    <>
      <footer className="pc-footer">
        <div className={`${footerClass.join(' ')} `}>
          <Row>
            <Col className="my-1">
              <p className="m-0">
                Dashboardkit &#9829; crafted by Team{' '}
                <a href="https://themeforest.net/user/phoenixcoded" target="_blank">
                  Phoenixcoded
                </a>
              </p>
            </Col>
            <Col sm="auto">
              <ul className="list-inline footer-link mb-0">
                <li className="list-inline-item">
                  <a href="../index.html">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href={DOCS_LINK} target="_blank">
                    Documentation
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={SUPPORT_LINK} target="_blank">
                    Support
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
