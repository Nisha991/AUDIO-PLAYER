import React from 'react';
import '../Artistpage.css';
import coldplay from '../images/coldplay.jpg'

function ArtistBanner() {
    return (
        <section className="main-content">
                <div className="musician-photo-details">
                    <div className="musician-photo">
                       <img src={coldplay} />
                    </div>
                    <div className="musician-details">
                        <h2>Coldplay</h2>
                        <h5>851 followers</h5>
                        <p>British Band </p>
                        <p>Coldplay are a British rock band that was formed in London in 1996.Vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, and drummer Will Champion met at University College London and began playing music together from 1996 to 1998, first calling themselves Pectoralz and then Starfish before finally changing their name to Coldplay.</p>
                        <button type="submit" className="play__button">Play All</button>
                        <span>Follow</span>
                        <h6>247 Tracks|128 Albums </h6>
                    </div>
                     
                </div>
            </section>
    )
}

export default ArtistBanner
