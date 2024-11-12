# Use a lightweight web server image
FROM nginx:alpine

# Copy the website files to the default Nginx directory
COPY index.html /usr/share/nginx/html/

# Expose port 90
EXPOSE 90

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

