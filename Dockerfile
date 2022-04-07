FROM nginx
LABEL maintainer="michael.schneider@stud.fh-campuswien.ac.at"
COPY nginx/default.conf /etc/nginx/conf.d
COPY dist/angular-cloudia-frontend /usr/share/nginx/html