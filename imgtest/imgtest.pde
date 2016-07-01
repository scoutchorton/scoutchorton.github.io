void setup() {
  size(1280, 576);
}

void draw() {
  PImage imga;
  PImage maps;
  imga = loadImage("hall.png");
  maps = loadImage("map.png");
  image(imga, 0, 0);
  image(maps, width - 300, height - 300);
}