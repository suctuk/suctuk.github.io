#include <Servo.h>
#include <Stepper.h>

Servo servo;
const int stepsPerRevolution = 200; // Total steps for a full revolution of your stepper
Stepper stepper(stepsPerRevolution, 8, 9, 10, 11);

int x_axis;
int servo_val;
bool movementInitiated = false;
int stepsMoved = 0; // Track the number of steps moved towards the target
const int totalStepsNeeded = stepsPerRevolution; // Adjust if you need a different rotation angle

void setup() {
  pinMode(A0, INPUT); // Joystick X-axis connected to A0
  servo.attach(6); // Servo signal pin
  stepper.setSpeed(120); // Stepper speed in RPM
}

void loop() {
  x_axis = analogRead(A0); // Read the joystick position
  servo_val = map(x_axis, 0, 1023, 0, 180); // Map joystick to servo angle

  // Check if the joystick is pushed and movement hasn't been initiated yet
  if ((x_axis > 600 || x_axis < 424) && !movementInitiated) {
    movementInitiated = true; // Prevents re-triggering until the movement completes
  }

  // If movement was initiated and we haven't moved the required steps
  if (movementInitiated && stepsMoved < totalStepsNeeded) {
    int stepsToMove = 30; // Move in small increments to keep the loop responsive
    stepper.step(stepsToMove);
    stepsMoved += stepsToMove;

    // Once the target is reached, reset for the next cycle
    if (stepsMoved >= totalStepsNeeded) {
      movementInitiated = false;
      stepsMoved = 0; // Reset the step counter for the next movement
      delay(7000); // Optional delay before servo moves, adjust as needed
      servo.write(servo_val); // Move the servo after stepper completes its rotation
    }
  }
}


