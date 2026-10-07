import express, { Request, Response } from 'express';


  function myLogger(_req: Request, res: Response, next: express.NextFunction) {
        console.log(`${_req.method} ${_req.originalUrl} Eto nash malchik`);
        next();
  }
  export { myLogger };
    