import React from 'react'
import { useState } from 'react'

export default function TwitterAds({ twitterAdData }) {

  const [search, setSearch] = useState('')
  const [advertisements, setAdvertisements] = useState(twitterAdData)



  function handleSubmit(e) {
    e.preventDefault()
    setSearch(search)

    const filteredItems = twitterAdData.filter((adData) =>
      adData.campaign.toLowerCase().includes(search.toLowerCase()));
    setAdvertisements(filteredItems)
    setSearch('')
  }

  function handleReset(e) {
    e.preventDefault()
    setAdvertisements(twitterAdData)
  }

  const ascendingOrder = () => {
    let ascendingItems = twitterAdData.toSorted((a, b) => a.spend - b.spend);
    console.log("ascendingItems", ascendingItems);
    setAdvertisements([...ascendingItems])
  }

  const descendingOrder = () => {
    let descendingItems = twitterAdData.toSorted((a, b) => b.spend - a.spend);
    console.log("descendingItems", descendingItems);
    setAdvertisements([...descendingItems])
  }

  const removeOrder = () => {
    setAdvertisements(twitterAdData)
    console.log('unsortedItems')
  }


  return (
    <div>
      <form class="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Twitter Ads"
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
            <div key={ad.id} className="twitter-card">
              <h3>{ad.ad_group}</h3>
              <h3>{ad.campaign}</h3>
              <h3>{ad.image_name}</h3>
              <h3>{ad.impressions}</h3>
              <h3>{ad.post_clicks}</h3>
              <h3>{ad.spend}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
