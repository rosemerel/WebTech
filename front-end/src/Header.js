import './App.css';
import './Header.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  header: {
    height: '60px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
}

export default () => {
  return (
    <header className="App-header" css={styles.header}>
      <h1>Welcome on our chat application</h1>
    </header>
  );
}
