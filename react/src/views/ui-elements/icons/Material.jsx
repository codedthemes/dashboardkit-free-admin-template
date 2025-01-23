import { useState } from 'react';

// react-bootstrap
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

// third party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project imports
import iconlist from './data/material-icon';

// -----------------------|| MATERIAL ||-----------------------//

export default function Material() {
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
              <Card.Title as="h5">Material Icon</Card.Title>
              <p>
                Use material two tone icon with{' '}
                <code>&lt;i class="material-icons-two-tone"&gt; &lt;&lt; Copyed code &gt;&gt;&lt;/i&gt; in you html code</code>
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
                        <i className="material-icons-two-tone">{icon}</i>
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
