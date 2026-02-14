import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import posts from "../utils/posts";
import { MDXProvider } from "@mdx-js/react";
import { 
  Box, 
  Container, 
  Typography, 
  Chip, 
  Stack,
  Divider,
  IconButton,
  Button,
  Paper,
  Avatar,
  Fade,
  Breadcrumbs,
  Link,
  useTheme,
  alpha,
  Tooltip,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  ArrowBack,
  ArrowForward,
  LocalOffer,
  Share,
  BookmarkBorder,
  Twitter,
  LinkedIn,
  Link as LinkIcon,
  Home,
  Article,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const post = posts.find(p => p.slug === slug);
  const postIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Article sx={{ fontSize: 80, color: 'text.secondary', mb: 3 }} />
        <Typography variant="h4" gutterBottom>
          Post not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          The blog post you're looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/blog')}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  const { Component, title, date, description, tags } = post;

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL');
        }
        break;
    }
  };

  // Custom MDX components for better typography
  const mdxComponents = {
    h1: (props: any) => (
      <Typography variant="h3" gutterBottom sx={{ mt: 6, mb: 3, fontWeight: 700 }} {...props} />
    ),
    h2: (props: any) => (
      <Typography variant="h4" gutterBottom sx={{ mt: 5, mb: 2, fontWeight: 600 }} {...props} />
    ),
    h3: (props: any) => (
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600 }} {...props} />
    ),
    p: (props: any) => (
      <Typography paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, mb: 3 }} {...props} />
    ),
    ul: (props: any) => (
      <Box component="ul" sx={{ fontSize: '1.125rem', lineHeight: 1.8, mb: 3, pl: 2 }} {...props} />
    ),
    ol: (props: any) => (
      <Box component="ol" sx={{ fontSize: '1.125rem', lineHeight: 1.8, mb: 3, pl: 2 }} {...props} />
    ),
    li: (props: any) => (
      <Box component="li" sx={{ mb: 1 }} {...props} />
    ),
    blockquote: (props: any) => (
      <Paper
        elevation={0}
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          pl: 3,
          pr: 2,
          py: 2,
          my: 3,
          backgroundColor: alpha(theme.palette.primary.main, 0.05),
          '& p': {
            mb: 0,
            fontStyle: 'italic',
          }
        }}
        {...props}
      />
    ),
    code: (props: any) => {
      // Check if it's inline code or code block
      if (props.className) {
        return (
          <Paper
            component="pre"
            elevation={0}
            sx={{
              p: 2,
              my: 3,
              backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
              overflowX: 'auto',
              borderRadius: 2,
              '& code': {
                fontFamily: 'monospace',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }
            }}
          >
            <code {...props} />
          </Paper>
        );
      }
      return (
        <Box
          component="code"
          sx={{
            px: 0.8,
            py: 0.2,
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            borderRadius: 0.5,
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: theme.palette.primary.main,
          }}
          {...props}
        />
      );
    },
    hr: () => (
      <Divider sx={{ my: 5 }} />
    ),
    a: (props: any) => (
      <Link
        {...props}
        sx={{
          color: theme.palette.primary.main,
          textDecoration: 'none',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          transition: 'all 0.2s ease',
          '&:hover': {
            borderBottomColor: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
          }
        }}
      />
    ),
  };

  return (
    <>
      {/* Progress bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${scrollProgress}%`,
            backgroundColor: theme.palette.primary.main,
            transition: 'width 0.1s ease',
          }}
        />
      </Box>

      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Fade in timeout={600}>
            <Box>
              {/* Breadcrumbs */}
              <Breadcrumbs 
                separator="›" 
                sx={{ mb: 4 }}
                aria-label="breadcrumb"
              >
                <Link
                  component={RouterLink}
                  to="/"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <Home sx={{ mr: 0.5, fontSize: 20 }} />
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  to="/blog"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Blog
                </Link>
                <Typography color="text.primary">
                  {title}
                </Typography>
              </Breadcrumbs>

              {/* Header */}
              <Box sx={{ mb: 6 }}>
                <Typography 
                  variant="h2" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.2,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {title}
                </Typography>

                {description && (
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                    sx={{ 
                      mb: 3,
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </Typography>
                )}

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  justifyContent="space-between"
                  sx={{ mb: 3 }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar 
                      sx={{ 
                        bgcolor: theme.palette.primary.main,
                        width: 40,
                        height: 40,
                      }}
                    >
                      A
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        Author Name
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <CalendarToday sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {new Date(date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <AccessTime sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            5 min read
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Share on Twitter">
                      <IconButton 
                        size="small" 
                        onClick={() => handleShare('twitter')}
                        sx={{ 
                          border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                          '&:hover': { 
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          }
                        }}
                      >
                        <Twitter fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share on LinkedIn">
                      <IconButton 
                        size="small" 
                        onClick={() => handleShare('linkedin')}
                        sx={{ 
                          border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                          '&:hover': { 
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          }
                        }}
                      >
                        <LinkedIn fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={copied ? "Copied!" : "Copy link"}>
                      <IconButton 
                        size="small" 
                        onClick={() => handleShare('copy')}
                        sx={{ 
                          border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                          '&:hover': { 
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          }
                        }}
                      >
                        <LinkIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Save for later">
                      <IconButton 
                        size="small"
                        sx={{ 
                          border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                          '&:hover': { 
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          }
                        }}
                      >
                        <BookmarkBorder fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>

                {tags && tags.length > 0 && (
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
                    <LocalOffer sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    {tags.map((tag) => (
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
                            cursor: 'pointer',
                          }
                        }} 
                      />
                    ))}
                  </Stack>
                )}
              </Box>

              <Divider sx={{ mb: 6 }} />

              {/* Article Content */}
              <Box 
                sx={{ 
                  '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    my: 3,
                  },
                  '& pre': {
                    borderRadius: 2,
                  }
                }}
              >
                <MDXProvider components={mdxComponents}>
                  <Component />
                </MDXProvider>
              </Box>

              <Divider sx={{ my: 6 }} />

              {/* Author Bio */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 6,
                  backgroundColor: alpha(theme.palette.primary.main, 0.03),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row" spacing={3}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: theme.palette.primary.main,
                    }}
                  >
                    A
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      About the Author
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      A passionate developer and writer sharing insights about web development, 
                      technology trends, and software engineering best practices.
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small" color="primary">
                        <Twitter fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <LinkedIn fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>

              {/* Navigation to other posts */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {prevPost && (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          transform: 'translateX(-4px)',
                          boxShadow: theme.shadows[4],
                        }
                      }}
                      onClick={() => navigate(`/blog/${prevPost.slug}`)}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArrowBack color="primary" />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Previous Post
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {prevPost.title}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {nextPost && (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          transform: 'translateX(4px)',
                          boxShadow: theme.shadows[4],
                        }
                      }}
                      onClick={() => navigate(`/blog/${nextPost.slug}`)}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                          <Typography variant="caption" color="text.secondary">
                            Next Post
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {nextPost.title}
                          </Typography>
                        </Box>
                        <ArrowForward color="primary" />
                      </Stack>
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
}

// Add missing Grid import at the top
import { Grid } from "@mui/material";