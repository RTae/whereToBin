# build environment
FROM nikolaik/python-nodejs:python3.10-nodejs18-bullseye as react-build
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

# server environment
FROM nginx:alpine
COPY /nginx/nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV=production
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
