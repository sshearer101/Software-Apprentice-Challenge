import React from 'react'
import { useState } from 'react'

export default function SnapchatAds({ snapchatAdData }) {

  const [search, setSearch] = useState('')
  const [advertisements, setAdvertisements] = useState(snapchatAdData)
  

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(search)
    
    const filteredItems = snapchatAdData.filter((adData) =>
      adData.campaign_name.toLowerCase().includes(search.toLowerCase()));
    setAdvertisements(filteredItems)
    setSearch('')
  }

  function handleReset(e){
    e.preventDefault()  
    setAdvertisements(snapchatAdData)
  }

  const ascendingOrder = () => {
    let ascendingItems = snapchatAdData.toSorted((a, b) => a.cost - b.cost);
    console.log("ascendingItems", ascendingItems);
    setAdvertisements([...ascendingItems])
  }

  const descendingOrder = () => {
    let descendingItems = snapchatAdData.toSorted((a, b) => b.cost - a.cost);
    console.log("descendingItems", descendingItems);
    setAdvertisements([...descendingItems])
  }

  const removeOrder = () => {
    setAdvertisements(snapchatAdData)
    console.log('unsortedItems')
  }


  return (
    <div>
    <form class="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Snapchat Ads"
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
            <div key={ad.id} className="snapchat-card">
              <h3>{ad.ad_squad_name}</h3>
              <h3>{ad.campaign_name}</h3>
              <h3>{ad.cost}</h3>
              <h3>{ad.creative_name}</h3>
              <h3>{ad.impressions}</h3>
              <h3>{ad.post_clicks}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
