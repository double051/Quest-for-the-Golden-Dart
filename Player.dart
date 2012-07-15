#library("Player");

#import("three.dart/src/ThreeD.dart");
#import("Controls.dart");
#import("dart:json");
#import("Log.dart");

class Player
{
  static final double moveDistance = 1.0;
  static final int moveDurationMS = 250;
  
  Vector3 position;
  Vector3 rotation;
  Controls controls;
  
  bool isMoving;
  int timeLast;
  int moveTimeEnd;
  int moveTimeStart;
  int moveTimeLast;
  
  Vector3 moveStartPosition;
  Vector3 moveEndPosition;
  Vector3 moveDeltaVector;
  
  Player(Vector3 position, Vector3 rotation)
  {
    this.position = position;
    this.rotation = rotation;
    
    this.isMoving = false;
    this.moveStartPosition = new Vector3(0, 0, 0);
    this.moveEndPosition = new Vector3(0, 0, 0);
    this.moveDeltaVector = new Vector3(0, 0, 0);
    
    this.controls = new Controls();
    this.controls.forwardCallback = onForward;
    this.controls.backCallback = onBack;
    this.controls.leftCallback = onLeft;
    this.controls.rightCallback = onRight;
    
    Log.debug("player position = ${position.x}, ${position.y}, ${position.z}");
    Log.debug("player rotation = ${rotation.x}, ${rotation.y}, ${rotation.z}");
  }
  
  void startMoving()
  {
    isMoving = true;
    moveStartPosition.copy(position);
    moveEndPosition.copy(position);
    moveTimeStart = timeLast;
    moveTimeEnd = timeLast + moveDurationMS;
  }
  
  void update(int time)
  {
    if (isMoving)
    {
      if (time > moveTimeEnd)
      {
        // stop moving
        isMoving = false;
        position.copy(moveEndPosition);
      }
      else if (time > moveTimeStart)
      {
        // interpolate movement
        int moveTimeLeft = moveTimeEnd - time;
        double movePercentLeft = moveTimeLeft.toDouble()/moveDurationMS.toDouble();
        double movePercentProgress = 1-movePercentLeft;
        
        moveDeltaVector.sub(moveEndPosition, moveStartPosition);
        moveDeltaVector.multiplyScalar(movePercentProgress);
        position.add(moveStartPosition, moveDeltaVector);
        
        moveTimeLast = time;
      }
    }
    timeLast = time;
  }
  
  void onForward()
  {
    Log.debug("onForward");
    if (!isMoving)
    {
      startMoving();
      moveEndPosition.z -= moveDistance;
    }
  }
  void onBack()
  {
    Log.debug("onBack");
    if (!isMoving)
    {
      startMoving();
      moveEndPosition.z += moveDistance;
    }
  }
  void onLeft()
  {
    Log.debug("onLeft");
    if (!isMoving)
    {
      startMoving();
      moveEndPosition.x -= moveDistance;
    }
  }
  void onRight()
  {
    Log.debug("onRight");
    if (!isMoving)
    {
      startMoving();
      moveEndPosition.x += moveDistance;
    }
  }
}
