import React from 'react';
import { View } from 'react-native';
import LeaguesList from '@/components/LeagueList';

export default function FrontPage() {
    return (
        <View className="flex-1 justify-center items-center bg-yellow-900">
            <LeaguesList />
        </View>
    );
}