import React from 'react'
import FacebookAds from './add containers/FacebookAds';
import GoogleAnalytics from './add containers/GoogleAnalytics';
import SnapchatAds from './add containers/SnapchatAds';
import TwitterAds from './add containers/TwitterAds';


export default function AddComponent({ adData }) {


  return (
    <div>
      <h1 className='media-comp'>Facebook Ads</h1>
      <FacebookAds facebookAdData={adData.facebook_ads}></FacebookAds>
      <h1 className='media-comp'>Google Analytics</h1>
      <GoogleAnalytics googleAnalyticsData={adData.google_analytics}></GoogleAnalytics>
      <h1 className='media-comp'>Snapchat Ads</h1>
      <SnapchatAds snapchatAdData={adData.snapchat_ads}></SnapchatAds>
      <h1 className='media-comp'>Twitter Ads</h1>
      <TwitterAds twitterAdData={adData.twitter_ads}></TwitterAds>
    </div>
  )
}
