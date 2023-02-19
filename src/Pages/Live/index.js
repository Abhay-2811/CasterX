import React from "react";
import { useState } from 'react';
import { bet } from "../../Components/Web3components/Interaction";
import { Form, Button, Input} from "antd";

function Live () {

  const [homeTeam, setHT] = useState();
  const [awayTeam, setAT] = useState();
  const [startTime, setST] = useState();
  const [showForm, setShowForm] = useState(false);
  const [Team, setTeam] = useState();
  const [Amount, setAmount] = useState();

  //get team and amount as an input 
  const placeBet = async (team,amount)=>{
    await bet(team,0,amount);
  }
  const handleClick = () => {
    setShowForm(true);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    placeBet(Team, Amount);
  };

  return (
    <div>
    <h1>Live Matches</h1>
    <h2>Live</h2>
    <h2>Live Matches</h2>
    <h2>Live Matches</h2>
    {/* take value input */}
    <button onClick={handleClick}>Place Bet</button>
    {showForm ? (
      <div>
        <Form>
        <Form.Item label="Team">
          <Input placeholder="Team" 
          onChange={(event) => setTeam(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Amount">
          <Input placeholder="Amount"
           onChange={(event) => setAmount(event.target.value)}
           />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit} type="primary">Submit</Button>
        </Form.Item>
      </Form>
      </div>
      ) : null}
    </div>
  )
}

export default Live;
