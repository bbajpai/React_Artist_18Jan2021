import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props)=>{

    const list=({allArtists})=>{
        console.log(props)
        if(allArtists){
            return allArtists.map((item)=>{
                return(
                    <Link key={item.id} class="artist_item">
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
       
    }

    return(
        <div className="artists_list">
           <h3>Browse the artists</h3>
            {list(props)}
        </div>
    )
}

export default ArtistList;