import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import CallToAction from "../components/CallToAction";

const MotionBox = motion(Box);
const MotionImg = motion.img;
const MotionTypography = motion(Typography);

// Enhanced SlideReveal with stagger effect
const SlideReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <Box sx={{ overflow: 'hidden', display: 'inline-block', width: '100%' }}>
    <motion.div
      initial={{ y: '120%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
    >
      {children}
    </motion.div>
  </Box>
);

// Floating animation component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Parallax component
const ParallaxBox = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

const aboutCards = [
  {
    title: "Billing First Approach",
    description: "Built to simplify your revenue workflow from claim submission to reimbursement tracking.",
    icon: "/icons/icon-1.svg",
    gradient: "linear-gradient(135deg, #C7B2F2 0%, #B197E8 100%)",
  },
  {
    title: "AI That Actually Works",
    description: "Trained on clinical data and billing logic. Our AI understands what providers need.",
    icon: "/icons/icon-2.svg",
    gradient: "linear-gradient(135deg, #FFB8D1 0%, #F8A4C0 100%)",
  },
  {
    title: "Security First",
    description: "HIPAA compliant, encrypted, and built on enterprise-grade infrastructure.",
    icon: "/icons/icon-3.svg",
    gradient: "linear-gradient(135deg, #A8D5FF 0%, #93C5FD 100%)",
  },
  {
    title: "All in One Platform",
    description: "Viscrow Billing and Scribe work together in one integrated platform.",
    icon: "/icons/icon-4.svg",
    gradient: "linear-gradient(135deg, #A7F3D0 0%, #86EFAC 100%)",
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Enhanced Hero Section with Background Animation */}
      <Box 
        sx={{ 
          py: 16,
          position: 'relative',
          background: 'linear-gradient(135deg, #007C84 0%, #00a8b5 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <SlideReveal delay={0}>
            <MotionTypography 
              variant="overline" 
              sx={{ 
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.2)',
                px: 2,
                py: 0.5,
                borderRadius: 20,
                display: 'inline-block',
                backdropFilter: 'blur(10px)',
                mb: 2
              }} 
            >
              Our story
            </MotionTypography>
          </SlideReveal>

          <SlideReveal delay={0.2}>
            <Typography 
              variant="h2" 
              fontWeight="bold" 
              sx={{ 
                color: '#ffffff',
                mb: 3,
                textShadow: '0 2px 20px rgba(0,0,0,0.1)'
              }}
            >
              Built for Providers.
              <Box component="span" sx={{ display: 'block', color: '#B8E6E8' }}>
                Powered by AI.
              </Box>
            </Typography>
          </SlideReveal>

          <SlideReveal delay={0.4}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Viscrow Health automates billing and documentation so you can focus on patient care not paperwork.
            </Typography>
          </SlideReveal>
        </Container>
      </Box>

      {/* Gradient bridge to soften teal to next section */}
      <Box
        sx={{
          height: 56,
          background:
            'linear-gradient(180deg, rgba(0,168,181,0.0) 0%, rgba(0,168,181,0.06) 35%, #ffffff 100%)'
        }}
      />

      {/* Enhanced Mission Section with Parallax */}
      <Box sx={{ py: 12, position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <ParallaxBox offset={-30}>
                <MotionBox
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      width: '100%',
                      height: '100%',
                      // softened indigo lavender blend that complements the teal
                      background: 'linear-gradient(135deg, #8EA6FF 0%, #B6A0E8 100%)',
                      borderRadius: 3,
                      zIndex: -1,
                      transform: 'rotate(-3deg)',
                      opacity: 0.7,
                      filter: 'saturate(0.9) brightness(1.02)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="/images/mission.jpg"
                    alt="Our mission"
                    sx={{ 
                      width: "100%", 
                      borderRadius: 3,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 1
                    }}
                  />
                </MotionBox>
              </ParallaxBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: '#007C84',
                    fontWeight: 'bold',
                    letterSpacing: 2
                  }}
                >
                  What drives us
                </Typography>
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(135deg, #007C84 0%, #00a8b5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  We simplify the business side of medicine by using AI to automate billing and reduce administrative burden.
                </Typography>
                <FloatingElement delay={0.5}>
                  <Box
                    sx={{
                      mt: 4,
                      p: 2,
                      backgroundColor: '#eaf6f5',
                      borderLeft: '4px solid #007C84',
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold" color="#007C84">
                      Our Goal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      More time with patients, less time with paperwork.
                    </Typography>
                  </Box>
                </FloatingElement>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Vision Section with Gradient Background */}
      <Box 
        sx={{ 
          py: 12,
          background: 'linear-gradient(180deg, #e6f4ea 0%, #ffffff 100%)',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <MotionBox
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: '#00a8b5',
                    fontWeight: 'bold',
                    letterSpacing: 2
                  }}
                >
                  Where we're going
                </Typography>
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(135deg, #00a8b5 0%, #43e97b 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Our Vision
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  We're building AI-first tools that eliminate documentation and billing bottlenecks, giving providers back their time.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <ParallaxBox offset={30}>
                <MotionBox
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #00a8b5 0%, #007C84 100%)',
                      borderRadius: 3,
                      zIndex: -1,
                      transform: 'rotate(3deg)',
                      opacity: 0.3,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="/images/vision.jpg"
                    alt="Our vision"
                    sx={{ 
                      width: "100%", 
                      borderRadius: 3,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 1
                    }}
                  />
                </MotionBox>
              </ParallaxBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Why Viscrow Section with Hover Effects */}
      <Box sx={{ py: 12, backgroundColor: "#ffffff", position: 'relative' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <SlideReveal>
              <Typography 
                variant="h3" 
                fontWeight="bold"
                sx={{
                  background: 'linear-gradient(135deg, #007C84 0%, #00a8b5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                Why Viscrow?
              </Typography>
            </SlideReveal>
            <SlideReveal delay={0.2}>
              <Typography variant="h6" color="text.secondary">
                The difference that sets us apart
              </Typography>
            </SlideReveal>
          </Box>
          
          <Grid container spacing={4}>
            {aboutCards.map((item, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <MotionBox
                  sx={{
                    textAlign: "center",
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: '1px solid rgba(0,0,0,0.05)',
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                      '& .gradient-bg': {
                        opacity: 1,
                      },
                      '& .icon-wrapper': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .content': {
                        color: 'white',
                      },
                      '& .title': {
                        color: 'white',
                      }
                    },
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    className="gradient-bg"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: item.gradient,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      borderRadius: 3,
                    }}
                  />
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <FloatingElement delay={idx * 0.2}>
                      <Box
                        className="icon-wrapper"
                        sx={{
                          width: 64,
                          height: 64,
                          mx: 'auto',
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(0,124,132,0.1)',
                          borderRadius: '50%',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <Box
                          component="img"
                          src={item.icon}
                          alt={item.title}
                          sx={{ width: 32, height: 32 }}
                        />
                      </Box>
                    </FloatingElement>
                    
                    <Typography 
                      variant="h6" 
                      fontWeight="bold" 
                      gutterBottom
                      className="title"
                      sx={{ transition: 'color 0.3s ease' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      className="content"
                      sx={{ 
                        color: 'text.secondary',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Founder's Quote with Animation */}
      <Box sx={{ py: 12, backgroundColor: '#fafafa' }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              background: 'linear-gradient(135deg, #e6f4ea 0%, #d4e8f7 100%)',
              borderLeft: "6px solid",
              borderImage: 'linear-gradient(135deg, #007C84 0%, #00a8b5 100%) 1',
              px: 5,
              py: 6,
              borderRadius: 3,
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',

            }}
          >
            <Typography 
              variant="h5" 
              fontStyle="italic"
              sx={{
                lineHeight: 1.8,
                color: '#2c3e50',
                mb: 3
              }}
            >
              We saw practices struggling with administrative burden. So we built an AI platform that understands clinical language and billing workflows.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3 }}>
              <Box sx={{ width: 40, height: 2, backgroundColor: '#007C84' }} />
              <Typography fontWeight="bold" sx={{ color: '#007C84' }}>
                The Viscrow Team
              </Typography>
              <Box sx={{ width: 40, height: 2, backgroundColor: '#007C84' }} />
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* CTA */}
      <CallToAction />
    </Box>
  );
};

export default AboutPage;
