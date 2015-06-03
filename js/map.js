/* 
* @Author: sebb
* @Date:   2015-05-28 21:28:21
* @Last Modified by:   sebb
* @Last Modified time: 2015-05-28 21:59:53
*/

var backpack = {}

var scenes = {
	//scene 01
	"logo":{
		graphic:"img/logo.png",
		text:"",
		actions:[
			{
				text:"Get this show on the road",
				goto:"start"
			}
		]
	},
	"start":{
		graphic:"img/lobby.png",
		text:"You are standing on a sidewalk looking into what appears to be a lobby",
		actions:[
			{
				text:"Ponder the mysteries of this lobby",
				goto:"lobby_ponder"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"scene02"//unresolved
			},
			{
				text:"Dance like pretty pony.",
				goto:"capoeira"
			}
		]
	},

	"capoeira":{
		graphic:"img/lobby.png",
		text:"You dish out some sick capoeira moves, because capoeira is awesome!",
		actions:[
			{
				text:"Ponder the mysteries of this lobby",
				goto:"lobby_ponder"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"scene02"//unresolved
			},
			{
				text:"Dance like pretty pony.",
				goto:"capoeira"
			}
		]
	},

	"lobby_ponder":{
		graphic:"img/lobby.png",
		text:"Maybe there's gold or riches.. or a candy bar in there.. or maybe a damsel in distress, forever waiting a hero!....Or a candy bar!",
		actions:[
			{
				text:"Search for tressure!",
				goto:"scene02"//unresolved
			},
			{
				text:"Shout random exposition and charge the evil castle to save the damsel!!",
				goto:"scene02"//unresolved
			},
			{
				text:"Put your libs on the glass to test for the presence of chocolate",
				goto:"capoeira"//unresolved
			}
		]
	},






	//////NEXT SCENES
	"scene02":{
		graphic:"img/bare_scene.png",
		text:"You wait around... the gentleman outside pushes a few buttons and you feel a sharp burning pain in your feet.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"scene03"
			}
		]
	},
	"scene03":{
		graphic:"img/scene1.png",
		text:"You wait around... the gentleman outside pushes a few buttons and you feel a sharp burning pain in your feet.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"scene04"
			}
		]
	},
	"scene04":{
		graphic:"img/lab.png",
		text:"You wait around... the gentleman outside pushes a few buttons and you feel a sharp burning pain in your feet.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"start"
			}
		]
	}
};