'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Test extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Dummy Test
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#111',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#888',
        marginBottom: 5,
    },
});

module.exports = Test;
