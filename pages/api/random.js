
// import {NextApiRequest, NextApiResponse} from 'next';


export default function (req, res){

    console.log(req.body.username)
    // res.end('hey wad up')
    res.json({status:Math.floor(Math.random()*10)})
}