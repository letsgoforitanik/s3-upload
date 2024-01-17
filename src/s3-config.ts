import dotenv from "dotenv";
import { S3Client } from "@aws-sdk/client-s3";

dotenv.config();

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.S3_ACCESSKEYID!,
        secretAccessKey: process.env.S3_SECRETACCESSKEY!,
    },
    region: process.env.S3_REGION
});

export default s3;