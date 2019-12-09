import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PremTable from '../PremTable/PremTable';
import Matches from '../Matches/Matches';
import './Tabs.css';

export default function Test() {
    return (
        <>
            <div className='container-userpage'>
                <div className='tabs'>
                    <Tabs>
                        <TabList>
                            <Tab>Premier League Matches</Tab>
                            <Tab>Premier league Table</Tab>
                        </TabList>
                        <TabPanel><Matches /> </TabPanel>
                        <TabPanel><PremTable /> </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}