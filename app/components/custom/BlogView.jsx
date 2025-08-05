"use client";

import React from "react";
import { SectionHeader } from "@/sections/SectionHeader";
import { ClockIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import data from "@/data/data.json";

const BlogCardHorizontal = ({ blog, className }) => {
  const {
    date,
    duration,
    title,
    description,
    author,
    authorImage,
    tags,
    image,
  } = blog;

  return (
    <article
      className={`flex border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="w-32 h-full rounded-lg object-cover flex-shrink-0"
      />

      <div className="ml-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between text-gray-500 text-xs mb-2">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>{" "}
          <span className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4 text-gray-500" />
            {duration}
          </span>
        </div>

        <div className="flex items-center justify-between ">
          <h3 className="font-bold text-lg text-gray-900    hover:text-red-500">
            {title}
          </h3>
          <ArrowUpRightIcon className="w-4 h-4      hover:text-red-500" />
        </div>

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center mb-3">
          {authorImage && (
            <img
              src={authorImage}
              alt={author}
              className="w-5 h-5 rounded-full object-cover mr-2"
            />
          )}
          <span className="text-gray-500 text-xs">{author}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-red-100 text-red-400 rounded-full px-3 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const BlogCardVertical = ({ blog, className }) => {
  const {
    date,
    duration,
    title,
    description,
    author,
    authorImage,
    tags,
    image,
  } = blog;

  return (
    <article
      className={`border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 rounded-lg object-cover mb-4"
      />

      <div>
        <div className="flex justify-between text-gray-500 text-xs mb-2">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>{" "}
          <span className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4 text-gray-500" />
            {duration}
          </span>
        </div>

        <div className="flex items-center justify-between ">
          <h3 className="font-bold text-lg text-gray-900    hover:text-red-500">
            {title}
          </h3>
          <ArrowUpRightIcon className="w-4 h-4      hover:text-red-500" />
        </div>

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center mb-3">
          <img
            src={authorImage}
            alt={author}
            className="w-5 h-5 rounded-full object-cover mr-2"
          />
          <span className="text-gray-500 text-xs">{author}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-red-100 text-red-400 rounded-full px-3 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const BlogView = () => {
  const { blogData } = data;

  return (
    <div className="w-full px-4 py-12 mx-auto max-w-6xl">
      <SectionHeader heading="Our Recent Blogs" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col justify-between">
          <BlogCardHorizontal blog={blogData[0]} />
          <BlogCardHorizontal blog={blogData[1]} />
        </div>

        <BlogCardVertical blog={blogData[2]} className="h-full hidden lg:block" />
      </div>
    </div>
  );
};
