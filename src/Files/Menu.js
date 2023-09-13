import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Box } from '@mui/material';
import './Menu.css';
import { Card as MuiCard } from '@mui/material'; // Alias the Mui Card import
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Card } from 'react-bootstrap'; // Alias the react-bootstrap Card import

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


function Menu() {
  return (
    <div>
      <Box className='box1' >
        <h1 className='ins'>Inspiration for your first order <img style={{ marginLeft: '-30px' }} height='150px' src='https://cdn.dribbble.com/users/107759/screenshots/1690462/foodies2.gif' /></h1>
        <Carousel className='active' >

          <Carousel.Item className='a1'>
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="Image 1" />
            <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="Image 1" />
            <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="Image 1" />
            <img className='img1' src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347434/india-food-chicken-pakora/india-food-chicken-pakora-1120x732.jpg" alt="Image 1" />



          </Carousel.Item>
          <Carousel.Item className='a2'>
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="Image 2" />
            <img className='img1' src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347465/india-food-aloo-chaat/india-food-aloo-chaat-1120x732.jpg" alt="Image 2" />

          </Carousel.Item>
          <Carousel.Item className='a3'>
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png" alt="Image 2" />
            <img className='img1' src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg" alt="Image 2" />


          </Carousel.Item>
          <Carousel.Item className='a4'>
            <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png" alt="Image 2" />
            <img className='img1' src="https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png" alt="Image 2" />
            <img className='img1' src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg" alt="Image 2" />


          </Carousel.Item>
        </Carousel>
      </Box>
      <h1 className='ins'>Best Food </h1>
      <Box className="secondcont">

        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/f77866f0f5474fc0b41d316f885edcc3.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pav bhaji
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Pav bhaji is a popular street snack originating from the Indian state of Maharashtra.
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/b01fa4c9920d42df9ef472fd4f8e6fda.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Panipuri
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Panipuri is a street snack that is extremely popular in India
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/7de2a201d16e44b18e983b2e402b3737.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Appam
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Appam is a popular Indian bowl-shaped pancake made from a batter of rice flour and coconut milk.
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//images/dishes/55f00ba4fe8746a68b8ad62b24226e3b.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chicken 65
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Chicken 65 is a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Box>
      <br />
      <Box className="thirdcont">

        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea className='cardcont'>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/99d92862af9a42a2973a8213144f39ca.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rogan josh
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Rogan josh is an aromatic lamb curry
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Masala dosa
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                A traditional southern Indian dish known as masala dosa
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//images/dishes/2cbbb8c2a74541c0b03aeaaad7498ca3.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dal makhani
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Dal makhani has
                become one of the most popular Indian lentil dishes,
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//images/dishes/ceff65c140064d6285fc3814534a349b.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shahi paneer
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Rich, hearty, and nutritious, shahi paneer !
                Often referred to as the Royal paneer,
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Box>
      <br />
      <br />
      <Box className="thirdcont">

        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea className='cardcont'>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/bae67efebeaa47f9947a81c4c0f2fd91.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kheer
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Kheer or payasam is an ancient Indian dessert, a creamy rice pudding that is made in several versions across the country.
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//Images/Dishes/84327074df8e4c5fabeaeca6fa3ab659.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chaat
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Chaat is a term signifying a huge variety of Indian street foods, snacks, or small meals which usually combine salty, spicy, sweet, and sour flavors
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hyderabadi biryani
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                Hyderabadi biryani is a South Indian dish consisting of basmati rice, goat, mutton, or chicken meat, lemon, yogurt, onions, and saffron.
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="https://cdn.tasteatlas.com//images/dishes/2a00c116070d46a7a8dd91c0e086f76d.jpg?w=905&h=510" alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pulihora
              </Typography>
              <Typography width="233px" variant="body2" color="text.secondary">
                It is commonly prepared for festivals, yellow in color due to turmeric - considered sacred and symbolizing
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Box>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">See More!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body><Box className="thirdcont">

              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea className='cardcont'>
                  <CardMedia component="img" height="140" image="https://b.zmtcdn.com/data/pictures/chains/1/461/72251ef2ed03f2179854a92d573f199a_o2_featured_v2.jpg" alt="food" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Karim's
                    </Typography>
                    <Typography width="233px" variant="body2" color="text.secondary">
                      arim's Palak Paneer and Dal Makhani are known to even make the meat lovers fall in love with vegetarian food. </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="data:image/jpeg;base64,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" alt="food" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Chili’s Baked Potato Soup
                    </Typography>
                    <Typography width="233px" variant="body2" color="text.secondary">
                      Chili’s Baked Potato Soup is creamy, hearty, and delicious comfort food. Topped with bacon, cheddar cheese, and chives,
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="https://b.zmtcdn.com/data/pictures/0/19621610/4f38c8cd08a5d1e494b6b788fa4203e4_o2_featured_v2.jpg" alt="food" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      The Burger Company
                    </Typography>
                    <Typography width="233px" variant="body2" color="text.secondary">
                      Indulgent warm, crispy, chewy flatbread filled with creamy soft paneer cubes simmered in mildly spicy, aromatic, makhani tomato gravy & topped with crisp shredded lettuce,
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="https://b.zmtcdn.com/data/pictures/chains/5/19338455/b2beddeb8d79f5fcb27a0ac5b974a9df_o2_featured_v2.jpg" alt="food" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mama Mea Pizza
                    </Typography>
                    <Typography width="233px" variant="body2" color="text.secondary">
                      Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
              
            </Box></Card.Body>
            
            
          </Accordion.Collapse>
        </Card>
        

      </Accordion>
      
      <br /><br />

    </div>
  );
}

export default Menu;
