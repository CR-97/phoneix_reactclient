import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Table } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import S1 from './StandingT1';
import S2 from './StandingT2';
import S3 from './StandingT3';
import S4 from './StandingT4';
import S5 from './StandingT5';

const API = 'https://guarded-depths-49314.herokuapp.com';

const TABS = [
  { id: '1', label: 'BundesLiga', key: 'bunde', code: 2002, Component: S1 },
  { id: '2', label: 'LaLiga', key: 'liga', code: 2014, Component: S2 },
  { id: '3', label: 'Ligue 1', key: 'ligue1', code: 2015, Component: S3 },
  { id: '4', label: 'Premier League', key: 'premier', code: 2021, Component: S4 },
  { id: '5', label: 'Serie A', key: 'seriesA', code: 2019, Component: S5 },
];

function Standing() {
  const [activeTab, setActiveTab] = useState('1');
  const [data, setData] = useState({ bunde: [], liga: [], ligue1: [], premier: [], seriesA: [] });

  useEffect(() => {
    TABS.forEach(tab => {
      axios
        .get(`${API}/getStanding/${tab.code}`)
        .then(r => setData(prev => ({ ...prev, [tab.key]: r.data })))
        .catch(() => {});
    });
  }, []);

  const tableHead = (
    <thead>
      <tr>
        <td>Pos</td>
        <th>Team</th><th>MP</th><th>W</th><th>D</th><th>L</th>
        <th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
      </tr>
    </thead>
  );

  return (
    <div>
      <Container>
        <h1 className="page-title">Standings</h1>
      </Container>
      <Container>
        <Nav tabs>
          {TABS.map(tab => (
            <NavItem key={tab.id}>
              <NavLink
                className={classnames({ active: activeTab === tab.id })}
                onClick={() => setActiveTab(tab.id)}
                style={{ cursor: 'pointer' }}
              >
                {tab.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <br />
        <TabContent activeTab={activeTab}>
          {TABS.map(tab => (
            <TabPane key={tab.id} tabId={tab.id}>
              <Container>
                <Table className="standing-table" bordered hover responsive>
                  {tableHead}
                  <tbody>
                    {data[tab.key].map((item, i) => (
                      <tab.Component key={i} item={item} />
                    ))}
                  </tbody>
                </Table>
              </Container>
            </TabPane>
          ))}
        </TabContent>
      </Container>
      <br /><br />
    </div>
  );
}

export default Standing;
