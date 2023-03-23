import React from 'react'
import { Container, Tab, Table, Tabs } from 'react-bootstrap'
import Kedarnath from './SummerTime';
import '../assets/CSS/BestTiming.css';
import MonsoonTime from './MonsoonTime';
import WinterTime from './WinterTIme';
import MonthWise from './MonthWise';


export default function BestTiming() {
    return (
        <>
            <div className='mt-5 p-4' style={{ background: '#44bbe3', boxShadow: '-1px 7px 8px 1px rgb(0 0 0 / 20%)', borderRadius: '10px' }}>
                <Container>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th>Summer</th>
                                <th>April to June</th>
                                <th>28°C – 45°C</th>
                            </tr>
                            <tr>
                                <th>Monsoon</th>
                                <th>July to Sep</th>
                                <th>24°C – 32°C</th>
                            </tr>
                            <tr>
                                <th>Winter</th>
                                <th>Oct to March</th>
                                <th>5°C – 27°C</th>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>

            <div className='my-2 py-5'>
                <Container style={{ borderRadius: "20px", color: 'black', boxShadow: '0px 0px 10px 0px rgba(0,0,0,1)', padding: '30px' }}>
                    <Tabs
                        defaultActiveKey="summer"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        style={{ fontWeight: 'bold' }}
                    >
                        <Tab eventKey="summer" title="Summer (April -June)" className='p-4' style={{ background: '#a5eb54', borderRadius: '10px' }}>
                            <Kedarnath />
                        </Tab>
                        <Tab eventKey="monsoon" title="Monsoon (July-November)" className='p-4' style={{ background: '#a5eb54', borderRadius: '10px' }}>
                            <MonsoonTime />
                        </Tab>
                        <Tab eventKey="winter" title="Winter (November -March)" className='p-4' style={{ background: '#a5eb54', borderRadius: '10px' }}>
                            <WinterTime />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
            <div className='my-2 py-5'>
                <Container>
                    <MonthWise />
                </Container>
            </div>
        </>
    )
}
