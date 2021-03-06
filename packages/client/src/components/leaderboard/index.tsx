import React, { Component } from 'react';

import './leaderboard.scss';
import {IGameState, IPlayer, ICountdown} from 'game/state/types';
interface GameViewProps {
  state: IGameState;
}
interface LeaderboardProps {
  p: {[key: string]: IPlayer}
  t: ICountdown
}

interface Ranking {
  onlineName: string;
  score: number;
}
interface LeaderboardState {
  rankings: Ranking[];
}

class Leaderboard extends Component <LeaderboardProps, LeaderboardState>
{
  state: LeaderboardState;
  constructor(props: LeaderboardProps) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       rankings:[]
    }
 }
 renderTableData(ranking:Ranking[]) {

  return ranking.map((ranking: Ranking, index:any) => {
    const score = ranking.score;
    var name = ranking.onlineName;

    if(name == null){name = "unNamed"}
     return (
        <tr key={index}>
           <td className="playerData">{name}</td>
           <td className="playerData">{score}</td>
        </tr>
     )
  })
}

renderTableHeader() {
  let header = (["Name","Coins"])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

renderCountdown(){
  if(this.props.t.done){
    return <h2>Game Over</h2>
  }
  if(Math.floor(this.props.t.seconds) < 10){
    return <h2>{this.props.t.minutes} : 0{Math.floor(this.props.t.seconds)}</h2>
  }
  return <h2>{this.props.t.minutes} : {Math.floor(this.props.t.seconds)}</h2>
}

render() {  
  const newArr = [];
  for(let pid in this.props.p){
    newArr.push(this.props.p[pid]);
  }

  newArr.sort((a:IPlayer,b:IPlayer)=>b.score-a.score);


  return (
     <div className="leaderboard-box" >
        <table id='students'>
          <tbody id='countdown'>
            {this.renderCountdown()}
          </tbody>
          <tbody id='leaderboard'>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData(newArr)}
          </tbody>
        </table>
     </div>
  )
}
}

export { Leaderboard }
