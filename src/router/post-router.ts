import { Request, Response, Router, NextFunction } from "express";
import Post from "../db-model/post";

const SLUG_PARAMETER = "slug";

class PostRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.defineRoutes();
  }

  private defineRoutes() {
    this.router.get("/", this.getPosts);
    this.router.get(`/:${SLUG_PARAMETER}`, this.getPost);
    this.router.post("/", this.createPost);
    this.router.put(`/:${SLUG_PARAMETER}`, this.updatePost);
    this.router.delete(`/:${SLUG_PARAMETER}`, this.deletePost);
  }

  public getPosts(request: Request, response: Response): void {
    Post.find()
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
      });
  }

  public getPost(request: Request, response: Response): void {
    const slugParameter: string = request.params[SLUG_PARAMETER];
    
    Post.findOne({ slug: slugParameter })
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
      });
  }

  public createPost(request: Request, response: Response): void {
    const post = new Post(request.body);

    post.save()
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
      });
  }

  public updatePost(request: Request, response: Response): void {
    const slugParameter: string = request.params[SLUG_PARAMETER];
    
    Post.findOneAndUpdate({ slug: slugParameter }, request.body)
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
      });
  }

  public deletePost(request: Request, response: Response): void {
    const slugParameter: string = request.params[SLUG_PARAMETER];
    
    Post.findOneAndDelete({ slug: slugParameter })
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
      });
  }
}

const postRoutes = new PostRouter();

export default postRoutes.router;