#library('maze');
#import('dart:core');
#import('point.dart');

class maze {

  maze(this.width, this.depth) {
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
        setCell(new point(x, y), true);
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
  bool getCell(point coords) {
    if (coords.x < 0 || coords.x >= width) {
      throw new IndexOutOfRangeException(coords.x);
    } else if (coords.y < 0 || coords.y >= depth) {
      throw new IndexOutOfRangeException(coords.y);
    }

    return _layout[coords.y * width + coords.x];
  }

  // sets solid/empty cell
  setCell(point coords, bool wall) {
    if (coords.x < 0 || coords.x >= width) {
      throw new IndexOutOfRangeException(coords.x);
    } else if (coords.y < 0 || coords.y >= depth) {
      throw new IndexOutOfRangeException(coords.y);
    }

    _layout[coords.y * width + coords.x] = wall;
  }

  // builds the maze recursively
  build() {
    buildCell(new point(1, 1));
  }

  // builds the maze by hitting every candidate neighbor cell
  void buildCell(point start) {
    // if the cell is a solid wall, destroy it
    if (getCell(start)) {
      setCell(start, false);

      // traverse surrounding cells and destroy (turn solid cell to empty) where possible
      for (point vector in _getDestructibleNeighborVectors(start)) {
        // destroy intermediate cell between current and next pos
        setCell(start + vector, false);
        buildCell(start + vector * 2);
      }
    }
  }

  // gets solid cells around the startPoint for maze building
  // walls are cleared during traversal
  List<point> _getDestructibleNeighborVectors(point startPoint) {
    // hack: initialize rng and iterate a few times for better values
    if (!_randInitialized) {
      for (int i = 0; i < new Date.now().millisecondsSinceEpoch % 1000; i++) {
        Math.random();
      }
      _randInitialized = true;
    }

    // array of all directions to shuffle
    var allDirections = [new point(1, 0), new point(0, 1), new point(-1, 0), new point(0, -1)];

    List<point> destructibleNeighborVectors = new List<point>();

    // cull cells that have already been processed and shuffle remaining cells
    for (int i = 0; i < 4; i++) {
      int srcIdx = (Math.random() * allDirections.length).floor().toInt();
      point posWithVecAndMagnitude = startPoint + allDirections[srcIdx] * 2;
      if (posWithVecAndMagnitude.x > 0
          && posWithVecAndMagnitude.x  + 1 < width
          && posWithVecAndMagnitude.y > 0
          && posWithVecAndMagnitude.y  + 1 < depth
          && getCell(startPoint + allDirections[srcIdx] * 2)) {
        destructibleNeighborVectors.add(allDirections[srcIdx]);
      }

      allDirections.removeRange(srcIdx, 1);
    }

    return destructibleNeighborVectors;
  }
}
