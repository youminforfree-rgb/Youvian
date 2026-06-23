export default async function handler(req, res) {

    try {

        const response = await fetch(
            "https://api.football-data.org/v4/matches",
            {
                headers: {
                    "X-Auth-Token": "b374ae2164dd454fbfa7bed72a523ef3"
                }
            }
        );

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({
            error: "Failed to fetch matches"
        });

    }

}