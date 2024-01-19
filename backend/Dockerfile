# Use an official Java runtime as a base image
FROM openjdk:11

# Install Leiningen
RUN wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein -O /usr/local/bin/lein
RUN chmod a+x /usr/local/bin/lein
RUN lein

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the project files into the container
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run your app using Leiningen
CMD ["lein", "run"]
