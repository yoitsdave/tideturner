import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { getRuns } from '../../Remote';

const getName = (run) => {
    return run.name;
}

const getFilter = (run) => {
    return run.filter;
}

const getGallons = (run) => {
  return run.score;
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
            paddingTop: 50,
        },
        textEntryContainer: {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingVertical: 50,
            paddingHorizontal: 5,
        },
        textEntry: {
            fontSize: 14,
        },
    });

    //Dummy data for the table
    const runs = [
      {id: 1, score: 100, name: "Alice", filter: "Chlora ball filter"},
      {id: 2, score: 50, name: "Bob", filter: "Carbon filter"},
      {id: 3, score: 75, name: "Charlie", filter: "Reverse osmosis filter"},
      {id: 4, score: 200, name: "Dave", filter: "Chlora ball filter"},
      {id: 5, score: 25, name: "Eve", filter: "Carbon filter"},
  ];

    //Filter runs based on selected period
    let filteredRuns;
    if (period === 0) {
        filteredRuns = runs;
    } else if (period === 1) {
        filteredRuns = between(runs, 7);
    }

    filteredRuns.sort((a, b) => getGallons(b) - getGallons(a));

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
