import React from 'react';

import Channels from './Channels';
import Channel from './Channel';

export default ({addMessage, messages, channel, styles}) => {

    return (
        <main className="App-main" style={styles.main}>
            <Channels styles={styles}/>   
            <Channel addMessage={addMessage} messages={messages} channel={channel} styles={styles}/>
        </main>
    )
}