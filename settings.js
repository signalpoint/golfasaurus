/**
 * Specify your DrupalGap's Mobile Application settings here. 
 */
drupalgap.settings = {
  
  /* Paths */
  'site_path':'http://www.drupalgap.org', /* e.g. http://www.example.com */
  'base_path':'/',
  'default_services_endpoint':'drupalgap',
  'clean_urls':false, /* set to true if you have clean urls enabled on your site */
  
  /* App Information */
  'title':'Golfasaurus',
  'front':'home',
  
  /* Language */
  'language':'und',
  
  /* Files */
  'file_public_path':'sites/default/files',
  
  /* Debug */
  'debug':true, /* set to true to see console.log debug information */
  'debug_level':0, /* 0 = mild, 1 = medium (), 2 = spicy () */
  
  /* Theme */
  'theme':'easystreet3',
  
  /* Logo */
  'logo':'',
  
  /* Blocks */
  'blocks':{
    'easystreet3':{
      'header':{
        /* Instead of just a header block, we may want 3 separate blocks, that
           way we can have a title, and a menu button on the left and right (and
           potentially drop down menus if we continue to utilize the menu/block
           goodness) */
        'header':{}
      },
      'navigation':{
        'user_menu_anonymous':{
          'roles':{
            'value':['anonymous user'],
            'mode':'include',
          }
        },
        'user_menu_authenticated':{
          'roles':{
            'value':['authenticated user'],
            'mode':'include',
          }
        }
      },
      'sub_navigation':{
        'main_menu':{},
        'primary_local_tasks':{},
      },
      'content':{
        'main':{}
      },
      'footer':{
        'powered_by':{}
      },
    },
  },
  
  /* Menus */
  'menus':{
    'main_menu':{
      'links':[
        {'title':'Content','path':'node','options':{'attributes':{'data-icon':'star'}}},
        {'title':'Taxonomy','path':'taxonomy/vocabularies','options':{'attributes':{'data-icon':'grid'}}},
        {'title':'Users','path':'user-listing','options':{'attributes':{'data-icon':'info'}}},
      ],
    },
    'user_menu_anonymous':{
      'links':[
        {'title':'Login','path':'user/login'},
        {'title':'Register','path':'user/register'},
      ],
    },
    'user_menu_authenticated':{
      'links':[
        {'title':'My Account','path':'user'},
        {'title':'Logout','path':'user/logout'},
      ],
    },
  },
};

/* Custom Modules */
drupalgap.modules.custom = [
  {'name':'golfasaurus'},
];

/* Contrib Modules */
drupalgap.modules.contrib = [
  {'name':'local_users'},
];
