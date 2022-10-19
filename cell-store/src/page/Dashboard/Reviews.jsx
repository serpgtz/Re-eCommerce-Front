import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllReviews } from "../../redux/actions/reviewActions";
import styles from "./Reviews.module.css";
import UsersContainer from "./UsersContainer";
const Reviews = ({ users, products }) => {
  //Debe recibir todos los usuarios y productos para funcionar
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.review.reviews);
  //Haciendo click en la imagen del producto, nos movemos hacia su detalle
  const navigate = useNavigate();
  const handleOnDetail = (e, id) => {
    e.preventDefault();
    navigate("/detail/" + id);
  };
  //La función de abajo me trae el nombre del usuario de la review
  console.log('uers aqui:', users)
  const userbyName = (uId) => {
    const userById = users.find((u) => u._id === uId);
    return userById?.username;
  };
  //La función de abajo me trae el nombre, la imagen y el id del product de la review
  const productbyId = (pId) => {
    const product = products.find((u) => u._id === pId);
    const oneProduct = {
      id: product?._id,
      img: product?.image,
      name: product?.name,
    };
    return oneProduct;
  };
  //La función de abajo mappea todo lo anterior, prepara para renderizar de forma sencilla
  const mappedReviews = reviews?.map((r) => ({
    id: r._id,
    person: userbyName(r?.user),
    rating: r.rating,
    comment: r.comment,
    productID: productbyId(r.product).id,
    productImg: productbyId(r.product).img,
    productName: productbyId(r.product).name,
  }));
  //Obtengo todas las reviews
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);
  return (
    <div style={styles.reviewContainer}>
      <List
        sx={{
          width: "100%",
          maxWidth: 1000,
          bgcolor: "background.paper",
        }}
      >
        {reviews
          ? mappedReviews?.map((review) => (
              <ListItem
                alignItems="flex-start"
                button
                key={review?.person + review?.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Product Picture"
                    src={review?.productImg}
                    onClick={(e) => handleOnDetail(e, review.productID)}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={review?.person}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body3"
                        color="goldenrod"
                      >
                        {review?.productName}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review?.comment}
                      </Typography>
                    </>
                  }
                />
                <Rating
                  name="Rating"
                  value={review?.rating}
                  readOnly
                  size="small"
                />
              </ListItem>
            ))
          : "Cargando..."}
      </List>
    </div>
  );
};

// <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//   <ListItem alignItems="flex-start">
//     <ListItemAvatar>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     </ListItemAvatar>
//     <ListItemText
//       primary="Brunch this weekend?"
//       secondary={
//         <React.Fragment>
//           <Typography
//             sx={{ display: "inline" }}
//             component="span"
//             variant="body2"
//             color="text.primary"
//           >
//             Ali Connors
//           </Typography>
//           {" — I'll be in your neighborhood doing errands this…"}
//         </React.Fragment>
//       }
//     />
//   </ListItem>
// </List>;
export default Reviews;
