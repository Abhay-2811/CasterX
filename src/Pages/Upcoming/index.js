import React from 'react';
import './Upcoming.css'; // import your CSS file

function Upcoming() {
  const matchResults = [
    {
      homeTeam: 'Sydney Kings',
      homeTeamScore: 167679240,
      homeTeamLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIasSXGMi56XgwDhl_HY8J2x9WRG7EFfzLLQtzwElE&s',
      awayTeam: 'Perth Wildcats',
      // awayTeamScore: 79,
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Perth_Wildcats_logo.svg',
      // time: 167679240
    },
    {
      homeTeam: 'Melbourne United',
      homeTeamScore: 16547896,
      homeTeamLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR05Jaj0RyaGDFEkkuDzTTvgCEbQHJl7fH72_mVwKHaw&s',
      awayTeam: 'Adelaide 36ers',
      // awayTeamScore: 86,
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Adelaide_36ers_logo.svg/1200px-Adelaide_36ers_logo.svg.png'
    },
    {
      homeTeam: 'Brisbane Bullets',
      homeTeamScore: 165458963,
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Brisbane_Bullets_logo.svg/1200px-Brisbane_Bullets_logo.svg.png',
      awayTeam: 'Cairns Taipans',
      // awayTeamScore: 72,
      awayTeamLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltAjDjG_nJQqgGpIMG5Z-krVxUETflK4whjQFETU&s'
    }
  ];

  return (
    <table className="nbl-match-results-table">
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Time(Uinx)</th>
          <th>Away Team</th>
          {/* <th>Time</th> */}
        </tr>
      </thead>
      <tbody>
        {matchResults.map((match, index) => (
          <tr key={index}>
            <td>
              {/* <img src={match.homeTeamLogo} alt={match.homeTeam} /> */}
              {match.homeTeam}
            </td>
            <td>{match.homeTeamScore}  {match.awayTeamScore}</td>
            <td>
              {/* <img src={match.awayTeamLogo} alt={match.awayTeam} /> */}
              {match.awayTeam}    {match.time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Upcoming;
