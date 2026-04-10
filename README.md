# 🚀 End-to-End DevOps Project on AWS EKS

## 📌 Overview

This project demonstrates a complete **DevOps pipeline** built using modern cloud-native tools.
It covers application deployment, GitOps, CI/CD, networking, and monitoring on AWS.

---

## 🏗️ Architecture

Code → GitHub → GitHub Actions (CI) → Amazon ECR
→ ArgoCD (GitOps CD) → AWS EKS (Kubernetes)
→ Ingress (LoadBalancer) → Users
→ Prometheus + Grafana (Monitoring)

---

## 🛠️ Tech Stack

* **Cloud**: AWS (EKS, ECR)
* **Containerization**: Docker
* **Orchestration**: Kubernetes (EKS v1.30)
* **GitOps**: ArgoCD
* **CI/CD**: GitHub Actions
* **Networking**: NGINX Ingress Controller
* **Monitoring**: Prometheus & Grafana
* **Backend**: Node.js (Express)

---

## 📂 Repository Structure

```
eks-gitops-config/
│
├── backend/                # Application code
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│
├── k8s/                    # Kubernetes manifests (GitOps)
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   └── ingress.yaml
│
├── .github/workflows/
│   └── ci.yml              # CI/CD pipeline
│
├── README.md
└── .gitignore
```

---

## ⚙️ Features

* ✅ Dockerized Node.js application
* ✅ Deployment on AWS EKS (Kubernetes)
* ✅ GitOps-based deployment using ArgoCD
* ✅ CI/CD pipeline using GitHub Actions
* ✅ Automatic image build & push to ECR
* ✅ Ingress with AWS LoadBalancer
* ✅ Monitoring using Prometheus & Grafana
* ✅ Scalable node groups with AWS

---

## 🚀 CI/CD Pipeline Flow

1. Developer pushes code to GitHub
2. GitHub Actions:

   * Builds Docker image
   * Pushes image to Amazon ECR
   * Updates Kubernetes manifest
3. ArgoCD:

   * Detects changes in GitHub
   * Automatically deploys to EKS

---

## 🌐 Application Access

* Application exposed via **Ingress + AWS LoadBalancer**
* Access using:

```
http://a0d509e83c6cd4c1691fe719fe356ce3-1009129612.ap-south-1.elb.amazonaws.com/
```

---

## 📊 Monitoring

* **Prometheus** collects metrics
* **Grafana** visualizes:

  * CPU usage
  * Memory usage
  * Pod health
  * Node performance

---

## 📸 Screenshots

> Add these screenshots for better visibility:

* ✅ Application UI (Running status page)
  images/interface.png
* ✅ ArgoCD Dashboard (Synced & Healthy)
  images/argo.png
* ✅ Grafana Dashboard (Metrics view)
  images/grafana.png
* ✅ Kubernetes Nodes (`kubectl get nodes`)
  images/nodes.png

---

## 🧠 Key Learnings

* Implemented GitOps workflow using ArgoCD
* Built CI/CD pipeline with GitHub Actions
* Debugged real-world issues:

  * Docker build path errors
  * Kubernetes scheduling failures
  * AWS resource limits
  * ArgoCD manifest errors
* Managed infrastructure scaling in EKS

---

## 💼 Resume Highlights

* Built production-like DevOps pipeline using AWS EKS, ArgoCD, and GitHub Actions
* Automated deployments using GitOps principles
* Integrated monitoring using Prometheus and Grafana
* Designed scalable and maintainable cloud-native architecture

---

## 👨‍💻 Author

**Vishwas Magar**

---

## ⭐ If you found this useful

Give this repo a ⭐ and connect with me on LinkedIn!
