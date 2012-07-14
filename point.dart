#library("point");

class point {
  int x, y;

  point(this.x, this.y);
  
  operator *(int multiplicand) {
    return new point(x * multiplicand, y * multiplicand);
  }
}
