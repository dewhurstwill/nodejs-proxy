/*
** Peteris Krumins (peter@catonmat.net)
** http://www.catonmat.net  --  good coders code, great reuse
**
** A simple proxy server written in node.js.
**
*/

var fs = require('fs');

var config = {
  add_proxy_header: true,//activate addition of X-Forwarded-For header for better logging on real server side
  allow_ip_list: './config/allow_ip_list',
  black_list:    './config/black_list',
  host_filters:   './config/hostfilters.js',
  listen:[{ip:'0.0.0.0', port:80},//all ipv4 interfaces
          {ip:'::', port:80}]//all ipv6 interfaces
};

exports.config = config;

