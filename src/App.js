//#region uno cards
//#region red
import red_0 from './uno cards/red/red_0.png'
import red_1 from './uno cards/red/red_1.png'
import red_2 from './uno cards/red/red_2.png'
import red_3 from './uno cards/red/red_3.png'
import red_4 from './uno cards/red/red_4.png'
import red_5 from './uno cards/red/red_5.png'
import red_6 from './uno cards/red/red_6.png'
import red_7 from './uno cards/red/red_7.png'
import red_8 from './uno cards/red/red_8.png'
import red_9 from './uno cards/red/red_9.png'
import red_reverse from './uno cards/red/red_reverse.png'
import red_skip from './uno cards/red/red_skip.png'
import red_draw_2 from './uno cards/red/red_draw_2.png'
//#endregion
//#region green
import green_0 from './uno cards/green/green_0.png'
import green_1 from './uno cards/green/green_1.png'
import green_2 from './uno cards/green/green_2.png'
import green_3 from './uno cards/green/green_3.png'
import green_4 from './uno cards/green/green_4.png'
import green_5 from './uno cards/green/green_5.png'
import green_6 from './uno cards/green/green_6.png'
import green_7 from './uno cards/green/green_7.png'
import green_8 from './uno cards/green/green_8.png'
import green_9 from './uno cards/green/green_9.png'
import green_draw_2 from './uno cards/green/green_draw_2.png'
import green_reverse from './uno cards/green/green_reverse.png'
import green_skip from './uno cards/green/green_skip.png'
//#endregion
//#region yellow
import yellow_0 from './uno cards/yellow/yellow_0.png'
import yellow_1 from './uno cards/yellow/yellow_1.png'
import yellow_2 from './uno cards/yellow/yellow_2.png'
import yellow_3 from './uno cards/yellow/yellow_3.png'
import yellow_4 from './uno cards/yellow/yellow_4.png'
import yellow_5 from './uno cards/yellow/yellow_5.png'
import yellow_6 from './uno cards/yellow/yellow_6.png'
import yellow_7 from './uno cards/yellow/yellow_7.png'
import yellow_8 from './uno cards/yellow/yellow_8.png'
import yellow_9 from './uno cards/yellow/yellow_9.png'
import yellow_skip from './uno cards/yellow/yellow_skip.png'
import yellow_reverse from './uno cards/yellow/yellow_reverse.png'
import yellow_draw_2 from './uno cards/yellow/yellow_draw_2.png'
//#endregion
//#region blue
import blue_0 from './uno cards/blue/blue_0.png'
import blue_1 from './uno cards/blue/blue_1.png'
import blue_2 from './uno cards/blue/blue_2.png'
import blue_3 from './uno cards/blue/blue_3.png'
import blue_4 from './uno cards/blue/blue_4.png'
import blue_5 from './uno cards/blue/blue_5.png'
import blue_6 from './uno cards/blue/blue_6.png'
import blue_7 from './uno cards/blue/blue_7.png'
import blue_8 from './uno cards/blue/blue_8.png'
import blue_9 from './uno cards/blue/blue_9.png'
import blue_skip from './uno cards/blue/blue_skip.png'
import blue_reverse from './uno cards/blue/blue_reverse.png'
import blue_draw_2 from './uno cards/blue/blue_draw_2.png'
//#endregion
//#region //special
import special_wild from './uno cards/special/special_wild.png'
import special_nuke from './uno cards/special/special_nuke.png'
//#endregion
//#endregion

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { hop } from "@onehop/client";
import { useChannelMessage } from '@onehop/react';
 
// hop.init should be called as early as possible in your application's lifecycle
hop.init({
	projectId: "project_NTAzOTY5OTg4MDM4NTc0NDA" // replace with your project ID
});
 
