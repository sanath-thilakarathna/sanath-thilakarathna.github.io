---
layout: post
title: "Creating a PID Controller Using ATmega328P: Theory and Implementation"
date: 2025-02-18 10:00:00
description: "A comprehensive guide to understanding and implementing a PID controller on the ATmega328P microcontroller, covering the mathematical theory and practical C code implementation."
tags: [ATmega328P, PID Controller, Embedded Systems, Microcontroller, Control Theory]
categories: Programming
featured: false
pretty_table: true
---

The **PID controller** (Proportional-Integral-Derivative controller) is a fundamental control system component used extensively in engineering and industrial applications. It is important because it provides precise, stable, and responsive control across various systems by minimizing error and optimizing performance. PID controllers are critical in applications like motor speed control, temperature regulation, robotics, and automation where consistent and accurate control is required. This post explains the **mathematical theory**, discusses key use cases, highlights the importance of PID controllers, and explains how each component works together before demonstrating how to implement one on the **ATmega328P** microcontroller using **C language**.

---

## **The Mathematical Theory of PID Controllers**

A PID controller continuously calculates an **error** value as the difference between a desired setpoint and a measured process variable. It applies corrections based on three terms:

## **How Each Component in PID Works**

###  **1. Proportional Term (P)**

The proportional term produces an output proportional to the current error.

$$
P(t) = K_p \times e(t)
$$

- **K_p**: Proportional gain.
- **e(t)**: Error at time \(t\) (setpoint - measured value).

The proportional term reduces the overall error but may cause a steady-state error. Increasing **Kp** increases responsiveness but may lead to overshoot.

---

### **2. Integral Term (I)**

The integral term accumulates the error over time, eliminating the steady-state error:

$$
I(t) = K_i \times \int_0^t e(\tau) \, d\tau
$$

- **K_i**: Integral gain.
- Helps ensure the output reaches the setpoint by correcting past errors.

Too high a **Ki** value can cause overshoot and instability.

---

### **3. Derivative Term (D)**

The derivative term predicts future error based on its rate of change:

$$
D(t) = K_d \times \frac{de(t)}{dt}
$$

- **K_d**: Derivative gain.
- Reduces overshoot and improves stability by damping rapid changes in error.

Excessive **Kd** can make the system too sensitive to noise.

---

### **How the Entire PID Controller Works Together**

The PID controller combines these three components to produce a control signal:

$$
\text{Output}(t) = K_p e(t) + K_i \int_0^t e(\tau) \, d\tau + K_d \frac{de(t)}{dt}
$$

- The **proportional term** corrects present errors.
- The **integral term** corrects accumulated past errors.
- The **derivative term** predicts and mitigates future errors.

Together, these terms provide a balance between responsiveness, accuracy, and stability.

---

## **Implementing a PID Controller on ATmega328P**

### **1. Hardware Required**

- **ATmega328P** microcontroller
- **Sensor** (e.g., encoder for speed, temperature sensor for thermal systems)
- **Actuator** (e.g., DC motor, heater)
- **Motor driver/MOSFET**
- **USBasp programmer**
- **Power supply**

---

### **2. Software Setup**

- Install **AVR-GCC** and **AVRDude**.
- Use **Atmel Studio**, **VSCode**, or command-line tools.
- Program the ATmega328P using **USBasp**.

---

### **3. Writing the PID Controller in C**

#### **PID Algorithm in C:**

```c
#define F_CPU 16000000UL
#include <avr/io.h>
#include <util/delay.h>

volatile double Kp = 1.0;
volatile double Ki = 0.5;
volatile double Kd = 0.1;

volatile double previous_error = 0;
volatile double integral = 0;

double PID_Controller(double setpoint, double current_value) {
    double error = setpoint - current_value;
    integral += error;
    double derivative = error - previous_error;
    double output = (Kp * error) + (Ki * integral) + (Kd * derivative);
    previous_error = error;
    return output;
}
```

---

#### **PWM Initialization for Output Control:**

```c
void PWM_init() {
    TCCR0A |= (1 << COM0A1) | (1 << WGM00) | (1 << WGM01); // Fast PWM mode
    TCCR0B |= (1 << CS01);  // Prescaler 8
    DDRD |= (1 << PD6);     // Set OC0A (PD6) as output
}

void set_PWM_duty(uint8_t duty) {
    OCR0A = duty;  // Duty cycle: 0 - 255
}
```

---

### **4. Main Control Loop**

```c
int main(void) {
    PWM_init();
    double set_speed = 100.0; // Desired speed
    double measured_speed = 0.0;

    while (1) {
        measured_speed = read_sensor(); // Replace with sensor reading function
        double control_signal = PID_Controller(set_speed, measured_speed);

        // Constrain output to valid PWM range
        if (control_signal > 255) control_signal = 255;
        if (control_signal < 0) control_signal = 0;

        set_PWM_duty((uint8_t)control_signal);
        _delay_ms(100);
    }
}
```

---

### **5. Tuning the PID Parameters**

#### **Basic Tuning Approach:**

- **Increase Kp** for a faster response but watch for overshoot.
- **Increase Ki** gradually to eliminate steady-state error, ensuring no excessive overshoot.
- **Add Kd** to reduce overshoot and improve stability by damping rapid changes.

#### **Ziegler-Nichols Tuning Method** (for advanced applications):

1. Set **Ki** and **Kd** to zero.
2. Increase **Kp** until the output oscillates consistently (ultimate gain, Ku).
3. Measure the oscillation period (Pu).
4. Compute the PID parameters:
   - $$K_p = 0.6 \times Ku$$ (Proportional gain for balanced response)
   - $$K_i = 2 \times K_p / Pu$$ (Integral gain for steady-state accuracy)
   - $$K_d = K_p \times Pu / 8$$ (Derivative gain for improved stability)

#### **Fine-Tuning Tips:**

- Increase **Kp** until you get a stable, quick response without oscillation.
- Adjust **Ki** slowly until steady-state error disappears.
- Increase **Kd** just enough to smooth out the response without introducing noise.

---

### **6. Real-World Applications of PID on ATmega328P**

1. **Motor Speed Control**: Maintain constant RPM despite load variations.
2. **Temperature Control**: Stabilize heating elements for 3D printers and ovens.
3. **Position Control**: Robotic arm joint positioning.
4. **Drone Flight Control**: Stabilize pitch, roll, and yaw.
5. **Balancing Robots**: Self-balancing robots using accelerometer and gyroscope feedback.


