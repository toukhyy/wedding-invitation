import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './EnvelopeCover.css'

export default function EnvelopeCover() {
  const [opening, setOpening] = useState(false)
  const [done, setDone] = useState(false)

  const handleOpen = () => {
    setOpening(true)
    // flap opens (0.8s) → envelope fades out (0.6s) → hero appears
    setTimeout(() => setDone(true), 1600)
  }

  return (
    <div className="env-root">
      <AnimatePresence>
        {!done && (
          <motion.div
            className="env-scene"
            key="scene"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="env-particles">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="env-particle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0], y: [0, -120 - Math.random() * 150], x: [0, (Math.random() - 0.5) * 160] }}
                  transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4, ease: 'easeOut' }}
                  style={{ left: `${Math.random() * 100}%`, bottom: `${10 + Math.random() * 25}%` }}
                />
              ))}
            </div>

            <motion.div
              className="env-stage"
              animate={opening ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6, delay: opening ? 0.9 : 0 }}
            >
              <div className="env-wrap">
                <div className="env-body">
                  <div className="env-back">
                    <motion.div
                      className="wax-seal"
                      animate={opening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <span>A & R</span>
                    </motion.div>
                  </div>

                  <motion.div
                    className="env-flap"
                    animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  />
                </div>
              </div>

              <motion.div
                className="env-info"
                animate={opening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="env-invite-text">
                  We're getting married and we'd love<br />for you to be there to celebrate with us
                </p>
                <motion.button
                  className="env-open-btn"
                  onClick={handleOpen}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={opening}
                >
                  Open Invitation
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {done && (
          <motion.div
            className="inv-hero"
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/corner-flower.png"
              className="corner-tl"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.img
              src="/corner-flower.png"
              className="corner-br"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.div
              className="inv-hero-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="ornament-line"
              >
                <span className="ornament-dash" /><span className="ornament-symbol">✦</span><span className="ornament-dash" />
              </motion.div>

              <motion.p
                className="inv-subtitle"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Together with their families
              </motion.p>

              <motion.h1
                className="inv-names-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <span>Abdelrahman</span>
                <span className="inv-amp">&</span>
                <span>Reem</span>
              </motion.h1>

              <motion.p
                className="inv-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Invite you to celebrate their wedding day.
              </motion.p>

              <motion.div
                className="inv-date-badge"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <span className="badge-day">Saturday</span>
                <span className="badge-num">12</span>
                <span className="badge-mmy">September 2026</span>
                <span className="badge-time">7:00 PM — 11:00 PM</span>
              </motion.div>

              <motion.div
                className="inv-venue"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <p className="venue-name">Basilico Wedding Hall</p>
                <a
                  className="venue-address"
                  href="https://maps.app.goo.gl/Qxb6UeKBate1KsNx7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Al Mahallah Al Kubra Road Before Carrefour
                  <svg className="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="ornament-line"
              >
                <span className="ornament-dash" /><span className="ornament-symbol">✦</span><span className="ornament-dash" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
