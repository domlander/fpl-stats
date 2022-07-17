const mapTeams = (teamsInput) => {
  const teams = teamsInput.map(
    ({ id, name, short_name, played, points, position, form }) => ({
      id,
      name,
      shortName: short_name,
      played,
      points,
      position,
      form,
    })
  );

  return teams;
};

export default mapTeams;
