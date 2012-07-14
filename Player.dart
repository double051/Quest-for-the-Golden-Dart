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
    
    Log.debug("player position = ${position.x}, ${position.y}, ${position.z}");
    Log.debug("player rotation = ${rotation.x}, ${rotation.y}, ${rotation.z}");
  }
  
  void update()
  {
    
  }
}
