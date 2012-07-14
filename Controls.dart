#library('Controls');
#import('dart:html');
#import('dart:json');
#import('Log.dart');

class Controls
{
  // WASD and arrow key controls
  bool forward;
  bool back;
  bool left;
  bool right;
  
  static final int keyW = 87;
  static final int keyA = 65;
  static final int keyS = 83;
  static final int keyD = 68;
  static final int keyArrowUp = 38;
  static final int keyArrowDown = 40;
  static final int keyArrowLeft = 37;
  static final int keyArrowRight = 39;
  
  Controls()
  {
    this.forward = false;
    this.back = false;
    this.left = false;
    this.right = false;
    
    // set listeners for keyboard events
    document.on.keyDown.add(onKeyDown);
    document.on.keyUp.add(onKeyUp);
  }
  void onKeyDown(KeyboardEvent event)
  {
    // Log.debug("${event.keyCode}");
    int keyDown = event.keyCode;
    switch (keyDown)
    {
      case keyW:
      case keyArrowUp:
        Log.debug('forward down');
        forward = true;
        break;
      case keyA:
      case keyArrowLeft:
        Log.debug('left down');
        left = true;
        break;
      case keyS:
      case keyArrowDown:
        Log.debug('back down');
        back = true;
        break;
      case keyD:
      case keyArrowRight:
        Log.debug('right down');
        right = true;
        break;
    }
  }
  void onKeyUp(KeyboardEvent event)
  {
    int keyUp = event.keyCode;
    switch (keyUp)
    {
      case keyW:
      case keyArrowUp:
        Log.debug('forward up');
        forward = false;
        break;
      case keyA:
      case keyArrowLeft:
        Log.debug('left up');
        left = false;
        break;
      case keyS:
      case keyArrowDown:
        Log.debug('back up');
        back = false;
        break;
      case keyD:
      case keyArrowRight:
        Log.debug('right up');
        right = false;
        break;
    }
  }
}
