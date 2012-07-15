#library('Maze');

#import('dart:core');
#import('Point.dart');

class Maze {

  Maze(this.width, this.depth) {
    // min 3x3 (outer walls + empty cell in middle)
    // each visitable cell has another cell of padding
    // example layout:
    // xxxxxxxxx
    // x x x   x
    // x x xxx x
    // x       x
    // xxxxxxxxx
    if (width < 3
        || width % 2 == 0
        || depth < 3
        || depth % 2 == 0) {
      throw new IllegalArgumentException('width and depth must be odd and greater than two');
    }

    // initialize all cells to closed (walls)
    _layout = new List<bool>(width * depth);
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < depth; y++) {
        setCell(new Point(x, y), true);
      }
    }
  }

  // logical size of maze (rows/cols)
  int width, depth;

  // bool array for wall layout
  List<bool> _layout;

  // hack: param to track whether rng has been run a few times
  static bool _randInitialized = false;

  // gets true/false representing solid/empty cell
  bool getCell(Point coords) {
    if (coords.x < 0 || coords.x >= width) {
      throw new IndexOutOfRangeException(coords.x);
    } else if (coords.y < 0 || coords.y >= depth) {
      throw new IndexOutOfRangeException(coords.y);
    }

    return _layout[coords.y * width + coords.x];
  }

  // sets solid/empty cell
  setCell(Point coords, bool wall) {
    if (coords.x < 0 || coords.x >= width) {
      throw new IndexOutOfRangeException(coords.x);
    } else if (coords.y < 0 || coords.y >= depth) {
      throw new IndexOutOfRangeException(coords.y);
    }

    _layout[coords.y * width + coords.x] = wall;
  }

  // builds the maze recursively
  build() {
    _buildCell(new Point(1, 1));
  }

  // builds the maze by hitting every candidate neighbor cell
  _buildCell(Point start) {
    setCell(start, false);
    
    for (Point nextVector in _getDestructibleNeighborVectors(start)) {
      Point nextCell = start + nextVector * 2;

      if (getCell(nextCell)) {
        setCell(start + nextVector, false);

        // destroy intermediate cell between current and next pos
        _buildCell(nextCell);
      }
    }
  }

  // gets solid cells around the startPoint for maze building
  // walls are cleared during traversal
  List<Point> _getDestructibleNeighborVectors(Point startPoint) {
    // hack: initialize rng and iterate a few times for better values
    if (!_randInitialized) {
      for (int i = 0; i < new Date.now().millisecondsSinceEpoch % 1000; i++) {
        Math.random();
      }
      _randInitialized = true;
    }

    // array of all directions to shuffle
    var allDirections = [new Point(1, 0), new Point(0, 1), new Point(-1, 0), new Point(0, -1)];

    List<Point> destructibleNeighborVectors = new List<Point>();

    // cull cells that have already been processed and shuffle remaining cells
    for (int i = 0; i < 4; i++) {
      int srcIdx = (Math.random() * allDirections.length).floor().toInt();
      Point posWithVecAndMagnitude = startPoint + allDirections[srcIdx] * 2;
      if (posWithVecAndMagnitude.x > 0
          && posWithVecAndMagnitude.x  + 1 < width
          && posWithVecAndMagnitude.y > 0
          && posWithVecAndMagnitude.y  + 1 < depth
          && getCell(posWithVecAndMagnitude)) {
        destructibleNeighborVectors.add(allDirections[srcIdx]);
      }

      allDirections.removeRange(srcIdx, 1);
    }

    return destructibleNeighborVectors;
  }
}
