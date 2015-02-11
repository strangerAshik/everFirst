function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('../js/jquery.min.js');
//include('../js/jquery-1.10.2.js');
include('../js/css-pop.js');
include('../js/custom.js');
include('../js/ajax_input.js');
include('../js/ajax_output.js');
include('../js/ajax_edit.js');
include('../js/ajax_delete.js');
include('../js/ajax_transaction.js');
include('../js/ajax_autoComplete.js');
include('../js/ajax_onKeyUp.js');
include('../js/jspdf.js');
include('../js/reportPdf.js');

//define the app window size.
 //window.resizeTo(1200, 700);