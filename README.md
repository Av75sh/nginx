# 📖 NGINX Project

## 🚀 Project Overview
This project demonstrates how to run an **NGINX web server** inside a Docker container using **Docker Compose**.  
NGINX is a high-performance web server, reverse proxy, and load balancer widely used in production systems for serving static files, reverse proxying APIs, SSL termination, and more.  

---

## ⚙️ Project Structure
├── nginx.conf <br>
├── Dockerfile         --> Build instructions for NGINX image <br>
├── docker-compose.yml --> Compose file to orchestrate container <br>
├── client/            --> frontend  <br>

## Nginx.conf file
```
events {}

http {
    server {
        listen 80;

        server_name localhost;

        # Serve static files
        location / {
            root /usr/share/nginx/html;
            index index.html;
        }

        # Example reverse proxy
        location /api/ {
            proxy_pass http://backend:5000/;
        }
    }
}

```


## ▶️ Running the Project
```
docker-compose up --build
```
3️⃣ Stop containers
```
docker-compose down
```
