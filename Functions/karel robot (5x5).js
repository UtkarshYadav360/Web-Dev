// Karel Robot (5x5):

function main() {
	//your code here
	beepersRight();
	goUpTurnLeft();
	beepersLeft();
	goUpTurnRight();
	beepersRight();
	goUpTurnLeft();
	beepersLeft();
	goUpTurnRight();
	beepersRight();
}

function goInCircle() {
	move();
	turnLeft();
	move();
	turnLeft();
}

function moveFourTimes() {
	move();
	move();
	move();
	move();
}

function goRightCorner() {
	moveFourTimes();
	turnLeft();
	moveFourTimes();
}

function putBeeperInRightDiagonal() {
	putBeeper();
	turnLeft();
	move();
	move();
	putBeeper();
}

function goUpTurnRight() {
	turnRight();
	move();
	turnRight();
}

function goUpTurnLeft() {
	turnLeft();
	move();
	turnLeft();
}

function beepersRight() {
	putBeeper();
	move();
	move();
	putBeeper();
	move();
	move();
	putBeeper();
}

function beepersLeft() {
	move();
	putBeeper();
	move();
	move();
	putBeeper();
	move();
}
