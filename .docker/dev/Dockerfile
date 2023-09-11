FROM node:14

##
# Here we installed node_modules inside another temporary directory namely cache . Later we will copy this node_module to the app directory once the image is built.
##
# FIX to have node_modules available correctly
# Create and define the node_modules's cache directory.
WORKDIR /cache

# Then we copy package.josn and package-lock.json
COPY package.json .
COPY package-lock.json .

#Install node modules (add --silent to suppress output)
RUN npm install





# set the current working directory in the docker container to /app
WORKDIR /app

# We set the node environment variable.
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy source code
# Finally, Copy everything from the current working directory of the host machine to the working directory inside the container ( which is app in this case ). This step is not necessary for the development Dockerfile though. We will map the host working directory to the containers working directory in the docker-compose.yml file anyway. But I like to keep this line here because in the future we may use this Dockerfile for production or take this Dockerfile as an inspiration to create the production Dockerfile. In that case, this line will work as a reminder that we need to copy the source code into the container.
COPY . .