#library('Controls');
#import('dart:html');
#import('dart:json');
#import('Log.dart');

class Controls
{
  // WASD and arrow key controls
  bool forwardDown;
  bool backDown;
  bool leftDown;
  bool rightDown;
  
  Function forwardCallback;
  Function backCallback;
  Function leftCallback;
  Function rightCallback;
  
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
    this.forwardDown = false;
    this.backDown = false;
    this.leftDown = false;
    this.rightDown = false;
    
    // set listeners for keyboard events
    document.on.keyDown.add(onKeyDown);
    document.on.keyUp.add(onKeyUp);
  }
  void onKeyDown(KeyboardEvent event)
  {
    int keyDown = event.keyCode;
    switch (keyDown)
    {
      case keyW:
      case keyArrowUp:
        if (!forwardDown && forwardCallback != null)
        {
          forwardCallback();
        }
        forwardDown = true;
        break;
      case keyA:
      case keyArrowLeft:
        if (!leftDown && leftCallback != null)
        {
          leftCallback();
        }
        leftDown = true;
        break;
      case keyS:
      case keyArrowDown:
        if (!backDown && backCallback != null)
        {
          backCallback();
        }
        backDown = true;
        break;
      case keyD:
      case keyArrowRight:
        if (!rightDown && rightCallback != null)
        {
          rightCallback();
        }
        rightDown = true;
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
        forwardDown = false;
        break;
      case keyA:
      case keyArrowLeft:
        leftDown = false;
        break;
      case keyS:
      case keyArrowDown:
        backDown = false;
        break;
      case keyD:
      case keyArrowRight:
        rightDown = false;
        break;
    }
  }
}
