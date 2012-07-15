#library('Point');

class Point {

  Point(this.x, this.y);

  int x, y;

  operator +(Point addend) {
    return new Point(x + addend.x, y + addend.y);
  }

  operator *(int multiplicand) {
    return new Point(x * multiplicand, y * multiplicand);
  }

}
