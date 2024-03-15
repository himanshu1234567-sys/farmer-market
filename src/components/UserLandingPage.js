import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const UserLandingPage = () => {
  // Dummy products data with images
  
  
  const products = [
    {
      id: 1,
      name: "Tomatoes",
      quantity: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1604282107451-122c8b9ab16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dG9tYXRvLyIgYWx0fHx8fHx8MTcxMDUxODA2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080/150",
    },
    {
      id: 2,
      name: "Grapes",
      quantity: 20,
      imageUrl:
        "https://images.unsplash.com/photo-1630676938852-6a1f79b330a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGVzLyIgYWx0fHx8fHx8MTcxMDUxODE5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080/150",
    },
    {
      id: 3,
      name: "watermelon",
      quantity: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1620591052631-b304ceba6f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0ZXJtZWxvbi98fHx8fHwxNzEwNTE4MzYx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080/150",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Farmer's Market
          </Typography>
          <Button component={Link} to="/about" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/services" color="inherit">
            Our Services
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button>
          <Button component={Link} to="/farmer/dashboard" color="inherit">
            Farmer's Section
          </Button>
          <Button component={Link} to="/user" color="inherit">
            User Section
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "20px" }}>
        <h1>Welcome to Farmer's Market</h1>
        <h2>Available Products:</h2>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 320,
              maxWidth: "100%",
              boxShadow: "lg",
              marginBottom: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography level="body-xs">{product.name}</Typography>
              <Link
                href={`#product-card-${product.id}`}
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                {product.name}
              </Link>
              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                {product.quantity} THB
              </Typography>
              <Typography level="body-sm">
                (Only <b>{product.quantity}</b> left in stock!)
              </Typography>
            </CardContent>
            <Button variant="solid" color="danger" size="lg">
              Add to cart
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default UserLandingPage;