//#region array
let game_cards = [red_0, red_1, red_2, red_3, red_4, red_5, red_6, red_7, red_8, red_9, red_reverse, red_draw_2, red_skip,
  blue_0, blue_1, blue_2, blue_3, blue_4, blue_5, blue_6, blue_7, blue_8, blue_9, blue_reverse, blue_draw_2, blue_skip,
  green_0, green_1, green_2, green_3, green_4, green_5, green_6, green_7, green_8, green_9, green_reverse, green_draw_2, green_skip,
  yellow_0, yellow_1, yellow_2, yellow_3, yellow_4, yellow_5, yellow_6, yellow_7, yellow_8, yellow_9, yellow_reverse, yellow_draw_2, yellow_skip,
  special_nuke, special_wild]
//#endregion
let player_cards = [red_0, red_0, red_0, red_0,red_0,red_0,red_0]
let export_cards = new Array(11)
let export_buttons = new Array(11)
let chips = 50
let discard_card = red_0
let exp_discard_card = undefined


 
const channelId = 'testChannel';

function App() {

  const [chatMessages, setChatMessages] = useState([]);

  console.log(chatMessages)

  
 
	//in this example, USER_MESSAGE is an event that you'd send to the channel from your backend
	/*useChannelMessage(channelId, 'USER_MESSAGE', (message) => {
		// this will be called every time the USER_MESSAGE event is sent to this channel
	//setChatMessages(m => [...m, "hello"]);
	}); */

  for (let i=0; i < 7; i++){
    player_cards[i] = game_cards[Math.floor(Math.random() * 54)]
  }
  for (let i=0; i < player_cards.length; i++) {
    export_cards[i] = <img src={player_cards[i]} alt="Yello1"/>
    export_buttons[i] = <button>Play</button>
  }
  
  exp_discard_card = <img src={discard_card} alt="Yello1"/>

  return (
    <div className="App">
      <div className="Title">
      <h1>Gambluno</h1>
      <h2>By Squirrel and Snorp</h2>
      </div>
      <div className="Rules">
        <h2>Rules:</h2>
        <ol>
          <li>Every player starts with 50 chips</li>
          <li>Ever player receives 7 cards</li>
          <li>At the start of the game players go around and place bets. The minimum “ante” is one chip. If a player does not want to match the bet, 
            they can draw two cards. A player cannot draw two cards to avoid the ante.</li>
          <li>A rotation is defined as all players having gone once, but no-one having gone twice since the last rotation. </li>
          <li>After every rotation, all players have the option to pass, or add to the bet. 
            Again, if a player doesn’t want to match the highest bet, they must draw two cards. </li>
          <li>The game ends when a player runs out of cards. If a player reaches one card, and does not say Uno, they can be disqualified. </li>
        </ol>
      </div>
      <div className="Game">
      <div className="Chips">
      <h3>Chips:</h3>
      <div className="ChipCount">{chips}</div>
      </div>
      <p className="urCards">Your cards:</p>
      {export_cards[0]}
      {export_buttons[0]}
      {export_cards[1]}
      {export_buttons[1]}
      {export_cards[2]}
      {export_buttons[2]}
      {export_cards[3]}
      {export_buttons[3]}
      {export_cards[4]}
      {export_buttons[4]}
      {export_cards[5]}
      {export_buttons[5]}
      {export_cards[6]}
      {export_buttons[6]}
      {export_cards[7]}
      {export_buttons[7]}
      {export_cards[8]}
      {export_buttons[8]}
      {export_cards[9]}
      {export_buttons[9]}
      {export_cards[10]}
      {export_buttons[10]}
      <ul>
			{chatMessages.map(m => (
				<li><b>{m.author}</b>: {m.content}</li>
			))}
		</ul>
      <div className="Discard">
        <h3>Discard pile:</h3>
        {exp_discard_card}
      </div>
      </div>
      <div className = "Why">
      <h3>Why?</h3>
      <p>Why play Gambluno? How did was the idea invented? While playing poker with a group of friends, someone suggested we play Uno. 
        Uno is a very enjoyable game, but it lacked the intricacies of poker. When thinking about an idea for this hackathon, we decided to make Uno with twist: Gambluno</p>
      </div>
    </div>
  );
}

export default App;
