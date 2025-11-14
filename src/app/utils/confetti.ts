// @ts-ignore: no declaration file for module 'canvas-confetti'
import confetti from "canvas-confetti";

export function launchConfetti() {
  confetti({
    particleCount: 120,
    startVelocity: 35,
    spread: 55,
    origin: { y: 0.52 },
  });
}