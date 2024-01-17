import http from "http";
import express, { Request, Response } from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import upload from "./multer-config";
import s3 from "./s3-config";


async function uploadFile(req: Request, res: Response) {

    const requestFile = req.file!;

    const input = {
        Bucket: process.env.S3_BUCKETNAME,
        Body: requestFile.buffer,
        Key: requestFile.originalname,
    };

    const command = new PutObjectCommand(input);

    const response = await s3.send(command);
    console.log('S3 Response ->', response);

    return res.json(response);

}

function main() {
    const app = express();
    app.post('/upload', upload.single('file'), uploadFile);
    const server = http.createServer(app);
    server.listen(3000, () => console.log(`Server is running on port 3000`));
}


main();