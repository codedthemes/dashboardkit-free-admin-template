import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Card, Table } from 'react-bootstrap';

// project import
import SimpleBar from 'simplebar-react';

// -----------------------|| PRODUCT TABLE ||-----------------------//

export default function ProductTable({ wrapclass, title, height, tableheading, rowdata }) {
  return (
    <Card className={wrapclass}>
      <Card.Header>
        <Card.Title as="h5">{title}</Card.Title>
      </Card.Header>
      <Card.Body className="p-0">
        <SimpleBar style={{ height }}>
          <Table responsive className="mb-0">
            <thead>
              <tr>
                {tableheading.map((x, i) => (
                  <th key={i}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowdata.map((y, j) => (
                <tr key={j}>
                  <td>{y.name}</td>
                  <td>{y.image}</td>
                  <td>
                    <div>
                      <label className={`badge badge-${y.status.badge}`}>{y.status.label}</label>
                    </div>
                  </td>
                  <td>{y.price}</td>
                  <td>
                    {y.action.map((z, k) => (
                      <Link to={z.link} key={k}>
                        <i className={`feather icon-${z.icon} f-16 text-${z.textcls} ${k > 0 ? 'ms-3' : ''}`} title="Action" />
                      </Link>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </SimpleBar>
      </Card.Body>
    </Card>
  );
}

ProductTable.propTypes = {
  wrapclass: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  tableheading: PropTypes.any,
  rowdata: PropTypes.any
};
