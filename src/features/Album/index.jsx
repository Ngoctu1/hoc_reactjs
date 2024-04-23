import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const Album = [
        {
            id: 1,
            thumbnailUrl: 'https://i.pinimg.com/564x/96/79/02/967902c65824c288259406ac76ab5bd9.jpg',
            name: 'aaa',
        },
        {
            id: 2,
            thumbnailUrl: 'https://i.pinimg.com/564x/96/79/02/967902c65824c288259406ac76ab5bd9.jpg',
            name: 'bbb',
        },
        {
            id: 3,
            thumbnailUrl: 'https://i.pinimg.com/564x/96/79/02/967902c65824c288259406ac76ab5bd9.jpg',
            name: 'ccc',
        },
    ]
    return (
        <div>
            <p>song</p>
            <AlbumList albumlist={Album} />

        </div>
    );
}

export default AlbumFeature;