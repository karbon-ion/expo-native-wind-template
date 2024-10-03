import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { FixtureData } from '@/types/types';
import { fixtureData } from '@/DummyData/fixtureData';

type FixturePageProps = NativeStackScreenProps<RootStackParamList, 'FixturePage'>;

const FixturePage: React.FC<FixturePageProps> = ({ route, navigation }) => {
    const { fixtureId } = route.params; // Get the fixtureId from route params
    console.log(fixtureId)
    // Find the fixture by its ID
    const fixture = fixtureData.response.find(item => item.fixture.id === fixtureId);
    
    if (!fixture) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Fixture not found</Text>
            </View>
        );
    }
    const { fixture: fixtureDetails } = fixture; // First destructure fixture
    const { league, teams, events, statistics } = fixtureDetails;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Fixture Details</Text>
            <Text style={styles.subTitle}>
                Match Location: {fixtureDetails.venue.name}, {fixtureDetails.venue.city}
            </Text>
            <Text style={styles.date}>
                {new Date(fixtureDetails.date).toLocaleString()} ({fixtureDetails.timezone})
            </Text>

            <Text style={styles.sectionTitle}>Teams:</Text>
            <View style={styles.teamsContainer}>
                {Object.values(teams).map((team) => (
                    <TouchableOpacity 
                        key={team.id} 
                        // onPress={() => navigation.navigate('TeamPage', { teamId: team.id })} // Uncomment for navigation
                        style={styles.teamButton}
                    >
                        <Text style={styles.teamName}>{team.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Key Events:</Text>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <Text key={index} style={styles.eventText}>
                        {event.type}: {event.detail}
                    </Text>
                ))
            ) : (
                <Text style={styles.noEventsText}>No key events available.</Text>
            )}

            <TouchableOpacity 
                // onPress={() => navigation.navigate('LeaguePage', { leagueId: league.id })} // Uncomment for navigation
                style={styles.leagueButton}
            >
                <Text style={styles.leagueName}>{league.name}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 4,
        color: '#555',
    },
    date: {
        fontSize: 16,
        color: '#777',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        color: '#333',
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    teamButton: {
        padding: 8,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    teamName: {
        color: '#fff',
        fontWeight: 'bold',
    },
    statisticText: {
        fontSize: 14,
        marginVertical: 2,
        color: '#333',
    },
    eventText: {
        fontSize: 14,
        marginVertical: 2,
        color: '#333',
    },
    noEventsText: {
        fontSize: 14,
        color: '#999',
    },
    leagueButton: {
        padding: 10,
        backgroundColor: '#28a745',
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    leagueName: {
        color: '#fff',
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: '#e74c3c',
    },
});

export default FixturePage;
