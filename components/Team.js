import TeamMember from './TeamMember';
import CustomButton from './Button';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const Team = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const { locale } = router;
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        // Set the component as mounted to avoid mismatch between SSR and CSR
        setIsMounted(true);
      }, []);

    const teamMembers = [
        { name: t('alexis.name'), description: t('alexis.description'), image:"/assets/images/a-id.png" },
        { name: t('geoffroy.name'), description: t('geoffroy.description'), image:"/assets/images/g-id.png" },
    ];

    if (!isMounted) {
        return null;
      }

    return (
        <div className=" rounded-xl bg-gray-200 p-8 flex flex-col items-center w-[80%] mx-auto mx-auto my-12">
            <Title text="Nos fondateurs" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} name={member.name} description={member.description} image={member.image} />
                ))}
            </div>
            <div className="my-12">
                <CustomButton href="/equipe" text="Découvrir notre équipe" />
            </div>

        </div>
    );
};

export default Team;
