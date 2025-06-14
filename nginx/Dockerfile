FROM nginx

RUN mkdir -p /etc/ssl/certs /etc/ssl/private && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx.key \
    -out /etc/ssl/certs/nginx.crt \
    -subj "/C=PK/ST=Punjab/L=Jhang/O=Hux/OU=Hux/CN=hux-x"

COPY nginx.conf /etc/nginx/nginx.conf
