
import { useState } from "react";
import OderBanner from "../../Components/Banner/OderBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../../Components/Container/Container";

import './Oder.css'
import useMenuCategory from "../../Hooks/useMenuCategory";
import OderTabs from "../../Components/OderTabs/OderTabs";
import { useParams } from "react-router-dom";
import Helmets from "../../Components/Helmets/Helmets";
const Oder = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks', 'offereds' ]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const {drinks, desserts, pizza, salad, soups, offereds} = useMenuCategory();
    return (
        <>
         <Helmets title={'Order'} />
         <OderBanner/>
         <Container>


         <div className="my-32  ">

         <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={'flex overflow-x-auto overflow-y-hidden'}>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
            <Tab>offereds</Tab>
        </TabList>
        {/* Salad  */}
        <TabPanel>
            <OderTabs items={salad}/>
        </TabPanel>

        <TabPanel>
            <OderTabs items={pizza} />
        </TabPanel>

        <TabPanel>
            <OderTabs items={soups} />
        </TabPanel>

        <TabPanel>
            <OderTabs items={desserts} />
        </TabPanel>

        <TabPanel>
            <OderTabs items={drinks} />
        </TabPanel>

        <TabPanel>
            <OderTabs items={offereds} />
        </TabPanel>

        </Tabs>
         </div>
         </Container>
        </>
    );
};

export default Oder;