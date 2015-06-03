/* 
* @Author: sebb
* @Date:   2015-06-03 00:44:20
* @Last Modified by:   sebb
* @Last Modified time: 2015-06-03 16:37:30
*/

window.scenes = window.scenes ? window.scenes:{};

window.scenes.lobby = {
	"start":{
		graphic:"img/lobby.png",
		text:"inside is what appears to be the lobby of some unknown pre-madness company.",
		actions:[
			{
				text:"Look around",
				goto:"look_around"
			},
			{
				text:"Go back outside",
				goto:function() {
					window.game.load(window.scenes.front);
					return "outside_again";
				}
			}
		]
	},
	"look_around":{
		text:"Apart from a desk with a huge plant growing on it the lobby seems pretty barren. there is an entrence to a dark hallway behind the desk.",
		actions:[
			{
				text:"Look for food",//unresolved
				goto:"look_around"
			},
			{
				text:"dance",
				goto:"look_around"//unresolved
			},
			{
				text:"Take a better look at the strange looking plant on the desk",
				goto:"investigate_plant"
			}
		]
	},
	"investigate_plant":{
		text:"As he appraches the plant you notice a terminal next to it, the plant itself looks like a giant bean resting on a seemingly very frail stilk.",
		actions:[
			{
				text:"Turn on the terminal",//unresolved
				goto:"look_around"
			},
			{
				text:"Poke the plant",//unresolved
				goto:"look_around"
			},
			{
				text:"Eat the plant",
				goto:"eat_plant"
			}
		]
	},
	"eat_plant":{
		text:"This plant surely looks delicious, drooling he opens his mouth and prepare to take a big bite.  Then he realizes what he is doing and stops \"What what i thinking? I have no clue what that is!\"",
		actions:[
			{
				text:"Turn on the terminal",//unresolved
				goto:"look_around"
			},
			{
				text:"Poke the plant",//unresolved
				goto:"look_around"
			},
			{
				text:"Eat the plant",
				goto:"eat_plant_2"
			}
		]
	},
	"eat_plant_2":{
		text:"... \"It does look rather tasty tho, but no! gotta keep it together, safety first.\"",
		actions:[
			{
				text:"Turn on the terminal",//unresolved
				goto:"look_around"
			},
			{
				text:"Poke the plant",//unresolved
				goto:"look_around"
			},
			{
				text:"Eat the plant",
				goto:"eat_plant_3"
			}
		]
	},
	"eat_plant_3":{
		text:"he bends over and takes a bite, the texture is kinda fleshy,  the stench of rotten meat fills the room, he bends over and vomits on the floor.",
		actions:[
			{
				text:"Turn on the terminal",//unresolved
				goto:"look_around"
			},
			{
				text:"Poke the plant",//unresolved
				goto:"look_around"
			},
			{
				text:"Eat the plant",
				goto:"enough"
			}
		]
	},
	"enough":{
		text:"\"I think ive had enough...\"",
		actions:[
			{
				text:"Turn on the terminal",//unresolved
				goto:"look_around"
			},
			{
				text:"Poke the plant",//unresolved
				goto:"look_around"
			},
			{
				text:"Eat the plant",
				goto:"enough"
			}
		]
	}
}