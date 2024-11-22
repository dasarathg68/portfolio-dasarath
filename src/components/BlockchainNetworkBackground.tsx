"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
}

export const BlockchainNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: Node[] = [];
    const numNodes = 20;
    const nodeRadius = 5;
    const connectionDistance = 150;

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: nodeRadius,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        // Bounce off edges
        if (node.x < node.radius || node.x > canvas.width - node.radius)
          node.speedX *= -1;
        if (node.y < node.radius || node.y > canvas.height - node.radius)
          node.speedY *= -1;
      });

      // Set colors based on theme
      const nodeColor =
        theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";
      const connectionColor =
        theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

      // Draw connections
      ctx.beginPath();
      nodes.forEach((nodeA, index) => {
        nodes.slice(index + 1).forEach((nodeB) => {
          const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          if (distance < connectionDistance) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
          }
        });
      });
      ctx.strokeStyle = connectionColor;
      ctx.stroke();

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
};
