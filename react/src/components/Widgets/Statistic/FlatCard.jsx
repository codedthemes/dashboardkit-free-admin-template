import PropTypes from 'prop-types';
// react-bootstrap
import { Row, Col } from 'react-bootstrap';

// -----------------------|| FLAT CARD ||-----------------------//

export default function FlatCard({ params }) {
  let iconClass = ['material-icons-two-tone'];
  if (params.icon && params.iconClass) {
    iconClass = [...iconClass, params.iconClass];
  }

  return (
    <Row>
      <Col sm={4}>
        <i className={iconClass.join(' ')}>{params.icon}</i>
      </Col>
      <Col sm={8} className="text-md-center">
        <h5>{params.value}</h5>
        <span>{params.title}</span>
      </Col>
    </Row>
  );
}

FlatCard.propTypes = { params: PropTypes.any };
