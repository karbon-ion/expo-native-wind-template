// featureData.ts
import { FixtureData } from '@/types/types'; // Adjust the path based on your structure

export const fixtureData: FixtureData = {
    get: "fixtures",
    parameters: {
        id: "101010",
    },
    errors: null,
    results: 1,
    paging: {
        current: 1,
        total: 1,
    },
    response: [
        {
            fixture: {
                id: 101010,
                referee: "Kevin Friend, England",
                timezone: "UTC",
                date: "2019-12-26T17:30:00+00:00",
                timestamp: 1577381400,
                periods: {
                    first: 1577381400,
                    second: 1577385000,
                },
                venue: {
                    id: 556,
                    name: "Old Trafford",
                    city: "Manchester",
                },
                status: {
                    long: "Match Finished",
                    short: "FT",
                    elapsed: 90,
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: { name: "England", flag: null, code: null },
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2019,
                    round: "Regular Season - 19",
                },
                teams: {
                    home: {
                        id: 33,
                        name: "Manchester United",
                        logo: "https://media.api-sports.io/football/teams/33.png",
                        winner: true,
                    },
                    away: {
                        id: 34,
                        name: "Newcastle",
                        logo: "https://media.api-sports.io/football/teams/34.png",
                        winner: false,
                    },
                },
                goals: {
                    home: 4,
                    away: 1,
                    score: {
                        halftime: {
                            home: 3,
                            away: 1,
                        },
                        fulltime: {
                            home: 4,
                            away: 1,
                        },
                        extratime: {
                            home: null,
                            away: null,
                        },
                        penalty: {
                            home: null,
                            away: null,
                        },
                    },
                },
                events: [
                    {
                        time: {
                            elapsed: 1,
                            extra: null,
                        },
                        team: {
                            id: 33,
                            name: "Manchester United",
                            logo: "https://media.api-sports.io/football/teams/33.png",
                            winner: false, // Add the winner property here
                        },
                        player: {
                            id: 903,
                            name: "Scott McTominay",
                        },
                        assist: {
                            id: null,
                            name: null,
                        },
                        type: "Card",
                        detail: "Yellow Card",
                        comments: null,
                    },
                    // Add more events as needed
                ],
                lineups: {
                    home: {
                        team: {
                            id: 33,
                            name: "Manchester United",
                            logo: "https://media.api-sports.io/football/teams/33.png",
                            coach: {
                                id: 19,
                                name: "O. Solskjær",
                                formation: "4-2-3-1",
                            },
                            startXI: [
                                { id: 882, name: "David de Gea", number: 1, pos: "G" },
                                { id: 889, name: "V. Lindelöf", number: 2, pos: "D" },
                                { id: 884, name: "Harry Maguire", number: 3, pos: "D" },
                                { id: 883, name: "A. Wan-Bissaka", number: 4, pos: "D" },
                                { id: 887, name: "L. Shaw", number: 5, pos: "D" },
                                { id: 886, name: "F. Pogba", number: 6, pos: "M" },
                                { id: 885, name: "M. Fred", number: 7, pos: "M" },
                                { id: 902, name: "B. Fernandes", number: 8, pos: "M" },
                                { id: 900, name: "A. Martial", number: 9, pos: "F" },
                                { id: 888, name: "M. Rashford", number: 10, pos: "F" },
                                { id: 891, name: "M. Greenwood", number: 11, pos: "F" },
                            ],
                            substitutes: [
                                { id: 901, name: "Mata", number: 8, pos: "M" },
                                { id: 900, name: "D. James", number: 20, pos: "F" },
                                { id: 892, name: "E. Bailly", number: 12, pos: "D" },
                                { id: 893, name: "M. Tuanzebe", number: 15, pos: "D" },
                                { id: 894, name: "N. Martial", number: 9, pos: "F" },
                            ],
                        },
                    },
                    away: {
                        team: {
                            id: 34,
                            name: "Newcastle",
                            logo: "https://media.api-sports.io/football/teams/34.png",
                            coach: {
                                id: 17,
                                name: "S. Bruce",
                                formation: "3-5-2",
                            },
                            startXI: [
                                { id: 18886, name: "M. Dúbravka", number: 1, pos: "G" },
                                { id: 18888, name: "F. Fernández", number: 2, pos: "D" },
                                { id: 18889, name: "J. Lascelles", number: 3, pos: "D" },
                                { id: 18890, name: "D. Clark", number: 4, pos: "D" },
                                { id: 18891, name: "C. Wilson", number: 5, pos: "F" },
                                { id: 18892, name: "J. Almirón", number: 6, pos: "M" },
                                { id: 18893, name: "M. Ritchie", number: 7, pos: "M" },
                                { id: 18894, name: "S. Longstaff", number: 8, pos: "M" },
                                { id: 18895, name: "I. Hayden", number: 9, pos: "M" },
                                { id: 18896, name: "A. Saint-Maximin", number: 10, pos: "F" },
                            ],
                            substitutes: [
                                { id: 3423, name: "C. Atsu", number: 30, pos: "M" },
                                { id: 3424, name: "J. Willock", number: 31, pos: "M" },
                                { id: 3425, name: "S. Carroll", number: 32, pos: "F" },
                                { id: 3426, name: "F. Schär", number: 33, pos: "D" },
                                { id: 3427, name: "K. Darlow", number: 34, pos: "G" },
                            ],
                        },
                    },
                },
                statistics: {
                    home: {
                        id: 33,
                        name: "Manchester United",
                        logo: "https://media.api-sports.io/football/teams/33.png",
                        statistics: [
                            { type: "Shots on Goal", value: 10 },
                            { type: "Possession", value: 60 },
                            { type: "Corners", value: 8 },
                            { type: "Fouls", value: 5 },
                        ],
                    },
                    away: {
                        id: 34,
                        name: "Newcastle",
                        logo: "https://media.api-sports.io/football/teams/34.png",
                        statistics: [
                            { type: "Shots on Goal", value: 2 },
                            { type: "Possession", value: 40 },
                            { type: "Corners", value: 2 },
                            { type: "Fouls", value: 10 },
                        ],
                    },
                },
                players: {
                    home: {
                        id: 33,
                        name: "Manchester United",
                        logo: "https://media.api-sports.io/football/teams/33.png",
                        update: "2020-09-09T07:14:06+00:00",
                        players: [
                            {
                                id: 882,
                                name: "David De Gea",
                                photo: "https://media.api-sports.io/football/players/882.png",
                                statistics: {
                                    games: {
                                        offsides: null,
                                        shots: { goals: null, passes: null, tackles: null, duels: null, dribbles: null, fouls: null, cards: null, penalty: null },
                                    },
                                },
                            },
                            {
                                id: 889,
                                name: "V. Lindelöf",
                                photo: "https://media.api-sports.io/football/players/889.png",
                                statistics: {
                                    games: {
                                        offsides: null,
                                        shots: { goals: null, passes: null, tackles: null, duels: null, dribbles: null, fouls: null, cards: null, penalty: null },
                                    },
                                },
                            },
                            // Add more players as needed
                        ],
                    },
                    away: {
                        id: 34,
                        name: "Newcastle",
                        logo: "https://media.api-sports.io/football/teams/34.png",
                        update: "2020-09-09T07:14:06+00:00",
                        players: [
                            {
                                id: 18886,
                                name: "M. Dúbravka",
                                photo: "https://media.api-sports.io/football/players/18886.png",
                                statistics: {
                                    games: {
                                        offsides: null,
                                        shots: { goals: null, passes: null, tackles: null, duels: null, dribbles: null, fouls: null, cards: null, penalty: null },
                                    },
                                },
                            },
                            {
                                id: 18888,
                                name: "F. Fernández",
                                photo: "https://media.api-sports.io/football/players/18888.png",
                                statistics: {
                                    games: {
                                        offsides: null,
                                        shots: { goals: null, passes: null, tackles: null, duels: null, dribbles: null, fouls: null, cards: null, penalty: null },
                                    },
                                },
                            },
                            // Add more players as needed
                        ],
                    },
                },
            },
        },
    ],
};
