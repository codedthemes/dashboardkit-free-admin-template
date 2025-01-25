import { useState } from 'react';

// react-bootstrap
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

// third party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project imports
import iconlist from './data/fontAwesome-icon';
import iconBrandlist from './data/fontAwesome-brand-icon';

// -----------------------|| FONT AWESOME ||-----------------------//

export default function FontAwesome() {
  const [iconFilter, setIconFilter] = useState(iconlist);
  //  const [iconBrandFilter, setIconBrandFilter] = React.useState(iconBrandlist);

  const iconSearchFilter = (e) => {
    setIconFilter(iconlist.filter((name) => name.includes(e.target?.value)));
    //  setIconBrandFilter(iconBrandlist.filter(name => name.includes(event.target.value)))
  };

  const copyHandler = (icon) => {
    document.querySelector(`[data-clipboard-text="${icon}"]`)?.querySelector('.ic-badge')?.remove();
    document
      .querySelector(`[data-clipboard-text="${icon}"]`)
      ?.insertAdjacentHTML('beforeend', '<span class="ic-badge badge bg-success">copied</span>');
    setTimeout(() => {
      document.querySelector(`[data-clipboard-text="${icon}"]`)?.querySelector('.ic-badge')?.remove();
    }, 30000);
  };
  return (
    <>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Font Awesome</Card.Title>
              <p>
                Use svg icon with <code>&lt;i class="&lt;&lt; Copyed code &gt;&gt;"&gt;</code> in you html code
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
                    <CopyToClipboard text={`fas ${icon}`} onCopy={copyHandler} key={icon}>
                      <div
                        className="i-block"
                        data-clipboard-text={icon}
                        data-filter={icon}
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title={icon}
                        aria-label={icon}
                      >
                        <i className={`fas ${icon}`} />
                      </div>
                    </CopyToClipboard>
                  </OverlayTrigger>
                ))}
                <h3 className="m-t-20 ">Brand</h3>
                {iconBrandlist.map((icon) => (
                  <CopyToClipboard text={`fab ${icon}`} onCopy={copyHandler} key={icon}>
                    <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-top-${icon}`}>{icon}</Tooltip>}>
                      <div
                        className="i-block"
                        data-clipboard-text={icon}
                        data-filter={icon}
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title={icon}
                        aria-label={icon}
                      >
                        <i className={`fab ${icon}`} />
                      </div>
                    </OverlayTrigger>
                  </CopyToClipboard>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
