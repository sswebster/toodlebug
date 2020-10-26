import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
		<li className={styles.navigationItem}>
			<Link to="/">Home</Link>
		</li>
		<li className={styles.navigationItem}>
			<Link to="/sammy/">Sammy</Link>
		</li>
		<li className={styles.navigationItem}>
			<Link to="/boyden/">Boyden</Link>
		</li>
    </ul>
  </nav>
)
