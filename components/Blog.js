import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import CustomButton from './Button';
import React, { useCallback, useEffect, useState } from 'react';
import Title from './Title';

const BlogList = (props) => {
  const { t } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false); // To check if client is mounted

  useEffect(() => {
    // Set the component as mounted to avoid mismatch between SSR and CSR
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="  mx-12 my-12">
      <div className="mx-auto">
        {/* Titre des articles avec la clé i18n */}
        <div className="flex justify-center my-12">
          <Title text={t('menu.studies')} />
        </div>
        <div className='my-12 pb-6' >
          <Link href={"/articles/" + props.allArticlesData[0].id} className="w-full">
            <div className="flex flex-col xl:flex-row bg-white rounded-lg overflow-hidden  my-12 hover:opacity-90  hover:shadow">
              {/* Left Section (Image) */}
              <div className="w-full">
                <img
                  src={props.allArticlesData[0].image}
                  alt="Image"
                  className="h-full w-full object-cover rounded-xl "
                />
              </div>

              {/* Right Section (Content) */}
              <div className="ml-12 px-12 py-12  rounded-xl">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>{props.allArticlesData[0].date}</span>

                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {props.allArticlesData[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {props.allArticlesData[0].preview}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>Dossier</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className='my-12'>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[100%] mx-auto mb-12">
            {props.allArticlesData.slice(1, 4).map(({ id, date, title, image, preview }) => (
              <Link href={"/articles/" + id} key={id}>
                <div className="max-w-sm mx-auto bg-white rounded-lg hover:opacity-90  hover:shadow overflow-hidden">
                  {/* Image */}
                  <img
                    src={image}
                    alt="image"
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                    {/* Header: Logo and Time */}
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      {preview}
                    </p>

                    {/* Footer: Category and Reading Time */}
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-red-500 font-medium">Dossier</span>
                      <span className="mx-2">•</span>
                      <span>8 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <CustomButton href="/articles" text={t('menu.seemorestudies')} />
        </div>
      </div>
    </div>
  );
};

export default BlogList;


