import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from "react-helmet"

const Restaurants = () => {
    const cuisines = useStaticQuery(graphql`
        query {
            allMongodbSampleRestaurantsRestaurants {
                distinct(field: cuisine)
            }
        }
    `)
    const listCuisines = cuisines.allMongodbSampleRestaurantsRestaurants.distinct.map((cuisine) =>
        <li key={cuisine}>{cuisine}</li>
    );
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            <h2>Types of Cuisines</h2>
            <ul>{listCuisines}</ul>
        </>
    )
}

export default Restaurants