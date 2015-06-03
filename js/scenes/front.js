/* 
* @Author: sebb
* @Date:   2015-06-02 23:36:41
* @Last Modified by:   sebb
* @Last Modified time: 2015-06-03 16:34:25
*/

window.scenes = window.scenes ? window.scenes:{};

window.scenes.front = {
	"start":{
		graphic:"img/lobby.png",
		text:"A man is standing on the sidewalk in front of a large building.",
		actions:[
			{
				text:"Look around",
				goto:"look_around"
			},
			{
				text:"Walk away",
				goto:function() {
					window.game.load(window.scenes.end);
					return "before_it_began";
				}
			},
			{
				text:"Look into the building",
				goto:"look_into"
			}
		]
	},
	"look_around":{
		text:"Around is a large street completely blocked with cars coverend in vines. in the far distance you can hear people shouting, getting off the street might be a good idea.",
		actions:[
			{
				text:"Look around",
				goto:"look_around"
			},
			{
				text:"Walk away",
				goto:function() {
					window.game.load(window.scenes.end);
					return "before_it_began";
				}
			},
			{
				text:"Look into the building",
				goto:"look_into"
			}
		]
	},
	"look_into":{
		text:"Looking into the building he can make out some huge plants and a desk.",
		actions:[
			{
				text:"Hulk smash!",
				goto:"smash"
			},
			{
				text:"Walk away",
				goto:function() {
					window.game.load(window.scenes.end);
					return "before_it_began";
				}
			},
			{
				text:"look around",
				goto:"look_around_2"
			}
		]
	},
	"look_around_2":{
		text:"Small silhuettes of people approaching the distance are starting to be visible, \"I REALLY need to get off the street\" he mumbles to himself...",
		actions:[
			{
				text:"Hulk smash!",
				goto:"smash"
			},
			{
				text:"Dance!",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "dance";
					} else {
						return "get_shot";
					}
				}
			},
			{
				text:"look around",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "look_around_2";
					} else {
						return "get_shot";
					}
					
				}
			}
		]
	},
	"dance":{
		text:"The man throws his body around like a very nimble sack of potatoes. \"Much expression!\"",
		actions:[
			{
				text:"Hulk smash!",
				goto:"smash"
			},
			{
				text:"Dance!",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "dance";
					} else {
						return "get_shot";
					}
				}
			},
			{
				text:"look around",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "look_around_2";
					} else {
						return "get_shot";
					}
				}
			}
		]
	},
	"get_shot":{
		text:"Sticking around too long was probably not a good idea..",
		actions:[
			{
				text:"Start over",
				goto:function() {
					window.game.load(window.scenes.menu);
					return "start";
				}
			}
		]
	},

	//SMASH!!

	"smash":{//NEEDS MORE
		text:"he smashes the window with his bare hands, in restrospect this was problably rather dum, his hands are now covered in shards of glass.",
		actions:[
			{
				text:"Hulk smash!",
				goto:"smash_2",
			},
			{
				text:"Enter the building",
				goto:function() {
					window.game.load(window.scenes.lobby);
					return "start";
				}
			}
		]
	},
	"smash_2":{//NEEDS MORE
		text:function() {
			window.game.bloodyFists = true;
			return "he smashes the remaining windows, his hands are now more like pulps of meat, also he is bleeding a bit...";
		},
		actions:[
			{
				text:"Hulk smash!",
				goto:"smash_3"
			},
			{
				text:"Enter the building",
				goto:function() {
					window.game.load(window.scenes.lobby);
					return "start";
				}
			}
		]
	},
	"smash_3": {//NEEDS MORE
		text:"The windows are gone...",
		actions:[
			{
				text:"Hulk smash!",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "smash_3";
					} else {
						return "get_shot";
					}
				}
			},
			{
				text:"Enter the building",
				goto:function() {
					window.game.load(window.scenes.lobby);
					return "start";
				}
			}
		]
	},
	"outside_again": {//NEEDS MORE
		text:"The mand is now standing outside.",
		actions:[
			{
				text:"Hulk smash!",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger != undefined ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "smash_3";
					} else {
						return "get_shot";
					}
				}
			},
			{
				text:"Enter the building",
				goto:function() {
					window.game.load(window.scenes.lobby);
					return "start";
				}
			},
			{
				text:"Dance!",
				goto:function() {
					window.scenes.front.danger = window.scenes.front.danger ? window.scenes.front.danger+1:0;
					if(window.scenes.front.danger < 4) {
						return "dance";
					} else {
						return "get_shot";
					}
				}
			},
		]
	}

};