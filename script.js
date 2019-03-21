$(document).ready(function(){
  var $body = $('.tweetList');
  // $body.html();

 // var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
 // Saturday, June 9th, 2007, 5:46:21 PM
// $('#date').append(now);

  var index = streams.home.length - 1;
  var allTweets = [];
  while(index >= 0){
    var tweet = streams.home[index];
    var userName = '@' + tweet.user;
    // var userElm = $('<div class="userName">'+userName+'</div>');
    // var userId = $('<div class="userName">'+userName+'</div>')
    var $tweet = $('<div class="tweets"><div class ="userName">'+ userName +'</div>' + tweet.message + '. -' +  jQuery.timeago(new Date())+'</div>');
    allTweets.push([userName,$tweet])
    // let dateStr = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    // <div class="tweets"><div class="userName">username</div> message date</div>
    // $tweet.text(tweet.message + '. -' + jQuery.timeago(new Date()));
    // $body.append(`<p>${userName}</p>`)
    // $body.append(userElm)
    $body.append($tweet);
    index -= 1;
  }


  $('#btnRefresh').on('click', function(){
    location.reload();
  });
  $('.back').append($('<button id="btnBack">Back</button>'))
  $('.back').hide();

  userClick();

  function userClick(){
    $('.userName').on('click', function() {
      $body.html('');
      var user = $(this).text();
      for (var tweets of allTweets){
        if (tweets.includes(user)){
          $body.append(tweets[1])
        }
      }
      
      $('.back').show(300);
      $('#btnBack').on('click', function(){
        $body.html('');
        allTweets.forEach(e=> {$body.append(e[1]);
        $('.back').hide();
        });
        userClick();
      });
    });
  }



    // let newArr = [];
    // for(let i = 0; i < allTweets.length; i++){
    //   for(let j = 0; j < allTweets[i].length; j++){
    //     if(allTweets[i] === 'mracus'){
    //       newArr.push(allTweets[i][j]);
    //     }
    //   }
    // }
    // console.log(newArr);




  var userTweets = function(users){
      for(let prop in users){
        // if(users[prop] === 'shawndrost')
        console.log(users[prop]);
        
    }
  }
    

  // $('h4').click(function(){
  //   console.log(tweet.user)
  // })

});



