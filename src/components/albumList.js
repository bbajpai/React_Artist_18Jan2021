import React from 'react';

const AlbumList = (props) =>{

    const showList = ({albumlist})=>{
        console.log(props);
        if(albumlist){
            return albumlist.map((item)=>{
                return(
                    <img key={item.albumId} alt={item.title} src={`/images/albums/${item.cover}.jpg`}></img>
                )
            })
        }
    }
    return(
        <div className="albums_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;