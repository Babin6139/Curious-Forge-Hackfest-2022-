import React from 'react';
import Cards from './../../components/cards.js/Cards'
import assetData from './../../static/assetCards'

const Dashboard = () => {
    const displayCards= assetData.map(el=><Cards cardData={el}/>)
    return (
        <div>
            {displayCards}
        </div>
    );
};

export default Dashboard;