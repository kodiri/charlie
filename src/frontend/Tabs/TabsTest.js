import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PremTable from '../PremTable/PremTable';
import Matches from '../Matches/Matches';
import ClTables from '../clTable/clTable';
import './Tabs.css';


export default function Test({team}) {
    return (
        <>
            <div className='container-userpage'>
                <div className='tabs'>
                    <Tabs>
                        <TabList>
                            <Tab>Premier League Matches</Tab>
                            <Tab>Premier League Table</Tab>
                            <Tab>Champions League Tables</Tab>
                        </TabList>
                        <TabPanel><Matches team={team}  /> </TabPanel>
                        <TabPanel><PremTable /> </TabPanel>
                        <TabPanel><ClTables /> </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}