// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("🚀 CI/CD Pipeline with Docker, Jenkins, Terraform, Ansible Working!");
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CI/CD DevOps Project.</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1d4ed8, #06b6d4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          color: white;
        }

        .container {
          width: 100%;
          max-width: 1000px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .badge {
          display: inline-block;
          background: #22c55e;
          color: white;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .highlight {
          color: #facc15;
        }

        .subtitle {
          font-size: 20px;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 30px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .card {
          background: rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #fde68a;
        }

        .card p {
          font-size: 16px;
          line-height: 1.6;
          color: #e5e7eb;
        }

        .section-title {
          margin-top: 40px;
          margin-bottom: 18px;
          font-size: 30px;
          color: #ffffff;
        }

        .flow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 10px;
        }

        .step {
          background: rgba(255, 255, 255, 0.16);
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: bold;
          color: #fff;
        }

        .footer {
          margin-top: 35px;
          font-size: 16px;
          color: #dbeafe;
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 34px;
          }

          .subtitle {
            font-size: 18px;
          }

          .container {
            padding: 25px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="badge">DevOps Mini Project</div>

        <h1>
          🚀 <span class="highlight">CI/CD Pipeline</span> with Docker, Jenkins,
          Terraform & Ansible
        </h1>

        <p class="subtitle">
          This project demonstrates an automated DevOps workflow where code is
          built, containerized, pushed, and deployed using modern CI/CD tools.
          It shows how infrastructure, automation, and deployment can work
          together in a real-world project environment.
        </p>

        <h2 class="section-title">Project Overview</h2>
        <div class="grid">
          <div class="card">
            <h3>⚙️ Jenkins</h3>
            <p>
              Jenkins is used to automate the pipeline. It pulls source code,
              builds the Docker image, pushes it to DockerHub, and deploys the
              latest version to the server.
            </p>
          </div>

          <div class="card">
            <h3>🐳 Docker</h3>
            <p>
              Docker containerizes the application so it runs consistently
              across environments without dependency issues.
            </p>
          </div>

          <div class="card">
            <h3>☁️ Terraform</h3>
            <p>
              Terraform provisions cloud infrastructure such as AWS EC2
              instances, making infrastructure setup automated and repeatable.
            </p>
          </div>

          <div class="card">
            <h3>📦 Ansible</h3>
            <p>
              Ansible is used for server configuration and setup, helping
              automate software installation and deployment tasks.
            </p>
          </div>
        </div>

        <h2 class="section-title">How This Project Works</h2>
        <div class="flow">
          <div class="step">GitHub</div>
          <div class="step">Jenkins Pipeline</div>
          <div class="step">Docker Build</div>
          <div class="step">DockerHub Push</div>
          <div class="step">AWS EC2 Deploy</div>
          <div class="step">Live Application</div>
        </div>

        <div class="footer">
          ✅ Project Status: Successfully Running with Automated CI/CD Deployment
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));