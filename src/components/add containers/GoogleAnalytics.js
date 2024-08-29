import React from 'react'
import { useState } from 'react';

export default function GoogleAnalytics({ googleAnalyticsData }) {


  console.log(googleAnalyticsData)

  const [search, setSearch] = useState('')
  const [advertisements, setAdvertisements] = useState(googleAnalyticsData)


  function handleSubmit(e) {
    e.preventDefault()
    setSearch(search)

    const filteredItems = googleAnalyticsData.filter((adData) =>
      adData.utm_campaign.toLowerCase().includes(search.toLowerCase()));
    setAdvertisements(filteredItems)
    setSearch('')
  }

  function handleReset(e) {
    e.preventDefault()
    setAdvertisements(googleAnalyticsData)
  }


  const ascendingOrder = () => {
    let ascendingItems = googleAnalyticsData.toSorted((a, b) => a.results - b.results);
    console.log("ascendingItems", ascendingItems);
    setAdvertisements([...ascendingItems])
  }

  const descendingOrder = () => {
    let descendingItems = googleAnalyticsData.toSorted((a, b) => b.results - a.results);
    console.log("descendingItems", descendingItems);
    setAdvertisements([...descendingItems])
  }

  const removeOrder = () => {
    setAdvertisements(googleAnalyticsData)
    console.log('unsortedItems', googleAnalyticsData)
  }


  

  return (
    <div>
      <form class="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Google Ads"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
        <button type="reset" className="search-btn" onClick={handleReset}>Reset</button>

      </form>
      <div className='sort-div'>
        <button className="sort-btn" onClick={() => ascendingOrder()}>Ascending Order</button>
        <button className="sort-btn" onClick={() => descendingOrder()}>Descending Order</button>
        <button className="sort-btn" onClick={() => removeOrder()}>Remove Ordering</button>
      </div>
      <div>
        {advertisements.map((ad) => {
          return (
            <div key={ad.id} className="google-card">
              <h3>{ad.results}</h3>
              <h3>{ad.utm_campaign}</h3>
              <h3>{ad.utm_content}</h3>
              <h3>{ad.utm_medium}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
