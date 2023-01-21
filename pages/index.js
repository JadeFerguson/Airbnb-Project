import Head from 'next/head'
import Header from '../Components/Header';

// Functional component can make one component in react and use it multiple times
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Self closed header */}
      <Header />

      {/*Banner */}

    </div>
  );
}
