import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';


AlbumList.propTypes = {
    albumlist: PropTypes.array,

};
AlbumList.defaultProps = {
    albumlist: [],
}

function AlbumList({ albumlist }) {
    return (
        <ul className='album-list'>
            {albumlist.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;