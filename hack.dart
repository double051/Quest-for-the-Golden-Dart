#import('dart:html');
#import('Log.dart');
#import('World.dart');

void main()
{
  // set debug element
  Log.debugElement = document.query('#debugElement');
  Log.debug('Initialized debug text!');
  
  World world = new World('#world');
  world.init();
  window.requestAnimationFrame(world.animate);
}
