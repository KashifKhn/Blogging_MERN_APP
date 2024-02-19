import { connect } from "mongoose";
import { Blog } from "../models/blog.model.js";

async function main() {
  await connect(`mongodb://127.0.0.1:27017/mernblog`);
}

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

// Sample data
const sampleBlogs = [
  {
    title: "Sample Blog 1",
    description: "Description of Sample Blog 1",
    imgUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 2",
    description: "Description of Sample Blog 2",
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 3",
    description: "Description of Sample Blog 3",
    imgUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 4",
    description: "Description of Sample Blog 4",
    imgUrl: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 5",
    description: "Description of Sample Blog 5",
    imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 6",
    description: "Description of Sample Blog 6",
    imgUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 7",
    description: "Description of Sample Blog 7",
    imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 8",
    description: "Description of Sample Blog 8",
    imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 9",
    description: "Description of Sample Blog 9",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
  {
    title: "Sample Blog 10",
    description: "Description of Sample Blog 10",
    imgUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem id aperiam nesciunt! Labore fugit impedit porro maxime perspiciatis quis unde autem corporis rem rerum, eligendi praesentium sint nihil asperiores explicabo, ipsum similique. Consequuntur necessitatibus exercitationem deserunt ducimus quia eaque odit ab libero! Totam debitis, dicta quod molestiae atque cupiditate nobis quia quidem laudantium est? Ab voluptatibus fugiat dignissimos, dicta adipisci iste accusamus minus voluptatum, est excepturi cum molestias. Accusantium veritatis blanditiis quos error exercitationem! Aut illum nobis explicabo maxime expedita a corrupti, pariatur iusto minima veniam qui animi dicta quia laudantium atque deserunt ratione, sint cumque provident? Error eveniet aut consectetur modi architecto quisquam! Inventore iste nihil, consequuntur hic esse illum quo odio mollitia est vel ipsa maxime sit non minima rem voluptate et saepe odit reprehenderit omnis excepturi suscipit ab quis? Eaque eveniet delectus officia facere enim consectetur repellendus rem excepturi voluptas qui accusantium perspiciatis corporis sequi molestias explicabo, libero, nobis vel? Soluta, autem! Nihil, tempora quod! Amet maiores expedita quo, possimus, nihil quam porro nostrum et blanditiis harum deleniti alias similique incidunt illo minima iure modi laudantium culpa. Ducimus maiores nemo, omnis quaerat quam, minima aperiam sequi dicta sapiente quibusdam recusandae eum eaque sint magni velit magnam rem.",
  },
];

const insertSampleData = async () => {
  try {
    await Blog.deleteMany({});
    await Blog.insertMany(sampleBlogs);
    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

// Call the function to insert sample data
insertSampleData();
