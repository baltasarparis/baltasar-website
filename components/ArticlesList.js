import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import CustomButton from './Button';
import React, { useCallback, useEffect, useState } from 'react';
import Title from './Title';

const ArticlesList = (props) => {
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
        <div className='w-[100] mb-6'>
            <div className="w-[80%] my-12 mx-auto my-12">
                <div className="w-[100%] mx-auto my-12">
                    {/* Titre des articles avec la clé i18n */}
                    <div className='flex justify-center my-12'>
                        <Title text="Nos billets" />
                    </div>
                    <div className='my-12'>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[100%] mx-auto mb-12">
                            {props.allArticlesData.map(({ id, date, title, image, preview }) => (
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
                                                <span className="text-red-500 font-medium">{t('folder')}</span>
                                                <span className="mx-2">•</span>
                                                <span>{t('read')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesList;
