#library('Log');

#import('dart:html');

class Log
{
  static Element debugElement;
  static debug(String message)
  {
    debugElement.innerHTML = message;
  }
}
