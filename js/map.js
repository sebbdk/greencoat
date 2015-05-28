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
		text:"You are standing in a jar.",
		actions:[
			{
				text:"Wait around, this seems like a nice jar.",
				goto:"scene02"
			},
			{
				text:"Smash your head into the glass like a lunatic.",
				goto:"scene02"
			},
			{
				text:"Dance like pretty pony.",
				goto:"scene02"
			}
		]
	},
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