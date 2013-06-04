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
  var score = drupalgap_mvc_model_load('golfasaurus', 'score');
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
function golfasaurus_mvc_model() {
  var models = {
    "score":{
      "sid":{
        "type":"hidden",
        "title":"Score ID",
        "required":true,
        "primary_key":true
      },
      "course":{
        "type":"textfield",
        "title":"Course",
        "required":true
      }
    },
    "course":{
      "cid":{
        "type":"hidden",
        "title":"Course ID",
        "required":true,
        "primary_key":true
      },
      "location":{
        "type":"textfield",
        "title":"Location",
        "required":true
      }
    }
  };
  return models;
}

