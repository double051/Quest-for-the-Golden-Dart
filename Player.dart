#library("Player");

#import("three.dart/src/ThreeD.dart");
#import("Controls.dart");
#import("dart:json");
#import("Log.dart");

class Player
{
  Vector3 position;
  Vector3 rotation;
  Controls controls;
  
  Player(Vector3 position, Vector3 rotation)
  {
    this.position = position;
    this.rotation = rotation;
    this.controls = new Controls();
    this.controls.forwardCallback = onForward;
    this.controls.backCallback = onBack;
    this.controls.leftCallback = onLeft;
    this.controls.rightCallback = onRight;
    
    Log.debug("player position = ${position.x}, ${position.y}, ${position.z}");
    Log.debug("player rotation = ${rotation.x}, ${rotation.y}, ${rotation.z}");
  }
  
  void update()
  {
    
  }
  
  void onForward()
  {
    Log.debug("onForward");
    position.z -= 5;
  }
  void onBack()
  {
    Log.debug("onBack");
    position.z += 5;
  }
  void onLeft()
  {
    Log.debug("onLeft");
    position.x -= 5;
  }
  void onRight()
  {
    Log.debug("onRight");
    position.x += 5;
  }
}
