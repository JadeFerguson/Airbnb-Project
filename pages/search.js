import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useRouter } from 'next/router';
import {format} from "date-fns";
import InfoCard from '../Components/InfoCard';

// Great thing about components with react you can use them across different pages
function Search({searchResults}) {
    const router = useRouter();

    // es6 destructuring
    const {location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
 
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">300+ stays - {range} - for {noOfGuests} guests</p>

                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                <div className="hidden lg:inline-flex mb-5 space-x-3
                text-gray-800 whitespace-nowrap">
                    {/**Can make a custom utility classname or tailwind component in globals file */}
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of Place </p>
                    <p className="button">Price</p>
                    <p className="button">Rooms and Beds</p>
                    <p className="button">More Filters</p>
                </div>
            </section>
        </main>

        <div className="flex flex-col">
            {searchResults.map(
                ({ img, location, title, description, star, price, total }) => (
                <InfoCard 
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                />
            ))}

        </div>
        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then(res => res.json());

    return {
        props: {
            searchResults,
        },
    };
}