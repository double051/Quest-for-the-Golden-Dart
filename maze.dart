#import('dart:core');
#import('./point.dart');

class maze {
  maze(this.width, this.depth) {
    _layout = new List<bool>();
  }
  
  int width, depth;

  List<bool> _layout;
  
  static maze generate(int width, int depth) {

    maze output = new maze(width, depth);    
    
    int plotted = 0;
    
    while (plotted < width * depth) {
      point nextDirection = _getRandomDirection();
      point nextStep = nextDirection * 2;
      
      // step by two points (we'll knock out the wall inbetween if target cell is going to be destroyed)

      
      
    }
  }

  bool getCell(int x, int y) {
    if (x < 0 || x >= width) {
      throw new IndexOutOfRangeException(x);
    } else if (y < 0 || y >= depth) {
      throw new IndexOutOfRangeException(x);
    }
    
    return _layout[y * width + x];
  }
  
  setCell(int x, int y, bool wall) {
    if (x < 0 || x >= width) {
      throw new IndexOutOfRangeException(x);
    } else if (y < 0 || y >= depth) {
      throw new IndexOutOfRangeException(x);
    }
    
    _layout[y * width + x] = wall;
  }

  static bool _randInited = false;
  
  static point _getRandomDirection() {
   if (!_randInited) {
     for (int i = 0; i < new Date.now().millisecondsSinceEpoch % 1000; i++) {
       Math.random();
     }
     _randInited = true;
   }
   
   switch ((Math.random() * 4.0).floor().toInt()) {
      
      case 0:
        return new point(1, 0);
      
      case 1:
        return new point(0, 1);
      
      case 2:
        return new point (-1, 0);

      case 3:
        return new point(0, -1);

      default:
        throw new IndexOutOfRangeException(4);
    }
  }
}
