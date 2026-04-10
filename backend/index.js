const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>DevOps App</title>
      <style>
        body {
          font-family: Arial;
          background: #0f172a;
          color: white;
          text-align: center;
          padding-top: 100px;
        }
        .card {
          background: #1e293b;
          padding: 30px;
          border-radius: 10px;
          display: inline-block;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .status {
          color: #22c55e;
          font-size: 24px;
          margin: 10px 0;
        }
        .info {
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1> DevOps App Running v4</h1>
        <div class="status">Healthy</div>
        <p class="info">Deployed on AWS EKS</p>
        <p class="info">Managed by ArgoCD (GitOps)</p>
        <p class="info">Monitoring with Prometheus & Grafana</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
