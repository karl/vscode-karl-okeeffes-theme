var TestKosmosSettings = $.inherit({
  __constructor : function() {
    // start the countdown timer if there is a new session timer
    if(($(".session-countdown").length != 0) || (typeof learningSessionId != 'undefined') ){
      this.startSessionPermition(countdown, learningSessionId)
    }else if($("#new-student-session-timer").length != 0 || $("#practice-time-session-timer").length != 0){
      this.startNewCountDown();
    };
    $('.audio-radio-mic-test').livequery('click', this.ableDisableMicrophoneButton);
  },

  ableDisableMicrophoneButton: function(src){
    var _this   = $(this);
    var radioId = _this.attr("id");
    var radioValue = radioId.split('-')[0];

    $("#answer-no-mic-test").slideUp(250, 'easeInSine');
    $("#answer-yes-mic-test").slideUp(250, 'easeInSine');
    if(radioValue === "yes"){
      $("#answer-"+ radioId).slideDown(250, 'easeInSine');
      $("#start_session_button").prop('disabled', false);
      $("#call").prop('disabled', true);
    }else if(radioValue === "no"){
      $("#answer-"+ radioId).slideDown(250, 'easeInSine');
      $("#start_session_button").prop('disabled', true);
      $("#call").prop('disabled', false);
    }
  },

  // this is finding the first value and then opening the interval to countdown
  // if the time is 60 sec from the session starting do more things
  startNewCountDown: function(){
    var _this = this;
    var expectedTime = $.now();
    $.each($(".pupil-new-countdown-timer-box"), function(index, timerElem) {
      var timerId = $(timerElem).find(".student-session-timer").attr("id");
      if($(timerElem).attr("data-time-endpoint")){
        $.getJSON($(timerElem).data("timeEndpoint"), function(data){
          var timeLeft = data["time"];
          _this.initalCountdown(timeLeft, expectedTime, _this, timerId);
        })
      } else {
        var timeLeft = $(timerElem).attr("data-end-time");
        _this.initalCountdown(timeLeft, expectedTime, _this, timerId);
      }
    })
  },

  initalCountdown: function(timeLeft, expectedTime, _this, timerId) {
    //this check if there are only 3 minutes left(in milliseconds) to the start of the session
    if($("#practice-time-session-timer").length != 0 && timeLeft <= (180 * 1000)){
      window.location.href = "/home" + "?pt_redirect=three_min";
    }
    if(timeLeft <= 0){
      _this.checkActivatedSession(timerId);
    }else{
      _this.appendNewTime(timeLeft, timerId);
      var interval = setInterval(function(){
        var currentTime = $.now();
        if((currentTime > expectedTime + (1000*60)) || (currentTime < expectedTime - (1000*60))){
          location.reload();
        };
        expectedTime = expectedTime + 1000;
        timeLeft = timeLeft - 1000;
        _this.appendNewTime(timeLeft, timerId);
        if(timeLeft <= 1000){
          clearInterval(interval);
          _this.checkActivatedSession(timerId);
        }
        //this check if there are only 3 minutes left(in milliseconds) to the start of the session
        if($("#practice-time-session-timer").length != 0 && timeLeft <= (180 * 1000)){
          //redirect to home page
          window.location.href = "/home" + "?pt_redirect=three_min";
        }
      },1000);
    };
  },

  // changes the time on the countdown clock given a passed time
  appendNewTime: function(timeLeft, timerId) {
    var newTimeLeft = timeLeft;
    var days = Math.floor(newTimeLeft / (1000*60*60*24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    newTimeLeft = newTimeLeft - days*1000*60*60*24
    var hours = Math.floor(newTimeLeft / (1000*60*60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    newTimeLeft = newTimeLeft - hours*1000*60*60
    var mins = Math.floor(newTimeLeft / (1000*60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    newTimeLeft = newTimeLeft - mins*1000*60
    var secs = Math.floor(newTimeLeft / (1000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    $("#" + timerId).empty();
    var string = '<div class="countdown-timer-counter">';
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+ days[0] +'</div>'
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+ days[1] +'</div>'
    string += '<h3 class="countdown-timer-sub-header mz--uppercase">days</h3>'
    string += '</div>'
    string += '<div class="countdown-timer-counter">';
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+hours[0]+'</div>'
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+hours[1]+'</div>'
    string += '<h3 class="countdown-timer-sub-header mz--uppercase">hours</h3>'
    string += '</div>'
    string += '<div class="countdown-timer-counter">';
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+mins[0]+'</div>'
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+mins[1]+'</div>'
    string += '<h3 class="countdown-timer-sub-header mz--uppercase">mins</h3>'
    string += '</div>'
    string += '<div class="countdown-timer-counter">';
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+secs[0]+'</div>'
    string += '<div class="countdown-timer-big-number countdown-timer-big-number--margin">'+secs[1]+'</div>'
    string += '<h3 class="countdown-timer-sub-header mz--uppercase">secs</h3>'
    string += '</div>'
    $("#" + timerId).append(string);
  },

  // this checks to see if the session has been started by the tutor
  // if it has get the button
  // if not open an interval to check every 10 sec
  checkActivatedSession: function(timerId){
    var _this = this;
    _this.appendNewTime(0);
    var timerElem = $("#" + timerId),
        learningSessionId = timerElem.closest(".pupil-new-countdown-timer-box").data("ls");
    if(_this.tutorStartedSession(learningSessionId)){
      _this.getStartSessionButton(learningSessionId, timerElem);
    }else{
      $(".tutor-not-started-session-append").append('<h3 class="countdown-timer-sub-header countdown-timer-padding">The tutor has not started the session yet. Please wait...</h3>')
      var interval = setInterval(function(){
        if(_this.tutorStartedSession(learningSessionId)){
          clearInterval(interval);
          $(".tutor-not-started-session-append").empty();
          _this.getStartSessionButton(learningSessionId, timerElem);
        };
      },10000);
    };
  },

  // ajax to check if the session has started
  tutorStartedSession: function(learningSessionId){
    var started = false;
    $.ajax({
      url: "/learning_sessions/"+learningSessionId+"/session_started",
      type: 'get',
      dataType : 'json',
      async: false,
      success: function(data){
        if(data.started){
          started = true;
        }
      }
    })
    return started;
  },

  // ajax to get the button and append the new one in
  getStartSessionButton: function(learningSessionId, timerElem) {
    var url = 'learning_sessions/' + learningSessionId + '/enable_start_button',
        timerBox = timerElem.closest(".pupil-new-countdown-timer-box");
    $.get(url, function(data) {
      if(data.success){
        timerBox.find(".countdown-timer-header").text("Your next session is ready to start");
        timerBox.find('.new-student-start-session-button-wrapper').empty();
        timerBox.find('.new-student-start-session-button-wrapper').append(data.link);
        timerBox.find(".new-start-session-button-inactive").removeClass("new-start-session-button-inactive");
      }else{
        location.reload();
      };
    });
  }
});

jQuery(document).ready(function() {
  new TestKosmosSettings();
});
