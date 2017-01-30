from __future__ import division
import turtle
turtle.setup(450, 450)
wn = turtle.Screen()
wn.title("Line Grapher")
from linecalc import *
from gridlines import *
def f():
	u = int(raw_input("How many units wide/tall should the graph be: "))
	graph(u)
	e = raw_input("Equation: ")
	draw(u, e)
	if raw_input("Type 'a' to graph another line: ") == "a":
		clear = turtle.Turtle()
		clear.color('white', 'white')
		clear.speed("fastest")
		clear.begin_fill()
		clear.goto(-202, 202)
		for i in range(0,4):
			clear.forward(404)
			clear.right(90)
		clear.end_fill()
		f()
	else:
		print "Goodbye!"
		exit()
f()

