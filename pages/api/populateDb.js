import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = await fetchResults();
  const gameweeks = data.events.map((gameweek) => ({
    id: gameweek.id,
    name: gameweek.name,
    deadline_time: gameweek.deadline_time,
    finished: gameweek.finished,
    data_checked: gameweek.data_checked,
    is_previous: gameweek.is_previous,
    is_current: gameweek.is_current,
    is_next: gameweek.is_next,
  }));

  const players = data.elements.map((player) => ({
    id: player.id,
    first_name: player.first_name,
    second_name: player.second_name,
    team: player.team,
    form: player.form,
    total_points: player.total_points,
    minutes: player.minutes,
    goals_scored: player.goals_scored,
    assists: player.assists,
    clean_sheets: player.clean_sheets,
    goals_conceded: player.goals_conceded,
    own_goals: player.own_goals,
    penalties_saved: player.penalties_saved,
    penalties_missed: player.penalties_missed,
    yellow_cards: player.yellow_cards,
    red_cards: player.red_cards,
    saves: player.saves,
    bonus: player.bonus,
  }));

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
