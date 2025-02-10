import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public/uploads");

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export async function POST(req: NextRequest) {
  return new Promise((resolve, reject) => {
    upload.single("file")(req as any, {} as any, (err) => {
      if (err) {
        reject(NextResponse.json({ error: err.message }, { status: 500 }));
      } else {
        const filePath = `/uploads/${req.file?.filename}`;
        resolve(NextResponse.json({ message: "File uploaded successfully!", filePath }, { status: 200 }));
      }
    });
  });
}
