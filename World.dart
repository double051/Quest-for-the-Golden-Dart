#library("World");

#import("dart:html");
#import("three.dart/src/ThreeD.dart");
#import("Log.dart");
#import("Point.dart", prefix:'MPoint');
#import("Maze.dart");
#import("Player.dart");

class World
{  
  // DOM elements
  String containerSelector;
  Element container;
  
  // Three.dart
  PerspectiveCamera camera;
  Scene scene;
  CanvasRenderer renderer;
  
  // Geometry
  Vector3 origin;
  Geometry dartGeometry;
  Mesh goldenDart;
  List<Mesh> wallMeshes;
  
  // Player
  Player player;
  
  // Maze
  Maze maze;
  
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
    renderer.setSize(800, 800);
    renderer.setClearColor(new Color(0xffffff), 1);
    container.nodes.add(renderer.domElement);
    
    // camera
    double aspectRatio = 1.0;
    camera = new PerspectiveCamera(50.0, 1.0, 0.1, 10.0);
    
    // scene
    scene = new Scene();
    scene.add(camera);
    camera.position.setValues(1, 0, 1);
    // camera
    // camera.lookAt(origin); // WARNING BROKEN!!!
    
    wallMeshes = new List<Mesh>();
    
    // maze
    maze = new Maze(31, 31);
    
    // player
    player = new Player(camera.position, camera.rotation, maze);
    
    initGeometry();
  }
  
  void initGeometry()
  {
    List materials = [];

    for ( int i = 0; i < 6; i ++ )
    {
      materials.add( new MeshBasicMaterial( { 'color' : Math.random() * 0xffffff } ) );
    }
    
    List goldenMaterials = [];

    for ( int i = 0; i < 6; i ++ )
    {
      goldenMaterials.add( new MeshBasicMaterial( { 'color' : 0xffd700 } ) );
    }
    
    dartGeometry = new CubeGeometry(0.1, 0.7, 0.1, 1, 1, 1, goldenMaterials);
    goldenDart = new Mesh(dartGeometry, new MeshFaceMaterial());
    goldenDart.position.setValues(1, 0, 1);
    scene.add(goldenDart);
    
    CubeGeometry fanGeometry = new CubeGeometry(0.4, 0.3, 0.1, 1, 1, 1, goldenMaterials);
    Mesh goldenFan = new Mesh(fanGeometry, new MeshFaceMaterial());
    goldenFan.position.setValues(1, 0.5, 1);
    scene.add(goldenFan);
    
    fanGeometry = new CubeGeometry(0.1, 0.3, 0.4, 1, 1, 1, goldenMaterials);
    goldenFan = new Mesh(fanGeometry, new MeshFaceMaterial());
    goldenFan.position.setValues(1, 0.5, 1);
    scene.add(goldenFan);
    
    // assemble maze geometry
    maze.build();

    CubeGeometry wallBlockGeometry = new CubeGeometry(1, 1, 1, 1, 1, 1, materials);
    for (int x = 0; x < maze.width; x++) {
      for (int y = 0; y < maze.depth; y++) {
        if (maze.getCell(new MPoint.Point(x, y))) {
          Mesh wallMesh = new Mesh(wallBlockGeometry, new MeshFaceMaterial());
          wallMesh.position = new Vector3(x, 0.0, y);
          wallMeshes.add(wallMesh);
          
          scene.add(wallMesh);
        }
      }
    }
    
    // GOLDEN DART
    // List goldenMaterials = [];
    // for ( int i = 0; i < 6; i ++ )
    // {
    //   goldenMaterials.add( new MeshBasicMaterial( { 'color' : 0xffd700 } ) );
    // }

    
  }
  
  void update(int time)
  {
    player.update(time);
    // camera.updateProjectionMatrix();
  }
  
  void draw()
  {
    renderer.render(scene, camera);
  }
  
  bool animate(int time)
  {
    window.requestAnimationFrame(animate);
    update(time);
    draw();
    return true;
  }
}
