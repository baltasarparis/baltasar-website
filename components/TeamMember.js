const TeamMember = ({ name, description, image }) => {
  return (
    <div className="p-4 rounded-xl flex flex-col items-center">
      {/* Cercle avec l'image */}
      <div className="w-[200px] h-[200px] rounded-full mb-4 overflow-hidden">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="p-12">
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>

    </div>
  );
};

export default TeamMember;
