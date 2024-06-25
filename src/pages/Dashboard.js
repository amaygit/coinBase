import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TopButton from "../components/Common/TopButton";
import PaginationComponent from "../components/Dashboard/Pagination";
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
        
        const handleChange = (e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        };
        var filteredCoins = coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
        );

          const handlePageChange = (event, value) => {
            setPage(value);
            // Value = new page number
            var initialCount = (value - 1) * 10;//0 -9 80
            setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
          };
        

    
  return (
    <>
        <Header />
        {loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
        <TopButton />
    </>
  )
}

export default Dashboard