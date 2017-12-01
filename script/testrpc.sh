#!/usr/bin/env bash
if [[ $(netstat -anp tcp | awk '$6 == "LISTEN" && $4 ~ /\.7545$/') ]]
  then
    exit
  else
    ttab -w 'testrpc'
    sleep 2
fi