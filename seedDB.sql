DROP TABLE IF EXISTS players cascade;
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT null,
    second_name VARCHAR NOT null,
    team INTEGER,
    form decimal,
    total_points INTEGER,
    minutes INTEGER,
    goals_scored INTEGER,
    assists INTEGER,
    clean_sheets INTEGER,
    goals_conceded INTEGER,
    own_goals INTEGER,
    penalties_saved INTEGER,
    penalties_missed INTEGER,
    yellow_cards INTEGER,
    red_cards INTEGER,
    saves INTEGER,
    bonus INTEGER
);

DROP TABLE IF EXISTS teams cascade;
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT null,
    short_name VARCHAR NOT null,
    played INTEGER not null,
    points INTEGER not null,
    position INTEGER not null,
    form INTEGER
);

DROP TABLE IF EXISTS events cascade;
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT null,
    deadline_time timestamptz not null,
    finished boolean not null,
    data_checked boolean not null,
    is_previous boolean not null,
    is_current boolean not null,
    is_next boolean not null
);



