const mapPlayers = (playersInput) => {
  const players = playersInput.map(
    ({
      id,
      first_name,
      second_name,
      team,
      form,
      total_points,
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
      team,
      form,
      total_points,
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
    })
  );

  return players;
};

export default mapPlayers;
