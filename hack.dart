#import('dart:html');
#import('Log.dart');

class Renderer
{
  CanvasElement canvas;
  WebGLRenderingContext gl;
  WebGLProgram program;
  double aspect;
  bool running = false;
  
  double foobar = 0.5;
  var name = 'silly name';
  
  Renderer(String canvasID)
  {
    this.canvas = document.query(canvasID);
    this.aspect = this.canvas.width / this.canvas.height;
    this.gl = canvas.getContext("experimental-webgl");
    this.gl.viewport(0, 0, canvas.width, canvas.height);
    this.gl.clearColor(1, 1, 1, 1);
  }
  
  void draw()
  {
    this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
  }
}

void main()
{
  // set debug element
  Log.debugElement = document.query('#debugElement');
  Log.debug('Initialized debug text!');
  
  // initialize renderer
  Renderer renderer = new Renderer('#gameCanvas');
  renderer.draw();
}
