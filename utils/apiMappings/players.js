const positions = {
  1: {
    shortName: "GK",
    name: "Goalkeeper",
  },
  2: {
    shortName: "DEF",
    name: "Defender",
  },
  3: {
    shortName: "MID",
    name: "Midfielder",
  },
  4: {
    shortName: "FWD",
    name: "Forward",
  },
};

const mapPlayers = (playersInput) => {
  const players = playersInput.map(
    ({
      id,
      first_name,
      second_name,
      web_name,
      team,
      element_type,
      form,
      total_points,
      points_per_game,
      minutes,
      goals_scored,
      assists,
      clean_sheets,
      goals_conceded,
      own_goals,
      penalties_saved,
      penalties_missed,
      yellow_cards,
      red_cards,
      saves,
      bonus,
    }) => ({
      id,
      firstName: first_name,
      lastName: second_name,
      screenName: web_name,
      team,
      position: positions[element_type]?.name || "Unknown",
      form,
      totalPts: total_points,
      ppg: points_per_game,
      minutes,
      goals: goals_scored,
      assists,
      cleanSheets: clean_sheets,
      goalsConceded: goals_conceded,
      ownGoals: own_goals,
      penaltiesSaved: penalties_saved,
      penaltiesMissed: penalties_missed,
      yellows: yellow_cards,
      redCards: red_cards,
      saves,
      bonus,
    })
  );

  return players;
};

export default mapPlayers;
