# todo-list
 
docker run -d \
  --name mongo-todo \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  -e MONGO_INITDB_DATABASE=todoDB \
  -p 27017:27017 \
  mongo
