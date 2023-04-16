import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { getRuns } from '../../Remote';

const getName = (run) => {
    //todo: implement method to get name from run object
    return "John Doe";
}

const getFilter = (run) => {
    //todo: implement method to get filter from run object
    return "Chlora ball filter";
}

const getGallons = (run) => {
    //todo: implement method to get gallons from run object
    return 100;
}

export default LeaderBoard = ({navigation}) => {
    const [period, setPeriod] = useState(0);

    const handleClick = (e) => {
        setPeriod(e.target.dataset.id)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 100,
        },
        textEntryContainer: {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingVertical: 50,
            paddingHorizontal: 10,
        },
        textEntry: {
            fontSize: 14,
        },
    });

    //Dummy data for the table
    const runs = [
        {id: 1, dt: new Date(), score: 100},
        {id: 2, dt: new Date(), score: 50},
        {id: 3, dt: new Date(), score: 75},
        {id: 4, dt: new Date(), score: 200},
        {id: 5, dt: new Date(), score: 25},
    ];

    //Filter runs based on selected period
    let filteredRuns;
    if (period === 0) {
        filteredRuns = runs;
    } else if (period === 1) {
        filteredRuns = between(runs, 7);
    }

    //Sort runs by gallons washed in descending order
    filteredRuns.sort((a, b) => b.score - a.score);

    return (
        <View style={styles.container}>
            <div className="board">
                <h1 className='leaderboard'>Leaderboard</h1>
                <div className="duration">
                    <button onClick={handleClick} data-id='0'>Number of Gallons</button>
                    <button onClick={handleClick} data-id='1'>Time Washed</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Filter Used</th>
                            <th>Number of Gallons Washed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRuns.map(run => (
                            <tr key={run.id}>
                                <td>{getName(run)}</td>
                                <td>{getFilter(run)}</td>
                                <td>{getGallons(run)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </View>
    )
}