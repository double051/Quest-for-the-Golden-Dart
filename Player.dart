#library("Player");

#import("three.dart/src/ThreeD.dart");
#import("Controls.dart");
#import("dart:json");
#import("dart:core");
#import("Log.dart");
#import("Maze.dart");
#import("Point.dart");

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
  
  Maze maze;
  
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
  Vector3 facingDirection;
  
  Player(Vector3 position, Vector3 rotation, Maze maze)
  {
    this.direction = NORTH;
    
    this.position = position;
    this.rotation = rotation;
    
    this.maze = maze;
    
    this.isMoving = false;
    this.moveStartPosition = new Vector3(0, 0, 0);
    this.moveEndPosition = new Vector3(0, 0, 0);
    this.moveDeltaVector = new Vector3(0, 0, 0);
    this.facingDirection = new Vector3(0, 0, -1);
    
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
  
  void updateFacingDirection()
  {
    switch(direction)
    {
      case NORTH:
        facingDirection.setValues(0, 0, -1);
        break;
      case SOUTH:
        facingDirection.setValues(0, 0, 1);
        break;
      case EAST:
        facingDirection.setValues(1, 0, 0);
        break;
      case WEST:
        facingDirection.setValues(-1, 0, 0);
        break;
      default:
        break;
    }
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
    turnEndRotation.y -= turnRotation;
    updateFacingDirection();
    // facingDirection = _get90Left(_get90Left(_get90Left(facingDirection)));
  }
  
  void turnLeft()
  {
    startTurning();
    direction = (direction - 1)%4;
    turnEndRotation.y += turnRotation;
    updateFacingDirection();
    // facingDirection = _get90Left(facingDirection);
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
        Log.debug("facingDirection = ${facingDirection.x}, ${facingDirection.y}, ${facingDirection.z}");
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
        Log.debug("facingDirection = ${facingDirection.x}, ${facingDirection.y}, ${facingDirection.z}");
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
    Log.debug("onForward");
    if (!isMoving && !isTurning && _checkMove(facingDirection))
    {
      startMoving();
      moveEndPosition.addSelf(facingDirection);
    }
  }
  void onBack()
  {
    Log.debug("onBack");
    if (!isMoving && !isTurning && _checkMove(_get180(facingDirection)))
    {
      startMoving();
      moveEndPosition.addSelf(_get180(facingDirection));
    }
  }
  void onLeft()
  {
    Log.debug("onLeft");
    if (!isMoving && !isTurning)
    {
      turnLeft();
    }
  }
  void onRight()
  {
    Log.debug("onRight");
    if (!isMoving && !isTurning)
    {
      turnRight();
    }
  }

  // tells if a move is valid (non-wall cell)
  bool _checkMove(Vector3 inDirection) {
    Vector3 destPosition = new Vector3(position.x, position.y, position.z);
    destPosition.addSelf(inDirection);
    return !maze.getCell(new Point(destPosition.x.toInt(), destPosition.z.toInt()));
  }
  
  // gets a new vector rotated 90deg left
  Vector3 _get90Left(Vector3 vector) {
    return new Vector3(vector.z, vector.y, -vector.x);
  }
  
  // gets a new vector rotated 180deg
  Vector3 _get180(Vector3 vector) {
    return new Vector3(vector.x * -1.0, vector.y * -1.0, vector.z * -1.0);
  }
}
