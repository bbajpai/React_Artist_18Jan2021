import React,{Component} from 'react';


//Component
import Banner from '../components/banner';
import ArtistList from '../components/artistList';

const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json=>{
            this.setState({artists:json})
        })
    }
    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtists={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;