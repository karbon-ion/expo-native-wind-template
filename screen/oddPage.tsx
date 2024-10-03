// OddPage.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootStackNavigationProp } from '@/types/navigation'; // Import your types
import oddsData from '@/DummyData/oddsData'; // Adjust the path as necessary

// Define interfaces for Bookmaker and Bet
interface Bookmaker {
    id: number;
    name: string;
    bets: Bet[];
}

interface Bet {
    id: number;
    name: string;
    values: { value: string; odd: string }[];
}

// Extend the OddsResponse type to include the bookmakers
interface OddsResponse {
    league: {
        id: number;
        name: string;
    };
    fixture: {
        id: number;
        date: string;
        timezone: string;
        timestamp: number;
        update: string;
    };
    bookmakers: Bookmaker[];
}

type OddPageProps = NativeStackScreenProps<RootStackParamList, 'OddPage'>;

const OddPage: React.FC<OddPageProps> = ({ route }) => {
    const navigation = useNavigation<RootStackNavigationProp>(); // Use the navigation prop with your types
    const { leagueId } = route.params;

    // Filter odds data by leagueId
    const filteredOdds = oddsData.response.filter((odd: OddsResponse) => odd.league.id === leagueId);

    const renderOddsItem = ({ item }: { item: OddsResponse }) => (
        <TouchableOpacity 
            style={styles.oddsItem} 
            onPress={() => navigation.navigate('FixturePage', { fixtureId: item.fixture.id })} // Navigate to FixturePage with fixtureId
        >
            <Text style={styles.leagueName}>{item.league.name}</Text>
            <Text>{`Fixture ID: ${item.fixture.id}`}</Text>
            <Text style={styles.date}>
                {new Date(item.fixture.date).toLocaleString()} ({item.fixture.timezone})
            </Text>
            {item.bookmakers.map((bookmaker: Bookmaker) => (
                <View key={bookmaker.id}>
                    <Text style={styles.bookmakerName}>{bookmaker.name}</Text>
                    {bookmaker.bets.map((bet: Bet) => (
                        <View key={bet.id}>
                            <Text style={styles.betName}>{bet.name}</Text>
                            {bet.values.map((value, index) => (
                                <Text key={index}>{`${value.value}: ${value.odd}`}</Text>
                            ))}
                        </View>
                    ))}
                </View>
            ))}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredOdds}
                renderItem={renderOddsItem}
                keyExtractor={(item) => item.fixture.id.toString()}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 16,
    },
    list: {
        paddingBottom: 16,
    },
    oddsItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        elevation: 2,
    },
    leagueName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    date: {
        color: '#777',
    },
    bookmakerName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    betName: {
        fontSize: 12,
        marginBottom: 2,
    },
});

export default OddPage;
