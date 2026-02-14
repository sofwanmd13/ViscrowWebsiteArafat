import { Link as RouterLink } from "react-router-dom";
import posts from "../utils/posts";
import {
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Fade,
  Avatar,
  Divider,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  ArrowForward,
  LocalOffer,
  Create,
} from "@mui/icons-material";
import { useState } from "react";

export default function BlogIndex() {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get featured post (most recent)
  const featuredPost = sortedPosts[0];
  const regularPosts = sortedPosts.slice(1);

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 100%)`,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Blog
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Thoughts, ideas, and insights on technology, development, and design
          </Typography>
        </Box>

        {posts.length === 0 ? (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 10,
              background: alpha(theme.palette.primary.main, 0.05),
              borderRadius: 4,
            }}
          >
            <Create sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" color="text.secondary">
              No posts yet
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Check back soon for new content!
            </Typography>
          </Box>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Fade in timeout={600}>
                <Card 
                  sx={{ 
                    mb: 8,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[10],
                    }
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={`/blog/${featuredPost.slug}`}
                  >
                    <Grid container>
                      <Grid item xs={12} md={7}>
                        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                            <Chip 
                              label="Featured" 
                              size="small" 
                              color="primary"
                              sx={{ fontWeight: 600 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              Latest Post
                            </Typography>
                          </Stack>
                          
                          <Typography 
                            variant="h3" 
                            gutterBottom
                            sx={{ 
                              fontWeight: 700,
                              lineHeight: 1.2,
                              mb: 2,
                            }}
                          >
                            {featuredPost.title}
                          </Typography>
                          
                          {featuredPost.description && (
                            <Typography 
                              variant="h6" 
                              color="text.secondary"
                              sx={{ 
                                mb: 3,
                                lineHeight: 1.6,
                                fontWeight: 400,
                              }}
                            >
                              {featuredPost.description}
                            </Typography>
                          )}
                          
                          <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {new Date(featuredPost.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                5 min read
                              </Typography>
                            </Stack>
                          </Stack>
                          
                          {featuredPost.tags && featuredPost.tags.length > 0 && (
                            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                              {featuredPost.tags.map((tag) => (
                                <Chip 
                                  key={tag} 
                                  label={tag} 
                                  size="small" 
                                  variant="outlined"
                                  sx={{ 
                                    mb: 1,
                                    borderColor: alpha(theme.palette.primary.main, 0.3),
                                    '&:hover': {
                                      borderColor: theme.palette.primary.main,
                                      background: alpha(theme.palette.primary.main, 0.08),
                                    }
                                  }} 
                                />
                              ))}
                            </Stack>
                          )}
                        </CardContent>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box
                          sx={{
                            height: '100%',
                            minHeight: 350,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '150%',
                              height: '150%',
                              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            }
                          }}
                        >
                          <Typography 
                            variant="h1" 
                            sx={{ 
                              color: 'white',
                              opacity: 0.2,
                              fontSize: '10rem',
                              fontWeight: 900,
                            }}
                          >
                            01
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Fade>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <>
                <Divider sx={{ mb: 6 }}>
                  <Chip label="More Articles" variant="outlined" />
                </Divider>
                
                <Grid container spacing={4}>
                  {regularPosts.map((post, index) => (
                    <Grid item xs={12} md={6} lg={4} key={post.slug}>
                      <Fade in timeout={600 + index * 100}>
                        <Card 
                          onMouseEnter={() => setHoveredCard(post.slug)}
                          onMouseLeave={() => setHoveredCard(null)}
                          sx={{ 
                            height: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'visible',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: theme.shadows[12],
                              borderColor: theme.palette.primary.main,
                              '& .post-number': {
                                transform: 'scale(1.1) rotate(5deg)',
                              },
                              '& .read-more': {
                                transform: 'translateX(4px)',
                              }
                            }
                          }}
                        >
                          {/* Post Number Badge */}
                          <Box
                            className="post-number"
                            sx={{
                              position: 'absolute',
                              top: -15,
                              right: 20,
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              transition: 'transform 0.3s ease',
                              boxShadow: theme.shadows[4],
                            }}
                          >
                            {index + 2}
                          </Box>

                          <CardActionArea
                            component={RouterLink}
                            to={`/blog/${post.slug}`}
                            sx={{ 
                              height: "100%",
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                            }}
                          >
                            <CardContent sx={{ width: '100%', flexGrow: 1, pt: 4 }}>
                              <Typography 
                                variant="h5" 
                                gutterBottom
                                sx={{ 
                                  fontWeight: 600,
                                  lineHeight: 1.3,
                                  mb: 2,
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                }}
                              >
                                {post.title}
                              </Typography>
                              
                              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                <CalendarToday sx={{ fontSize: 14, color: 'text.secondary' }} />
                                <Typography variant="caption" color="text.secondary">
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">•</Typography>
                                <Typography variant="caption" color="text.secondary">
                                  3 min read
                                </Typography>
                              </Stack>
                              
                              {post.description && (
                                <Typography 
                                  color="text.secondary"
                                  sx={{ 
                                    mb: 2,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {post.description}
                                </Typography>
                              )}
                              
                              {post.tags && post.tags.length > 0 && (
                                <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap", mt: 'auto' }}>
                                  <LocalOffer sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5, mt: 0.5 }} />
                                  {post.tags.slice(0, 3).map((tag) => (
                                    <Chip 
                                      key={tag} 
                                      label={tag} 
                                      size="small"
                                      variant="outlined"
                                      sx={{ 
                                        mb: 0.5,
                                        height: 24,
                                        fontSize: '0.75rem',
                                        borderColor: alpha(theme.palette.text.secondary, 0.3),
                                        '&:hover': {
                                          borderColor: theme.palette.primary.main,
                                          background: alpha(theme.palette.primary.main, 0.08),
                                        }
                                      }} 
                                    />
                                  ))}
                                  {post.tags.length > 3 && (
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                                      +{post.tags.length - 3}
                                    </Typography>
                                  )}
                                </Stack>
                              )}
                              
                              <Stack 
                                direction="row" 
                                alignItems="center" 
                                sx={{ mt: 3, color: theme.palette.primary.main }}
                              >
                                <Typography variant="body2" fontWeight={600}>
                                  Read more
                                </Typography>
                                <ArrowForward 
                                  className="read-more"
                                  sx={{ 
                                    fontSize: 16, 
                                    ml: 0.5,
                                    transition: 'transform 0.3s ease',
                                  }} 
                                />
                              </Stack>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Fade>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}