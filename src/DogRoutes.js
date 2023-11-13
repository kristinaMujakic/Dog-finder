import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

const DogRoutes = ({ dogs }) => {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
            <Route element={<Navigate to="/dogs" />} />
        </Routes>
    );
};

export default DogRoutes;




