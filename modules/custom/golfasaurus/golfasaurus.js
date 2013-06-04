/**
 * Implements hook_menu().
 */
function golfasaurus_menu() {
  try {
    var items = {
      'home':{
        'title':'Home',
        'page_callback':'golfasaurus_home',
      }
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
function golfasaurus_home() {
  var content = {
    'players':{
      'theme':'button_link',
      'path':'local_users/list',
      'text':'Players',
    },
  };
  return content;
}

/**
 * Implements hook_mvc_model().
 */
/*function golfasaurus_mvc_model() {
  var models = {
    "score":{
      "sid":{
        "type":"int",
        "title":"Score ID",
        "required":true,
        "primary_key":true
      },
      "course":{
        "type":"int",
        "title":"Course",
        "required":true
      }
    }
  };
  return models;
}*/
