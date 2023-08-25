import styles from './layout.module.css';

type Props = {
  children: string | JSX.Element | JSX.Element[] 
}

export default function Layout({ children}: Props ) {
  return <div className={styles.container}>{children}</div>;
}