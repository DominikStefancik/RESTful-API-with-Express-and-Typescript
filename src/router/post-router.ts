import { Request, Response, Router, NextFunction } from "express";
import Post from "../db-model/post";

class PostRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.defineRoutes();
  }

  private defineRoutes() {
    this.router.get("/", this.getPosts);
  }

  public getPosts(request: Request, response: Response): void {
    Post.find({})
      .then((data) => {
        const status = response.statusCode;
        response.json({
          status: status,
          data: data
        });
      })
      .catch((error) => {
        response.json({
          status: status,
          error: error
        });
      })
  }

  public getPost(request: Request, response: Response): void {
    
  }

  public createPost(request: Request, response: Response): void {
    
  }

  public updatePost(request: Request, response: Response): void {
    
  }

  public deletePost(request: Request, response: Response): void {
    
  }
}

const postRoutes = new PostRouter();

export default postRoutes.router;