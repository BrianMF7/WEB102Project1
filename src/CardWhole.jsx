import React from 'react'
import Card from './Card'
import './Card.css'
const CardWhole = () => {
            const cards = [
                  {
            image: "https://static01.nyt.com/images/2011/08/26/arts/26JPFLUSHING2/26JPFLUSHING2-jumbo.jpg?quality=75&auto=webp&disable=upscale",
            title: "Flushing Meadows Corona Park",
            link: "https://www.nycgovparks.org/parks/flushing-meadows-corona-park"
                 },
        {
            image: "https://queenspost.com/wp-content/uploads/2023/06/IMG_2984.jpeg",
            title: "Gantry Plaza State Park Sports Field",
            link: "https://www.nycsoccer.com/fields/gantry-plaza-state-park"
             },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5af1f41c96e76f0fffa9a9be/0cb74d61-48f2-403d-b66f-4e0e5298e874/NYC+Footy+Roosevelt+Island+Field.jpeg",
            title: "Jack McManus Field",
            link: "https://www.nycfooty.com/roosevelt-island-octagon?la-state=OPEN_REGISTRATIONS_AND_UPCOMING&la-location=Roosevelt+Island+Octagon+%7C+Jack+McManus+Field+%28ROO%29&la-code=Bronx&la-code=Brooklyn&la-code=Manhattan&la-code=Queens&la-hasCustomFilters=true"
             },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5af1f41c96e76f0fffa9a9be/5e8f6051-aed1-4bff-ae43-2c8548d31b73/20230226-+NYC+Footy+%28Astoria+Park%29-048+copy.jpeg",
              title: "Astoria Park",
            link: "https://www.nycgovparks.org/parks/astoria-park"
             },
        {
            image: "https://images.squarespace-cdn.com/content/v1/60ed98d576f4d92f7813ab29/1663250537199-3WEIAU20H4CX5HQVNE6D/WhatsApp+Image+2022-09-14+at+6.36.01+PM.jpeg",
            title: "NYCFC Futsal Court",
            link: "https://www.eleftheriapancyprian.com/news/technical-training-in-the-nycfc-futsal-court-starts"
             },
        {
            image: "https://images.squarespace-cdn.com/content/v1/60ed98d576f4d92f7813ab29/1633937597871-Q07NBJYKS2H0121BA5Z7/WhatsApp+Image+2021-10-10+at+5.57.44+AM.jpeg",
            title: "Frank Principe Park",
            link: "https://www.nycgovparks.org/parks/frank-principe-park"
        },
        {
            image: "https://cdn.prod.website-files.com/65b3fab149222717a162eebb/67d43c88b999e736a0203dbc_Leavitt_Park_td_(2022-04-22)_06_-_Leavitt_Field.jpg",
            title: "St. Michael's Playground",
            link: "https://www.nycgovparks.org/parks/st-michaels-playground"
        },
        {
            image: "https://static.nycgovparks.org/images/photo_gallery/full_size/23663.jpg",
            title: "Big Bush Playground",
            link: "https://www.nycgovparks.org/parks/big-bush-park"
             },
        {
            image: "https://www.socceroof.com/_astro/long-island-city-field_ZElu2n.webp",
            title: "Socceroof - Long Island City",
            link: "https://www.socceroof.com/en/"
        },
              {
            image: "https://www.mini-pitch.com/Content/img/Projects/Upper90-Soccer-Center-Queens-NY.jpg",
            title: "Soccer Post Queens",
            link: "https://soccerpost.com/tools/locations/locations/queens-soccer-post?srsltid=AfmBOooTyDPVMAFfVWy3WOnsHlIiB5Bv-bMtdZZ7yKD4HQFm0MOB5znI"
        }, {
            image: "https://www.huntercollegeathletics.com/images/2016/7/19/Randall%20Island%202.jpg",
            title: "Randall's Island",
            link: "https://www.nycfooty.com/upper-east-side-randalls-island"
        }, {
            image: "https://s3-media0.fl.yelpcdn.com/bphoto/MhsyfRTvHdBn7jwNy--9Rw/1000s.jpg",
            title: "Forest Park Soccer Field",
            link: "https://www.nycgovparks.org/parks/forest-park"
        }
             ]

    return (
             <div className="CardWhole">
            {cards.map((card, index) => (
                            <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                             link={card.link}
                />
            ))}
                </div>
    )
}

export default CardWhole