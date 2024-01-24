const mongoose = require("mongoose");
const { DATABASE_KEY } = process.env;
const Categories = require("../Model/categoryModel"); // Import your Category model

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_KEY);
    const count = await Categories.countDocuments();
    console.log(count);

    if (count === 0) {
      const initialCategories = [
        {
          category: "Web Development",
          imageUrl:
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          subfields: [
            "Frontend Development",
            "Backend Development",
            "UI/UXDesign",
            "Ecommerce Development",
            "Wordpress Development",
          ],
          TotalNoofGigsAvailable: 10,
          SubCategoryNo: {
            "Frontend Development": 2,
            "Backend Development": 3,
            "UI/UXDesign": 2,
            "Ecommerce Development": 1,
            "Wordpress Development": 2,
          },
        },
        {
          category: "Graphics & Design",
          imageUrl:
            "https://images.pexels.com/photos/2860810/pexels-photo-2860810.jpeg?auto=compress&cs=tinysrgb&w=600",
          subfields: [
            "Typography & Illustration",
            "Web Design",
            "Logo Designs",
            "Thumbnails",
            "3D Modeling",
          ],
          TotalNoofGigsAvailable: 20,
          imageUrl:
            "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          SubCategoryNo: {
            "Typography & Illustration": 5,
            "Web Design": 4,
            "Logo Designs": 3,
            Thumbnails: 4,
            "3D Modeling": 4,
          },
        },
        {
          category: "Digital Marketing",
          subfields: [
            "SEO",
            "Content Marketing",
            "Pay-Per-Click Ads",
            "Marketing Automation",
            "Google Ads",
          ],
          imageUrl:
            "https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          TotalNoofGigsAvailable: 5,
          SubCategoryNo: {
            SEO: 1,
            "Content Marketing": 2,
            "Pay-Per-Click PPC Ads": 1,
            "Marketing Automation": 1,
            "Google Ads": 0,
          },
        },
        {
          category: "Writing & Translation",
          subfields: [
            "Technical Writing",
            "Ghost Writing",
            "Content Writing",
            "Creative Writing",
            "Copy Writing",
          ],
          imageUrl:
            "https://images.pexels.com/photos/3539899/pexels-photo-3539899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          TotalNoofGigsAvailable: 15,
          SubCategoryNo: {
            "Technical Writing": 3,
            "Ghost Writing": 4,
            "Content Writing": 4,
            "Creative Writing": 2,
            "Copy Writing": 2,
          },
        },
        {
          category: "Video Animations",
          subfields: [
            "2D Animations",
            "3D Animations",
            "Infographic Videos",
            "VirtualReality VR",
            "Character Animation",
          ],
          TotalNoofGigsAvailable: 7,
          imageUrl:
            "https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          SubCategoryNo: {
            "2D Animations": 2,
            "3D Animations": 1,
            "Infographic Videos": 1,
            "VirtualReality VR": 2,
            "Character Animation": 1,
          },
        },
        {
          category: "AI Services",
          subfields: [
            "NLP Services",
            "Computer Vision",
            "Neural Networks",
            "ChatBots",
            "ML Model Development",
          ],
          imageUrl:
            "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          TotalNoofGigsAvailable: 12,
          SubCategoryNo: {
            "NLP Services": 3,
            "Computer Vision": 3,
            "Neural Networks": 2,
            ChatBots: 2,
            "ML Model Development": 2,
          },
        },
        {
          category: "SQA",
          subfields: [
            "Functional Testing",
            "Non-functional Testing",
            "UAT",
            "Quality Metrics",
            "Alpha & Beta Testing",
          ],
          imageUrl:
            "https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          TotalNoofGigsAvailable: 3,
          SubCategoryNo: {
            FunctionalTesting: 1,
            "Non-functional Testing": 0,
            UAT: 1,
            "Quality Metrics": 0,
            "Alpha & Beta Testing": 1,
          },
        },
        {
          category: "Digital Marketing",
          subfields: [
            "SEO",
            "Content Marketing",
            "Pay-Per-Click Ads",
            "Marketing Automation",
            "Google Ads",
          ],
          imageUrl:
            "https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          TotalNoofGigsAvailable: "",
          SubCategoryNo: {
            SEO: 1,
            "Content Marketing": 2,
            "Pay-Per-Click Ads": 1,
            "Marketing Automation": 1,
            "Google Ads": 0,
          },
        },
      ];


      await Categories.insertMany(initialCategories);
      console.log("Categories seeded successfully");
    }

    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to the MongoDB database:", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to the database");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongoose connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from the database");
});

const shutdown = async () => {
  try {
    await mongoose.connection.close();
    console.log("Mongoose disconnected due to application termination");
    process.exit(0);
  } catch (error) {
    console.error("Error during graceful shutdown:", error);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
  process.on(signal, shutdown);
});

connectToDatabase();
