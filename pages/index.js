// Main entry point of your app
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import StreamerGrid from '../components/StreamerGrid'


const Home = () => {

  const [favChannels, setFavChannels] = useState([]);
  
  const addStreamChannel = async event => {
      event.preventDefault()

      const { value } = event.target.elements.name

      const path = `https://${window.location.hostname}`

      const response = await fetch(`${path}/api/twitch`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ data: value})
      })

      const json = await response.json()

      setFavChannels(prevState => [...prevState, json.data])
  }


  const renderHome = () => (
  <div className={styles.formContainer}>
  <form onSubmit={addStreamChannel}>
    <input id="name" placeholder="Twitch Channel Name" type="text" required>
    </input>
    <button type="submit">
    Add Streamer
    </button>
    
  </form>
  </div>)

  return (
    <div className={styles.container}>
      <Head>
        <title>🎥 Personal Twitch Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.inputContainer}>
      {renderHome()}
      <StreamerGrid channels={favChannels} />
      {console.log("fav channels", favChannels)}
      </div>
    </div>
  )
}

export default Home