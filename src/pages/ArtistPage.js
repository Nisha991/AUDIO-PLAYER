import React, { Component } from 'react'
import ArtistBanner from '../components/ArtistBanner';
import ArtistPlaylist from '../components/ArtistPlaylist';
import '../Artistpage.css';
export default class ArtistPage extends Component {
    render() {
        return (
            <main>
             <ArtistBanner />
             <ArtistPlaylist />
            </main>
        )
    }
}
