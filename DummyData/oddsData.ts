import { OddsData } from '@/types/types';

const oddData: OddsData = {
    get: "odds",
    parameters: {
        league: "4, 61, 39, 140",
        season: "2023"
    },
    errors: [],
    results: 4,
    paging: {
        current: 1,
        total: 1
    },
    response: [
        {
            league: {
                id: 4,
                name: "Premier League",
                country: {
                    name: "England",
                    code: null,
                    flag: null
                },
                logo: "https://media.api-sports.io/football/leagues/4.png",
                flag: "https://media.api-sports.io/flags/gb.svg",
                season: 2023
            },
            fixture: {
                id: 101010,
                timezone: "UTC",
                date: "2024-03-25T16:00:00+00:00",
                timestamp: 1711382400,
                update: "2024-03-25T12:00:23+00:00"
            },
            bookmakers: [
                {
                    id: 6,
                    name: "Bwin",
                    bets: [
                        {
                            id: 1,
                            name: "Match Winner",
                            values: [
                                { value: "Home", odd: "1.83" },
                                { value: "Draw", odd: "2.90" },
                                { value: "Away", odd: "4.75" }
                            ]
                        },
                        {
                            id: 5,
                            name: "Goals Over/Under",
                            values: [
                                { value: "Over 3.5", odd: "4.40" },
                                { value: "Under 3.5", odd: "1.17" },
                                { value: "Over 2.5", odd: "2.40" },
                                { value: "Under 2.5", odd: "1.50" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            league: {
                id: 61,
                name: "La Liga",
                country: {
                    name: "Spain",
                    code: null,
                    flag: null
                },
                logo: "https://media.api-sports.io/football/leagues/61.png",
                flag: "https://media.api-sports.io/flags/es.svg",
                season: 2023
            },
            fixture: {
                id: 101011,
                timezone: "UTC",
                date: "2024-03-25T18:00:00+00:00",
                timestamp: 1711389600,
                update: "2024-03-25T12:00:23+00:00"
            },
            bookmakers: [
                {
                    id: 8,
                    name: "Bet365",
                    bets: [
                        {
                            id: 1,
                            name: "Match Winner",
                            values: [
                                { value: "Home", odd: "1.74" },
                                { value: "Draw", odd: "3.10" },
                                { value: "Away", odd: "4.45" }
                            ]
                        },
                        {
                            id: 12,
                            name: "Double Chance",
                            values: [
                                { value: "Home/Draw", odd: "1.18" },
                                { value: "Home/Away", odd: "1.30" },
                                { value: "Draw/Away", odd: "1.78" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            league: {
                id: 39,
                name: "Serie A",
                country: {
                    name: "Italy",
                    code: null,
                    flag: null
                },
                logo: "https://media.api-sports.io/football/leagues/39.png",
                flag: "https://media.api-sports.io/flags/it.svg",
                season: 2023
            },
            fixture: {
                id: 101012,
                timezone: "UTC",
                date: "2024-03-27T14:00:00+00:00",
                timestamp: 1711548000,
                update: "2024-03-27T12:00:23+00:00"
            },
            bookmakers: [
                {
                    id: 25,
                    name: "Expekt",
                    bets: [
                        {
                            id: 3,
                            name: "Second Half Winner",
                            values: [
                                { value: "Home", odd: "2.20" },
                                { value: "Draw", odd: "2.30" },
                                { value: "Away", odd: "4.50" }
                            ]
                        },
                        {
                            id: 5,
                            name: "Goals Over/Under",
                            values: [
                                { value: "Over 3.5", odd: "4.27" },
                                { value: "Under 3.5", odd: "1.18" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            league: {
                id: 140,
                name: "Bundesliga",
                country: {
                    name: "Germany",
                    code: null,
                    flag: null
                },
                logo: "https://media.api-sports.io/football/leagues/140.png",
                flag: "https://media.api-sports.io/flags/de.svg",
                season: 2023
            },
            fixture: {
                id: 101013,
                timezone: "UTC",
                date: "2024-03-28T18:00:00+00:00",
                timestamp: 1711634400,
                update: "2024-03-28T12:00:56+00:00"
            },
            bookmakers: [
                {
                    id: 19,
                    name: "Bovada",
                    bets: [
                        {
                            id: 7,
                            name: "HT/FT Double",
                            values: [
                                { value: "Home/Home", odd: "2.65" },
                                { value: "Draw/Home", odd: "4.10" },
                                { value: "Away/Away", odd: "7.50" }
                            ]
                        },
                        {
                            id: 8,
                            name: "Both Teams Score",
                            values: [
                                { value: "Yes", odd: "2.15" },
                                { value: "No", odd: "1.62" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default oddData;
