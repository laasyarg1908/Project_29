const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj, stand, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10, Block11, Block12, Block13, Block14, Block15, Block16;
var slingshot, polygon, polygonImg;

function preload()
{
    polygonImg = loadImage("img/polygon.png");
}

function setup()
{
    createCanvas(900,700);
    engine = Matter.Engine.create();
	world = engine.world;


    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon, {x:100, y:200});

    groundObj = new Ground(450, 695, 900, 10);
    stand = new Ground(240, 500, 270, 10);
    block1 = new Block(150, 485, 30, 30);
    block2 = new Block(180, 485, 30, 30);
    block3 = new Block(210, 485, 30, 30);
    block4 = new Block(240, 485, 30, 30);
    block5 = new Block(270, 485, 30, 30);
    block6 = new Block(300, 485, 30, 30);
    block7 = new Block(330, 485, 30, 30);

    block8 = new Block(180, 455, 30, 30);
    block9 = new Block(210, 455, 30, 30);
    block10 = new Block(240, 455, 30, 30);
    block11 = new Block(270, 455, 30, 30);
    block12 = new Block(300, 455, 30, 30);

    block13 = new Block(210, 425, 30, 30);
    block14 = new Block(240, 425, 30, 30);
    block15 = new Block(270, 425, 30, 30);

    block16 = new Block(240, 395, 30, 30);



    stand2 = new Ground(590, 300, 270, 10);
    Block1 = new Block(500, 285, 30, 30);
    Block2 = new Block(530, 285, 30, 30);
    Block3 = new Block(560, 285, 30, 30);
    Block4 = new Block(590, 285, 30, 30);
    Block5 = new Block(620, 285, 30, 30);
    Block6 = new Block(650, 285, 30, 30);
    Block7 = new Block(680, 285, 30, 30);

    Block8 = new Block(530, 255, 30, 30);
    Block9 = new Block(560, 255, 30, 30);
    Block10 = new Block(590, 255, 30, 30);
    Block11 = new Block(620, 255, 30, 30);
    Block12 = new Block(650, 255, 30, 30);

    Block13 = new Block(560, 225, 30, 30);
    Block14 = new Block(590, 225, 30, 30);
    Block15 = new Block(620, 225, 30, 30);

    Block16 = new Block(590, 195, 30, 30);


}

function draw()
{
    background(200);
    Engine.update(engine);

    textSize(20);
    text("Drag the Hexagonal Object and release to break the Block Pyramid", 150, 100);
    
    strokeWeight(2.5);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();

    groundObj.display();
    stand.display();
    stand2.display();

    slingshot.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

    

}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}