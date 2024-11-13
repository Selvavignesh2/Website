# Use a lightweight web server image
FROM nginx:alpine

WORKDIR /root
# Copy the website files to the default Nginx directory
COPY index.html /root

# Expose port 90
EXPOSE 90

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

