#library("Player");

#import("three.dart/src/ThreeD.dart");
#import("Controls.dart");
#import("dart:json");
#import("Log.dart");
#import("Maze.dart");
#import("Point.dart");

class Player
{
  static final double moveDistance = 1.0;
  static final int moveDurationMS = 250;
  
  Vector3 position;
  Vector3 rotation;
  Controls controls;
  
  Maze maze;
  
  bool isMoving;
  int timeLast;
  int moveTimeEnd;
  int moveTimeStart;
  int moveTimeLast;
  
  Vector3 moveStartPosition;
  Vector3 moveEndPosition;
  Vector3 moveDeltaVector;
  Vector3 facingDirection;
  
  Player(Vector3 position, Vector3 rotation, Maze maze)
  {
    this.position = position;
    this.rotation = rotation;
    
    this.maze = maze;
    
    this.isMoving = false;
    this.moveStartPosition = new Vector3(0, 0, 0);
    this.moveEndPosition = new Vector3(0, 0, 0);
    this.moveDeltaVector = new Vector3(0, 0, 0);
    this.facingDirection = new Vector3(0, 0, -1);
    
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
    if (!isMoving && _checkMove(facingDirection))
    {
      startMoving();
      moveEndPosition.z -= moveDistance;
    }
  }
  void onBack()
  {
    Log.debug("onBack");
    if (!isMoving && _checkMove(_get180(facingDirection)))
    {
      startMoving();
      moveEndPosition.z += moveDistance;
    }
  }
  void onLeft()
  {
    Log.debug("onLeft");
    if (!isMoving && _checkMove(_get90Left(facingDirection)))
    {
      startMoving();
      moveEndPosition.x -= moveDistance;
    }
  }
  void onRight()
  {
    Log.debug("onRight");
    if (!isMoving && _checkMove(_get90Left(_get180(facingDirection))))
    {
      startMoving();
      moveEndPosition.x += moveDistance;
    }
  }

  // tells if a move is valid (non-wall cell)
  bool _checkMove(Vector3 direction) {
    Vector3 destPosition = new Vector3(position.x, position.y, position.z);
    destPosition.addSelf(direction);
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
