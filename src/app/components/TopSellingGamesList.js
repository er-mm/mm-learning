import React from "react";
import fetch from 'isomorphic-fetch';
import { Details } from './Details';

export class TopSellingGamesList extends React.Component {

    constructor() {
        super()
        this.state = {
            allData: [],
            id: 0
        }
    }

    componentDidMount() {
        fetch('http://starlord.hackerearth.com/TopSellingGames', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(data => data.json())
            .then((data) => {
                this.setState({ allData: data.filter((item) => item.Rank < 6) });
            }).catch(error => alert("Server is not sending response", error));
    }
    render() {
        return (
            <div>
                {'Top Games'}
                <ul>
                    {this.renderTopGames(this.state.allData)}
                </ul>
            </div>
        );

    }
    renderTopGames(topGames) {
        return topGames.map((item) => {
            return <div>
            <li key={item.Rank} onClick={(e) => this.handleClick(item.Rank)}>{item.Name}</li>
                {/* {this.renderDetails(item)} */}
                {this.state.id === item.Rank
                ? <Details moreDetails={item}/>
            : <div></div>}
            </div>
        });
    }
    handleClick = (key) => {
        console.log(key);
        this.setState({id: key});
    }
    // renderDetails(item) {
    //     return this.state.id === item.Rank
    //     ? <div>
    //         {`Year: ${item.Year}, Platform: ${item.Platform}, Genre: ${item.Genre}, Publisher: ${item.Publisher}, Global_Sales: ${item.Global_Sales}`}
    //     </div>
    //     : <div></div>
    // }
}