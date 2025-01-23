import { useState } from 'react';

// react-bootstrap
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

// third party
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FeatherIcon from 'feather-icons-react';

// project imports
import iconlist from './data/feather-icon';

// -----------------------|| FEATHER ||-----------------------//

export default function Feather() {
  const [iconFilter, setIconFilter] = useState(iconlist);

  const iconSearchFilter = (e) => {
    setIconFilter(iconlist.filter((name) => name.includes(e.target?.value)));
  };

  const copyHandler = (icon) => {
    document.querySelector(`[data-clipboard-text="${icon}"]`)?.querySelector('.ic-badge')?.remove();
    document
      .querySelector(`[data-clipboard-text="${icon}"]`)
      ?.insertAdjacentHTML('beforeend', '<span class="ic-badge badge bg-success">copied</span>');
    setTimeout(() => {
      document.querySelector(`[data-clipboard-text="${icon}"]`)?.querySelector('.ic-badge')?.remove();
    }, 3000);
  };
  return (
    <>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Feather Icon</Card.Title>
              <p>
                Use svg icon with <code>&lt;FeatherIcon icon="&lt;&lt; Copyed code &gt;&gt;"&gt;</code> in you html code
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <Row className="justify-content-center">
                <Col sm={6}>
                  <input type="text" id="icon-search" className="form-control mb-4" placeholder="search . . " onChange={iconSearchFilter} />
                </Col>
              </Row>
              <div className="i-main" id="icon-wrapper">
                {iconFilter.map((icon) => (
                  <OverlayTrigger placement="top" key={icon} overlay={<Tooltip id={`tooltip-top-${icon}`}>{icon}</Tooltip>}>
                    <CopyToClipboard text={icon} onCopy={copyHandler} key={icon}>
                      <div
                        className="i-block"
                        data-clipboard-text={icon}
                        data-filter={icon}
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title={icon}
                        aria-label={icon}
                      >
                        <FeatherIcon icon={icon} />
                      </div>
                    </CopyToClipboard>
                  </OverlayTrigger>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
