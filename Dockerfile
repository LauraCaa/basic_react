FROM "node"
WORKDIR "/opt/interview"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
