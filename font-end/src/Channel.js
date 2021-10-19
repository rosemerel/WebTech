import React from 'react';

import Messages from './Messages';
import MessageSend from './MessageSend'


export default ({addMessage, messages, channel, styles}) => {
    return(
        <div className="App-channel" style={styles.channel}>
          <Messages messages={messages} channel={channel} styles={styles}/>
          <MessageSend addMessage={addMessage} styles={styles}/>
        </div>            
    )
}