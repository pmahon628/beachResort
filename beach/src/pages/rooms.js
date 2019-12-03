import React from "react";
import Hero from  '../components/Hero';
import Banner from  '../components/Banner'
import { Link } from "react-router-dom";

export function Room({ room }) {
  const { name, slug, images, price } = room;



// page about the different rooms for rent