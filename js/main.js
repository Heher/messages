$(function() {
  var newHash = "";
  
  //hashchange function for loading content into content div dynamically
  
  $("nav").delegate("a", "click", function() {
    window.location.hash = $(this).attr("href");
    return false;
  });
  
  $(window).bind('hashchange', function(){
    newHash = window.location.hash.substring(1);
    
    if (newHash) {
      newPageContent(newHash);
    }  
  });
  
  $(window).trigger('hashchange');
  
  // Get JSON file

  getJSONDataAndSetContent();
  
  //Show Main message when subject line is clicked
  
  messageClicked();

});

  
function getJSONDataAndSetContent() {
  $.getJSON('external.json', function(data) {
     //set variable to put inside of content
     var htmlData = "";
     var unreadMessages = 0;
     
     //loop through each message
     $.each(data.messages, function(i, row) {
      //set unreadMessages notification icon
      
      if (this.unread === true && this.to === "jheher@gmail.com") {
        unreadMessages++;
      }
      
      //set variable and loop through tags array inside of messages
      
        var htmlTags = "";
        for(k=0; k<this.tags.length; k++) {
          if(k===0) {
            htmlTags = "<li class=\"first\">" + this.tags[k] + "</li>";
          } else {
            htmlTags += "<li>" + this.tags[k] + "</li>";
          }
       }
       
       //create html out of message data
       
        htmlData += "<div class=\"message-container " + this.title + "\"><div class=\"message-head\"><h3 class=\"message-from\">From: " + this.from + "</h3><h3 class=\"message-to\">To: " + this.to + "</h3><div class=\"clearfix\"></div><h3 class=\"message-subject\">" + this.title + "</h3></div><div class=\"message-main\"><p class=\"message-body\">" + this.message + "</p><p class=\"message-sent\">Sent: " + this.sent + "</p><p class=\"message-expire\">Expires: " + this.expire + "</p><div class=\"clearfix\"></div><ul class=\"message-tags\">" + htmlTags + "</ul></div></div>";
        
      
      
     });
     //set all data inside of content div
     
     $('#content').html(htmlData);
     
     //hide unreadMessages notification if unreadMessages is zero
     
     if (unreadMessages === 0) {
      $('#inbox-num').hide();
     } else {
      $('#inbox-num').html(unreadMessages);
      }
  });
}

//Show Main message when subject line is clicked

function messageClicked() {
  $('.message-head').live("click", function() {
    $(this).parents('.message-container').find('.message-main').slideToggle();
  }); 
}