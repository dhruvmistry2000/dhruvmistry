FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 80

LABEL name="Dhruv Mistry" \
      email="dhruvmistry2000@gmail.com"

CMD ["nginx", "-g", "daemon off;"]
