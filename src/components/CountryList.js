import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Country from './Country';

function CountryList({countries}) {
    return (
        <div>
            <Row>
          {countries.map(country => (
            <Col sm={6} md={4} lg={3}>
              <Country key={country.name} country={country} />
          </Col>
          ))}
        </Row>
        </div>
    );
}

export default CountryList;