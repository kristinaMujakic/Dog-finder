import React from 'react';
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {

    return (
        <div>
            {dogs.map((dog) =>
                <div>
                    <p>Hello, my name is: {dog.name}</p>
                    <img src={dog.src} alt={dog.name} />
                    <h3 className="mt-3">
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </h3>
                </div>
            )
            }
        </div>
    );

};

export default DogList;