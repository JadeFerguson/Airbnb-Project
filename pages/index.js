import Head from 'next/head';
import Banner from '../Components/Banner';
import Header from '../Components/Header';
import MediumCard from '../Components/MediumCard';
import SmallCard from '../Components/SmallCard';

// Functional component can make one component in react and use it multiple times
// Putting explore data through function will pull it apart
export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Self closed header */}
      <Header />

      {/*Banner */}
      <Banner />

    {/*max-w max width with mx-auto makes it automatically configure the margin space */}
      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/*Pull some data from from a server - using server side rendering with every request that happens on
          page it will re-render(there is also static only renders once) - API endpoints
          The {} allows to have JS in html */}
          
          <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map(({img, title}) => (
                <MediumCard 
                  key={img}
                  img={img}
                  title={title}
                />
              ))}
            </div>
          </section>
        </section>
      </main>

    </div>
  );
}

// Only works in pages
export async function getStaticProps() {
  // Have to use json keeper link for this to work
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
