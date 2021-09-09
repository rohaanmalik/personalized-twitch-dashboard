import React from 'react';

const StreamerGrid = ({ channels }) => {

  const renderGridItem = channel => {
    <div key={channel.id} className={styles.gridItem}>
      <Image layout="fill" src={channel.thumbnail_url} />
      <div classnName={styles.gridItemContent}>
        <p>{channel.display_name}</p>
        {channel.is_live && <p> 🔴Live Now</p>}
        {!channel.is_live && <p> ⚫️Offline </p>}
      </div>
    </div>
  }


  return (<div>
    <p> Hello StreamerGrid </p>
    {channels.map((item,i) => <li key={i}>{item}</li>)}
    </div>)
}

export default StreamerGrid;