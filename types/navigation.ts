// types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

export type RootStackParamList = {
    FrontPage: undefined; // No parameters
    OddPage: { leagueId: number }; // OddPage expects a leagueId
    FixturePage: {fixtureId: number};
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type OddPageProps = NativeStackScreenProps<RootStackParamList, 'OddPage'>;
export type FixturePageProps = NativeStackScreenProps<RootStackParamList, 'FixturePage'>;