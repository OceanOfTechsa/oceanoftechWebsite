const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const articlesDir = path.join(process.cwd(), "articles");

// Function to ask a question and return a Promise
const ask = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
    try {
        const title = await ask("Enter blog title: ");
        const description = await ask("Enter blog description: ");
        const author = await ask("Enter author name: ");

        const slug = title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

        const today = new Date();
        const date = today.toLocaleDateString("en-GB").replace(/\//g, "-");

        const template = `---
title: "${title}"
description: "${description}"
author: "${author}"
category: "learning"
date: "${date}"
image: "/blog/${slug}.webp"
---

Start writing your content here...
`;

        // Ensure articles directory exists
        if (!fs.existsSync(articlesDir)) {
            fs.mkdirSync(articlesDir, { recursive: true });
        }

        const filePath = path.join(articlesDir, `${slug}.md`);
        fs.writeFileSync(filePath, template);

        console.log(`Blog created: ${slug}.md`);
    } catch (err) {
        console.error("Error creating blog:", err);
    } finally {
        rl.close();
    }
})();