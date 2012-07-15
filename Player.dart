#library("Player");

#import("three.dart/src/ThreeD.dart");
#import("Controls.dart");
#import("dart:json");
#import("dart:core");
#import("Log.dart");

class Player
{
  static final double moveDistance = 1.0;
  static final int moveDurationMS = 250;
  static final double turnRotation = Math.PI / 2;
  static final int turnDurationMS = 250;
  
  static final int NORTH = 0;
  static final int EAST = 1;
  static final int SOUTH = 2;
  static final int WEST = 3;
  
  int direction;
  Vector3 directionVector;
  
  Vector3 position;
  Vector3 rotation;
  Controls controls;
  
  // animation
  int timeLast;
  
  bool isTurning;
  int turnTimeEnd;
  int turnTimeStart;
  
  Vector3 turnStartRotation;
  Vector3 turnEndRotation;
  Vector3 turnDeltaVector;
  
  bool isMoving;
  int moveTimeEnd;
  int moveTimeStart;
  
  Vector3 moveStartPosition;
  Vector3 moveEndPosition;
  Vector3 moveDeltaVector;
  
  Player(Vector3 position, Vector3 rotation)
  {
    this.direction = NORTH;
    
    this.position = position;
    this.rotation = rotation;
    
    this.isMoving = false;
    this.moveStartPosition = new Vector3(0, 0, 0);
    this.moveEndPosition = new Vector3(0, 0, 0);
    this.moveDeltaVector = new Vector3(0, 0, 0);
    
    this.isTurning = false;
    this.turnEndRotation = new Vector3(0, 0, 0);
    this.turnStartRotation = new Vector3(0, 0, 0);
    this.turnDeltaVector = new Vector3(0, 0, 0);
    
    this.controls = new Controls();
    this.controls.forwardCallback = onForward;
    this.controls.backCallback = onBack;
    this.controls.leftCallback = onLeft;
    this.controls.rightCallback = onRight;
    
    Log.debug("player position = ${position.x}, ${position.y}, ${position.z}");
    Log.debug("player rotation = ${rotation.x}, ${rotation.y}, ${rotation.z}");
  }
  
  void startTurning()
  {
    isTurning = true;
    turnStartRotation.copy(rotation);
    turnEndRotation.copy(rotation);
    turnTimeStart = timeLast;
    turnTimeEnd = timeLast + turnDurationMS;
  }
  
  void turnRight()
  {
    startTurning();
    direction = (direction + 1)%4;
    turnEndRotation.y += turnRotation;
  }
  
  void turnLeft()
  {
    startTurning();
    direction = (direction - 1)%4;
    turnEndRotation.y -= turnRotation;
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
      }
    }
    if (isTurning)
    {
      if (time > turnTimeEnd)
      {
        isTurning = false;
        rotation.copy(turnEndRotation);
      }
      else if (time > turnTimeStart)
      {
        // interpolate turn
        int turnTimeLeft = turnTimeEnd - time;
        double turnPercentLeft = turnTimeLeft.toDouble()/turnDurationMS.toDouble();
        double turnPercentProgress = 1-turnPercentLeft;
        
        turnDeltaVector.sub(turnEndRotation, turnStartRotation);
        turnDeltaVector.multiplyScalar(turnPercentProgress);
        rotation.add(turnStartRotation, turnDeltaVector);
      }
    }
    timeLast = time;
  }
  
  void onForward()
  {
    if (!isMoving && !isTurning)
    {
      startMoving();
      moveEndPosition.z -= moveDistance;
    }
  }
  void onBack()
  {
    if (!isMoving && !isTurning)
    {
      startMoving();
      moveEndPosition.z += moveDistance;
    }
  }
  void onLeft()
  {
    if (!isMoving && !isTurning)
    {
      turnLeft();
    }
  }
  void onRight()
  {
    if (!isMoving && !isTurning)
    {
      turnRight();
    }
  }
}
