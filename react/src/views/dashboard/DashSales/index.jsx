// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';

// project imports
import FlatCard from 'components/Widgets/Statistic/FlatCard';
import ProductCard from 'components/Widgets/Statistic/ProductCard';
import FeedTable from 'components/Widgets/FeedTable';
import ProductTable from 'components/Widgets/ProductTable';
import { SalesCustomerSatisfactionChartData } from './chart/sales-customer-satisfication-chart';
import { SalesAccountChartData } from './chart/sales-account-chart';
import { SalesSupportChartData } from './chart/sales-support-chart';
import { SalesSupportChartData1 } from './chart/sales-support-chart1';
import feedData from 'data/feedData';
import productData from 'data/productTableData';

// -----------------------|| DASHBOARD SALES ||-----------------------//
export default function DashSales() {
  return (
    <Row>
      <Col md={12} xl={6}>
        <Card className="flat-card">
          <div className="row-table">
            <Card.Body className="col-sm-6 br">
              <FlatCard params={{ title: 'Customers', iconClass: 'text-primary mb-1', icon: 'group', value: '1000' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
              <FlatCard params={{ title: 'Revenue', iconClass: 'text-primary mb-1', icon: 'language', value: '1252' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 card-bod">
              <FlatCard params={{ title: 'Growth', iconClass: 'text-primary mb-1', icon: 'unarchive', value: '600' }} />
            </Card.Body>
          </div>
          <div className="row-table">
            <Card.Body className="col-sm-6 br">
              <FlatCard
                params={{
                  title: 'Returns',
                  iconClass: 'text-primary mb-1',
                  icon: 'swap_horizontal_circle',
                  value: '3550'
                }}
              />
            </Card.Body>
            <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
              <FlatCard params={{ title: 'Downloads', iconClass: 'text-primary mb-1', icon: 'cloud_download', value: '3550' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 card-bod">
              <FlatCard params={{ title: 'Order', iconClass: 'text-primary mb-1', icon: 'shopping_cart', value: '100%' }} />
            </Card.Body>
          </div>
        </Card>
        <Row>
          <Col md={6}>
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">53.94%</h2>
                <span className="text-primary">Conversion Rate</span>
                <p className="mb-3 mt-3">Number of conversions divided by the total visitors. </p>
              </Card.Body>
              <Chart {...SalesSupportChartData()} />
              <Card.Footer className="border-0 bg-primary text-white background-pattern-white">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0 text-white">10</h4>
                    <span>2018</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">15</h4>
                    <span>2017</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">13</h4>
                    <span>2016</span>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">1432</h2>
                <span className="text-primary">Order Delivered</span>
                <p className="mb-3 mt-3">Number of conversions divided by the total visitors. </p>
              </Card.Body>
              <Card.Footer className="border-0">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0">130</h4>
                    <span>May</span>
                  </Col>
                  <Col>
                    <h4 className="m-0">251</h4>
                    <span>June</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 ">235</h4>
                    <span>July</span>
                  </Col>
                </Row>
              </Card.Footer>
              <Chart type="bar" {...SalesSupportChartData1()} />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <h5>Department wise monthly sales report</h5>
          </Card.Header>
          <Card.Body>
            <Row className="pb-2">
              <div className="col-auto m-b-10">
                <h3 className="mb-1">$21,356.46</h3>
                <span>Total Sales</span>
              </div>
              <div className="col-auto m-b-10">
                <h3 className="mb-1">$1935.6</h3>
                <span>Average</span>
              </div>
            </Row>
            <Chart {...SalesAccountChartData()} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Body>
            <h6>Customer Satisfaction</h6>
            <span>It takes continuous effort to maintain high customer satisfaction levels Internal and external.</span>
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <Chart type="pie" {...SalesCustomerSatisfactionChartData()} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Product Table */}
        <ProductTable {...productData} />
      </Col>
      <Col md={12} xl={6}>
        <Row>
          <Col sm={6}>
            <ProductCard params={{ title: 'Total Profit', primaryText: '$1,783', icon: 'card_giftcard' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Total Orders', primaryText: '15,830', icon: 'local_mall' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Average Price', primaryText: '$6,780', icon: 'monetization_on' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ title: 'Product Sold', primaryText: '6,784', icon: 'local_offer' }} />
          </Col>
        </Row>
        {/* Feed Table */}
        <FeedTable {...feedData} />
      </Col>
    </Row>
  );
}
