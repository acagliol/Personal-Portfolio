"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  // Generate particle positions
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient base — stronger gradient feel */}
      <motion.div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(160deg, rgba(8,8,14,0.97) 0%, rgba(12,12,20,0.95) 40%, rgba(6,6,12,0.98) 100%)",
        }}
        animate={{ opacity: [0.85, 0.95, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Animated gradient meshes */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 65%)",
            filter: "blur(100px)",
            left: "-20%",
            top: "-10%",
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)",
            filter: "blur(90px)",
            right: "-15%",
            bottom: "-10%",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
            left: "40%",
            top: "30%",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, -100, -200, -300, -400],
              x: [
                0,
                Math.sin(particle.id) * 30,
                Math.cos(particle.id) * 50,
                Math.sin(particle.id * 2) * 40,
                0,
              ],
              opacity: [0, 0.6, 0.8, 0.4, 0],
              scale: [0.5, 1, 1.2, 0.8, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Vertical lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ left: `${(i + 1) * 12}%` }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${(i + 1) * 15}%` }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Rotating square */}
        <motion.div
          className="absolute w-32 h-32 border border-white/5"
          style={{
            top: "20%",
            left: "15%",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Rotating circle */}
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-white/5"
          style={{
            top: "60%",
            right: "20%",
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Triangle */}
        <motion.div
          className="absolute w-24 h-24"
          style={{
            top: "40%",
            right: "10%",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.3, 0.9, 1],
            x: [0, -60, 30, 0],
            y: [0, 50, -20, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Small rotating squares */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute w-8 h-8 border border-white/5"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlay with color shifts */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.02) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.6, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)",
          height: "200%",
        }}
        animate={{
          y: ["-100%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
