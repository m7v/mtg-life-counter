import React from 'react';

export const Avatar = ({currentHero, nextHero, prevHero}) =>
    <div className="avatar--container">
        <div className="btn avatar-controls btn-next" onClick={nextHero}/>
        <div className="btn avatar-controls btn-prev" onClick={prevHero}/>
        <figure>
            <div className={'line'}/>
            <div>
                <div className={'full ' + currentHero.class}/>
                <figcaption><h3>{ currentHero.name }</h3></figcaption>
            </div>
        </figure>
    </div>;
