import React from 'react';
import './List.css';

const List = (props) => {

    const { data } = props;

    return (
        <div className="list">
            {data?.map((item, index) => (
                <div className="item" key={index}>
                    <h3>📖 {item.name}</h3>
                    <p>👥 {item.authors.join(',')}</p>
                    <p><a href={item.url} target='_blank' rel="noreferrer">〰️ {item.url}</a></p>
                </div>
            ))}
        </div>
    );
}

export default List;