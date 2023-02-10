import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Great thing about components with react you can use them across different pages
function Search() {
  return (
    <div>
        <Header />

        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">300+ stays for 5 number of guests</p>

                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                <div className="hidden lg:inline-flex mb-5 space-x-3
                text-gray-800 whitespace-nowrap">
                    {/**Can make a custom utility classname or tailwind component in globals file */}
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of Place </p>
                    <p className="button">Price</p>
                    <p className="button">CRooms and Beds</p>
                    <p className="button">More Filters</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search;