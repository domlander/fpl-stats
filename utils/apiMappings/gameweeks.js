const mapGameweeks = (gameweeksInput) => {
  const gameweeks = gameweeksInput.map(
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
      deadlineTime: deadline_time,
      isFinished: finished,
      isDataChecked: data_checked,
      isPrevious: is_previous,
      isCurrent: is_current,
      isNext: is_next,
    })
  );

  return gameweeks;
};

export default mapGameweeks;
