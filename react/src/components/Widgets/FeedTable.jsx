import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// project imports
import SimpleBar from 'simplebar-react';

// -----------------------|| FEED CARD ||-----------------------//

export default function FeedCard({ wrapclass, title, height, options }) {
  return (
    <Card className={wrapclass}>
      <Card.Header>
        <Card.Title as="h5">{title}</Card.Title>
      </Card.Header>
      <SimpleBar style={{ height }}>
        <Card.Body>
          {options.map((x, i) => (
            <Row className={`align-items-center ${i === options.length - 1 ? '' : 'mb-4'}`} key={i}>
              <Col className="col-auto p-r-0">
                <i className={`feather icon-${x.icon} ${x.bgclass ? `bg-${x.bgclass}` : 'bg-light-primary'} feed-icon p-2 wid-30 hei-30`} />
              </Col>
              <Col>
                <Link to={x.link || '#'}>
                  <h6 className="m-b-5">
                    {x.heading} <span className="text-muted float-end f-14">{x.publishon}</span>
                  </h6>
                </Link>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </SimpleBar>
    </Card>
  );
}

FeedCard.propTypes = { wrapclass: PropTypes.string, title: PropTypes.string, height: PropTypes.string, options: PropTypes.any };
