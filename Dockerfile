FROM docker.io/node:14-alpine
# FROM registry.redhat.io/ubi8/nodejs-12
# need to login to registry.redhat.io

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm cache verify

RUN npm install --loglevel verbose


#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# PORT is pass in via runtime --env PORT=8080
EXPOSE PORT
CMD ["npm", "start" ]
