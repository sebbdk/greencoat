/* 
* @Author: sebb
* @Date:   2014-07-07 19:57:46
* @Last Modified by:   sebb
* @Last Modified time: 2015-05-28 00:50:50
*/

(function($) {


	var timer;
	var keyboardsound;
	var bgm;
	var bgmOn = false;

	$(document).ready(function(){
		load();
	});

	$(document).on('click', '.info-area a', linkToScene);
	$(document).on('click', '.music-toggle', toggleMusic);

	function toggleMusic() {
		if(bgmOn) {
			$(this).html("Music off");
			bgm.pause();
		} else {
			$(this).html("Music on");
			bgm.play();
		}

		bgmOn = !bgmOn;
	}

	function linkToScene(evt) {
		evt.preventDefault();
		
		var id = $(this).attr('data-goto');
		gotoScene(id);
	}

	function load() {
		bgm = new Audio('sound/AnOddPlace.mp3'); 
		bgm.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.play();
		}, false);
		bgm.play();
		bgmOn = true;

		keyboardsound = new Audio("sound/keyboard.mp3");

		$('.game-wrapper').hide();
		gotoScene("logo");	
		$('.game-wrapper').fadeIn();


	    window.addEventListener('focus', function() {
	    	if(bgmOn) {
				bgm.play();
			}
	    });
	    window.addEventListener('blur', function() {
	    	bgm.pause();
	    });
	}

	function gotoScene(id) {
		//_track('choice_load', id);

		if(id == "The end!") {
			//_track('complete_play', id);			
		}

		$('.game-wrapper').fadeOut(150, function() {

			$('p').html(" ");

			keyboardsound.pause();
			keyboardsound.play();

			var text = scenes[id].text.split("");
			var index = 0;
			timer = setInterval(function() {
				$('p').append( text[index] );
				index++;

				if(index >= text.length) {
					clearInterval(timer);
					keyboardsound.pause();
				}
			}, 35);

			if(scenes[id].graphic) {
				$('img').attr('src', scenes[id].graphic);
			}

			$('.info-area a').remove();
			$.each(scenes[id].actions, function(index, action) {
				action
				$('.info-area').append('<a href="#" data-goto="' + action.goto + '">' + action.text + '</a>')
			});

			$('.game-wrapper').fadeIn(150);

		});
	}

	function Sound(source,volume,loop) {
	    this.source=source;
	    this.volume=volume;
	    this.loop=loop;

	    var son;

	    this.son=son;
	    this.finish=false;

	    this.stop=function() {
	    	if(this.son) {
	    	    document.body.removeChild(this.son);
	    	    this.son = null;
	    	}
	    }

	    this.start=function() {
	        if(this.finish)return false;
	        this.son=document.createElement("embed");
	        this.son.setAttribute("src",this.source);
	        this.son.setAttribute("hidden","true");
	        this.son.setAttribute("volume",this.volume);
	        this.son.setAttribute("autostart","true");
	        this.son.setAttribute("loop",this.loop);
	        document.body.appendChild(this.son);

			this.son.addEventListener('ended', function () {
				alert("ended!!!");
			}, false);

	    }

	    this.remove=function() {
	        document.body.removeChild(this.son);
	        this.finish=true;
	    }

	    this.init=function(volume,loop) {
	        this.finish=false;
	        this.volume=volume;
	        this.loop=loop;
	    }
	}

})(jQuery);