import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Table } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import Table1 from './ScorerT1';
import Table2 from './ScorerT2';
import Table3 from './ScorerT3';
import Table4 from './ScorerT4';
import Table5 from './ScorerT5';
import Table6 from './ScorerT6';

const API = 'https://guarded-depths-49314.herokuapp.com';

const TABS = [
  { id: '1', label: 'BundesLiga', key: 'bunde', code: 2002, Component: Table1 },
  { id: '2', label: 'LaLiga', key: 'liga', code: 2014, Component: Table2 },
  { id: '3', label: 'Ligue 1', key: 'ligue1', code: 2015, Component: Table3 },
  { id: '4', label: 'Premier League', key: 'premier', code: 2021, Component: Table4 },
  { id: '5', label: 'Serie A', key: 'seriesA', code: 2019, Component: Table5 },
  { id: '6', label: 'UEFA', key: 'uefa', code: 2001, Component: Table6 },
];

function Scorer() {
  const [activeTab, setActiveTab] = useState('1');
  const [data, setData] = useState({ bunde: [], liga: [], ligue1: [], premier: [], seriesA: [], uefa: [] });

  useEffect(() => {
    TABS.forEach(tab => {
      axios
        .get(`${API}/getScorer/${tab.code}`)
        .then(r => setData(prev => ({ ...prev, [tab.key]: r.data })))
        .catch(() => {});
    });
  }, []);

  const tableHead = (
    <thead>
      <tr>
        <th>Player</th>
        <th>Club</th>
        <th>Goals</th>
      </tr>
    </thead>
  );

  return (
    <div>
      <Container>
        <h1 className="page-title">Top Scorers</h1>
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

export default Scorer;