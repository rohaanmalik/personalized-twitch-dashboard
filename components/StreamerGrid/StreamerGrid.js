import React from 'react';
import Image from 'next/image';
import styles from '../../styles/StreamerGrid.module.css';

const StreamerGrid = ({ channels }) => {

  const renderGridItem = channel => {
    {console.log("the channel is: ", channel)}
    return (<div key={channel.id} className={styles.gridItem}>
      <Image layout="fill" src={channel.thumbnail_url} />
      <div className={styles.gridItemContent}>
        <p>{channel.display_name}</p>
        {channel.is_live && <p> 🔴Live Now</p>}
        {!channel.is_live && <p> ⚫️Offline </p>}
      </div>
    </div>)
  }


  return (<div>
    <h2> Welcome to Rohaan's Dashboard 😍</h2>
    {console.log("channels: ",channels)}
    {channels.map(channel => renderGridItem(channel))}
    </div>)
}

export default StreamerGrid;