function newPageContent(hashName) {

//if #inbox is in the url field

  if (hashName === "inbox") {
    $.getJSON('external.json', function(data) {
     var htmlData = "";
     //loop through each message
     $.each(data.messages, function(i, row) {
     
      //set variable and loop through tags array inside of messages
        if (this.to === "jheher@gmail.com") {
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
          
        }
      });
    $('#content').fadeOut(500).delay(800).fadeIn(500);
    setTimeout(function () {
      $('#content').html(htmlData);
    }, 800)
    });

//if #sent is in the url field
        
  } else if (hashName === "sent") {
    $.getJSON('external.json', function(data) {
     var htmlData = "";
     //loop through each message
     $.each(data.messages, function(i, row) {
     
      //set variable and loop through tags array inside of messages
        if (this.from === "jheher@gmail.com") {
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
          
          
        }
      
    });
    $('#content').fadeOut(500).delay(800).fadeIn(500);
    setTimeout(function () {
      $('#content').html(htmlData);
    }, 800)
  });

//if #expired is in the url field
  
  } else if (hashName === "expired") {
    $.getJSON('external.json', function(data) {
     var htmlData = "";
     //loop through each message
     $.each(data.messages, function(i, row) {
     
      //set variable and loop through tags array inside of messages
        if (Date.parse(this.expire) < Date.now()) {
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
          
          
        }
      
    });
    $('#content').fadeOut(500).delay(800).fadeIn(500);
    setTimeout(function () {
      $('#content').html(htmlData);
    }, 800)
  });
  
  }

  
}