# Use an official Java runtime as a parent image
FROM openjdk:11

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Build your application if necessary
# RUN lein build or other build commands

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run your application when the container launches
CMD ["lein", "run"]