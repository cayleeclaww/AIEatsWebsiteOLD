import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="container mx-auto px-4">
    <h1>Hello word</h1>
    <p>This is a content to make our page longer</p> <div className="w-full h-screen bg-green-300"></div> <p>
    Lorem Ipsum is simply dummy text ...
    </p> </div>
    </>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //     <Link href="/about">About</Link>
    //     </p><br />
    //     <p>
    //     <Link href="/bydisease">By Disease</Link>
    //     </p><br />
    //     <p>
    //     <Link href="/bysymptom">By Symptom</Link>
    //     </p><br />
    //     <p>
    //     <Link href="/foodsensitivities">Food Sensitivites</Link>
    //     </p><br />
    //     <p>
    //     <Link href="/resources">Resources</Link>
    //     </p><br />

    //     <Link href="/">Back to home</Link>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
