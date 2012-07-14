#library("World");

#import("dart:html");
#import("three.dart/src/ThreeD.dart");
#import("Log.dart");
#import("maze.dart");
#import("Player.dart");

class World
{  
  // DOM elements
  String containerSelector;
  Element container;
  
  // Three.dart
  double fieldOfView = 90.0; // degrees
  double aspectRatio;
  double nearPlane = 1.0;
  double farPlane = 100.0;
  PerspectiveCamera camera;
  
  Scene scene;
  CanvasRenderer renderer;
  
  // Geometry
  Vector3 origin;
  Geometry dartGeometry;
  Mesh goldenDart;
  
  // Player
  Player player;
  
  World(String containerSelector)
  {
    this.containerSelector = containerSelector;
  }
  
  void init()
  {
    // geometry
    origin = new Vector3(0, 0, 0);

    // container
    container = document.query(containerSelector);
    // if(container.nodes.length > 0)
    // {
    //   container.nodes.removeRange(0, container.nodes.length); // remove all nodes
    // }
    double containerWidth = container.$dom_scrollWidth.toDouble();
    double containerHeight = container.$dom_scrollHeight.toDouble();
    
    // renderer
    renderer = new CanvasRenderer();
    // renderer.setSize(containerWidth, containerHeight);
    renderer.setSize(400, 400);
    renderer.setClearColor(new Color(0xffffff), 1);
    container.nodes.add(renderer.domElement);
    
    // camera
    aspectRatio = 1.0;
    camera = new PerspectiveCamera(90.0, 1.0, 1.0, 100.0);
    
    // scene
    scene = new Scene();
    scene.add(camera);
    camera.position.setValues(0, 0, 20);
    // camera
    // camera.lookAt(origin); // WARNING BROKEN!!!
    
    // player
    player = new Player(camera.position, camera.rotation);
    
    initGeometry();
  }
  
  void initGeometry()
  {
    List materials = [];

    for ( int i = 0; i < 6; i ++ ) {
      materials.add( new MeshBasicMaterial( { 'color' : Math.random() * 0xffffff } ) );
    }

    dartGeometry = new CubeGeometry(5, 5, 5, 1, 1, 1, materials);
    goldenDart = new Mesh(dartGeometry, new MeshFaceMaterial());
    goldenDart.position.copy(origin);
    scene.add(goldenDart);
  }
  
  void update()
  {
    player.update();
  }
  
  void draw()
  {
    Log.debug('Draw!');
    renderer.render(scene, camera);
  }
}
