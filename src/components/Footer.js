import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';

const url = 'https://guarded-depths-49314.herokuapp.com/getComp';

function FooterPagePro() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setCompetitions(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <footer style={{ background: 'linear-gradient(135deg, rgb(33,43,65) 0%, rgb(44,56,85) 100%)', color: '#ccc' }} className="font-small pt-4 mt-4">
      <Container className="text-center text-md-start">
        <Row className="text-center text-md-start mt-3 pb-3">
          <Col md="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold text-white">Links</h6>
            <p><Link to="/" className="text-secondary text-decoration-none">Home</Link></p>
            <p><Link to="/team" className="text-secondary text-decoration-none">Teams</Link></p>
            <p><Link to="/standings" className="text-secondary text-decoration-none">Standing</Link></p>
            <p><Link to="/scorer" className="text-secondary text-decoration-none">Top Scorer</Link></p>
            <p><Link to="/matches" className="text-secondary text-decoration-none">Matches</Link></p>
            <p><Link to="/profile" className="text-secondary text-decoration-none">Profile</Link></p>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold text-white">Leagues Available</h6>
            {competitions.map((item, idx) => (
              <p key={idx} style={{ fontSize: '0.85rem' }}>
                {item.comp_name} ({item.comp_area})
              </p>
            ))}
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold text-white">Contact</h6>
            <p><FaHome className="me-2" />Z-1, Lebuh Bukit Jambul, 11900 Bayan Lepas, Pulau Pinang.</p>
            <p><FaEnvelope className="me-2" />https://newinti.edu.my</p>
            <p><FaPhone className="me-2" />+6 04-631 0138</p>
          </Col>
        </Row>
        <hr style={{ borderColor: 'rgba(255,255,255,0.15)' }} />
        <Row className="d-flex align-items-center pb-3">
          <Col md="8">
            <p className="text-center text-md-start" style={{ color: '#aaa', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <Link to="/" className="text-secondary text-decoration-none">
                phoneixfootball.com – Created By: Richard Chuah
              </Link>
            </p>
          </Col>
          <Col md="4">
            <div className="text-center text-md-end">
              <a className="me-2 text-secondary" href="https://www.facebook.com/BleacherReportFootball/" target="_blank" rel="noopener noreferrer"><FaFacebook size={18} /></a>
              <a className="me-2 text-secondary" href="https://twitter.com/brfootball" target="_blank" rel="noopener noreferrer"><FaTwitter size={18} /></a>
              <a className="me-2 text-secondary" href="https://plus.google.com/discover/wz4saB" target="_blank" rel="noopener noreferrer"><FaGoogle size={18} /></a>
              <a className="text-secondary" href="https://www.instagram.com/bleacherreport/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPagePro;