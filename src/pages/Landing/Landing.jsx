import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <br />
      <br />
      <br />
      <h1>hello, {user ? user.name : 'friend'}</h1>
  
    </main>
  )
}

export default Landing
