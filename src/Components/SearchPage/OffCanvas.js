import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FacetList from './Facet/FacetList';

export default function OffCanva() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ButtonDivStyle = {
    marginLeft: '20px',
    fontFamily: 'Jost',
    fontWeight: '500'
  }

  const Button = {
    backgroundColor: 'white',
    border: 'none',
  }

  const Button2 = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e2e2',
    fontFamily: 'Maven Pro',
    fontWeight: '100',
    fontSize: '18px',
    width: '105px'
  }

  const closeBtn = {
    fontSize: '10px'
  }

  return (
    <>
      <div style={ButtonDivStyle}>
        <button style={Button}>
          <img src='https://www.jimmychoo.com/on/demandware.static/Sites-jchgb-Site/-/en_GB/v1658985216527/images/filters-icon.svg' style={{display: 'inline-block'}}/>&nbsp; 
          <span style={{display: 'inline-block' }}><a style={{ color: "#000", textDecoration: 'none', fontSize: '18px'}}href="#" onClick={handleShow}>Show Filters</a></span>
        </button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={closeBtn}>
          <Offcanvas.Title><button style={Button2} href="#" variant="secondary" size="lg" disabled>Clear All</button></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FacetList/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}