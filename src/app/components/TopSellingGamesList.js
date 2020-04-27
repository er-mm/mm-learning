import React from "react";
import fetch from 'isomorphic-fetch';

export class TopSellingGamesList extends React.Component {

    constructor() {
        super()
        this.state = {
            allData: []
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
                console.log(data);
                this.setState({ allData: data });
            }).catch(error => alert("Server is not sending response", error));
    }
    render() {
        let topGames = [];

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
            return <li key={item.Rank}>{item.Name}</li>
        });
    }
}