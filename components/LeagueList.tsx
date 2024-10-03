import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
import { leaguesData } from '@/DummyData/leagueData'; 
import { League } from '@/types/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/navigation';

const LeaguesList: React.FC = () => {
   // Type the navigation hook with RootStackNavigationProp
   const navigation = useNavigation<RootStackNavigationProp>();

   const handleLeaguePress = (leagueId: number) => {
       // Navigate to OddPage and pass leagueId as a parameter
       navigation.navigate('OddPage', { leagueId });
   };
    const renderLeague = ({ item }: { item: League }) => (
        <Pressable onPress={() => handleLeaguePress(item.id)} style={styles.leagueItem}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.country}>{item.country.name}</Text>
        </Pressable>
    );

    return (
        <FlatList
            data={leaguesData.response}
            renderItem={renderLeague}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    leagueItem: {
        marginBottom: 20,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    type: {
        fontSize: 14,
        color: 'gray',
    },
    country: {
        fontSize: 14,
        color: 'blue',
    },
});

export default LeaguesList;
