import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = await fetchResults();
  const gameweeks = data.events.map(
    ({
      id,
      name,
      deadline_time,
      finished,
      data_checked,
      is_previous,
      is_current,
      is_next,
    }) => ({
      id,
      name,
      deadline_time,
      finished,
      data_checked,
      is_previous,
      is_current,
      is_next,
    })
  );

  const players = data.elements.map(
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
    })
  );

  const teams = data.teams.map(
    ({ id, name, short_name, played, points, position, form }) => ({
      id,
      name,
      short_name,
      played,
      points,
      position,
      form,
    })
  );

  await prisma.events.deleteMany({});
  await prisma.events.createMany({
    data: gameweeks,
  });

  await prisma.players.deleteMany({});
  await prisma.players.createMany({
    data: players,
  });

  await prisma.teams.deleteMany({});
  await prisma.teams.createMany({
    data: teams,
  });

  res.status(200).json({ data });
}

const fetchResults = async () => {
  const url = "https://fantasy.premierleague.com/api/bootstrap-static/";
  let apiData;
  try {
    apiData = await axios
      .get(url, {
        headers: {
          "user-agent": "not axios", // FPL API blocks axios https://stackoverflow.com/a/68603202
        },
      })
      .then((resp) => resp.data);
  } catch (e) {
    throw new Error(
      `There was an error fetching fixture data from the FPL API:\n${e}`
    );
  }

  return apiData;
};
