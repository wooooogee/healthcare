import fs from 'fs';
import path from 'path';

function searchInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes("헬스콜센터")) {
        console.log(`Found in: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.html') || fullPath.endsWith('.ts')) {
            searchInFile(fullPath);
        }
    }
}

searchInFile('./index.html');
walkDir('./src');
