import express from 'express';

//need passport functionally
import passport from 'passport';

//need to include the Use model for authentication functions
import User from '../Models/user';

//Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {})
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

//Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
