import TeamMember from './TeamMember';
import CustomButton from './Button';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState, forwardRef } from 'react';

const Team = forwardRef((props, ref) => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const { locale } = router;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set the component as mounted to avoid mismatch between SSR and CSR
        setIsMounted(true);
    }, []);

    const teamMembers = [
        { name: t('alexis.name'), description: t('alexis.description'), image: "/assets/images/a-id.png" },
        { name: t('geoffroy.name'), description: t('geoffroy.description'), image: "/assets/images/g-id.png" },
    ];

    if (!isMounted) {
        return null;
    }

    return (
        <div
            className="rounded-xl bg-gray-200 md:p-8 flex flex-col items-center w-[80%] mx-auto my-12"
            ref={ref}
            id="team"
        >
            <div className="my-6">
                <Title text={t('founders')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        description={member.description}
                        image={member.image}
                    />
                ))}
            </div>
            <div className="my-12">
                <CustomButton href="/equipe" text={t('seeteam')} />
            </div>
        </div>
    );
});

// Ajout du displayName pour résoudre l'erreur
Team.displayName = 'Team';

export default Team;
