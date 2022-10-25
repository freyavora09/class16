

function setup() 
{
  createCanvas(400, 400);
Box1=new Box()
Box2=new Box()


}

function draw() 
{
  background(220);
Box1.show()
Box2.show()
Box1.speed(1)
Box2.speed(-1)
}

