/* 
* @Author: sebb
* @Date:   2014-07-07 19:57:46
* @Last Modified by:   sebb
* @Last Modified time: 2015-06-03 16:32:55
*/

(function() {

	$(document).on('ready', function() {
		window.game.init();
	});

	window.game = {
/**
 * game settings
 */
		typeTime:15,

/**
 * Privates
 */
		music:null,
		musicOn:null,
		scene:null,
		typingTimer:null,

/**
 * Initialization
 * @return void
 */
		init:function() {
			var self = this;

			//initialize
			self.initMusic();
			self.keyboardsound = new Audio("sound/keyboard.mp3");

			//start game
			self.load(window.scenes.front);
			self.goto("start");

			//bind events
			$(document).on('click', '.music-toggle', function() {self.toggleMusic();});
		},
		goto:function(slug) {
			var scene = this.scene[slug];
			var self = this;

			//setup graphic
			if(scene.graphic) {
				$('img').attr('src', scene.graphic);
			}

			self.keyboardsound.pause();
			self.keyboardsound.currentTime = 0;
			self.keyboardsound.play();


			//setup text
			$('p').html(" ");

			if(typeof(scene.text) == "function") {
				var text = scene.text().split("");
			} else {
				var text = scene.text.split("");
			}
			

			var index = 0;
			clearInterval(self.typingTimer);
			self.typingTimer = setInterval(function() {
				$('p').append( text[index] );
				index++;

				if(index >= text.length) {
					self.keyboardsound.pause();
					clearInterval(self.typingTimer);
				}
			}, self.typeTime);

			//setup options
			$('.info-area a').remove();
			$.each(scene.actions, function(index, action) {
				var link = $('<a>' + action.text + '</a>');
				$('.info-area').append(link);

				link.on('click', function() {
					if(typeof(action.goto) == "function") {
						self.goto(action.goto());
					} else {
						self.goto(action.goto);
					}
				});
			});
		},
		load:function(obj) {
			this.scene = obj;
		},
		initMusic:function() {
			this.music = new Audio('sound/AnOddPlace.mp3'); 
			this.music.addEventListener('ended', function() {
			    this.currentTime = 0;
			    this.play();
			}, false);

			if(!localStorage.musicOn || localStorage.musicOn == "false") {
				this.toggleMusic(false);
			} else {
				this.toggleMusic(true);
			}
		},
		toggleMusic:function(value) {
			value = value != undefined ? value:!this.musicOn;

			if(value == false) {
				$('.music-toggle').html("Music off");
				this.music.pause();
				localStorage.musicOn = value;
			} else {
				$('.music-toggle').html("Music on");
				this.music.play();
				localStorage.musicOn = value;
			}

			this.musicOn = value;
		}

	}

})(jQuery);