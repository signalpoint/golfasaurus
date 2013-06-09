/**
 * Implements hook_menu().
 */
function golfasaurus_menu() {
  try {
    var items = {
      'home':{
        'title':'Home',
        'page_callback':'golfasaurus_home_page',
      }/*,
      'players':{
        'title':'Players',
        'page_callback':'golfasaurus_players_page',
      },*/
    };
    return items;
  }
  catch (error) {
    alert('golfasaurus_menu - ' + error);
  }
}



/**
 * Page callback for home.
 */
function golfasaurus_home_page() {
  try {
    var content = {
      'players':{
        'theme':'button_link',
        'path':'local_users/list',
        'text':'Players',
      }
    };
    return content;
  }
  catch (error) {
    alert('golfasaurus_home_page - ' + error);
  }
  
}

/**
 * Page callback for players.
 */
/*function golfasaurus_players_page() {
  try {
    var content = {
      'players_list':{
        'theme':'jqm_item_list',
        'title':'Players'
      }
    };
    var items = [];
    var players = collection_load('golfasaurus', 'players');
    if (players) {
      $.each(players, function(uid, player){
        items.push(l(player.name));
      });
      content.players_list.items = items;  
    }
    return content;
  }
  catch (error) {
    alert('golfasaurus_home_page - ' + error);
  }
  
}*/

/**
 * Implements hook_mvc_model().
 */
function golfasaurus_mvc_model() {
  var models = {
    "score":{
      "primary_key":"sid",
      "fields":{
        "course":{
          "type":"textfield",
          "title":"Course",
          "required":true
        }
      }
    },
    "course":{
      "primary_key":"cid",
      "fields":{
        "location":{
          "type":"textfield",
          "title":"Location",
          "required":true
        }
      }
    }
  };
  return models;
}

