#library('point');

class point {

  point(this.x, this.y);

  int x, y;

  operator +(point addend) {
    return new point(x + addend.x, y + addend.y);
  }

  operator *(int multiplicand) {
    return new point(x * multiplicand, y * multiplicand);
  }

}
