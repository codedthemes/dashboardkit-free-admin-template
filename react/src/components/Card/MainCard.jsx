import PropTypes from 'prop-types';
import { useState } from 'react';

// react-bootstrap
import { Dropdown, Card, Collapse } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';

// project imports
import useWindowSize from 'hooks/useWindowSize';

// -----------------------|| MAIN CARD ||-----------------------//

export default function MainCard({ isOption, title, children, cardClass, optionClass, CardBodyClass }) {
  const [fullCard, setFullCard] = useState(false);
  const [collapseCard, setCollapseCard] = useState(false);
  const [loadCard, setloadCard] = useState(false);
  const [cardRemove, setCardRemove] = useState(false);

  const windowSize = useWindowSize();

  const cardReloadHandler = () => {
    setloadCard(true);
    setInterval(() => {
      setloadCard(false);
    }, 3000);
  };

  const cardRemoveHandler = () => {
    setCardRemove(true);
  };

  let loader;
  let cardHeaderRight = <></>;
  let cardHeader = <></>;
  let mainCardClass = [];
  let mainCardBodyClass = [];

  if (isOption) {
    cardHeaderRight = (
      <div className={`card-header-right ${optionClass}`}>
        <Dropdown align="end" className="btn-group card-option">
          <Dropdown.Toggle id="dropdown-basic" className="btn-icon">
            <i className="feather icon-more-horizontal" title="More" />
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" className="list-unstyled card-option">
            <Dropdown.Item as="li" className="dropdown-item" onClick={() => setFullCard(!fullCard)}>
              <i className={fullCard ? 'feather icon-minimize' : 'feather icon-maximize'} />
              <Link to="#"> {fullCard ? 'Restore' : 'Maximize'} </Link>
            </Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item" onClick={() => setCollapseCard(!collapseCard)}>
              <i className={collapseCard ? 'feather icon-plus' : 'feather icon-minus'} />
              <Link to="#"> {collapseCard ? 'Expand' : 'Collapse'} </Link>
            </Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item" onClick={cardReloadHandler}>
              <i className="feather icon-refresh-cw" />
              <Link to="#"> Reload </Link>
            </Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item" onClick={cardRemoveHandler}>
              <i className="feather icon-trash" />
              <Link to="#"> Remove </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  cardHeader = (
    <Card.Header>
      <Card.Title as="h5">{title}</Card.Title>
      {cardHeaderRight}
    </Card.Header>
  );

  if (fullCard) {
    mainCardClass = [...mainCardClass, 'full-card'];
  }

  if (loadCard) {
    mainCardClass = [...mainCardClass, 'card-load'];
    loader = (
      <div className="card-loader">
        <i className="pct-loader1 anim-rotate" />
      </div>
    );
  }

  if (cardRemove) {
    mainCardClass = [...mainCardClass, 'd-none'];
  }

  if (cardClass) {
    mainCardClass = [...mainCardClass, cardClass];
  }

  if (CardBodyClass) {
    mainCardBodyClass = [...mainCardBodyClass, CardBodyClass];
  }

  return fullCard ? (
    <Card
      className={mainCardClass.join(' ')}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, width: windowSize.width, height: windowSize.height }}
    >
      {cardHeader}
      <Collapse in={!collapseCard}>
        <div>
          <Card.Body className={mainCardBodyClass.join(' ')}>{children}</Card.Body>
        </div>
      </Collapse>
      {loader}
    </Card>
  ) : (
    <Card className={mainCardClass.join(' ')}>
      {cardHeader}
      <Collapse in={!collapseCard}>
        <div>
          <Card.Body className={mainCardBodyClass.join(' ')}>{children}</Card.Body>
        </div>
      </Collapse>
      {loader}
    </Card>
  );
}

MainCard.propTypes = {
  isOption: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  cardClass: PropTypes.string,
  optionClass: PropTypes.string,
  CardBodyClass: PropTypes.string
};
