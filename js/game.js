var logos = {
	'n': 'nativescript',
	'a': 'angular',
	'v': 'vue',
	'w': 'webpack',
	'i': 'nativescripting',
	'r': 'redux',
	'p': 'preact'
  };

var game = {
  language: window.location.hash.substring(1) || 'en',
  level: parseInt(localStorage.level, 10) || 0,
  answers: (localStorage.answers && JSON.parse(localStorage.answers)) || {},
  solved: (localStorage.solved && JSON.parse(localStorage.solved)) || [],
  user: localStorage.user || '',
  changed: false,

  start: function() {
    game.translate();

    $('#level-counter .total').text(levels.length);
    $('#editor').show();
    $('#share').hide();

    if (!localStorage.user) {
      game.user = '' + (new Date()).getTime() + Math.random().toString(36).slice(1);
      localStorage.setItem('user', game.user);
    }

    this.setHandlers();
    this.loadMenu();
    game.loadLevel(levels[game.level]);
  },

  doAnimations: function() {
	var level = levels[game.level];
	var resultArray = level.result;
	var string = level.board;
	

	for (var i = 0; i < string.length; i++) {
	  var c = string.charAt(i);
	  var logoClass = ".logo-" + logos[c];
	  var result = resultArray[i];

	  $(logoClass).position({
		  at: "left+" + result.left + " top+" + result.top,
		  of: $(".screen"),
		  using: function(css, calc) {
			  $(this).animate(css, 500, "linear");
		  }
	  });

	  $(logoClass).removeClass("pulse");

	}
  },

  setHandlers: function() {

    $('#next').on('click', function() {
	  $('#code').focus();

      if ($(this).hasClass('disabled')) {
        //if (!$('.frog').hasClass('animated')) {
		if ($('.frog').hasClass('pulse')) {
          game.tryagain();
        }

        return;
      }

	  $('.frog').addClass('animated bounceOutUp');
	  //game.doAnimations();


	  $('.arrow, #next').addClass('disabled');

	  // add a ga event to specify that this level has been completed
	  dataLayer.push({'event': 'level_' + game.level + '_complete'});

      setTimeout(function() {
        if (game.level >= levels.length - 1) {
          game.win();
        } else {
          game.next();
        }
      }, 1500);
    });

    $('#code').on('keydown', function(e) {
      if (e.keyCode === 13) {

        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          game.check();
          $('#next').click();
          return;
        }

        var max = $(this).data('lines');
        var code = $(this).val();
        var trim = code.trim();
        var codeLength = code.split('\n').length;
        var trimLength = trim.split('\n').length;

        if (codeLength >= max) {

          if (codeLength === trimLength) {
            e.preventDefault();
            $('#next').click();
          } else {
            $('#code').focus().val('').val(trim);
          }
        }
      }
    }).on('input', game.debounce(game.check, 500))
    .on('input', function() {
      game.changed = true;
    });

    $('#editor').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass();
    });

    $('#labelReset').on('click', function() {
      var warningReset = messages.warningReset[game.language] || messages.warningReset.en;
      var r = confirm(warningReset);

      if (r) {
        game.level = 0;
        game.answers = {};
        game.solved = [];
        game.loadLevel(levels[0]);

        $('.level-marker').removeClass('solved');
      }
    });

    $('#language').on('click', function() {
      $('#language .tooltip').toggle();
    }).on('click', 'a', function() {
      var language = $(this).text();
      $('#language .toggle').text(language);
    });

    $(window).on('beforeunload', function() {
      game.saveAnswer();
      localStorage.setItem('level', game.level);
      localStorage.setItem('answers', JSON.stringify(game.answers));
	  localStorage.setItem('solved', JSON.stringify(game.solved));
    }).on('hashchange', function() {
      game.language = window.location.hash.substring(1) || 'en';
      game.translate();

      $('#tweet iframe').remove();
      var html = '<a href="https://twitter.com/share" class="twitter-share-button"{count} data-url="http://flexboxfroggy.com" data-via="thomashpark">Tweet</a> ' +
                 '<a href="https://twitter.com/thomashpark" class="twitter-follow-button" data-show-count="false">Follow @thomashpark</a>';
      $('#tweet').html(html);
      twttr.widgets.load();

      if (game.language === 'en') {
        history.replaceState({}, document.title, './');
      }
    });
  },

  prev: function() {
    this.level--;

    var levelData = levels[this.level];
    this.loadLevel(levelData);
  },

  next: function() {
    this.level++;

    var levelData = levels[this.level];
    this.loadLevel(levelData);
  },

  loadMenu: function() {
    levels.forEach(function(level, i) {
      var levelMarker = $('<span/>').addClass('level-marker').attr('data-level', i).text(i+1);

      if ($.inArray(level.name, game.solved) !== -1) {
        levelMarker.addClass('solved');
      }

      levelMarker.appendTo('#levels');
    });

    $('.level-marker').on('click', function() {
      game.saveAnswer();

      var level = $(this).attr('data-level');
      game.level = parseInt(level, 10);
      game.loadLevel(levels[level]);
    });

    $('#level-indicator').on('click', function() {
      $('#levelsWrapper').toggle();
    });

    $('.arrow.left').on('click', function() {
      if ($(this).hasClass('disabled')) {
        return;
      }
	  
      game.saveAnswer();
      game.prev();
    });

    $('.arrow.right').on('click', function() {
      if ($(this).hasClass('disabled')) {
        return;
      }
	  
      game.saveAnswer();
      game.next();
    });
  },

  loadLevel: function(level) {
    $('#editor').show();
    $('#share').hide();
	//$('#background, #pond').removeClass('wrap').attr('style', '').empty();
	$("#holding").empty();
	$("#holding-hidden").empty();
    $('#levelsWrapper').hide();
    $('.level-marker').removeClass('current').eq(this.level).addClass('current');
    $('#level-counter .current').text(this.level + 1);
    $('#before').text(level.before);
    $('#after').text(level.after);
    $('#next').addClass('disabled');

    var instructions = level.instructions[game.language] || level.instructions.en;
    $('#instructions').html(instructions);

    $('.arrow.disabled').removeClass('disabled');

    if (this.level === 0) {
      $('.arrow.left').addClass('disabled');
    }

    if (this.level === levels.length - 1) {
      $('.arrow.right').addClass('disabled');
    }

    var answer = game.answers[level.name];
    $('#code').val(answer).focus();

    this.loadDocs();

	//var lines = Object.keys(level.answer).length;
	var lines = level.lines;
	$('#code').height(20 * lines).data("lines", lines);
	
	// if the answer is the first line of code, remove indentation
	if (level.before.length == 0) {
		$('#code').addClass("code-top-line");
	} else {
		$('#code').removeClass("code-top-line");
	}

	$("#code").val(level.hint);

	if (level.preselect) {
		$("#code").selectRange(level.preselect[0], level.preselect[1]);
	}

	$('#help').unbind('click').on('click', function() {
		$("#code").val(level.answer);
		$("#code").effect("shake");
		//game.doAnimations();
		game.check();
	});

    // var string = level.board;
    // var markup = '';
    // var colors = {
    //   'g': 'green',
    //   'r': 'red',
    //   'y': 'yellow'
    // };

    // for (var i = 0; i < string.length; i++) {
    //   var c = string.charAt(i);
    //   var color = colors[c];

    //   var lilypad = $('<div/>').addClass('lilypad ' + color).data('color', color);
    //   var frog = $('<div/>').addClass('frog ' + color).data('color', color);

    //   $('<div/>').addClass('bg').css(game.transform()).appendTo(lilypad);
    //   $('<div/>').addClass('bg animated pulse infinite').appendTo(frog);

    //   $('#background').append(lilypad);
    //   $('#pond').append(frog);
	// }
	
    var string = level.board;
	var markup = '';

    for (var i = 0; i < string.length; i++) {
		var c = string.charAt(i);
		var logo = logos[c];

		var logoImage = $('<div/>').addClass('frog bg animated pulse infinite logo-' + logo);

		//$('<div/>').addClass('bg').css(game.transform()).appendTo(lilypad);
		//$('<div/>').addClass('bg animated pulse infinite').appendTo(logoImage);
		
		// a little hack to pre-load the images into the device, but only on level one
		if (!level.levelone) {
			$('#holding').show();
			$('#holding').append(logoImage);
		} else {
			$('#holding').hide();
			$('#holding-hidden').append(logoImage);
			var leveloneArray = level.levelone;
			var logoClass = ".logo-" + logos[c];
			var levelone = leveloneArray[i];
		
			$(logoClass).position({
				at: "left+" + levelone.left + " top+" + levelone.top,
				of: $(".screen")
			});
		}
    }

    // var classes = level.classes;

    // if (classes) {
    //   for (var rule in classes) {
    //     $(rule).addClass(classes[rule]);
    //   }
    // }

    var selector = level.selector || '';
    $('#background ' + selector).css(level.answer);

    game.changed = false;
    game.applyStyles();
    game.check();
  },

  loadDocs: function() {
    $('#instructions code').each(function() {
      var code = $(this);
      var text = code.text();

      if (text in docs) {
        code.addClass('help');
        code.on('mouseenter', function(e) {
          if ($('#instructions .tooltip').length === 0) {
            var html = docs[text][game.language] || docs[text].en;
            var tooltipX = code.offset().left;
            var tooltipY = code.offset().top + code.height() + 13;
            $('<div class="tooltip"></div>').html(html).css({top: tooltipY, left: tooltipX}).appendTo($('#instructions'));
          }
        }).on('mouseleave', function() {
          $('#instructions .tooltip').remove();
        });
      }
    });
  },

  applyStyles: function() {
    // var level = levels[game.level];
    // var code = $('#code').val();
    // var selector = level.selector || '';
    //$('#pond ' +  selector).attr('style', code);
    game.saveAnswer();
  },
  
  check: function() {    
    game.applyStyles();

    var level = levels[game.level];
    // var lilypads = {};
    // var frogs = {};
	var correct = false;
	
	// get the correct answer from levels.js (trim it, make sure it's lower case, and replace all quotes/spaces/line breaks)
	var correctAnswer = level.answer.trim().toLowerCase().replace(/["']/g, "").replace(/ /g,"").replace(/(\r\n|\n|\r)/gm,"");
	var thisAnswer = $("#code").val().trim().toLowerCase().replace(/["']/g, "").replace(/ /g,"").replace(/(\r\n|\n|\r)/gm,"");

	if (correctAnswer == thisAnswer) {
		correct = true;
	}

    // $('.frog').each(function() {
    //   var position = $(this).position();
    //   position.top = Math.floor(position.top);
    //   position.left = Math.floor(position.left);

    //   var key = JSON.stringify(position);
    //   var val = $(this).data('color');
    //   frogs[key] = val;
    // });

    // $('.lilypad').each(function() {
    //   var position = $(this).position();
    //   position.top = Math.floor(position.top);
    //   position.left = Math.floor(position.left);

    //   var key = JSON.stringify(position);
    //   var val = $(this).data('color');

    //   if (!(key in frogs) || frogs[key] !== val) {
    //     correct = false;
    //   }
    // });

    //var submission = new Submission();

    if (correct) {
    //   ga('send', {
    //     hitType: 'event',
    //     eventCategory: level.name,
    //     eventAction: 'correct',
    //     eventLabel: $('#code').val()
    //   });

    //   submission.save({
    //     timeStamp: (new Date()).getTime(),
    //     user: game.user,
    //     levelName: level.name,
    //     changed: game.changed,
    //     input: $('#code').val(),
    //     result: 'correct'
	//   });
	
		game.doAnimations();
            
      if ($.inArray(level.name, game.solved) === -1) {
        game.solved.push(level.name);
      }

      $('[data-level=' + game.level + ']').addClass('solved');
      $('#next').removeClass('disabled');
    } else {
    //   ga('send', {
    //     hitType: 'event',
    //     eventCategory: level.name,
    //     eventAction: 'incorrect',
    //     eventLabel: $('#code').val()
    //   });
      
    //   submission.save({
    //     timeStamp: (new Date()).getTime(),
    //     user: game.user,
    //     levelName: level.name,
    //     changed: game.changed,
    //     input: $('#code').val(),
    //     result: 'incorrect'
    //   });

      $('#next').addClass('disabled');
    }
  },

  saveAnswer: function() {
    var level = levels[this.level];
	game.answers[level.name] = $('#code').val();
  },

  tryagain: function() {
    $('#editor').addClass('animated shake');
  },

  win: function() {
    var solution = $('#code').val();

    this.loadLevel(levelWin);

    $('#editor').hide();
    $('#code').val(solution);
    $('#share').show();
    $('.frog .bg').removeClass('pulse').addClass('bounce');
  },

  transform: function() {
    var scale = 1 + ((Math.random() / 5) - 0.2);
    var rotate = 360 * Math.random();

    return {'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'};
  },

  translate: function() {
    // document.title = messages.title[game.language] || messages.title.en;
    // $('html').attr('lang', game.language);

    // var level = levels[game.level];
    // var instructions = level.instructions[game.language] || level.instructions.en;
    // $('#instructions').html(instructions);
    // game.loadDocs();

    // $('.translate').each(function() {
    //   var label = $(this).attr('id');
    //   var text = messages[label][game.language] || messages[label].en;

    //   $('#' + label).text(text);
    // });
  },

  debounce: function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
};

$(document).ready(function() {
	
	$.fn.selectRange = function(start, end) {
		var e = document.getElementById($(this).attr('id')); // I don't know why... but $(this) don't want to work today :-/
		if (!e) return;
		else if (e.setSelectionRange) { e.focus(); e.setSelectionRange(start, end); } /* WebKit */ 
		else if (e.createTextRange) { var range = e.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); } /* IE */
		else if (e.selectionStart) { e.selectionStart = start; e.selectionEnd = end; }
	};

	game.start();
});