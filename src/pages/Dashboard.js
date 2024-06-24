import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';

const Dashboard = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);

    useEffect(() => {
        // Get 100 Coins
        getData();
      }, []);
    
      const getData = () => {
        setLoading(true);
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((response) => {
            console.log("RESPONSE>>>", response.data);
            setCoins(response.data);
            setPaginatedCoins(response.data.slice(0, 10));
            setLoading(false);
          })
          .catch((error) => {
            console.log("ERROR>>>", error.message);
          });
      };
    


    
  return (
    <div>
        <Header />
        <TabsComponent coins={coins}/>
    </div>
  )
}

export default Dashboard