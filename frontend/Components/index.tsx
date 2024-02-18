import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar/Navbar"));
const Message = dynamic(() => import("./Message/Message"));
const Footer = dynamic(() => import("./Footer/Footer"));
import Hero from "./Home/Hero";
const PlatformFeatures = dynamic(() => import("./Home/PlatformFeatures"));
const TopRated = dynamic(() => import("./Home/TopRated"));
const TopRatedCard = dynamic(() => import("./Home/TopRatedCard"));
const Features = dynamic(() => import("./Home/Features"));
const FeatureCard = dynamic(() => import("./Home/FeatureCard"));
const ActiveLinks = dynamic(() => import("./Shared/ActiveLinks"));
const StarRating = dynamic(() => import("./Shared/StarRating"));
const Badge = dynamic(() => import("./Shared/Badge"));
import Whishlistmodal from "./Wishlist/Whishlistmodal";
import Ordersmodal from "./Order/Ordersmodal";
const CategoryModal = dynamic(() => import("./Category/CategoryModal"));
const NavbarDrawer = dynamic(() => import("./Navbar/NavbarDrawer"));
import MessageLayout from "./Message/MessageLayout";
import MessageProfile from "./Message/MessageProfile";
const GigReviews = dynamic(() => import("./Gig/GigReviews"));
const GigCard = dynamic(() => import("./Gig/GigCard"));
const OrderDrawer = dynamic(() => import("./Order/OrderDrawer"));
const FeatureList = dynamic(() => import("./Home/PlatformFeatureList"));
const Modal = dynamic(() => import("./Home/Modal"));
const Client = dynamic(() => import("./Client/Client"));
const StepperForm = dynamic(() => import("./Stepper/StepperForm"));
export {
  Navbar,
  Footer,
  Hero,
  Features,
  TopRated,
  PlatformFeatures,
  Message,
  ActiveLinks,
  StarRating,
  Badge,
  Whishlistmodal,
  CategoryModal,
  Ordersmodal,
  NavbarDrawer,
  MessageLayout,
  MessageProfile,
  GigReviews,
  GigCard,
  OrderDrawer,
  FeatureList,
  Modal,
  TopRatedCard,
  FeatureCard,
  Client,
  StepperForm,
};
