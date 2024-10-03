import { API_HOST,API_KEY } from "@env";


type League = {
    id: number; // or the actual id type if it's different
    name: string;
    country: string;
    league: {
        id: number;
        name: string;
        country: string;
        // Other properties as needed
};
};
  export async function getLeaguesData(): Promise<League[]> {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST,
            'Content-Type': 'application/json' 
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result.response.map((league: any) => ({
            id: league.league.id,
            name: league.league.name,
            country: league.country,
            // Map other properties as necessary
        }));
    } catch (error) {
        console.error('Error fetching league data:', error);
        return []; // Return an empty array in case of error
    }
}