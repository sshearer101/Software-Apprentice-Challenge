import React from 'react'
import { useState } from 'react'

export default function FacebookAds({ facebookAdData }) {

  const [search, setSearch] = useState('')
  const [advertisements, setAdvertisements] = useState(facebookAdData)



  function handleSubmit(e) {
    e.preventDefault()
    setSearch(search)

    const filteredItems = facebookAdData.filter((adData) =>
      adData.campaign_name.toLowerCase().includes(search.toLowerCase()));
    setAdvertisements(filteredItems)
    setSearch('')
  }

  function handleReset(e) {
    e.preventDefault()
    setAdvertisements(facebookAdData)
  }
  function ascendingOrder() {
    let ascendingItems = facebookAdData.toSorted((a, b) => a.spend - b.spend)
    console.log("ascendingItems", ascendingItems);
    setAdvertisements([...ascendingItems])
  }

  function descendingOrder() {
    let descendingItems = facebookAdData.toSorted((a, b) => b.spend - a.spend)
    console.log("descendingItems", descendingItems);
    setAdvertisements([...descendingItems])
  }

  function removeOrder() {
    setAdvertisements(facebookAdData)
    console.log('unsortedItems', facebookAdData)
  }

  return (
    <div>
      <form class="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Facebook Ads"
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
            <div key={ad.id} className="facebook-card">
              <h3>{ad.ad_name}</h3>
              <h3>{ad.campaign_name}</h3>
              <h3>{ad.clicks}</h3>
              <h3>{ad.impressions}</h3>
              <h3>{ad.media_buy_name}</h3>
              <h3>{ad.spend}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
