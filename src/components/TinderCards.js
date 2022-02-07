import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from '../firebase';
import '../css/TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {

        database.collection("people").get().then((docData => {
            console.log(docData)
            var peopleArray = [];
            docData.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                peopleArray.push(doc.data())

            });
            setPeople(peopleArray)

            
        }))
        
    }, [])

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}

                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
